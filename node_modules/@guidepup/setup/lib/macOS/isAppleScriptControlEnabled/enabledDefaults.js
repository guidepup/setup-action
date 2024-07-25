"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enabledDefaults = enabledDefaults;
const child_process_1 = require("child_process");
const VOICE_OVER_APPLESCRIPT_ENABLED_DEFAULTS = "defaults read com.apple.VoiceOver4/default SCREnableAppleScript";
async function enabledDefaults() {
    return await new Promise((resolve) => {
        (0, child_process_1.exec)(VOICE_OVER_APPLESCRIPT_ENABLED_DEFAULTS, (err, stdout) => {
            if (err) {
                resolve(false);
            }
            else {
                resolve(stdout.trim() === "1");
            }
        });
    });
}
