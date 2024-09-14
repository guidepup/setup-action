"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRunning = isRunning;
const constants_1 = require("./constants");
const net_1 = require("net");
async function isRunning() {
    return new Promise((resolve) => {
        const client = (0, net_1.connect)(constants_1.NVDA_PORT, constants_1.NVDA_HOST);
        client.on("connect", () => {
            client.end(() => resolve(true));
        });
        client.on("error", () => {
            client.end(() => resolve(false));
        });
    });
}
