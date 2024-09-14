"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseKey = parseKey;
function parseKey(keyOrKeys, Modifiers, KeyCodes) {
    const keyCode = [];
    const modifiers = [];
    keyOrKeys = /^[A-Z]$/.test(keyOrKeys) ? `Shift+${keyOrKeys}` : keyOrKeys;
    const rawKeys = keyOrKeys.split("+");
    for (let rawKey of rawKeys) {
        rawKey = /^\d$/.test(rawKey) ? `Digit${rawKey}` : rawKey;
        if (typeof Modifiers[rawKey] !== "undefined") {
            modifiers.push(Modifiers[rawKey]);
        }
        else if (typeof KeyCodes[rawKey] !== "undefined") {
            keyCode.push(KeyCodes[rawKey]);
        }
    }
    return { keyCode, modifiers };
}
