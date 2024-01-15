import { KeyCodeCommand } from "./KeyCodeCommand";
export declare function parseKey<T extends KeyCodeCommand>(keyOrKeys: string, Modifiers: Record<string, unknown>, KeyCodes: Record<string, unknown>): T;
