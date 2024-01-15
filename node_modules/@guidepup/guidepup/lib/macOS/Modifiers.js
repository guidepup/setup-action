"use strict";
/* eslint-disable @typescript-eslint/no-duplicate-enum-values */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modifiers = void 0;
/**
 * MacOS modifier keys.
 *
 * Reference: {@link https://eastmanreference.com/complete-list-of-applescript-key-codes}
 */
var Modifiers;
(function (Modifiers) {
    /**
     * The Command (alias cmd, ⌘) key.
     */
    Modifiers["Command"] = "command";
    Modifiers["CommandLeft"] = "command";
    Modifiers["CommandRight"] = "command";
    Modifiers["Meta"] = "command";
    /**
     * The Control (alias ctrl, ⌃) key.
     */
    Modifiers["Control"] = "control";
    Modifiers["ControlLeft"] = "control";
    Modifiers["ControlRight"] = "control";
    /**
     * The Option (alias alt, ⌥) key.
     */
    Modifiers["Option"] = "option";
    Modifiers["OptionLeft"] = "option";
    Modifiers["OptionRight"] = "option";
    Modifiers["Alt"] = "option";
    Modifiers["AltLeft"] = "option";
    Modifiers["AltRight"] = "option";
    /**
     * The Shift (alias ⇧) key.
     */
    Modifiers["Shift"] = "shift";
    Modifiers["ShiftLeft"] = "shift";
    Modifiers["ShiftRight"] = "shift";
})(Modifiers || (exports.Modifiers = Modifiers = {}));
