import { CommanderCommands } from "./CommanderCommands";
import { CommandOptions } from "../../CommandOptions";
import { LogStore } from "./LogStore";
import { Prettify } from "../../typeHelpers";
export declare class VoiceOverCommander {
    #private;
    constructor(logStore: LogStore);
    /**
     * VoiceOver commander commands.
     */
    get commands(): Prettify<typeof CommanderCommands>;
    /**
     * Perform a VoiceOver commander command.
     *
     * @param {string} command The lowercase english command for the VoiceOver commander to perform.
     * @param {object} [options] Additional options.
     */
    perform(command: CommanderCommands, options?: CommandOptions): Promise<void>;
}
