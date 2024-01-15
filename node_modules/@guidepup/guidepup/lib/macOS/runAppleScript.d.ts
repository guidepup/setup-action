export declare function runAppleScript<T = string | void>(script: string, { timeout }?: {
    timeout?: number;
}): Promise<T>;
