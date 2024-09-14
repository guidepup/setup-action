"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRunning = isRunning;
const activate_1 = require("../activate");
const Applications_1 = require("../Applications");
const child_process_1 = require("child_process");
const runAppleScript_1 = require("../runAppleScript");
async function isRunning(options, skipActivate = false) {
    const processRunning = await new Promise((resolve) => {
        (0, child_process_1.exec)('ps aux | egrep "[V]oiceOver"', (err, stdout) => {
            if (err) {
                resolve(false);
            }
            else {
                resolve(stdout !== "");
            }
        });
    });
    if (!processRunning) {
        return false;
    }
    const appleScriptRunning = await (0, runAppleScript_1.runAppleScript)(`tell application "${Applications_1.Applications.VoiceOver}"\nreturn running\nend tell`);
    if (appleScriptRunning === "false") {
        return false;
    }
    if (skipActivate) {
        return true;
    }
    try {
        await (0, activate_1.activate)(Applications_1.Applications.VoiceOver, options);
        return true;
    }
    catch {
        return false;
    }
}
