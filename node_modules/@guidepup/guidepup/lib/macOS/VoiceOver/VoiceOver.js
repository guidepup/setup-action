"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceOver = void 0;
const configureSettings_1 = require("./configureSettings");
const errors_1 = require("../errors");
const isKeyboard_1 = require("../../isKeyboard");
const isMacOS_1 = require("../isMacOS");
const LogStore_1 = require("./LogStore");
const start_1 = require("./start");
const supportsAppleScriptControl_1 = require("./supportsAppleScriptControl");
const terminateVoiceOverProcess_1 = require("./terminateVoiceOverProcess");
const VoiceOverCaption_1 = require("./VoiceOverCaption");
const VoiceOverCommander_1 = require("./VoiceOverCommander");
const VoiceOverCursor_1 = require("./VoiceOverCursor");
const VoiceOverKeyboard_1 = require("./VoiceOverKeyboard");
const VoiceOverMouse_1 = require("./VoiceOverMouse");
const waitForNotRunning_1 = require("./waitForNotRunning");
const waitForRunning_1 = require("./waitForRunning");
/**
 * Class for controlling the VoiceOver screen reader on MacOS.
 */
class VoiceOver {
    /**
     * Storage for VoiceOver settings reset.
     */
    #resetSettings;
    /**
     * VoiceOver running status.
     */
    #started = false;
    /**
     * VoiceOver caption APIs.
     */
    #caption;
    /**
     * VoiceOver commander APIs.
     */
    #commander;
    /**
     * VoiceOver cursor APIs.
     */
    #cursor;
    /**
     * VoiceOver keyboard APIs.
     */
    #keyboard;
    /**
     * VoiceOver mouse APIs.
     */
    #mouse;
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-keyboard-commands)
     *
     * Getter for all VoiceOver keyboard commands.
     *
     * Use with the VoiceOver `perform` command to invoke a keyboard action:
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Move to the next item.
     *   await voiceOver.perform(voiceOver.keyboardCommands.moveToNext);
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     */
    get keyboardCommands() {
        if (!this.#started) {
            throw new Error(errors_1.ERR_VOICE_OVER_NOT_RUNNING);
        }
        return this.#keyboard.commands;
    }
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-commander-commands)
     *
     * VoiceOver commander commands.
     *
     * Getter specific to the VoiceOver screen reader.
     *
     * Use with the VoiceOver `perform` command to invoke a Commander action:
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Move down.
     *   await voiceOver.perform(voiceOver.commanderCommands.MOVE_DOWN);
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     */
    get commanderCommands() {
        if (!this.#started) {
            throw new Error(errors_1.ERR_VOICE_OVER_NOT_RUNNING);
        }
        return this.#commander.commands;
    }
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-detect)
     *
     * Detect whether VoiceOver is supported for the current OS:
     *
     * - `false` for Windows
     * - `true` for MacOS
     * - `false` for Linux
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   const isVoiceOverSupportedScreenReader = await voiceOver.detect();
     *
     *   console.log(isVoiceOverSupportedScreenReader);
     * })();
     * ```
     *
     * @returns {Promise<boolean>}
     */
    async detect() {
        return (0, isMacOS_1.isMacOS)() && (await (0, supportsAppleScriptControl_1.supportsAppleScriptControl)());
    }
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-default)
     *
     * Detect whether VoiceOver is the default screen reader for the current OS:
     *
     * - `false` for Windows
     * - `true` for MacOS
     * - `false` for Linux
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   const isVoiceOverDefaultScreenReader = await voiceOver.default();
     *
     *   console.log(isVoiceOverDefaultScreenReader);
     * })();
     * ```
     *
     * @returns {Promise<boolean>}
     */
    async default() {
        return Promise.resolve((0, isMacOS_1.isMacOS)());
    }
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-start)
     *
     * Turn VoiceOver on.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // ... perform some commands.
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @param {object} [options] Additional options.
     */
    async start(options) {
        if (!(await this.detect())) {
            throw new Error(errors_1.ERR_VOICE_OVER_NOT_SUPPORTED);
        }
        if (this.#started) {
            throw new Error(errors_1.ERR_VOICE_OVER_ALREADY_RUNNING);
        }
        const logStore = new LogStore_1.LogStore(options);
        this.#caption = new VoiceOverCaption_1.VoiceOverCaption(logStore);
        this.#commander = new VoiceOverCommander_1.VoiceOverCommander(logStore);
        this.#cursor = new VoiceOverCursor_1.VoiceOverCursor(logStore);
        this.#keyboard = new VoiceOverKeyboard_1.VoiceOverKeyboard(logStore);
        this.#mouse = new VoiceOverMouse_1.VoiceOverMouse(logStore);
        // TODO: handle failures in the following steps more gracefully, we should
        // look to gracefully reset back to default if fail to start rather than
        // leave a half setup state.
        this.#resetSettings = await (0, configureSettings_1.storeOriginalSettings)();
        await (0, configureSettings_1.configureSettings)(configureSettings_1.DEFAULT_GUIDEPUP_VOICEOVER_SETTINGS);
        await (0, start_1.start)();
        await (0, waitForRunning_1.waitForRunning)(options);
        this.#started = true;
    }
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-stop)
     *
     * Turn VoiceOver off.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // ... perform some commands.
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @param {object} [options] Additional options.
     */
    async stop(options) {
        if (!this.#started) {
            throw new Error(errors_1.ERR_VOICE_OVER_NOT_RUNNING);
        }
        await (0, terminateVoiceOverProcess_1.terminateVoiceOverProcess)();
        await (0, waitForNotRunning_1.waitForNotRunning)(options);
        this.#caption = null;
        this.#commander = null;
        this.#cursor = null;
        this.#keyboard = null;
        this.#mouse = null;
        if (this.#resetSettings) {
            await this.#resetSettings();
            this.#resetSettings = null;
        }
        this.#started = false;
    }
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-previous)
     *
     * Move the VoiceOver cursor to the previous location.
     *
     * Equivalent of executing `VO-Left Arrow`.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Move to the previous item.
     *   await voiceOver.previous();
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @param {object} [options] Additional options.
     */
    async previous(options) {
        if (!this.#started) {
            throw new Error(errors_1.ERR_VOICE_OVER_NOT_RUNNING);
        }
        return this.#cursor.previous(options);
    }
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-next)
     *
     * Move the VoiceOver cursor to the next location.
     *
     * Equivalent of executing `VO-Right Arrow`.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Move to the next item.
     *   await voiceOver.next();
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @param {object} [options] Additional options.
     */
    async next(options) {
        if (!this.#started) {
            throw new Error(errors_1.ERR_VOICE_OVER_NOT_RUNNING);
        }
        return this.#cursor.next(options);
    }
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-act)
     *
     * Perform the default action for the item in the VoiceOver cursor.
     *
     * Equivalent of executing `VO-Space bar`.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Move to the next item.
     *   await voiceOver.next();
     *
     *   // Perform the default action for the item.
     *   await voiceOver.act();
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @param {object} [options] Additional options.
     */
    async act(options) {
        if (!this.#started) {
            throw new Error(errors_1.ERR_VOICE_OVER_NOT_RUNNING);
        }
        return this.#cursor.act(options);
    }
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-interact)
     *
     * Interact with the item under the VoiceOver cursor.
     *
     * Equivalent of executing `VO-Shift-Down Arrow`.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Move to the next item.
     *   await voiceOver.next();
     *
     *   // Interact with the item.
     *   await voiceOver.interact();
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @param {object} [options] Additional options.
     */
    async interact(options) {
        if (!this.#started) {
            throw new Error(errors_1.ERR_VOICE_OVER_NOT_RUNNING);
        }
        return this.#cursor.interact(options);
    }
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-stop-interacting)
     *
     * Stop interacting with the current item.
     *
     * Equivalent of executing `VO-Shift-Up Arrow`.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Interact with the item.
     *   await voiceOver.interact();
     *
     *   // ... perform some commands.
     *
     *   // Stop interacting with the item.
     *   await voiceOver.stopInteracting();
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @param {object} [options] Additional options.
     */
    async stopInteracting(options) {
        if (!this.#started) {
            throw new Error(errors_1.ERR_VOICE_OVER_NOT_RUNNING);
        }
        return this.#cursor.stopInteracting(options);
    }
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-take-cursor-screenshot)
     *
     * Takes a screenshot of the item focussed in the VoiceOver cursor and returns the path to screenshot file.
     *
     * This command is specific to the VoiceOver screen reader.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Move to the next item.
     *   await voiceOver.next();
     *
     *   // Take a screenshot of the item focussed in the VoiceOver cursor.
     *   const screenshotFile = await voiceOver.takeCursorScreenshot();
     *   console.log(screenshotFile);
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @param {object} [options] Additional options.
     * @returns {Promise<string>} The path to the screenshot file.
     */
    async takeCursorScreenshot(options) {
        if (!this.#started) {
            throw new Error(errors_1.ERR_VOICE_OVER_NOT_RUNNING);
        }
        return this.#cursor.takeScreenshot(options);
    }
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-press)
     *
     * Press a key on the focused item.
     *
     * `key` can specify the intended [keyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
     * value or a single character to generate the text for. A superset of the `key` values can be found
     * [on the MDN key values page](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values). Examples of the keys are:
     *
     * `F1` - `F20`, `Digit0` - `Digit9`, `KeyA` - `KeyZ`, `Backquote`, `Minus`, `Equal`, `Backslash`, `Backspace`, `Tab`,
     * `Delete`, `Escape`, `ArrowDown`, `End`, `Enter`, `Home`, `Insert`, `PageDown`, `PageUp`, `ArrowRight`, `ArrowUp`, etc.
     *
     * See [MacOSKeyCodes](https://www.guidepup.dev/docs/api/class-macos-key-codes) for the full range of available keys.
     *
     * Following modification shortcuts are also supported: `Shift`, `Control`, `Alt`, `Meta`, `Command`.
     *
     * See [MacOSModifiers](https://www.guidepup.dev/docs/api/class-macos-modifiers) for the full range of available modifiers.
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
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Open a find text modal.
     *   await voiceOver.press("Command+f");
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @param {string} key Name of the key to press or a character to generate, such as `ArrowLeft` or `a`.
     * @param {object} [options] Additional options.
     */
    async press(key, options) {
        if (!this.#started) {
            throw new Error(errors_1.ERR_VOICE_OVER_NOT_RUNNING);
        }
        return this.#keyboard.press(key, options);
    }
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-type)
     *
     * Type text into the focused item.
     *
     * To press a special key, like `Control` or `ArrowDown`, use `voiceOver.press(key[, options])`.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Type a username and key Enter.
     *   await voiceOver.type("my-username");
     *   await voiceOver.press("Enter");
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @param {string} text Text to type into the focused item.
     * @param {object} [options] Additional options.
     */
    async type(text, options) {
        if (!this.#started) {
            throw new Error(errors_1.ERR_VOICE_OVER_NOT_RUNNING);
        }
        return this.#keyboard.type(text, options);
    }
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-perform)
     *
     * Perform a VoiceOver command.
     *
     * The command can be a [MacOSKeyCodeCommand](https://www.guidepup.dev/docs/api/class-macos-key-code-command), [MacOSKeystrokeCommand](https://www.guidepup.dev/docs/api/class-macos-keystroke-command), or [VoiceOverCommanderCommands](https://www.guidepup.dev/docs/api/class-voiceover-commander-commands).
     *
     * ```ts
     * import { voiceOver, VoiceOverCommanderCommands } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Type using a custom keystroke command.
     *   await voiceOver.perform({ characters: "my-username" });
     *
     *   // Keyboard commands available on the VoiceOver instance.
     *   await voiceOver.perform(
     *     voiceOver.keyboardCommands.performDefaultActionForItem
     *   );
     *
     *   // Commander commands available on the VoiceOver instance.
     *   await voiceOver.perform(voiceOver.commanderCommands.MOVE_DOWN);
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @param {any} command VoiceOver keyboard command or commander command to execute.
     * @param {object} [options] Additional options.
     */
    async perform(command, options) {
        if (!this.#started) {
            throw new Error(errors_1.ERR_VOICE_OVER_NOT_RUNNING);
        }
        if ((0, isKeyboard_1.isKeyboard)(command)) {
            return this.#keyboard.perform(command, options);
        }
        return this.#commander.perform(command, options);
    }
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-click)
     *
     * Click the mouse.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Left-click the mouse.
     *   await voiceOver.click();
     *
     *   // Left-click the mouse using specific options.
     *   await voiceOver.click({ button: "left", clickCount: 1 });
     *
     *   // Double-right-click the mouse.
     *   await voiceOver.click({ button: "right", clickCount: 2 });
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @param {object} [options] Click options.
     */
    async click(options) {
        if (!this.#started) {
            throw new Error(errors_1.ERR_VOICE_OVER_NOT_RUNNING);
        }
        return this.#mouse.click(options);
    }
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-copy-last-spoken-phrase)
     *
     * Copy the last spoken phrase to the Clipboard (also called the
     * "Pasteboard").
     *
     * This command is specific to the VoiceOver screen reader.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Move to the next item.
     *   await voiceOver.next();
     *
     *   // Copy the phrase spoken by VoiceOver from moving to the next item above to
     *   // the Clipboard.
     *   await voiceOver.copyLastSpokenPhrase();
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @param {object} [options] Additional options.
     */
    async copyLastSpokenPhrase(options) {
        if (!this.#started) {
            throw new Error(errors_1.ERR_VOICE_OVER_NOT_RUNNING);
        }
        return this.#caption.copyLastSpokenPhrase(options);
    }
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-save-last-spoken-phrase)
     *
     * Save the last spoken phrase and the crash log to a file on the desktop for
     * troubleshooting.
     *
     * This command is specific to the VoiceOver screen reader.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Move to the next item.
     *   await voiceOver.next();
     *
     *   // Save the phrase spoken by VoiceOver from moving to the next item above to
     *   // a file on the desktop.
     *   await voiceOver.saveLastSpokenPhrase();
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @param {object} [options] Additional options.
     */
    async saveLastSpokenPhrase(options) {
        if (!this.#started) {
            throw new Error(errors_1.ERR_VOICE_OVER_NOT_RUNNING);
        }
        return this.#caption.saveLastSpokenPhrase(options);
    }
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-last-spoken-phrase)
     *
     * Get the last spoken phrase.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Move to the next item.
     *   await voiceOver.next();
     *
     *   // Get the phrase spoken by VoiceOver from moving to the next item above.
     *   const lastSpokenPhrase = await voiceOver.lastSpokenPhrase();
     *   console.log(lastSpokenPhrase);
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @returns {Promise<string>} The last spoken phrase.
     */
    async lastSpokenPhrase() {
        if (!this.#started) {
            throw new Error(errors_1.ERR_VOICE_OVER_NOT_RUNNING);
        }
        return this.#caption.lastSpokenPhrase();
    }
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-item-text)
     *
     * Get the text of the item in the VoiceOver cursor.
     *
     * For VoiceOver this is distinct from `lastSpokenPhrase`.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Move to the next item.
     *   await voiceOver.next();
     *
     *   // Get the text (if any) for the item currently in focus by the VoiceOver
     *   // cursor.
     *   const itemText = await voiceOver.itemText();
     *   console.log(itemText);
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @returns {Promise<string>} The item's text.
     */
    async itemText() {
        if (!this.#started) {
            throw new Error(errors_1.ERR_VOICE_OVER_NOT_RUNNING);
        }
        return this.#caption.itemText();
    }
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-spoken-phrase-log)
     *
     * Get the log of all spoken phrases for this VoiceOver instance.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Move through several items.
     *   for (let i = 0; i < 10; i++) {
     *     await voiceOver.next();
     *   }
     *
     *   // Get the phrase spoken by VoiceOver from moving through the items above.
     *   const spokenPhraseLog = await voiceOver.spokenPhraseLog();
     *   console.log(spokenPhraseLog);
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @returns {Promise<string[]>} The spoken phrase log.
     */
    async spokenPhraseLog() {
        if (!this.#started) {
            throw new Error(errors_1.ERR_VOICE_OVER_NOT_RUNNING);
        }
        return this.#caption.spokenPhraseLog();
    }
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-clear-spoken-phrase-log)
     *
     * Clear the log of all spoken phrases for this VoiceOver instance.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // ... perform some commands.
     *
     *   // Clear the spoken phrase log.
     *   await voiceOver.clearSpokenPhraseLog();
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     */
    async clearSpokenPhraseLog() {
        if (!this.#started) {
            throw new Error(errors_1.ERR_VOICE_OVER_NOT_RUNNING);
        }
        await this.#caption.clearSpokenPhraseLog();
    }
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-item-text-log)
     *
     * Get the log of all visited item text for this VoiceOver instance.
     *
     * For VoiceOver this is distinct from `spokenPhraseLog`.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Move through several items.
     *   for (let i = 0; i < 10; i++) {
     *     await voiceOver.next();
     *   }
     *
     *   // Get the text (if any) for all the items visited by the VoiceOver cursor.
     *   const itemTextLog = await voiceOver.itemTextLog();
     *   console.log(itemTextLog);
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @returns {Promise<string[]>} The item text log.
     */
    async itemTextLog() {
        if (!this.#started) {
            throw new Error(errors_1.ERR_VOICE_OVER_NOT_RUNNING);
        }
        return this.#caption.itemTextLog();
    }
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-clear-item-text-log)
     *
     * Clear the log of all visited item text for this VoiceOver instance.
     *
     * For VoiceOver this is distinct from `spokenPhraseLog`.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // ... perform some commands.
     *
     *   // Clear the item text log.
     *   await voiceOver.clearItemTextLog();
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     */
    async clearItemTextLog() {
        if (!this.#started) {
            throw new Error(errors_1.ERR_VOICE_OVER_NOT_RUNNING);
        }
        await this.#caption.clearItemTextLog();
    }
}
exports.VoiceOver = VoiceOver;
