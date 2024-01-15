export declare function retryIfAppleEventTimeout<T>(delegate: () => T | Promise<T>, { retries }?: {
    retries?: number;
}): Promise<T>;
