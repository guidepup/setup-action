"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendKeys = sendKeys;
const errors_1 = require("./errors");
const isKeyCode_1 = require("../isKeyCode");
const runVbsScript_1 = require("./runVbsScript");
function getKeys(command) {
    const characters = (0, isKeyCode_1.isKeyCode)(command)
        ? Array.isArray(command.keyCode)
            ? command.keyCode.map((key) => key.symbol).join("")
            : command.keyCode.symbol
        : command.characters;
    const modifiers = (command.modifiers ?? []).map((modifier) => modifier.symbol).join();
    return `${modifiers}${characters}`;
}
async function sendKeys(command) {
    const keys = getKeys(command);
    const script = `set WshShell = CreateObject("WScript.Shell")\nWshShell.SendKeys "${keys}"`;
    try {
        await (0, runVbsScript_1.runVbsScript)(script);
    }
    catch (e) {
        throw new Error(`${errors_1.ERR_SEND_KEYS}\n${e.message}`);
    }
}
