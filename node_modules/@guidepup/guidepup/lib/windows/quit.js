"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quit = quit;
const runVbsScript_1 = require("./runVbsScript");
/**
 * [API Reference](https://www.guidepup.dev/docs/api/class-windows-quit)
 *
 * Quits a Windows application if running.
 *
 * ```ts
 * import { windowsActivate, windowsQuit } from "@guidepup/guidepup";
 *
 * (async () => {
 *   // Open Microsoft Edge.
 *   await windowsActivate("msedge.exe", "Edge");
 *
 *   // ... perform some commands.
 *
 *   // Quits Microsoft Edge.
 *   await windowsQuit("msedge.exe");
 * })();
 * ```
 *
 * @param {string} application Application executable path identifier.
 */
async function quit(application) {
    const script = `set WshShell = CreateObject("WScript.Shell")\nWshShell.Run "taskkill /im ""${application}""",0,False\nset WshShell = Nothing`;
    try {
        await (0, runVbsScript_1.runVbsScript)(script);
    }
    catch (e) {
        throw new Error(`Unable to quit application\n${e.message}`);
    }
}
