"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForRunning = waitForRunning;
const errors_1 = require("../errors");
const isRunning_1 = require("./isRunning");
const waitForCondition_1 = require("../../waitForCondition");
async function waitForRunning(options) {
    return await (0, waitForCondition_1.waitForCondition)(async () => await (0, isRunning_1.isRunning)(options), {
        timeoutErrorMessage: errors_1.ERR_VOICE_OVER_RUNNING_TIMEOUT,
    });
}
