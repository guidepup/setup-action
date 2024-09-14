"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = start;
const errors_1 = require("../errors");
const child_process_1 = require("child_process");
const VOICE_OVER_STARTER = "/System/Library/CoreServices/VoiceOver.app/Contents/MacOS/VoiceOverStarter";
async function start() {
    return new Promise((resolve, reject) => {
        (0, child_process_1.exec)(VOICE_OVER_STARTER, (e) => {
            if (e) {
                reject(new Error(`${errors_1.ERR_VOICE_OVER_CANNOT_BE_STARTED}\n${e.message}`));
            }
            else {
                resolve();
            }
        });
    });
}
