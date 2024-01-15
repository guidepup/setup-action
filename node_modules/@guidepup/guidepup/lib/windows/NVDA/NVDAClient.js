"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NVDAClient = void 0;
const tls_1 = require("tls");
const path_1 = require("path");
const errors_1 = require("../errors");
const constants_1 = require("./constants");
const events_1 = require("events");
const getNVDAInstallationPath_1 = require("./getNVDAInstallationPath");
const keyCodeCommands_1 = require("./keyCodeCommands");
const fs_1 = require("fs");
const CHANNEL_JOINED = "channel_joined";
const CANCEL = "cancel";
const SPEAK = "speak";
const connectionMessage = JSON.stringify({
    type: "join",
    connection_type: "master",
    channel: "guidepup",
});
const protocolMessage = JSON.stringify({
    type: "protocol_version",
    version: 2,
});
const MAX_CONSECUTIVE_CONNECTION_FAILURES = 20;
const CANCEL_DEBOUNCE_TIMEOUT = 250;
const CANCEL_NOT_FIRE_TIMEOUT = 1000;
const SPEAK_DEBOUNCE_TIMEOUT = 1000;
const isChannelJoinedMessage = (message) => {
    return message.type === CHANNEL_JOINED;
};
const isCancelMessage = (message) => {
    return message.type === CANCEL;
};
const isSpeakMessage = (message) => {
    return message.type === SPEAK;
};
const delay = async (ms) => await new Promise((resolve) => setTimeout(resolve, ms));
class NVDAClient extends events_1.EventEmitter {
    #activePromise = null;
    #socket;
    #spokenPhrases = [];
    #consecutiveConnectionFailures = 0;
    #capture;
    /**
     * Get the log of all spoken phrases for this NVDA connection.
     *
     * @returns {Promise<string[]>} All spoken phrases
     */
    async spokenPhraseLog() {
        if (this.#activePromise) {
            await this.#activePromise;
        }
        return this.#spokenPhrases;
    }
    /**
     * Clear the log of all spoken phrases for this NVDA connection.
     */
    async clearSpokenPhraseLog() {
        if (this.#activePromise) {
            await this.#activePromise;
        }
        this.#spokenPhrases = [];
    }
    /**
     * Connect to a NVDA instance.
     */
    async connect(options) {
        const executablePath = await (0, getNVDAInstallationPath_1.getNVDAInstallationPath)();
        if (!executablePath) {
            throw new Error(errors_1.ERR_NVDA_NOT_INSTALLED);
        }
        const caPath = (0, path_1.join)((0, path_1.dirname)(executablePath), "userConfig", "addons", "remote", "globalPlugins", "remoteClient", "server.pem");
        let ca;
        try {
            ca = (0, fs_1.readFileSync)(caPath);
        }
        catch {
            throw new Error(errors_1.ERR_NVDA_NOT_INSTALLED);
        }
        return new Promise((resolve, reject) => this.#connect(ca, options?.capture, resolve, reject));
    }
    async #connect(ca, capture = true, onSuccess, onError) {
        let onSuccessCalled = false;
        this.#socket = (0, tls_1.connect)(constants_1.NVDA_PORT, constants_1.NVDA_HOST, {
            ca: [ca],
            checkServerIdentity: () => null,
        }, async () => {
            this.once(CHANNEL_JOINED, () => {
                this.#consecutiveConnectionFailures = 0;
                this.#capture = capture;
                onSuccessCalled = true;
                onSuccess?.();
            });
            await this.#send(connectionMessage);
            await this.#send(protocolMessage);
        });
        this.#socket.setEncoding("utf8");
        this.#socket.on("error", (e) => {
            this.#consecutiveConnectionFailures++;
            this.disconnect();
            if (this.#consecutiveConnectionFailures <
                MAX_CONSECUTIVE_CONNECTION_FAILURES) {
                this.#connect(ca, capture, onSuccess, onError);
                return;
            }
            if (!onSuccessCalled) {
                onError(new Error(`${errors_1.ERR_NVDA_CANNOT_CONNECT}\n${e.message}`));
            }
        });
        this.#socket.on("data", (data) => {
            if (!data.trim().length) {
                return;
            }
            let parsedData;
            try {
                parsedData = JSON.parse(data);
            }
            catch {
                return;
            }
            if (isChannelJoinedMessage(parsedData)) {
                this.emit(CHANNEL_JOINED);
                return;
            }
            if (isCancelMessage(parsedData)) {
                this.emit(CANCEL);
                return;
            }
            if (!isSpeakMessage(parsedData)) {
                return;
            }
            const spokenPhraseParts = [];
            for (const spokenPhrasePart of parsedData.sequence) {
                if (typeof spokenPhrasePart !== "string") {
                    continue;
                }
                spokenPhraseParts.push(spokenPhrasePart.trim().replaceAll(/\s\s+/g, " "));
            }
            const spokenPhrase = spokenPhraseParts.join(", ");
            this.emit(SPEAK, spokenPhrase);
        });
    }
    /**
     * disconnect the NVDA connection.
     */
    disconnect() {
        try {
            this.#socket?.destroy();
        }
        catch {
            // swallow
        }
        this.#socket = null;
        this.#capture = null;
    }
    /**
     * Send a Key Code command to NVDA.
     *
     * @param {object} keyCommand Key Code command to send to NVDA.
     */
    async sendKeyCode(keyCommand) {
        const modifiers = keyCommand.modifiers ? keyCommand.modifiers : [];
        const keyCodes = keyCommand.keyCode
            ? Array.isArray(keyCommand.keyCode)
                ? keyCommand.keyCode
                : [keyCommand.keyCode]
            : [];
        const keys = [...modifiers, ...keyCodes];
        for (const key of keys) {
            await this.#send(key.toString(true));
        }
        for (const key of keys.reverse()) {
            await this.#send(key.toString(false));
        }
    }
    /**
     * Stops the current spoken phrase, executes the provided action, and waits
     * for the associated spoken phrase.
     *
     * This is used internally to ensure there isn't a race condition when
     * calling lastSpokenPhrase() after executing an action.
     *
     * @param {Promise<unknown>} promise Underlying action to capture logs for.
     * @param {object} options Additional options.
     * @returns {Promise<unknown>}
     */
    async waitForSpokenPhrase(action, options) {
        if (this.#activePromise) {
            await this.#activePromise;
        }
        let activePromiseResolver;
        this.#activePromise = new Promise((resolve) => (activePromiseResolver = resolve));
        const spokenPhrases = [];
        let result;
        if (options?.capture ?? this.#capture) {
            await this.#stopReading();
            let speakPromiseResolver;
            const speakPromise = new Promise((resolve) => {
                speakPromiseResolver = resolve;
            });
            let timeoutId = null;
            const speakHandler = (spokenPhrase) => {
                spokenPhrases.push(spokenPhrase);
                if ((options?.capture ?? this.#capture) === "initial") {
                    clearTimeout(timeoutId);
                    this.removeListener(SPEAK, speakHandler);
                    speakPromiseResolver();
                }
                else if (timeoutId !== null) {
                    clearTimeout(timeoutId);
                    timeoutId = setTimeout(timeoutHandler, SPEAK_DEBOUNCE_TIMEOUT);
                }
            };
            const timeoutHandler = () => {
                this.removeListener(SPEAK, speakHandler);
                speakPromiseResolver();
            };
            this.addListener(SPEAK, speakHandler);
            result = await action();
            timeoutId = setTimeout(timeoutHandler, SPEAK_DEBOUNCE_TIMEOUT);
            await speakPromise;
            timeoutId = null;
        }
        else {
            result = await action();
        }
        this.#spokenPhrases.push(spokenPhrases.join(". "));
        activePromiseResolver();
        this.#activePromise = null;
        return result;
    }
    async #stopReading() {
        let spoken = true;
        let cancelPromiseResolver = () => null;
        const speakHandler = () => {
            spoken = true;
        };
        const cancelHandler = () => {
            cancelPromiseResolver();
        };
        this.addListener(SPEAK, speakHandler);
        while (spoken) {
            spoken = false;
            const cancelPromise = new Promise((resolve) => {
                cancelPromiseResolver = resolve;
            });
            this.once(CANCEL, cancelHandler);
            this.sendKeyCode(keyCodeCommands_1.keyCodeCommands.stopSpeech);
            await Promise.race([cancelPromise, delay(CANCEL_NOT_FIRE_TIMEOUT)]);
            cancelPromiseResolver();
            cancelPromiseResolver = () => null;
            await delay(CANCEL_DEBOUNCE_TIMEOUT);
        }
        this.removeListener(CANCEL, cancelHandler);
        this.removeListener(SPEAK, speakHandler);
    }
    async #send(message) {
        if (!this.#socket) {
            return;
        }
        if (!message.endsWith("\n")) {
            message += "\n";
        }
        if (this.#socket.destroyed) {
            await this.connect({ capture: this.#capture });
        }
        return new Promise((resolve, reject) => {
            this.#socket.write(message, (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            });
        });
    }
}
exports.NVDAClient = NVDAClient;
