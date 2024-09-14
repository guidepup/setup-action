"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.performAction = performAction;
const Applications_1 = require("../Applications");
const errors_1 = require("../errors");
const retryIfAppleEventTimeout_1 = require("../retryIfAppleEventTimeout");
const runAppleScript_1 = require("../runAppleScript");
const withTransaction_1 = require("../withTransaction");
async function performAction(options) {
    const actionScript = `tell vo cursor to perform action`;
    const script = `tell application "${Applications_1.Applications.VoiceOver}"\n${(0, withTransaction_1.withTransaction)(actionScript)}\nend tell`;
    try {
        return await (0, retryIfAppleEventTimeout_1.retryIfAppleEventTimeout)(() => (0, runAppleScript_1.runAppleScript)(script, options), options);
    }
    catch (e) {
        throw new Error(`${errors_1.ERR_VOICE_OVER_PERFORM_ACTION}\n${e.message}`);
    }
}
