import type { CommandOptions } from "../CommandOptions";
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
export declare function quit(applicationName: string, options?: CommandOptions): Promise<void>;
