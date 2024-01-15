import type { CommandOptions } from "../CommandOptions";
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
export declare function activate(applicationName: string, options?: CommandOptions): Promise<void>;
