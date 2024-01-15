import type { CommandOptions } from "../../CommandOptions";
import type { Containments } from "./Containments";
import type { Directions } from "./Directions";
import type { Places } from "./Places";
export declare function move(direction: Directions | Containments, place?: Places, options?: CommandOptions): Promise<void>;
