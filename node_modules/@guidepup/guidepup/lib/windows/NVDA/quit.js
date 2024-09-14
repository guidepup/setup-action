"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quit = quit;
const errors_1 = require("../errors");
const getNVDAInstallationPath_1 = require("./getNVDAInstallationPath");
const child_process_1 = require("child_process");
async function quit() {
    const executablePath = await (0, getNVDAInstallationPath_1.getNVDAInstallationPath)();
    if (!executablePath) {
        throw new Error(errors_1.ERR_NVDA_NOT_INSTALLED);
    }
    try {
        (0, child_process_1.spawnSync)(`"${executablePath}"`, ["--quit"], {
            shell: true,
            stdio: "ignore",
        });
    }
    catch (e) {
        throw new Error(`${errors_1.ERR_NVDA_QUIT}\n${e.message}`);
    }
}
