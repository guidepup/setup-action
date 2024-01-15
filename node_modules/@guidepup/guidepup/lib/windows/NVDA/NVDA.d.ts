import type { ClickOptions } from "../../ClickOptions";
import { CommandOptions } from "../../CommandOptions";
import type { KeyCodeCommand } from "../KeyCodeCommand";
import { keyCodeCommands } from "./keyCodeCommands";
import type { Prettify } from "../../typeHelpers";
import type { ScreenReader } from "../../ScreenReader";
type CaptureCommandOptions = Prettify<Pick<CommandOptions, "capture">>;
/**
 * Class for controlling the NVDA screen reader on Windows.
 */
export declare class NVDA implements ScreenReader {
    #private;
    /**
     * Getter for all NVDA keyboard commands.
     *
     * Use with the NVDA `perform` command to invoke a keyboard action:
     *
     * ```ts
     * import { nvda } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start NVDA.
     *   await nvda.start();
     *
     *   // Move to the next item.
     *   await nvda.perform(nvda.keyboardCommands.moveToNext);
     *
     *   // Stop NVDA.
     *   await nvda.stop();
     * })();
     * ```
     */
    get keyboardCommands(): Prettify<typeof keyCodeCommands>;
    /**
     * Detect whether NVDA is supported for the current OS:
     *
     * - `true` for Windows
     * - `false` for MacOS
     * - `false` for Linux
     *
     * ```ts
     * import { nvda } from "@guidepup/guidepup";
     *
     * (async () => {
     *   const isNVDADefaultScreenReader = await nvda.detect();
     *
     *   console.log(isNVDADefaultScreenReader);
     * })();
     * ```
     *
     * @returns {Promise<boolean>}
     */
    detect(): Promise<boolean>;
    /**
     * Detect whether NVDA is the default screen reader for the current OS:
     *
     * - `true` for Windows
     * - `false` for MacOS
     * - `false` for Linux
     *
     * ```ts
     * import { nvda } from "@guidepup/guidepup";
     *
     * (async () => {
     *   const isNVDADefaultScreenReader = await nvda.default();
     *
     *   console.log(isNVDADefaultScreenReader);
     * })();
     * ```
     *
     * @returns {Promise<boolean>}
     */
    default(): Promise<boolean>;
    /**
     * Turn NVDA on.
     *
     * ```ts
     * import { nvda } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start NVDA.
     *   await nvda.start();
     *
     *   // ... perform some commands.
     *
     *   // Stop NVDA.
     *   await nvda.stop();
     * })();
     * ```
     */
    start(options?: CaptureCommandOptions): Promise<void>;
    /**
     * Turn NVDA off.
     *
     * ```ts
     * import { nvda } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start NVDA.
     *   await nvda.start();
     *
     *   // ... perform some commands.
     *
     *   // Stop NVDA.
     *   await nvda.stop();
     * })();
     * ```
     */
    stop(): Promise<void>;
    /**
     * Move the NVDA cursor to the previous location.
     *
     * Equivalent of executing `Up Arrow`.
     *
     * ```ts
     * import { nvda } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start NVDA.
     *   await nvda.start();
     *
     *   // Move to the previous item.
     *   await nvda.previous();
     *
     *   // Stop NVDA.
     *   await nvda.stop();
     * })();
     * ```
     */
    previous(options?: CaptureCommandOptions): Promise<void>;
    /**
     * Move the NVDA cursor to the next location.
     *
     * Equivalent of executing `Down Arrow`.
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
    next(options?: CaptureCommandOptions): Promise<void>;
    /**
     * Perform the default action for the item in the NVDA cursor.
     *
     * Equivalent of executing `Enter`.
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
     *   // Perform the default action for the item.
     *   await nvda.act();
     *
     *   // Stop NVDA.
     *   await nvda.stop();
     * })();
     * ```
     */
    act(options?: CaptureCommandOptions): Promise<void>;
    /**
     * No-op to provide same API across screen-readers.
     *
     * NVDA does not require users to perform an additional command to interact
     * with the item in the NVDA cursor.
     */
    interact(): Promise<void>;
    /**
     * No-op to provide same API across screen-readers.
     *
     * NVDA does not require users to perform an additional command to interact
     * with the item in the NVDA cursor.
     */
    stopInteracting(): Promise<void>;
    /**
     * Press a key on the focused item.
     *
     * `key` can specify the intended [keyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
     * value or a single character to generate the text for. A superset of the `key` values can be found
     * [on the MDN key values page](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values). Examples of the keys are:
     *
     * `F1` - `F20`, `Digit0` - `Digit9`, `KeyA` - `KeyZ`, `Backquote`, `Minus`, `Equal`, `Backslash`, `Backspace`, `Tab`,
     * `Delete`, `Escape`, `ArrowDown`, `End`, `Enter`, `Home`, `Insert`, `PageDown`, `PageUp`, `ArrowRight`, `ArrowUp`, etc.
     *
     * See [WindowsKeyCodes](https://www.guidepup.dev/docs/api/class-windows-key-codes) for the full range of available keys.
     *
     * Following modification shortcuts are also supported: `Shift`, `Control`, `Alt`.
     *
     * See [WindowsModifiers](https://www.guidepup.dev/docs/api/class-windows-modifiers) for the full range of available modifiers.
     *
     * Holding down `Shift` will type the text that corresponds to the `key` in the upper case.
     *
     * If `key` is a single character, it is case-sensitive, so the values `a` and `A` will generate different respective
     * texts.
     *
     * Shortcuts such as `key: "Control+f"` or `key: "Control+Shift+f"` are supported as well. When specified with the
     * modifier, modifier is pressed and being held while the subsequent key is being pressed.
     *
     * ```ts
     * import { nvda } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start NVDA.
     *   await nvda.start();
     *
     *   // Open a find text modal.
     *   await nvda.press("Control+f");
     *
     *   // Stop NVDA.
     *   await nvda.stop();
     * })();
     * ```
     *
     * @param {string} key Name of the key to press or a character to generate, such as `ArrowLeft` or `a`.
     */
    press(key: string, options?: CaptureCommandOptions): Promise<void>;
    /**
     * Type text into the focused item.
     *
     * To press a special key, like `Control` or `ArrowDown`, use `nvda.press(key[, options])`.
     *
     * ```ts
     * import { nvda } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start NVDA.
     *   await nvda.start();
     *
     *   // Type a username and key Enter.
     *   await nvda.type("my-username");
     *   await nvda.press("Enter");
     *
     *   // Stop NVDA.
     *   await nvda.stop();
     * })();
     * ```
     *
     * @param {string} text Text to type into the focused item.
     */
    type(text: string, options?: CaptureCommandOptions): Promise<void>;
    /**
     * Perform a NVDA command.
     *
     * The command can be a [WindowsKeyCodeCommand](https://www.guidepup.dev/docs/api/class-windows-key-code-command) or [WindowsKeystrokeCommand](https://www.guidepup.dev/docs/api/class-windows-keystroke-command).
     *
     * ```ts
     * import { nvda, NVDAKeyCodeCommands } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start NVDA.
     *   await nvda.start();
     *
     *   // Type using a custom keystroke command.
     *   await nvda.perform({ characters: "my-username" });
     *
     *   // Keyboard commands available on the NVDA instance.
     *   await nvda.perform(nvda.keyboardCommands.performDefaultActionForItem);
     *
     *   // Stop NVDA.
     *   await nvda.stop();
     * })();
     * ```
     *
     * @param {any} command NVDA keyboard command to execute.
     */
    perform(command: KeyCodeCommand, options?: CaptureCommandOptions): Promise<void>;
    /**
     * Click the mouse.
     *
     * ```ts
     * import { nvda } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start NVDA.
     *   await nvda.start();
     *
     *   // Left-click the mouse.
     *   await nvda.click();
     *
     *   // Left-click the mouse using specific options.
     *   await nvda.click({ button: "left", clickCount: 1 });
     *
     *   // Double-right-click the mouse.
     *   await nvda.click({ button: "right", clickCount: 2 });
     *
     *   // Stop NVDA.
     *   await nvda.stop();
     * })();
     * ```
     *
     * @param {object} [options] Click options.
     */
    click(options?: ClickOptions): Promise<void>;
    /**
     * Get the last spoken phrase.
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
     *   // Get the phrase spoken by NVDA from moving to the next item above.
     *   const lastSpokenPhrase = await nvda.lastSpokenPhrase();
     *   console.log(lastSpokenPhrase);
     *
     *   // Stop NVDA.
     *   await nvda.stop();
     * })();
     * ```
     *
     * @returns {string} The last spoken phrase.
     */
    lastSpokenPhrase(): Promise<string>;
    /**
     * Get the last spoken phrase.
     *
     * For NVDA this is the same as `lastSpokenPhrase`.
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
     *   // Get the text (if any) for the item currently in focus by the NVDA
     *   // cursor.
     *   const itemText = await nvda.itemText();
     *   console.log(itemText);
     *
     *   // Stop NVDA.
     *   await nvda.stop();
     * })();
     * ```
     *
     * @alias lastSpokenPhrase
     *
     * @returns {Promise<string>} The last spoken phrase.
     */
    itemText(): Promise<string>;
    /**
     * Get the log of all spoken phrases for this NVDA instance.
     *
     * ```ts
     * import { nvda } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start NVDA.
     *   await nvda.start();
     *
     *   // Move through several items.
     *   for (let i = 0; i < 10; i++) {
     *     await nvda.next();
     *   }
     *
     *   // Get the phrase spoken by NVDA from moving through the items above.
     *   const spokenPhraseLog = await nvda.spokenPhraseLog();
     *   console.log(spokenPhraseLog);
     *
     *   // Stop NVDA.
     *   await nvda.stop();
     * })();
     * ```
     *
     * @returns {Promise<string[]>} The spoken phrase log.
     */
    spokenPhraseLog(): Promise<string[]>;
    /**
     * Clear the log of all spoken phrases for this NVDA instance.
     *
     * ```ts
     * import { nvda } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start NVDA.
     *   await nvda.start();
     *
     *   // ... perform some commands.
     *
     *   // Clear the spoken phrase log.
     *   await nvda.clearSpokenPhraseLog();
     *
     *   // Stop NVDA.
     *   await nvda.stop();
     * })();
     * ```
     */
    clearSpokenPhraseLog(): Promise<void>;
    /**
     * Get the log of all spoken phrases for this NVDA instance.
     *
     * For NVDA this is the same as `spokenPhraseLog`.
     *
     * ```ts
     * import { nvda } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start NVDA.
     *   await nvda.start();
     *
     *   // Move through several items.
     *   for (let i = 0; i < 10; i++) {
     *     await nvda.next();
     *   }
     *
     *   // Get the text (if any) for all the items visited by the NVDA cursor.
     *   const itemTextLog = await nvda.itemTextLog();
     *   console.log(itemTextLog);
     *
     *   // Stop NVDA.
     *   await nvda.stop();
     * })();
     * ```
     *
     * @alias lastSpokenPhrase
     *
     * @returns {Promise<string[]>} The spoken phrase log.
     */
    itemTextLog(): Promise<string[]>;
    /**
     * Clear the log of all spoken phrases for this NVDA instance.
     *
     * For NVDA this is the same as `clearSpokenPhraseLog`.
     *
     * ```ts
     * import { nvda } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start NVDA.
     *   await nvda.start();
     *
     *   // ... perform some commands.
     *
     *   // Clear the spoken phrase log.
     *   await nvda.clearItemTextLog();
     *
     *   // Stop NVDA.
     *   await nvda.stop();
     * })();
     * ```
     *
     * @alias clearSpokenPhraseLog
     */
    clearItemTextLog(): Promise<void>;
}
export {};
