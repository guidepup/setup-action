"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveLastSpokenPhrase = saveLastSpokenPhrase;
const Applications_1 = require("../Applications");
const errors_1 = require("../errors");
const retry_1 = require("../../retry");
const runAppleScript_1 = require("../runAppleScript");
const waitForSaved_1 = require("./waitForSaved");
const withTransaction_1 = require("../withTransaction");
async function saveLastSpokenPhrase(options) {
    const script = `tell application "${Applications_1.Applications.VoiceOver}"\n${(0, withTransaction_1.withTransaction)("tell last phrase to save")}\nend tell`;
    try {
        await (0, retry_1.retry)(() => (0, runAppleScript_1.runAppleScript)(script, options), options);
    }
    catch (e) {
        throw new Error(`${errors_1.ERR_VOICE_OVER_SAVE_LAST_SPOKEN_PHRASE}\n${e.message}`);
    }
    await (0, waitForSaved_1.waitForSaved)(options);
}
