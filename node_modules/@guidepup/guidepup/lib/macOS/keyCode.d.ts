import type { CommandOptions } from "../CommandOptions";
import type { KeyCodeCommand } from "./KeyCodeCommand";
export declare function keyCode({ keyCode, modifiers }: KeyCodeCommand, options?: CommandOptions): Promise<void>;
