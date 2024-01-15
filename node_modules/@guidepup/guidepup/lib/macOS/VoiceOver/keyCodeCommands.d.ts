import { KeyCodes } from "../KeyCodes";
import { Modifiers } from "../Modifiers";
/**
 * Object of key code commands for the VoiceOver screen reader on MacOS.
 *
 * Reference: {@link https://www.apple.com/voiceover/info/guide/_1131.html}
 */
export declare const keyCodeCommands: {
    start: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    quit: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    toggleLock: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    openUtilityMenu: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    openHelpMenu: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    openQuickStart: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    openOnlineHelp: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    startKeyboardHelp: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    hearItemDescription: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    openCommandsMenu: {
        keyCode: KeyCodes[];
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    openFindMenu: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    stopAction: {
        keyCode: KeyCodes;
        description: string;
        representation: string;
    };
    ignoreNextKeyCombination: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    openVerbosityRotor: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    magnifyItem: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    shrinkItem: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    toggleCursorAndPanels: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    toggleCaptionPanel: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    resizeOrMoveCaptionPanel: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    toggleBraillePanel: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    resizeOrMoveBraillePanel: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    tileVisuals: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    toggleKeyboardCommander: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    toggleScreenCurtain: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    cycleRightThroughSpeechSettings: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    cycleLeftThroughSpeechSettings: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    changeUpCurrentSpeechSettings: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    changeDownCurrentSpeechSettings: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    pressAndReleaseMouse: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    interactWithItem: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    stopInteractingWithItem: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    performDefaultActionForItem: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    selectItem: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    selectMultipleItems: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    toggleStickyMouse: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    doubleClick: {
        keyCode: KeyCodes[];
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    toggleDisclosureTriangle: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    readTableRow: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    readTableColumn: {
        keyCode: KeyCodes[];
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    readTableColumnHeader: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    readTableRowAndColumnNumbers: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    sortTableColumn: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    interactWithScrollbars: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    resizeObject: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveObject: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveUp: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveDown: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveToPrevious: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveToNext: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveToVisibleAreaTop: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveToVisibleAreaBottom: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveToAreaTop: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveToAreaBottom: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveToFirst: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveToLast: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveToFrontWindow: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    closeWindow: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    openItemChooser: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveToDock: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveToDesktop: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveToMenuBar: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveToFirstStatusMenuInMenuBar: {
        keyCode: KeyCodes[];
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    openSpotlightMenu: {
        keyCode: KeyCodes[];
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    openShortcutMenu: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    jumpToLinkedItem: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    toggleCursorTrackingOptions: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveCursorToKeyboardFocus: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveKeyboardFocusToCursor: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveCursorToMouseFocus: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveMouseFocusToCursor: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    jumpCommand: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    jumpToTopEdge: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    jumpToRightEdge: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    jumpToBottomEdge: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    jumpToLeftEdge: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    jumpToTopVisibleEdge: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    jumpToRightVisibleEdge: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    jumpToBottomVisibleEdge: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    jumpToLeftVisibleEdge: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    jumpBeforeSplitter: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    jumpAfterSplitter: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findText: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    navigateUp: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    cycleRightThroughNavigationSettings: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    navigateDown: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    cycleLeftThroughNavigationSettings: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    toggleHotSpot1: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    toggleHotSpot2: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    toggleHotSpot3: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    toggleHotSpot4: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    toggleHotSpot5: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    toggleHotSpot6: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    toggleHotSpot7: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    toggleHotSpot8: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    toggleHotSpot9: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    toggleHotSpot0: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    jumpToHotSpot1: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    jumpToHotSpot2: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    jumpToHotSpot3: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    jumpToHotSpot4: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    jumpToHotSpot5: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    jumpToHotSpot6: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    jumpToHotSpot7: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    jumpToHotSpot8: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    jumpToHotSpot9: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    jumpToHotSpot0: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    describeHotSpot1: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    describeHotSpot2: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    describeHotSpot3: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    describeHotSpot4: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    describeHotSpot5: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    describeHotSpot6: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    describeHotSpot7: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    describeHotSpot8: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    describeHotSpot9: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    describeHotSpot0: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    monitorHotSpot1: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    monitorHotSpot2: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    monitorHotSpot3: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    monitorHotSpot4: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    monitorHotSpot5: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    monitorHotSpot6: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    monitorHotSpot7: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    monitorHotSpot8: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    monitorHotSpot9: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    monitorHotSpot0: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    jumpToParentFolder: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    hearApplicationSummary: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    openApplicationChooser: {
        keyCode: KeyCodes[];
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    hearWindowSummary: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    openWindowChooser: {
        keyCode: KeyCodes[];
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    describeItem: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    describeItemSize: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    describeItemPosition: {
        keyCode: KeyCodes[];
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    describeItemWithKeyboardFocus: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    describeLocationOfInsertionPoint: {
        keyCode: KeyCodes[];
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    describeItemUnderMouseCursor: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    describeLocationOfMouseInCoordinates: {
        keyCode: KeyCodes[];
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    describeLocationOfMouse: {
        keyCode: KeyCodes[];
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    describeSelectedItem: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    readCurrentSelection: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    readActiveWindow: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    repeatLastSpokenPhrase: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    copyLastSpokenPhraseToClipboard: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    saveLastSpokenPhraseToDesktop: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    find: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findNextSearchedText: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findPreviousSearchedText: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findNextList: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findPreviousList: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findNextBoldText: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findPreviousBoldText: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findNextStyleChange: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findPreviousStyleChange: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findNextItalicText: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findPreviousItalicText: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findNextColorChange: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findPreviousColorChange: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findNextFontChange: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findPreviousFontChange: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findNextTable: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findPreviousTable: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findNextUnderlinedText: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findPreviousUnderlinedText: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findNextControl: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findPreviousControl: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findNextDifferentItem: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findPreviousDifferentItem: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findNextItemWithSameTypeAsCurrentItem: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findPreviousItemWithSameTypeAsCurrentItem: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findNextGraphic: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findPreviousGraphic: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findNextHeading: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findPreviousHeading: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findNextLink: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findPreviousLink: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findNextHeadingOfSameLevel: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findPreviousHeadingOfSameLevel: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findNextPlainText: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findPreviousPlainText: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findNextVisitedLink: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findPreviousVisitedLink: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findNextMisspelledWord: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    findPreviousMisspelledWord: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    readAllText: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    selectAllText: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    toggleTextSelection: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    speakTextAttributes: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    readParagraph: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    readNextParagraph: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    readPreviousParagraph: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    readSentence: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    readNextSentence: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    readPreviousSentence: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    readLine: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    readNextLine: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    readPreviousLine: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    readWord: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    readWordSpelled: {
        keyCode: KeyCodes[];
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    readWordPhonetically: {
        keyCode: KeyCodes[];
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    readNextWord: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    readPreviousWord: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    readCharacter: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    readCharacterPhonetically: {
        keyCode: KeyCodes[];
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    readNextCharacter: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    readPreviousCharacter: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveToFirstVisibleWord: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveToLastVisibleWord: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveToBeginningOfText: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveToEndOfText: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    readCurrentWordAndCharacter: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    readNumberOfLines: {
        keyCode: KeyCodes[];
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveToNextColumn: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveToPreviousColumn: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveToNextFrame: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveToPreviousFrame: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveToNextAutoWebSpot: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveToPreviousAutoWebSpot: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveToNextWebSpot: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    moveToPreviousWebSpot: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    openWebItemRotor: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    readFromBeginningToCurrent: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    readLinkAddress: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    readWebpageStatistics: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    removeWebSpot: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    setWebSpot: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    setSweetSpot: {
        keyCode: KeyCodes[];
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
    toggleGroupingItemsWithinTable: {
        keyCode: KeyCodes;
        modifiers: Modifiers[];
        description: string;
        representation: string;
    };
};
