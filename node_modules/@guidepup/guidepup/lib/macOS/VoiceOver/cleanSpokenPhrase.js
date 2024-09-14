"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanSpokenPhrase = cleanSpokenPhrase;
function cleanSpokenPhrase(phrase) {
    return phrase
        .trim()
        .replace(/^missing value$/, "")
        .replaceAll("@VOModifier()", "Control-Option")
        .replace(/\s\s+/g, " ");
}
