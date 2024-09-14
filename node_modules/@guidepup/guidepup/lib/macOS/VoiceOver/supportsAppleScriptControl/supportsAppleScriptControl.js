"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supportsAppleScriptControl = supportsAppleScriptControl;
const enabledDbFile_1 = require("./enabledDbFile");
const enabledDefaults_1 = require("./enabledDefaults");
async function supportsAppleScriptControl() {
    const results = await Promise.all([(0, enabledDefaults_1.enabledDefaults)(), (0, enabledDbFile_1.enabledDbFile)()]);
    return results.every((value) => value);
}
