"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.voiceOverKeyCodeCommands = exports.VoiceOverCommanderCommands = exports.voiceOver = void 0;
const VoiceOver_1 = require("./VoiceOver");
/**
 * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover)
 *
 * This object can be used to launch and control VoiceOver.
 *
 * Here's a typical example:
 *
 * ```ts
 * import { voiceOver } from "@guidepup/guidepup";
 *
 * (async () => {
 *   // Start VoiceOver.
 *   await voiceOver.start();
 *
 *   // Move to the next item.
 *   await voiceOver.next();
 *
 *   // ... perform some commands.
 *
 *   // Stop VoiceOver.
 *   await voiceOver.stop();
 * })();
 * ```
 */
exports.voiceOver = new VoiceOver_1.VoiceOver();
var CommanderCommands_1 = require("./CommanderCommands");
Object.defineProperty(exports, "VoiceOverCommanderCommands", { enumerable: true, get: function () { return CommanderCommands_1.CommanderCommands; } });
var keyCodeCommands_1 = require("./keyCodeCommands");
Object.defineProperty(exports, "voiceOverKeyCodeCommands", { enumerable: true, get: function () { return keyCodeCommands_1.keyCodeCommands; } });
