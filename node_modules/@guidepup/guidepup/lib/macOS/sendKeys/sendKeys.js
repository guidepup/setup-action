"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendKeys = sendKeys;
const activate_1 = require("../activate");
const errors_1 = require("../errors");
const isKeyCode_1 = require("../../isKeyCode");
const keyCode_1 = require("../keyCode");
const keystroke_1 = require("./keystroke");
async function sendKeys(keyCommand, applicationName, options) {
    if (applicationName) {
        await (0, activate_1.activate)(applicationName);
    }
    try {
        return (0, isKeyCode_1.isKeyCode)(keyCommand)
            ? await (0, keyCode_1.keyCode)(keyCommand, options)
            : await (0, keystroke_1.keystroke)(keyCommand, options);
    }
    catch (e) {
        throw new Error(`${errors_1.ERR_PREFIX_SEND_KEYS}${applicationName ? `to application: ${applicationName}` : ""}\n${e.message}`);
    }
}
