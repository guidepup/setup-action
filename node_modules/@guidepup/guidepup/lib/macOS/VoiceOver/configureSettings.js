"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_GUIDEPUP_VOICEOVER_SETTINGS = void 0;
exports.storeOriginalSettings = storeOriginalSettings;
exports.configureSettings = configureSettings;
const errors_1 = require("../errors");
const child_process_1 = require("child_process");
const VOICEOVER_TRAINING_DOMAIN = "com.apple.VoiceOverTraining";
const VOICEOVER_DEFAULTS_DOMAIN = "com.apple.VoiceOver4/default";
const VOICEOVER_SETTINGS = {
    doNotShowSplashScreen: {
        domain: VOICEOVER_TRAINING_DOMAIN,
        key: "doNotShowSplashScreen",
        defaultValue: true,
        type: "bool",
    },
    voiceOverCursorEnabled: {
        domain: VOICEOVER_DEFAULTS_DOMAIN,
        key: "SCRVoiceOverCursorEnabled",
        defaultValue: true,
        type: "bool",
    },
    disableSpeech: {
        domain: VOICEOVER_DEFAULTS_DOMAIN,
        key: "SCRCategories_SCRCategorySystemWide_SCRSpeechComponentSettings_SCRDisableSpeech",
        defaultValue: false,
        type: "bool",
    },
    disableSound: {
        domain: VOICEOVER_DEFAULTS_DOMAIN,
        key: "SCRCategories_SCRCategorySystemWide_SCRSoundComponentSettings_SCRDisableSound",
        defaultValue: false,
        type: "bool",
    },
    displayTextEnabled: {
        domain: VOICEOVER_DEFAULTS_DOMAIN,
        key: "SCRDisplayTextEnabled",
        defaultValue: true,
        type: "bool",
    },
    rateAsPercent: {
        domain: VOICEOVER_DEFAULTS_DOMAIN,
        key: "SCRCategories_SCRCategorySystemWide_SCRSpeechLanguages_default_SCRSpeechComponentSettings_SCRRateAsPercent",
        defaultValue: 45,
        type: "int",
    },
    hintDelay: {
        domain: VOICEOVER_DEFAULTS_DOMAIN,
        key: "SCRContextualHelpDelayInSeconds",
        defaultValue: "0.4",
        type: "int",
    },
    loginGreeting: {
        domain: VOICEOVER_DEFAULTS_DOMAIN,
        key: "loginGreeting",
        defaultValue: "Welcome to macOS. VoiceOver is on.",
        type: "string",
    },
    automaticallySpeakWebPage: {
        domain: VOICEOVER_DEFAULTS_DOMAIN,
        key: "SCRCUserDefaultsAutomaticallySpeakWebPage",
        defaultValue: true,
        type: "bool",
    },
};
exports.DEFAULT_GUIDEPUP_VOICEOVER_SETTINGS = {
    doNotShowSplashScreen: true,
    voiceOverCursorEnabled: true,
    disableSpeech: false,
    disableSound: true,
    displayTextEnabled: true,
    rateAsPercent: 90,
    // See also `src/macOS/VoiceOver/constants.ts` for poll times and retries
    // Need the delay to be longer than a poll so we don't miss text, but shorter
    // than the max poll * retries so that hints aren't missed
    hintDelay: "1.0",
    loginGreeting: "",
    automaticallySpeakWebPage: false,
};
function convertToBool(value) {
    return value === "1" || value === "true";
}
let resetSettings = null;
async function storeOriginalSettings() {
    if (resetSettings) {
        return resetSettings;
    }
    const [doNotShowSplashScreen, voiceOverCursorEnabled, disableSpeech, disableSound, displayTextEnabled, rateAsPercent, hintDelay, loginGreeting, automaticallySpeakWebPage,] = await Promise.all(Object.values(VOICEOVER_SETTINGS).map(({ domain, key, defaultValue }) => new Promise((resolve) => {
        (0, child_process_1.exec)(`defaultValues read ${domain} ${key}`, (e, stdout) => {
            if (e) {
                resolve(defaultValue.toString());
            }
            else {
                resolve(stdout.trim());
            }
        });
    })));
    const originalSettings = {
        doNotShowSplashScreen: convertToBool(doNotShowSplashScreen),
        voiceOverCursorEnabled: convertToBool(voiceOverCursorEnabled),
        disableSpeech: convertToBool(disableSpeech),
        disableSound: convertToBool(disableSound),
        displayTextEnabled: convertToBool(displayTextEnabled),
        rateAsPercent: parseInt(rateAsPercent),
        hintDelay,
        loginGreeting,
        automaticallySpeakWebPage: convertToBool(automaticallySpeakWebPage),
    };
    resetSettings = async () => {
        await configureSettings(originalSettings);
    };
    for (const event of ["exit", "uncaughtException", "unhandledRejection"]) {
        process.on(event, resetSettings);
    }
    return resetSettings;
}
async function configureSettings(settings) {
    return await Promise.all(Object.entries(VOICEOVER_SETTINGS).map(([name, { domain, key, type }]) => new Promise((resolve, reject) => {
        (0, child_process_1.exec)(`defaults write ${domain} ${key} -${type} "${settings[name].toString()}"`, (e) => {
            if (e) {
                reject(new Error(`${errors_1.ERR_VOICE_OVER_UNABLE_TO_CONFIGURE_VOICEOVER_SETTING}\n${e.message}`));
            }
            else {
                resolve();
            }
        });
    })));
}
