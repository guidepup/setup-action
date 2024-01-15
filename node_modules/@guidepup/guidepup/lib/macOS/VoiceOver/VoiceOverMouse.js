"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceOverMouse = void 0;
const click_1 = require("./click");
class VoiceOverMouse {
    /**
     * @ignore
     */
    #logStore;
    constructor(logStore) {
        this.#logStore = logStore;
    }
    /**
     * Click the mouse.
     *
     * @param {object} [options] Click options.
     */
    async click(options) {
        return await this.#logStore.tap(() => (0, click_1.click)(options), options);
    }
}
exports.VoiceOverMouse = VoiceOverMouse;
