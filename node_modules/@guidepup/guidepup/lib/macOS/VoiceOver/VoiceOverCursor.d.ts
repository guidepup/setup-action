import type { CommandOptions } from "../../CommandOptions";
import { LogStore } from "./LogStore";
export declare class VoiceOverCursor {
    #private;
    constructor(logStore: LogStore);
    /**
     * Move the VoiceOver cursor to the previous location.
     *
     * Equivalent of executing VO-Left Arrow.
     *
     * @param {object} [options] Additional options.
     */
    previous(options?: CommandOptions): Promise<void>;
    /**
     * Move the VoiceOver cursor to the next location.
     *
     * Equivalent of executing VO-Right Arrow.
     *
     * @param {object} [options] Additional options.
     */
    next(options?: CommandOptions): Promise<void>;
    /**
     * Perform the default action for the item in the VoiceOver cursor.
     *
     * @param {object} [options] Additional options.
     */
    act(options?: CommandOptions): Promise<void>;
    /**
     * Interact with the item under the VoiceOver cursor.
     *
     * Equivalent of executing VO-Shift-Down Arrow.
     *
     * @param {object} [options] Additional options.
     */
    interact(options?: CommandOptions): Promise<void>;
    /**
     * Stop interacting with the current item.
     *
     * Equivalent of executing VO-Shift-Up Arrow.
     *
     * @param {object} [options] Additional options.
     */
    stopInteracting(options?: CommandOptions): Promise<void>;
    /**
     * Takes a screenshot of the VoiceOver cursor and returns the path to screenshot file.
     *
     * @param {object} [options] Additional options.
     * @returns {Promise<string>} The path to the screenshot file.
     */
    takeScreenshot(options?: CommandOptions): Promise<string>;
}
