"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isKeyboard = void 0;
const isKeyCode_1 = require("./isKeyCode");
const isKeystroke_1 = require("./isKeystroke");
const isKeyboard = (command) => {
    return (0, isKeyCode_1.isKeyCode)(command) || (0, isKeystroke_1.isKeystroke)(command);
};
exports.isKeyboard = isKeyboard;
