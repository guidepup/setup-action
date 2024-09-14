"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retryIfAppleEventTimeout = retryIfAppleEventTimeout;
const constants_1 = require("../constants");
async function retryIfAppleEventTimeout(delegate, { retries = constants_1.DEFAULT_MUTATING_ACTION_RETRY_COUNT } = {
    retries: constants_1.DEFAULT_MUTATING_ACTION_RETRY_COUNT,
}) {
    let error;
    for (let i = 0; i < retries; i++) {
        try {
            return await delegate();
        }
        catch (e) {
            error = e;
            if (!e.message.includes(constants_1.ERR_APPLE_SCRIPT_TIMED_OUT)) {
                break;
            }
        }
    }
    throw error;
}
