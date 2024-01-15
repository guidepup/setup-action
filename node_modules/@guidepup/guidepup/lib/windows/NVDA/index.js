"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NVDAKeyCodeCommands = exports.nvda = void 0;
const NVDA_1 = require("./NVDA");
/**
 * [API Reference](https://www.guidepup.dev/docs/api/class-nvda)
 *
 * This object can be used to launch and control NVDA.
 *
 * Here's a typical example:
 *
 * ```ts
 * import { nvda } from "@guidepup/guidepup";
 *
 * (async () => {
 *   // Start NVDA.
 *   await nvda.start();
 *
 *   // Move to the next item.
 *   await nvda.next();
 *
 *   // Stop NVDA.
 *   await nvda.stop();
 * })();
 * ```
 */
exports.nvda = new NVDA_1.NVDA();
var keyCodeCommands_1 = require("./keyCodeCommands");
Object.defineProperty(exports, "NVDAKeyCodeCommands", { enumerable: true, get: function () { return keyCodeCommands_1.keyCodeCommands; } });
