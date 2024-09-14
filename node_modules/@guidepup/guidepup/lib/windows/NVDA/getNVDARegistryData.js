"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNVDARegistryData = getNVDARegistryData;
const regedit_1 = require("regedit");
const errors_1 = require("../errors");
const constants_1 = require("./constants");
let data;
async function getNVDARegistryData() {
    if (data) {
        return data;
    }
    try {
        ({ [constants_1.SUB_KEY_GUIDEPUP_NVDA]: data } = (await regedit_1.promisified.list([
            constants_1.SUB_KEY_GUIDEPUP_NVDA,
        ])));
        return data;
    }
    catch (e) {
        throw new Error(`${errors_1.ERR_WINDOWS_UNABLE_TO_ACCESS_REGISTRY}\n${e.message}`);
    }
}
