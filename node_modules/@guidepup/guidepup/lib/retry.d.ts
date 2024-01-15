export declare function retry<T>(delegate: () => T | Promise<T>, { retries }?: {
    retries?: number;
}): Promise<T>;
