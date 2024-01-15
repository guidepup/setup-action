declare const VOICEOVER_SETTINGS: {
    doNotShowSplashScreen: {
        domain: string;
        key: string;
        defaultValue: boolean;
        type: string;
    };
    voiceOverCursorEnabled: {
        domain: string;
        key: string;
        defaultValue: boolean;
        type: string;
    };
    disableSpeech: {
        domain: string;
        key: string;
        defaultValue: boolean;
        type: string;
    };
    disableSound: {
        domain: string;
        key: string;
        defaultValue: boolean;
        type: string;
    };
    displayTextEnabled: {
        domain: string;
        key: string;
        defaultValue: boolean;
        type: string;
    };
    rateAsPercent: {
        domain: string;
        key: string;
        defaultValue: number;
        type: string;
    };
    hintDelay: {
        domain: string;
        key: string;
        defaultValue: string;
        type: string;
    };
    loginGreeting: {
        domain: string;
        key: string;
        defaultValue: string;
        type: string;
    };
    automaticallySpeakWebPage: {
        domain: string;
        key: string;
        defaultValue: boolean;
        type: string;
    };
};
export type VoiceOverSettings = {
    [Property in keyof typeof VOICEOVER_SETTINGS]: (typeof VOICEOVER_SETTINGS)[Property]["defaultValue"];
};
export declare const DEFAULT_GUIDEPUP_VOICEOVER_SETTINGS: VoiceOverSettings;
export declare function storeOriginalSettings(): Promise<() => Promise<void>>;
export declare function configureSettings(settings: VoiceOverSettings): Promise<void[]>;
export {};
