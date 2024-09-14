import { CommandOptions } from "../../CommandOptions";
import { EventEmitter } from "events";
import { KeyCodeCommand } from "../KeyCodeCommand";
export declare class NVDAClient extends EventEmitter {
    #private;
    /**
     * Get the log of all spoken phrases for this NVDA connection.
     *
     * @returns {Promise<string[]>} All spoken phrases
     */
    spokenPhraseLog(): Promise<string[]>;
    /**
     * Clear the log of all spoken phrases for this NVDA connection.
     */
    clearSpokenPhraseLog(): Promise<void>;
    /**
     * Connect to a NVDA instance.
     */
    connect(options?: Pick<CommandOptions, "capture">): Promise<void>;
    /**
     * disconnect the NVDA connection.
     */
    disconnect(): void;
    /**
     * Send a Key Code command to NVDA.
     *
     * @param {object} keyCommand Key Code command to send to NVDA.
     */
    sendKeyCode(keyCommand: KeyCodeCommand): Promise<void>;
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
    waitForSpokenPhrase<T>(action: () => Promise<T>, options: Pick<CommandOptions, "capture">): Promise<T>;
}
