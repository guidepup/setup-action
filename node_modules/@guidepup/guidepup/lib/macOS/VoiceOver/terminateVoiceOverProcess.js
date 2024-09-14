"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terminateVoiceOverProcess = terminateVoiceOverProcess;
const child_process_1 = require("child_process");
async function terminateVoiceOverProcess() {
    return new Promise((resolve) => {
        (0, child_process_1.exec)(`kill -15 $(ps aux | egrep "[V]oiceOver.app/Contents/MacOS/VoiceOver launchd -s" | awk '{print $2}')`, () => {
            resolve();
        });
    });
}
