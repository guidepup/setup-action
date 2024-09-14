"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.click = click;
const constants_1 = require("../../constants");
const Applications_1 = require("../Applications");
const ClickButton_1 = require("./ClickButton");
const ClickCount_1 = require("./ClickCount");
const errors_1 = require("../errors");
const retryIfAppleEventTimeout_1 = require("../retryIfAppleEventTimeout");
const runAppleScript_1 = require("../runAppleScript");
const withTransaction_1 = require("../withTransaction");
const buttonMap = {
    left: ClickButton_1.ClickButton.Left,
    right: ClickButton_1.ClickButton.Right,
};
const clickCountMap = {
    1: ClickCount_1.ClickCount.Once,
    2: ClickCount_1.ClickCount.Twice,
    3: ClickCount_1.ClickCount.Thrice,
};
async function click({ button = constants_1.DEFAULT_CLICK_BUTTON, clickCount = constants_1.DEFAULT_CLICK_COUNT, ...options } = {
    button: constants_1.DEFAULT_CLICK_BUTTON,
    clickCount: constants_1.DEFAULT_CLICK_COUNT,
}) {
    const mappedButton = buttonMap[button];
    const mappedClickCount = clickCountMap[clickCount];
    const clickScript = `tell mouse cursor to click ${mappedClickCount} with ${mappedButton}`;
    const script = `tell application "${Applications_1.Applications.VoiceOver}"\n${(0, withTransaction_1.withTransaction)(clickScript)}\nend tell`;
    try {
        return await (0, retryIfAppleEventTimeout_1.retryIfAppleEventTimeout)(() => (0, runAppleScript_1.runAppleScript)(script, options), options);
    }
    catch (e) {
        throw new Error(`${errors_1.ERR_VOICE_OVER_CLICK}\n${e.message}`);
    }
}
