/**
 * [API Reference](https://www.guidepup.dev/docs/api/class-windows-activate)
 *
 * Opens a Windows application if not already open, and focuses the application.
 *
 * ```ts
 * import { windowsActivate } from "@guidepup/guidepup";
 *
 * (async () => {
 *   // Opens Microsoft Edge if not already open, and focuses the window.
 *   await windowsActivate("msedge.exe", "Edge");
 * })();
 * ```
 *
 * @param {string} applicationPath Application executable path identifier.
 * @param {string} applicationWindowTitle Application window title identifier.
 */
export declare function activate(applicationPath: string, applicationWindowTitle: string): Promise<void>;
