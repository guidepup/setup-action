"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
const errors_1 = require("./errors");
const retryIfAppleEventTimeout_1 = require("./retryIfAppleEventTimeout");
const runAppleScript_1 = require("./runAppleScript");
const withTransaction_1 = require("./withTransaction");
/**
 * [API Reference](https://www.guidepup.dev/docs/api/class-macos-activate)
 *
 * Opens a MacOS application if not already open, and focuses the application.
 *
 * ```ts
 * import { macOSActivate, MacOSApplications } from "@guidepup/guidepup";
 *
 * (async () => {
 *   // Opens Safari if not already open, and focuses the window.
 *   await macOSActivate(MacOSApplications.Safari);
 * })();
 * ```
 *
 * @param {string} applicationName Application identifier. See [MacOSApplications](https://www.guidepup.dev/docs/api/class-macos-applications).
 * @param {object} options Additional options.
 */
async function activate(applicationName, options) {
    const script = `tell application "${applicationName}"\n${(0, withTransaction_1.withTransaction)("activate")}\nend tell`;
    try {
        return await (0, retryIfAppleEventTimeout_1.retryIfAppleEventTimeout)(() => (0, runAppleScript_1.runAppleScript)(script, options), options);
    }
    catch (e) {
        throw new Error(`${errors_1.ERR_PREFIX_ACTIVATE}${applicationName}\n${e.message}`);
    }
}
