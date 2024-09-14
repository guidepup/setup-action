"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForSaved = waitForSaved;
const errors_1 = require("../errors");
const isSaved_1 = require("./isSaved");
const waitForCondition_1 = require("../../waitForCondition");
const ONE_SECOND = 1000;
const TWENTY_SECONDS = 20000;
async function waitForSaved(options) {
    return await (0, waitForCondition_1.waitForCondition)(async () => await (0, isSaved_1.isSaved)(options), {
        timeoutErrorMessage: errors_1.ERR_VOICE_OVER_SAVED_TIMEOUT,
        pollInterval: ONE_SECOND,
        pollTimeout: TWENTY_SECONDS,
    });
}
