"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyCode = keyCode;
const Applications_1 = require("./Applications");
const retryIfAppleEventTimeout_1 = require("./retryIfAppleEventTimeout");
const runAppleScript_1 = require("./runAppleScript");
const withModifiers_1 = require("./withModifiers");
async function keyCode({ keyCode, modifiers = [] }, options) {
    const keyCodeCommand = `key code ${Array.isArray(keyCode) ? `{${keyCode.join(", ")}}` : keyCode}`;
    const script = `tell application "${Applications_1.Applications.SystemEvents}"\n${(0, withModifiers_1.withModifiers)(modifiers, keyCodeCommand)}\nend tell`;
    return await (0, retryIfAppleEventTimeout_1.retryIfAppleEventTimeout)(() => (0, runAppleScript_1.runAppleScript)(script, options), options);
}
