import type { CommandOptions } from "../../CommandOptions";
import type { KeyCodeCommand } from "../KeyCodeCommand";
import type { KeystrokeCommand } from "../KeystrokeCommand";
export declare function sendKeys(keyCommand: KeyCodeCommand | KeystrokeCommand, applicationName?: string, options?: CommandOptions): Promise<void>;
