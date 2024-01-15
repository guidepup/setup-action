import type { KeyCodeCommand } from "./KeyCodeCommand";
import type { KeystrokeCommand } from "./KeystrokeCommand";
export declare function sendKeys(command: KeyCodeCommand | KeystrokeCommand): Promise<void>;
