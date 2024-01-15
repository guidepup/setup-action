"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceOverKeyboard = void 0;
const Applications_1 = require("../Applications");
const keyCodeCommands_1 = require("./keyCodeCommands");
const KeyCodes_1 = require("../KeyCodes");
const Modifiers_1 = require("../Modifiers");
const parseKey_1 = require("../../parseKey");
const sendKeys_1 = require("../sendKeys");
class VoiceOverKeyboard {
    /**
     * @ignore
     */
    #logStore;
    constructor(vo) {
        this.#logStore = vo;
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
     * Following modification shortcuts are also supported: `Shift`, `Control`, `Alt`, `Meta`, `Command`.
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
     * await keyboard.press("Control+f");
     * ```
     *
     * @param {string} key Name of the key to press or a character to generate, such as `ArrowLeft` or `a`.
     * @param {object} [options] Additional options.
     */
    async press(key, options) {
        return await this.#logStore.tap(() => (0, sendKeys_1.sendKeys)((0, parseKey_1.parseKey)(key, Modifiers_1.Modifiers, KeyCodes_1.KeyCodes), options?.application, options), options);
    }
    /**
     * Type text into the focused item.
     *
     * To press a special key, like `Control` or `ArrowDown`, use `keyboard.press(key[, options])`.
     *
     * ```ts
     * await keyboard.type("my-username");
     * await keyboard.press("Enter");
     * ```
     *
     * @param {string} text Text to type into the focused item.
     * @param {object} [options] Additional options.
     */
    async type(text, options) {
        return await this.#logStore.tap(() => (0, sendKeys_1.sendKeys)({ characters: text }, options?.application, options), options);
    }
    /**
     * VoiceOver keyboard commands.
     */
    get commands() {
        return keyCodeCommands_1.keyCodeCommands;
    }
    /**
     * Perform a VoiceOver keyboard command.
     *
     * @param {object} command VoiceOver keyboard command to execute.
     * @param {object} [options] Additional options.
     */
    async perform(command, options) {
        return await this.#logStore.tap(() => (0, sendKeys_1.sendKeys)(command, Applications_1.Applications.VoiceOver, options), options);
    }
}
exports.VoiceOverKeyboard = VoiceOverKeyboard;
