"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enabledDbFile = enabledDbFile;
const fs_1 = require("fs");
const VOICE_OVER_APPLESCRIPT_ENABLED_DB_FILE = "/private/var/db/Accessibility/.VoiceOverAppleScriptEnabled";
async function enabledDbFile() {
    return await new Promise((resolve) => {
        (0, fs_1.access)(VOICE_OVER_APPLESCRIPT_ENABLED_DB_FILE, fs_1.constants.F_OK, (err) => {
            if (err) {
                resolve(false);
            }
            else {
                resolve(true);
            }
        });
    });
}
