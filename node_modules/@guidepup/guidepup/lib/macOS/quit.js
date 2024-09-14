"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quit = quit;
const errors_1 = require("./errors");
const retryIfAppleEventTimeout_1 = require("./retryIfAppleEventTimeout");
const runAppleScript_1 = require("./runAppleScript");
const withTransaction_1 = require("./withTransaction");
/**
 * [API Reference](https://www.guidepup.dev/docs/api/class-macos-quit)
 *
 * Quits a MacOS application if running.
 *
 * ```ts
 * import {
 *   macOSActivate,
 *   macOSQuit,
 *   MacOSApplications,
 * } from "@guidepup/guidepup";
 *
 * (async () => {
 *   // Open Safari.
 *   await macOSActivate(MacOSApplications.Safari);
 *
 *   // ... perform some commands.
 *
 *   // Quits Safari.
 *   await macOSQuit(MacOSApplications.Safari);
 * })();
 * ```
 *
 * @param {string} applicationName Application identifier. See [MacOSApplications](https://www.guidepup.dev/docs/api/class-macos-applications).
 * @param {object} options Additional options.
 */
async function quit(applicationName, options) {
    const script = `tell application "${applicationName}"\n${(0, withTransaction_1.withTransaction)("quit")}\nend tell`;
    try {
        return await (0, retryIfAppleEventTimeout_1.retryIfAppleEventTimeout)(() => (0, runAppleScript_1.runAppleScript)(script, options), options);
    }
    catch (e) {
        throw new Error(`${errors_1.ERR_PREFIX_QUIT}${applicationName}\n${e.message}`);
    }
}
