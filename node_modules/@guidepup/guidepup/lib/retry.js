"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retry = retry;
const constants_1 = require("./constants");
async function retry(delegate, { retries = constants_1.DEFAULT_RETRY_COUNT } = { retries: constants_1.DEFAULT_RETRY_COUNT }) {
    let error;
    for (let i = 0; i < retries; i++) {
        try {
            return await delegate();
        }
        catch (e) {
            error = e;
        }
    }
    throw error;
}
