"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.windowsQuit = exports.windowsActivate = exports.WindowsModifiers = exports.WindowsKeyCodes = void 0;
__exportStar(require("./NVDA"), exports);
var KeyCodes_1 = require("./KeyCodes");
Object.defineProperty(exports, "WindowsKeyCodes", { enumerable: true, get: function () { return KeyCodes_1.KeyCodes; } });
var Modifiers_1 = require("./Modifiers");
Object.defineProperty(exports, "WindowsModifiers", { enumerable: true, get: function () { return Modifiers_1.Modifiers; } });
var activate_1 = require("./activate");
Object.defineProperty(exports, "windowsActivate", { enumerable: true, get: function () { return activate_1.activate; } });
var quit_1 = require("./quit");
Object.defineProperty(exports, "windowsQuit", { enumerable: true, get: function () { return quit_1.quit; } });
