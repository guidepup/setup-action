"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.move = move;
const Applications_1 = require("../Applications");
const errors_1 = require("../errors");
const retryIfAppleEventTimeout_1 = require("../retryIfAppleEventTimeout");
const runAppleScript_1 = require("../runAppleScript");
const withTransaction_1 = require("../withTransaction");
async function move(direction, place, options) {
    const moveScript = `tell vo cursor to move ${direction}${place ? ` to ${place}` : ""}`;
    const script = `tell application "${Applications_1.Applications.VoiceOver}"\n${(0, withTransaction_1.withTransaction)(moveScript)}\nend tell`;
    try {
        return await (0, retryIfAppleEventTimeout_1.retryIfAppleEventTimeout)(() => (0, runAppleScript_1.runAppleScript)(script, options), options);
    }
    catch (e) {
        throw new Error(`${errors_1.ERR_VOICE_OVER_MOVE}\n${e.message}`);
    }
}
