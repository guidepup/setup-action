import type { ClickOptions } from "../../ClickOptions";
import { LogStore } from "./LogStore";
export declare class VoiceOverMouse {
    #private;
    constructor(logStore: LogStore);
    /**
     * Click the mouse.
     *
     * @param {object} [options] Click options.
     */
    click(options?: ClickOptions): Promise<void>;
}
