"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceOverCommander = void 0;
const CommanderCommands_1 = require("./CommanderCommands");
const performCommand_1 = require("./performCommand");
class VoiceOverCommander {
    /**
     * @ignore
     */
    #logStore;
    constructor(logStore) {
        this.#logStore = logStore;
    }
    /**
     * VoiceOver commander commands.
     */
    get commands() {
        return CommanderCommands_1.CommanderCommands;
    }
    /**
     * Perform a VoiceOver commander command.
     *
     * @param {string} command The lowercase english command for the VoiceOver commander to perform.
     * @param {object} [options] Additional options.
     */
    async perform(command, options) {
        return await this.#logStore.tap(() => (0, performCommand_1.performCommand)(command, options), options);
    }
}
exports.VoiceOverCommander = VoiceOverCommander;
