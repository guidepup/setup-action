export declare class Key {
    keyCode: number;
    scanCode: number;
    extended: boolean;
    symbol: string;
    constructor({ keyCode, scanCode, extended, symbol, }: {
        keyCode?: number;
        scanCode?: number;
        extended?: boolean;
        symbol?: string;
    });
    toJSON(down: boolean): {
        scan_code: number;
        extended: boolean;
        vk_code: number;
        pressed: boolean;
        type: string;
    };
    toString(down: boolean): string;
}
