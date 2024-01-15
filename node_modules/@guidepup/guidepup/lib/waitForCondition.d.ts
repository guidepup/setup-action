export declare function waitForCondition(condition: () => boolean | Promise<boolean>, { pollInterval, pollTimeout, timeoutErrorMessage, }?: {
    pollInterval?: number;
    pollTimeout?: number;
    timeoutErrorMessage?: string;
}): Promise<void>;
