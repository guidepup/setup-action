"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceOverCaption = void 0;
const copyLastSpokenPhrase_1 = require("./copyLastSpokenPhrase");
const saveLastSpokenPhrase_1 = require("./saveLastSpokenPhrase");
class VoiceOverCaption {
    /**
     * @ignore
     */
    #logStore;
    constructor(logStore) {
        this.#logStore = logStore;
    }
    /**
     * Get the last spoken phrase.
     *
     * @returns {Promise<string>} The last spoken phrase.
     */
    async lastSpokenPhrase() {
        return await this.#logStore.lastSpokenPhrase();
    }
    /**
     * Copy the last spoken phrase to the Clipboard (also called the
     * "Pasteboard").
     *
     * Command specific to the VoiceOver screen reader.
     *
     * @param {object} [options] Additional options.
     */
    async copyLastSpokenPhrase(options) {
        return await (0, copyLastSpokenPhrase_1.copyLastSpokenPhrase)(options);
    }
    /**
     * Save the last spoken phrase and the crash log to a file on the desktop for
     * troubleshooting.
     *
     * Command specific to the VoiceOver screen reader.
     *
     * @param {object} [options] Additional options.
     */
    async saveLastSpokenPhrase(options) {
        return await (0, saveLastSpokenPhrase_1.saveLastSpokenPhrase)(options);
    }
    /**
     * Get the text of the item in the VoiceOver cursor.
     *
     * @returns {Promise<string>} The item's text.
     */
    async itemText() {
        return await this.#logStore.itemText();
    }
    /**
     * Get the log of all spoken phrases for this VoiceOver instance.
     *
     * @returns {Promise<string[]>} The spoken phrase log.
     */
    async spokenPhraseLog() {
        return await this.#logStore.spokenPhraseLog();
    }
    /**
     * Clear the log of all spoken phrases for this VoiceOver instance.
     */
    async clearSpokenPhraseLog() {
        await this.#logStore.clearSpokenPhraseLog();
    }
    /**
     * Get the log of all visited item text for this VoiceOver instance.
     *
     * @returns {Promise<string[]>} The item text log.
     */
    async itemTextLog() {
        return await this.#logStore.itemTextLog();
    }
    /**
     * Clear the log of all visited item text for this VoiceOver instance.
     */
    async clearItemTextLog() {
        await this.#logStore.clearItemTextLog();
    }
}
exports.VoiceOverCaption = VoiceOverCaption;
