import { CommandOptions } from "../../CommandOptions";
export declare class LogStore {
    #private;
    constructor(options?: Pick<CommandOptions, "capture">);
    /**
     * Get the text of the item in the VoiceOver cursor.
     *
     * @returns {Promise<string>} The item's text.
     */
    itemText(): Promise<string>;
    /**
     * Get the last spoken phrase.
     *
     * @returns {Promise<string>} The last spoken phrase.
     */
    lastSpokenPhrase(): Promise<string>;
    /**
     * Get the item text log.
     *
     * @returns {Promise<string[]>} The item text log.
     */
    itemTextLog(): Promise<string[]>;
    /**
     * Clear the item text log.
     */
    clearItemTextLog(): Promise<void>;
    /**
     * Get the spoken phrase log.
     *
     * @returns {Promise<string[]>} The spoken phrase log.
     */
    spokenPhraseLog(): Promise<string[]>;
    /**
     * Clear the spoken phrase log.
     */
    clearSpokenPhraseLog(): Promise<void>;
    /**
     * Waits for the provided promise to resolve and then captures the logs for
     * the performed action until they stabilize.
     *
     * @param {Promise<unknown>} promise Underlying action to capture logs for.
     * @param {object} options Additional options.
     * @returns {Promise<unknown>}
     */
    tap<T, S extends Promise<T>>(action: () => S, options?: Pick<CommandOptions, "capture">): Promise<T>;
}
