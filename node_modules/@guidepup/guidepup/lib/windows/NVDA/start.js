"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = start;
const child_process_1 = require("child_process");
const errors_1 = require("../errors");
const getNVDAInstallationPath_1 = require("./getNVDAInstallationPath");
const waitForRunning_1 = require("./waitForRunning");
const MAX_START_ATTEMPTS = 2;
async function start() {
    const executablePath = await (0, getNVDAInstallationPath_1.getNVDAInstallationPath)();
    if (!executablePath) {
        throw new Error(errors_1.ERR_NVDA_NOT_INSTALLED);
    }
    for (let attempt = 0; attempt < MAX_START_ATTEMPTS; attempt++) {
        let nvdaProcess;
        try {
            nvdaProcess = (0, child_process_1.spawn)(`"${executablePath}"`, [], {
                shell: true,
                stdio: "ignore",
            });
        }
        catch (e) {
            throw new Error(`${errors_1.ERR_NVDA_CANNOT_BE_STARTED}\n${e.message}`);
        }
        try {
            await (0, waitForRunning_1.waitForRunning)();
            break;
        }
        catch (e) {
            try {
                nvdaProcess.kill("SIGKILL");
            }
            catch {
                // swallow
            }
            if (attempt === MAX_START_ATTEMPTS - 1) {
                throw e;
            }
        }
    }
}
