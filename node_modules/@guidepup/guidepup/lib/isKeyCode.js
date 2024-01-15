"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isKeyCode = void 0;
const isKeyCode = (command) => typeof command === "object" && command !== null && "keyCode" in command;
exports.isKeyCode = isKeyCode;
