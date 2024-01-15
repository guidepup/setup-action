"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NVDA = void 0;
const errors_1 = require("../errors");
const isNVDAInstalled_1 = require("./isNVDAInstalled");
const isWindows_1 = require("../isWindows");
const keyCodeCommands_1 = require("./keyCodeCommands");
const KeyCodes_1 = require("../KeyCodes");
const Modifiers_1 = require("../Modifiers");
const NVDAClient_1 = require("./NVDAClient");
const parseKey_1 = require("../../parseKey");
const quit_1 = require("./quit");
const sendKeys_1 = require("../sendKeys");
const start_1 = require("./start");
/**
 * Class for controlling the NVDA screen reader on Windows.
 */
class NVDA {
    /**
     * NVDA client.
     */
    #client;
    /**
     * NVDA running status.
     */
    #started = false;
    /**
     * Getter for all NVDA keyboard commands.
     *
     * Use with the NVDA `perform` command to invoke a keyboard action:
     *
     * ```ts
     * import { nvda } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start NVDA.
     *   await nvda.start();
     *
     *   // Move to the next item.
     *   await nvda.perform(nvda.keyboardCommands.moveToNext);
     *
     *   // Stop NVDA.
     *   await nvda.stop();
     * })();
     * ```
     */
    get keyboardCommands() {
        return keyCodeCommands_1.keyCodeCommands;
    }
    /**
     * Detect whether NVDA is supported for the current OS:
     *
     * - `true` for Windows
     * - `false` for MacOS
     * - `false` for Linux
     *
     * ```ts
     * import { nvda } from "@guidepup/guidepup";
     *
     * (async () => {
     *   const isNVDADefaultScreenReader = await nvda.detect();
     *
     *   console.log(isNVDADefaultScreenReader);
     * })();
     * ```
     *
     * @returns {Promise<boolean>}
     */
    async detect() {
        return (0, isWindows_1.isWindows)() && (await (0, isNVDAInstalled_1.isNVDAInstalled)());
    }
    /**
     * Detect whether NVDA is the default screen reader for the current OS:
     *
     * - `true` for Windows
     * - `false` for MacOS
     * - `false` for Linux
     *
     * ```ts
     * import { nvda } from "@guidepup/guidepup";
     *
     * (async () => {
     *   const isNVDADefaultScreenReader = await nvda.default();
     *
     *   console.log(isNVDADefaultScreenReader);
     * })();
     * ```
     *
     * @returns {Promise<boolean>}
     */
    async default() {
        return Promise.resolve((0, isWindows_1.isWindows)());
    }
    /**
     * Turn NVDA on.
     *
     * ```ts
     * import { nvda } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start NVDA.
     *   await nvda.start();
     *
     *   // ... perform some commands.
     *
     *   // Stop NVDA.
     *   await nvda.stop();
     * })();
     * ```
     */
    async start(options) {
        if (!(await this.detect())) {
            throw new Error(errors_1.ERR_NVDA_NOT_SUPPORTED);
        }
        if (this.#started) {
            throw new Error(errors_1.ERR_NVDA_ALREADY_RUNNING);
        }
        // TODO: handle failures in the following steps more gracefully, we should
        // look to gracefully reset back to default if fail to start rather than
        // leave a half setup state.
        await (0, start_1.start)();
        this.#client = new NVDAClient_1.NVDAClient();
        await this.#client.connect(options);
        this.#started = true;
    }
    /**
     * Turn NVDA off.
     *
     * ```ts
     * import { nvda } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start NVDA.
     *   await nvda.start();
     *
     *   // ... perform some commands.
     *
     *   // Stop NVDA.
     *   await nvda.stop();
     * })();
     * ```
     */
    async stop() {
        if (!this.#started) {
            throw new Error(errors_1.ERR_NVDA_NOT_RUNNING);
        }
        this.#client.disconnect();
        this.#client = null;
        await (0, quit_1.quit)();
        this.#started = false;
    }
    /**
     * Move the NVDA cursor to the previous location.
     *
     * Equivalent of executing `Up Arrow`.
     *
     * ```ts
     * import { nvda } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start NVDA.
     *   await nvda.start();
     *
     *   // Move to the previous item.
     *   await nvda.previous();
     *
     *   // Stop NVDA.
     *   await nvda.stop();
     * })();
     * ```
     */
    async previous(options) {
        if (!this.#started) {
            throw new Error(errors_1.ERR_NVDA_NOT_RUNNING);
        }
        return this.#client.waitForSpokenPhrase(() => this.#client.sendKeyCode(keyCodeCommands_1.keyCodeCommands.moveToPrevious), options);
    }
    /**
     * Move the NVDA cursor to the next location.
     *
     * Equivalent of executing `Down Arrow`.
     *
     * ```ts
     * import { nvda } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start NVDA.
     *   await nvda.start();
     *
     *   // Move to the next item.
     *   await nvda.next();
     *
     *   // Stop NVDA.
     *   await nvda.stop();
     * })();
     * ```
     */
    async next(options) {
        if (!this.#started) {
            throw new Error(errors_1.ERR_NVDA_NOT_RUNNING);
        }
        return this.#client.waitForSpokenPhrase(() => this.#client.sendKeyCode(keyCodeCommands_1.keyCodeCommands.moveToNext), options);
    }
    /**
     * Perform the default action for the item in the NVDA cursor.
     *
     * Equivalent of executing `Enter`.
     *
     * ```ts
     * import { nvda } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start NVDA.
     *   await nvda.start();
     *
     *   // Move to the next item.
     *   await nvda.next();
     *
     *   // Perform the default action for the item.
     *   await nvda.act();
     *
     *   // Stop NVDA.
     *   await nvda.stop();
     * })();
     * ```
     */
    async act(options) {
        if (!this.#started) {
            throw new Error(errors_1.ERR_NVDA_NOT_RUNNING);
        }
        return this.#client.waitForSpokenPhrase(() => this.#client.sendKeyCode(keyCodeCommands_1.keyCodeCommands.activate), options);
    }
    /**
     * No-op to provide same API across screen-readers.
     *
     * NVDA does not require users to perform an additional command to interact
     * with the item in the NVDA cursor.
     */
    async interact() {
        if (!this.#started) {
            throw new Error(errors_1.ERR_NVDA_NOT_RUNNING);
        }
        return Promise.resolve();
    }
    /**
     * No-op to provide same API across screen-readers.
     *
     * NVDA does not require users to perform an additional command to interact
     * with the item in the NVDA cursor.
     */
    async stopInteracting() {
        if (!this.#started) {
            throw new Error(errors_1.ERR_NVDA_NOT_RUNNING);
        }
        return Promise.resolve();
    }
    /**
     * Press a key on the focused item.
     *
     * `key` can specify the intended [keyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
     * value or a single character to generate the text for. A superset of the `key` values can be found
     * [on the MDN key values page](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values). Examples of the keys are:
     *
     * `F1` - `F20`, `Digit0` - `Digit9`, `KeyA` - `KeyZ`, `Backquote`, `Minus`, `Equal`, `Backslash`, `Backspace`, `Tab`,
     * `Delete`, `Escape`, `ArrowDown`, `End`, `Enter`, `Home`, `Insert`, `PageDown`, `PageUp`, `ArrowRight`, `ArrowUp`, etc.
     *
     * See [WindowsKeyCodes](https://www.guidepup.dev/docs/api/class-windows-key-codes) for the full range of available keys.
     *
     * Following modification shortcuts are also supported: `Shift`, `Control`, `Alt`.
     *
     * See [WindowsModifiers](https://www.guidepup.dev/docs/api/class-windows-modifiers) for the full range of available modifiers.
     *
     * Holding down `Shift` will type the text that corresponds to the `key` in the upper case.
     *
     * If `key` is a single character, it is case-sensitive, so the values `a` and `A` will generate different respective
     * texts.
     *
     * Shortcuts such as `key: "Control+f"` or `key: "Control+Shift+f"` are supported as well. When specified with the
     * modifier, modifier is pressed and being held while the subsequent key is being pressed.
     *
     * ```ts
     * import { nvda } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start NVDA.
     *   await nvda.start();
     *
     *   // Open a find text modal.
     *   await nvda.press("Control+f");
     *
     *   // Stop NVDA.
     *   await nvda.stop();
     * })();
     * ```
     *
     * @param {string} key Name of the key to press or a character to generate, such as `ArrowLeft` or `a`.
     */
    async press(key, options) {
        if (!this.#started) {
            throw new Error(errors_1.ERR_NVDA_NOT_RUNNING);
        }
        return this.perform((0, parseKey_1.parseKey)(key, Modifiers_1.Modifiers, KeyCodes_1.KeyCodes), options);
    }
    /**
     * Type text into the focused item.
     *
     * To press a special key, like `Control` or `ArrowDown`, use `nvda.press(key[, options])`.
     *
     * ```ts
     * import { nvda } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start NVDA.
     *   await nvda.start();
     *
     *   // Type a username and key Enter.
     *   await nvda.type("my-username");
     *   await nvda.press("Enter");
     *
     *   // Stop NVDA.
     *   await nvda.stop();
     * })();
     * ```
     *
     * @param {string} text Text to type into the focused item.
     */
    async type(text, options) {
        if (!this.#started) {
            throw new Error(errors_1.ERR_NVDA_NOT_RUNNING);
        }
        return this.#client.waitForSpokenPhrase(() => (0, sendKeys_1.sendKeys)({ characters: text }), options);
    }
    /**
     * Perform a NVDA command.
     *
     * The command can be a [WindowsKeyCodeCommand](https://www.guidepup.dev/docs/api/class-windows-key-code-command) or [WindowsKeystrokeCommand](https://www.guidepup.dev/docs/api/class-windows-keystroke-command).
     *
     * ```ts
     * import { nvda, NVDAKeyCodeCommands } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start NVDA.
     *   await nvda.start();
     *
     *   // Type using a custom keystroke command.
     *   await nvda.perform({ characters: "my-username" });
     *
     *   // Keyboard commands available on the NVDA instance.
     *   await nvda.perform(nvda.keyboardCommands.performDefaultActionForItem);
     *
     *   // Stop NVDA.
     *   await nvda.stop();
     * })();
     * ```
     *
     * @param {any} command NVDA keyboard command to execute.
     */
    async perform(command, options) {
        if (!this.#started) {
            throw new Error(errors_1.ERR_NVDA_NOT_RUNNING);
        }
        return this.#client.waitForSpokenPhrase(() => this.#client.sendKeyCode(command), options);
    }
    /**
     * Click the mouse.
     *
     * ```ts
     * import { nvda } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start NVDA.
     *   await nvda.start();
     *
     *   // Left-click the mouse.
     *   await nvda.click();
     *
     *   // Left-click the mouse using specific options.
     *   await nvda.click({ button: "left", clickCount: 1 });
     *
     *   // Double-right-click the mouse.
     *   await nvda.click({ button: "right", clickCount: 2 });
     *
     *   // Stop NVDA.
     *   await nvda.stop();
     * })();
     * ```
     *
     * @param {object} [options] Click options.
     */
    async click(options) {
        if (!this.#started) {
            throw new Error(errors_1.ERR_NVDA_NOT_RUNNING);
        }
        const command = options.button === "right"
            ? keyCodeCommands_1.keyCodeCommands.rightMouseClick
            : keyCodeCommands_1.keyCodeCommands.leftMouseClick;
        await this.#client.waitForSpokenPhrase(() => Promise.all([...new Array(options.clickCount ?? 1)].map(() => this.#client.sendKeyCode(command))), options);
    }
    /**
     * Get the last spoken phrase.
     *
     * ```ts
     * import { nvda } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start NVDA.
     *   await nvda.start();
     *
     *   // Move to the next item.
     *   await nvda.next();
     *
     *   // Get the phrase spoken by NVDA from moving to the next item above.
     *   const lastSpokenPhrase = await nvda.lastSpokenPhrase();
     *   console.log(lastSpokenPhrase);
     *
     *   // Stop NVDA.
     *   await nvda.stop();
     * })();
     * ```
     *
     * @returns {string} The last spoken phrase.
     */
    async lastSpokenPhrase() {
        if (!this.#started) {
            throw new Error(errors_1.ERR_NVDA_NOT_RUNNING);
        }
        return (await this.#client.spokenPhraseLog()).at(-1) ?? "";
    }
    /**
     * Get the last spoken phrase.
     *
     * For NVDA this is the same as `lastSpokenPhrase`.
     *
     * ```ts
     * import { nvda } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start NVDA.
     *   await nvda.start();
     *
     *   // Move to the next item.
     *   await nvda.next();
     *
     *   // Get the text (if any) for the item currently in focus by the NVDA
     *   // cursor.
     *   const itemText = await nvda.itemText();
     *   console.log(itemText);
     *
     *   // Stop NVDA.
     *   await nvda.stop();
     * })();
     * ```
     *
     * @alias lastSpokenPhrase
     *
     * @returns {Promise<string>} The last spoken phrase.
     */
    async itemText() {
        if (!this.#started) {
            throw new Error(errors_1.ERR_NVDA_NOT_RUNNING);
        }
        return this.lastSpokenPhrase();
    }
    /**
     * Get the log of all spoken phrases for this NVDA instance.
     *
     * ```ts
     * import { nvda } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start NVDA.
     *   await nvda.start();
     *
     *   // Move through several items.
     *   for (let i = 0; i < 10; i++) {
     *     await nvda.next();
     *   }
     *
     *   // Get the phrase spoken by NVDA from moving through the items above.
     *   const spokenPhraseLog = await nvda.spokenPhraseLog();
     *   console.log(spokenPhraseLog);
     *
     *   // Stop NVDA.
     *   await nvda.stop();
     * })();
     * ```
     *
     * @returns {Promise<string[]>} The spoken phrase log.
     */
    async spokenPhraseLog() {
        if (!this.#started) {
            throw new Error(errors_1.ERR_NVDA_NOT_RUNNING);
        }
        return this.#client.spokenPhraseLog();
    }
    /**
     * Clear the log of all spoken phrases for this NVDA instance.
     *
     * ```ts
     * import { nvda } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start NVDA.
     *   await nvda.start();
     *
     *   // ... perform some commands.
     *
     *   // Clear the spoken phrase log.
     *   await nvda.clearSpokenPhraseLog();
     *
     *   // Stop NVDA.
     *   await nvda.stop();
     * })();
     * ```
     */
    async clearSpokenPhraseLog() {
        if (!this.#started) {
            throw new Error(errors_1.ERR_NVDA_NOT_RUNNING);
        }
        await this.#client.clearSpokenPhraseLog();
    }
    /**
     * Get the log of all spoken phrases for this NVDA instance.
     *
     * For NVDA this is the same as `spokenPhraseLog`.
     *
     * ```ts
     * import { nvda } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start NVDA.
     *   await nvda.start();
     *
     *   // Move through several items.
     *   for (let i = 0; i < 10; i++) {
     *     await nvda.next();
     *   }
     *
     *   // Get the text (if any) for all the items visited by the NVDA cursor.
     *   const itemTextLog = await nvda.itemTextLog();
     *   console.log(itemTextLog);
     *
     *   // Stop NVDA.
     *   await nvda.stop();
     * })();
     * ```
     *
     * @alias lastSpokenPhrase
     *
     * @returns {Promise<string[]>} The spoken phrase log.
     */
    async itemTextLog() {
        if (!this.#started) {
            throw new Error(errors_1.ERR_NVDA_NOT_RUNNING);
        }
        return this.spokenPhraseLog();
    }
    /**
     * Clear the log of all spoken phrases for this NVDA instance.
     *
     * For NVDA this is the same as `clearSpokenPhraseLog`.
     *
     * ```ts
     * import { nvda } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start NVDA.
     *   await nvda.start();
     *
     *   // ... perform some commands.
     *
     *   // Clear the spoken phrase log.
     *   await nvda.clearItemTextLog();
     *
     *   // Stop NVDA.
     *   await nvda.stop();
     * })();
     * ```
     *
     * @alias clearSpokenPhraseLog
     */
    async clearItemTextLog() {
        if (!this.#started) {
            throw new Error(errors_1.ERR_NVDA_NOT_RUNNING);
        }
        await this.#client.clearSpokenPhraseLog();
    }
}
exports.NVDA = NVDA;
