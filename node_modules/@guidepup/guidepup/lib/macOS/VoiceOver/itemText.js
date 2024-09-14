"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemText = itemText;
const Applications_1 = require("../Applications");
const errors_1 = require("../errors");
const retry_1 = require("../../retry");
const runAppleScript_1 = require("../runAppleScript");
const withTransaction_1 = require("../withTransaction");
async function itemText(options) {
    const script = `tell application "${Applications_1.Applications.VoiceOver}"\n${(0, withTransaction_1.withTransaction)("return text under cursor of vo cursor")}\nend tell`;
    try {
        return await (0, retry_1.retry)(() => (0, runAppleScript_1.runAppleScript)(script, options), options);
    }
    catch (e) {
        throw new Error(`${errors_1.ERR_VOICE_OVER_GET_ITEM_TEXT}\n${e.message}`);
    }
}
