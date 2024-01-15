"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Key = void 0;
class Key {
    keyCode;
    scanCode;
    extended;
    symbol;
    constructor({ keyCode, scanCode, extended, symbol, }) {
        this.keyCode = keyCode;
        this.scanCode = scanCode;
        this.extended = extended;
        this.symbol = symbol;
    }
    toJSON(down) {
        return {
            scan_code: this.scanCode,
            extended: this.extended,
            vk_code: this.keyCode,
            pressed: down,
            type: "key",
        };
    }
    toString(down) {
        return JSON.stringify(this.toJSON(down));
    }
}
exports.Key = Key;
