"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForCondition = waitForCondition;
const constants_1 = require("./constants");
async function resolveWhenTrue(condition, pollInterval, signal) {
    let result;
    try {
        result = await condition();
    }
    catch {
        result = false;
    }
    if (result || signal.aborted) {
        return;
    }
    await new Promise((resolve) => setTimeout(resolve, pollInterval));
    await resolveWhenTrue(condition, pollInterval, signal);
}
async function waitForCondition(condition, { pollInterval = constants_1.DEFAULT_POLL_INTERVAL, pollTimeout = constants_1.DEFAULT_TIMEOUT, timeoutErrorMessage = constants_1.ERR_WAITING_TIMEOUT, } = {
    pollInterval: constants_1.DEFAULT_POLL_INTERVAL,
    pollTimeout: constants_1.DEFAULT_TIMEOUT,
    timeoutErrorMessage: constants_1.ERR_WAITING_TIMEOUT,
}) {
    let timeoutTimerId;
    const controller = new AbortController();
    await Promise.race([
        resolveWhenTrue(condition, pollInterval, controller.signal),
        new Promise((_, reject) => {
            timeoutTimerId = setTimeout(() => {
                controller.abort();
                reject(new Error(timeoutErrorMessage));
            }, pollTimeout);
        }),
    ]);
    clearTimeout(timeoutTimerId);
    timeoutTimerId = undefined;
}
