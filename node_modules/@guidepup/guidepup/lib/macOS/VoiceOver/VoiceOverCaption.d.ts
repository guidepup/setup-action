import type { CommandOptions } from "../../CommandOptions";
import { LogStore } from "./LogStore";
export declare class VoiceOverCaption {
    #private;
    constructor(logStore: LogStore);
    /**
     * Get the last spoken phrase.
     *
     * @returns {Promise<string>} The last spoken phrase.
     */
    lastSpokenPhrase(): Promise<string>;
    /**
     * Copy the last spoken phrase to the Clipboard (also called the
     * "Pasteboard").
     *
     * Command specific to the VoiceOver screen reader.
     *
     * @param {object} [options] Additional options.
     */
    copyLastSpokenPhrase(options?: CommandOptions): Promise<void>;
    /**
     * Save the last spoken phrase and the crash log to a file on the desktop for
     * troubleshooting.
     *
     * Command specific to the VoiceOver screen reader.
     *
     * @param {object} [options] Additional options.
     */
    saveLastSpokenPhrase(options?: CommandOptions): Promise<void>;
    /**
     * Get the text of the item in the VoiceOver cursor.
     *
     * @returns {Promise<string>} The item's text.
     */
    itemText(): Promise<string>;
    /**
     * Get the log of all spoken phrases for this VoiceOver instance.
     *
     * @returns {Promise<string[]>} The spoken phrase log.
     */
    spokenPhraseLog(): Promise<string[]>;
    /**
     * Clear the log of all spoken phrases for this VoiceOver instance.
     */
    clearSpokenPhraseLog(): Promise<void>;
    /**
     * Get the log of all visited item text for this VoiceOver instance.
     *
     * @returns {Promise<string[]>} The item text log.
     */
    itemTextLog(): Promise<string[]>;
    /**
     * Clear the log of all visited item text for this VoiceOver instance.
     */
    clearItemTextLog(): Promise<void>;
}
