"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withModifiers = void 0;
const Modifiers_1 = require("./Modifiers");
const withModifiers = (modifiers, script) => {
    let commandString = "\n";
    if (!script) {
        return commandString;
    }
    const hasShift = !!modifiers.find((modifier) => modifier === Modifiers_1.Modifiers.Shift);
    const filteredModifiers = modifiers.filter((modifier) => modifier !== Modifiers_1.Modifiers.Shift);
    if (hasShift) {
        commandString += `key down ${Modifiers_1.Modifiers.Shift}\n`;
    }
    commandString += `${script}${filteredModifiers.length
        ? ` using {${filteredModifiers
            .map((modifier) => `${modifier} down`)
            .join(", ")}}`
        : ""}\n`;
    if (hasShift) {
        commandString += `key up ${Modifiers_1.Modifiers.Shift}\n`;
    }
    return commandString;
};
exports.withModifiers = withModifiers;
