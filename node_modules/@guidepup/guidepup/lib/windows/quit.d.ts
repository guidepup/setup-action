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
export declare function quit(application: string): Promise<void>;
