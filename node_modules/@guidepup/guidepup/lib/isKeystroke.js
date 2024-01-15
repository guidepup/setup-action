"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isKeystroke = void 0;
const isKeystroke = (command) => typeof command === "object" && command !== null && "characters" in command;
exports.isKeystroke = isKeystroke;
