"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSaved = isSaved;
const lastSpokenPhrase_1 = require("./lastSpokenPhrase");
async function isSaved(options) {
    const lastPhrase = await (0, lastSpokenPhrase_1.lastSpokenPhrase)(options);
    return lastPhrase.startsWith("Last phrase saved to Desktop");
}
