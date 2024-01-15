"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceOverCursor = void 0;
const Applications_1 = require("../Applications");
const Directions_1 = require("./Directions");
const keyCodeCommands_1 = require("./keyCodeCommands");
const move_1 = require("./move");
const performAction_1 = require("./performAction");
const sendKeys_1 = require("../sendKeys");
const takeScreenshot_1 = require("./takeScreenshot");
class VoiceOverCursor {
    /**
     * @ignore
     */
    #logStore;
    constructor(logStore) {
        this.#logStore = logStore;
    }
    /**
     * Move the VoiceOver cursor to the previous location.
     *
     * Equivalent of executing VO-Left Arrow.
     *
     * @param {object} [options] Additional options.
     */
    async previous(options) {
        return await this.#logStore.tap(() => (0, move_1.move)(Directions_1.Directions.Left, undefined, options), options);
    }
    /**
     * Move the VoiceOver cursor to the next location.
     *
     * Equivalent of executing VO-Right Arrow.
     *
     * @param {object} [options] Additional options.
     */
    async next(options) {
        return await this.#logStore.tap(() => (0, move_1.move)(Directions_1.Directions.Right, undefined, options), options);
    }
    /**
     * Perform the default action for the item in the VoiceOver cursor.
     *
     * @param {object} [options] Additional options.
     */
    async act(options) {
        return await this.#logStore.tap(() => (0, performAction_1.performAction)(options), options);
    }
    /**
     * Interact with the item under the VoiceOver cursor.
     *
     * Equivalent of executing VO-Shift-Down Arrow.
     *
     * @param {object} [options] Additional options.
     */
    async interact(options) {
        return await this.#logStore.tap(() => (0, sendKeys_1.sendKeys)(keyCodeCommands_1.keyCodeCommands.interactWithItem, Applications_1.Applications.VoiceOver, options), options);
    }
    /**
     * Stop interacting with the current item.
     *
     * Equivalent of executing VO-Shift-Up Arrow.
     *
     * @param {object} [options] Additional options.
     */
    async stopInteracting(options) {
        return await this.#logStore.tap(() => (0, sendKeys_1.sendKeys)(keyCodeCommands_1.keyCodeCommands.stopInteractingWithItem, Applications_1.Applications.VoiceOver, options), options);
    }
    /**
     * Takes a screenshot of the VoiceOver cursor and returns the path to screenshot file.
     *
     * @param {object} [options] Additional options.
     * @returns {Promise<string>} The path to the screenshot file.
     */
    async takeScreenshot(options) {
        return await (0, takeScreenshot_1.takeScreenshot)(options);
    }
}
exports.VoiceOverCursor = VoiceOverCursor;
