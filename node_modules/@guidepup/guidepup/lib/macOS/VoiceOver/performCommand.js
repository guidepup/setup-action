"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.performCommand = performCommand;
const Applications_1 = require("../Applications");
const errors_1 = require("../errors");
const retryIfAppleEventTimeout_1 = require("../retryIfAppleEventTimeout");
const runAppleScript_1 = require("../runAppleScript");
const withTransaction_1 = require("../withTransaction");
async function performCommand(command, options) {
    const performCommandScript = `tell commander to perform command "${command}"`;
    const script = `tell application "${Applications_1.Applications.VoiceOver}"\n${(0, withTransaction_1.withTransaction)(performCommandScript)}\nend tell`;
    try {
        return await (0, retryIfAppleEventTimeout_1.retryIfAppleEventTimeout)(() => (0, runAppleScript_1.runAppleScript)(script, options), options);
    }
    catch (e) {
        throw new Error(`${errors_1.ERR_VOICE_OVER_PERFORM_COMMAND}\n${e.message}`);
    }
}
