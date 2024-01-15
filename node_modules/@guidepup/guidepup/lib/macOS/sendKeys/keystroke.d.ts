import type { CommandOptions } from "../../CommandOptions";
import type { KeystrokeCommand } from "../KeystrokeCommand";
export declare function keystroke({ characters, modifiers }: KeystrokeCommand, options?: CommandOptions): Promise<void>;
