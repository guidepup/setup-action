import { ClickOptions } from "../../ClickOptions";
import { CommanderCommands } from "./CommanderCommands";
import type { CommandOptions } from "../../CommandOptions";
import { KeyboardCommand } from "../KeyboardCommand";
import { KeyboardOptions } from "../../KeyboardOptions";
import type { Prettify } from "../../typeHelpers";
import type { ScreenReader } from "../../ScreenReader";
type CommandOptionsWithoutCapture = Prettify<Omit<CommandOptions, "capture">>;
/**
 * Class for controlling the VoiceOver screen reader on MacOS.
 */
export declare class VoiceOver implements ScreenReader {
    #private;
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-keyboard-commands)
     *
     * Getter for all VoiceOver keyboard commands.
     *
     * Use with the VoiceOver `perform` command to invoke a keyboard action:
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Move to the next item.
     *   await voiceOver.perform(voiceOver.keyboardCommands.moveToNext);
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     */
    get keyboardCommands(): {
        find: import("..").MacOSKeyCodeCommand;
        start: import("..").MacOSKeyCodeCommand;
        quit: import("..").MacOSKeyCodeCommand;
        toggleLock: import("..").MacOSKeyCodeCommand;
        openUtilityMenu: import("..").MacOSKeyCodeCommand;
        openHelpMenu: import("..").MacOSKeyCodeCommand;
        openQuickStart: import("..").MacOSKeyCodeCommand;
        openOnlineHelp: import("..").MacOSKeyCodeCommand;
        startKeyboardHelp: import("..").MacOSKeyCodeCommand;
        hearItemDescription: import("..").MacOSKeyCodeCommand;
        openCommandsMenu: import("..").MacOSKeyCodeCommand;
        openFindMenu: import("..").MacOSKeyCodeCommand;
        stopAction: import("..").MacOSKeyCodeCommand;
        ignoreNextKeyCombination: import("..").MacOSKeyCodeCommand;
        openVerbosityRotor: import("..").MacOSKeyCodeCommand;
        magnifyItem: import("..").MacOSKeyCodeCommand;
        shrinkItem: import("..").MacOSKeyCodeCommand;
        toggleCursorAndPanels: import("..").MacOSKeyCodeCommand;
        toggleCaptionPanel: import("..").MacOSKeyCodeCommand;
        resizeOrMoveCaptionPanel: import("..").MacOSKeyCodeCommand;
        toggleBraillePanel: import("..").MacOSKeyCodeCommand;
        resizeOrMoveBraillePanel: import("..").MacOSKeyCodeCommand;
        tileVisuals: import("..").MacOSKeyCodeCommand;
        toggleKeyboardCommander: import("..").MacOSKeyCodeCommand;
        toggleScreenCurtain: import("..").MacOSKeyCodeCommand;
        cycleRightThroughSpeechSettings: import("..").MacOSKeyCodeCommand;
        cycleLeftThroughSpeechSettings: import("..").MacOSKeyCodeCommand;
        changeUpCurrentSpeechSettings: import("..").MacOSKeyCodeCommand;
        changeDownCurrentSpeechSettings: import("..").MacOSKeyCodeCommand;
        pressAndReleaseMouse: import("..").MacOSKeyCodeCommand;
        interactWithItem: import("..").MacOSKeyCodeCommand;
        stopInteractingWithItem: import("..").MacOSKeyCodeCommand;
        performDefaultActionForItem: import("..").MacOSKeyCodeCommand;
        selectItem: import("..").MacOSKeyCodeCommand;
        selectMultipleItems: import("..").MacOSKeyCodeCommand;
        toggleStickyMouse: import("..").MacOSKeyCodeCommand;
        doubleClick: import("..").MacOSKeyCodeCommand;
        toggleDisclosureTriangle: import("..").MacOSKeyCodeCommand;
        readTableRow: import("..").MacOSKeyCodeCommand;
        readTableColumn: import("..").MacOSKeyCodeCommand;
        readTableColumnHeader: import("..").MacOSKeyCodeCommand;
        readTableRowAndColumnNumbers: import("..").MacOSKeyCodeCommand;
        sortTableColumn: import("..").MacOSKeyCodeCommand;
        interactWithScrollbars: import("..").MacOSKeyCodeCommand;
        resizeObject: import("..").MacOSKeyCodeCommand;
        moveObject: import("..").MacOSKeyCodeCommand;
        moveUp: import("..").MacOSKeyCodeCommand;
        moveDown: import("..").MacOSKeyCodeCommand;
        moveToPrevious: import("..").MacOSKeyCodeCommand;
        moveToNext: import("..").MacOSKeyCodeCommand;
        moveToVisibleAreaTop: import("..").MacOSKeyCodeCommand;
        moveToVisibleAreaBottom: import("..").MacOSKeyCodeCommand;
        moveToAreaTop: import("..").MacOSKeyCodeCommand;
        moveToAreaBottom: import("..").MacOSKeyCodeCommand;
        moveToFirst: import("..").MacOSKeyCodeCommand;
        moveToLast: import("..").MacOSKeyCodeCommand;
        moveToFrontWindow: import("..").MacOSKeyCodeCommand;
        closeWindow: import("..").MacOSKeyCodeCommand;
        openItemChooser: import("..").MacOSKeyCodeCommand;
        moveToDock: import("..").MacOSKeyCodeCommand;
        moveToDesktop: import("..").MacOSKeyCodeCommand;
        moveToMenuBar: import("..").MacOSKeyCodeCommand;
        moveToFirstStatusMenuInMenuBar: import("..").MacOSKeyCodeCommand;
        openSpotlightMenu: import("..").MacOSKeyCodeCommand;
        openShortcutMenu: import("..").MacOSKeyCodeCommand;
        jumpToLinkedItem: import("..").MacOSKeyCodeCommand;
        toggleCursorTrackingOptions: import("..").MacOSKeyCodeCommand;
        moveCursorToKeyboardFocus: import("..").MacOSKeyCodeCommand;
        moveKeyboardFocusToCursor: import("..").MacOSKeyCodeCommand;
        moveCursorToMouseFocus: import("..").MacOSKeyCodeCommand;
        moveMouseFocusToCursor: import("..").MacOSKeyCodeCommand;
        jumpCommand: import("..").MacOSKeyCodeCommand;
        jumpToTopEdge: import("..").MacOSKeyCodeCommand;
        jumpToRightEdge: import("..").MacOSKeyCodeCommand;
        jumpToBottomEdge: import("..").MacOSKeyCodeCommand;
        jumpToLeftEdge: import("..").MacOSKeyCodeCommand;
        jumpToTopVisibleEdge: import("..").MacOSKeyCodeCommand;
        jumpToRightVisibleEdge: import("..").MacOSKeyCodeCommand;
        jumpToBottomVisibleEdge: import("..").MacOSKeyCodeCommand;
        jumpToLeftVisibleEdge: import("..").MacOSKeyCodeCommand;
        jumpBeforeSplitter: import("..").MacOSKeyCodeCommand;
        jumpAfterSplitter: import("..").MacOSKeyCodeCommand;
        findText: import("..").MacOSKeyCodeCommand;
        navigateUp: import("..").MacOSKeyCodeCommand;
        cycleRightThroughNavigationSettings: import("..").MacOSKeyCodeCommand;
        navigateDown: import("..").MacOSKeyCodeCommand;
        cycleLeftThroughNavigationSettings: import("..").MacOSKeyCodeCommand;
        toggleHotSpot1: import("..").MacOSKeyCodeCommand;
        toggleHotSpot2: import("..").MacOSKeyCodeCommand;
        toggleHotSpot3: import("..").MacOSKeyCodeCommand;
        toggleHotSpot4: import("..").MacOSKeyCodeCommand;
        toggleHotSpot5: import("..").MacOSKeyCodeCommand;
        toggleHotSpot6: import("..").MacOSKeyCodeCommand;
        toggleHotSpot7: import("..").MacOSKeyCodeCommand;
        toggleHotSpot8: import("..").MacOSKeyCodeCommand;
        toggleHotSpot9: import("..").MacOSKeyCodeCommand;
        toggleHotSpot0: import("..").MacOSKeyCodeCommand;
        jumpToHotSpot1: import("..").MacOSKeyCodeCommand;
        jumpToHotSpot2: import("..").MacOSKeyCodeCommand;
        jumpToHotSpot3: import("..").MacOSKeyCodeCommand;
        jumpToHotSpot4: import("..").MacOSKeyCodeCommand;
        jumpToHotSpot5: import("..").MacOSKeyCodeCommand;
        jumpToHotSpot6: import("..").MacOSKeyCodeCommand;
        jumpToHotSpot7: import("..").MacOSKeyCodeCommand;
        jumpToHotSpot8: import("..").MacOSKeyCodeCommand;
        jumpToHotSpot9: import("..").MacOSKeyCodeCommand;
        jumpToHotSpot0: import("..").MacOSKeyCodeCommand;
        describeHotSpot1: import("..").MacOSKeyCodeCommand;
        describeHotSpot2: import("..").MacOSKeyCodeCommand;
        describeHotSpot3: import("..").MacOSKeyCodeCommand;
        describeHotSpot4: import("..").MacOSKeyCodeCommand;
        describeHotSpot5: import("..").MacOSKeyCodeCommand;
        describeHotSpot6: import("..").MacOSKeyCodeCommand;
        describeHotSpot7: import("..").MacOSKeyCodeCommand;
        describeHotSpot8: import("..").MacOSKeyCodeCommand;
        describeHotSpot9: import("..").MacOSKeyCodeCommand;
        describeHotSpot0: import("..").MacOSKeyCodeCommand;
        monitorHotSpot1: import("..").MacOSKeyCodeCommand;
        monitorHotSpot2: import("..").MacOSKeyCodeCommand;
        monitorHotSpot3: import("..").MacOSKeyCodeCommand;
        monitorHotSpot4: import("..").MacOSKeyCodeCommand;
        monitorHotSpot5: import("..").MacOSKeyCodeCommand;
        monitorHotSpot6: import("..").MacOSKeyCodeCommand;
        monitorHotSpot7: import("..").MacOSKeyCodeCommand;
        monitorHotSpot8: import("..").MacOSKeyCodeCommand;
        monitorHotSpot9: import("..").MacOSKeyCodeCommand;
        monitorHotSpot0: import("..").MacOSKeyCodeCommand;
        jumpToParentFolder: import("..").MacOSKeyCodeCommand;
        hearApplicationSummary: import("..").MacOSKeyCodeCommand;
        openApplicationChooser: import("..").MacOSKeyCodeCommand;
        hearWindowSummary: import("..").MacOSKeyCodeCommand;
        openWindowChooser: import("..").MacOSKeyCodeCommand;
        describeItem: import("..").MacOSKeyCodeCommand;
        describeItemSize: import("..").MacOSKeyCodeCommand;
        describeItemPosition: import("..").MacOSKeyCodeCommand;
        describeItemWithKeyboardFocus: import("..").MacOSKeyCodeCommand;
        describeLocationOfInsertionPoint: import("..").MacOSKeyCodeCommand;
        describeItemUnderMouseCursor: import("..").MacOSKeyCodeCommand;
        describeLocationOfMouseInCoordinates: import("..").MacOSKeyCodeCommand;
        describeLocationOfMouse: import("..").MacOSKeyCodeCommand;
        describeSelectedItem: import("..").MacOSKeyCodeCommand;
        readCurrentSelection: import("..").MacOSKeyCodeCommand;
        readActiveWindow: import("..").MacOSKeyCodeCommand;
        repeatLastSpokenPhrase: import("..").MacOSKeyCodeCommand;
        copyLastSpokenPhraseToClipboard: import("..").MacOSKeyCodeCommand;
        saveLastSpokenPhraseToDesktop: import("..").MacOSKeyCodeCommand;
        findNextSearchedText: import("..").MacOSKeyCodeCommand;
        findPreviousSearchedText: import("..").MacOSKeyCodeCommand;
        findNextList: import("..").MacOSKeyCodeCommand;
        findPreviousList: import("..").MacOSKeyCodeCommand;
        findNextBoldText: import("..").MacOSKeyCodeCommand;
        findPreviousBoldText: import("..").MacOSKeyCodeCommand;
        findNextStyleChange: import("..").MacOSKeyCodeCommand;
        findPreviousStyleChange: import("..").MacOSKeyCodeCommand;
        findNextItalicText: import("..").MacOSKeyCodeCommand;
        findPreviousItalicText: import("..").MacOSKeyCodeCommand;
        findNextColorChange: import("..").MacOSKeyCodeCommand;
        findPreviousColorChange: import("..").MacOSKeyCodeCommand;
        findNextFontChange: import("..").MacOSKeyCodeCommand;
        findPreviousFontChange: import("..").MacOSKeyCodeCommand;
        findNextTable: import("..").MacOSKeyCodeCommand;
        findPreviousTable: import("..").MacOSKeyCodeCommand;
        findNextUnderlinedText: import("..").MacOSKeyCodeCommand;
        findPreviousUnderlinedText: import("..").MacOSKeyCodeCommand;
        findNextControl: import("..").MacOSKeyCodeCommand;
        findPreviousControl: import("..").MacOSKeyCodeCommand;
        findNextDifferentItem: import("..").MacOSKeyCodeCommand;
        findPreviousDifferentItem: import("..").MacOSKeyCodeCommand;
        findNextItemWithSameTypeAsCurrentItem: import("..").MacOSKeyCodeCommand;
        findPreviousItemWithSameTypeAsCurrentItem: import("..").MacOSKeyCodeCommand;
        findNextGraphic: import("..").MacOSKeyCodeCommand;
        findPreviousGraphic: import("..").MacOSKeyCodeCommand;
        findNextHeading: import("..").MacOSKeyCodeCommand;
        findPreviousHeading: import("..").MacOSKeyCodeCommand;
        findNextLink: import("..").MacOSKeyCodeCommand;
        findPreviousLink: import("..").MacOSKeyCodeCommand;
        findNextHeadingOfSameLevel: import("..").MacOSKeyCodeCommand;
        findPreviousHeadingOfSameLevel: import("..").MacOSKeyCodeCommand;
        findNextPlainText: import("..").MacOSKeyCodeCommand;
        findPreviousPlainText: import("..").MacOSKeyCodeCommand;
        findNextVisitedLink: import("..").MacOSKeyCodeCommand;
        findPreviousVisitedLink: import("..").MacOSKeyCodeCommand;
        findNextMisspelledWord: import("..").MacOSKeyCodeCommand;
        findPreviousMisspelledWord: import("..").MacOSKeyCodeCommand;
        readAllText: import("..").MacOSKeyCodeCommand;
        selectAllText: import("..").MacOSKeyCodeCommand;
        toggleTextSelection: import("..").MacOSKeyCodeCommand;
        speakTextAttributes: import("..").MacOSKeyCodeCommand;
        readParagraph: import("..").MacOSKeyCodeCommand;
        readNextParagraph: import("..").MacOSKeyCodeCommand;
        readPreviousParagraph: import("..").MacOSKeyCodeCommand;
        readSentence: import("..").MacOSKeyCodeCommand;
        readNextSentence: import("..").MacOSKeyCodeCommand;
        readPreviousSentence: import("..").MacOSKeyCodeCommand;
        readLine: import("..").MacOSKeyCodeCommand;
        readNextLine: import("..").MacOSKeyCodeCommand;
        readPreviousLine: import("..").MacOSKeyCodeCommand;
        readWord: import("..").MacOSKeyCodeCommand;
        readWordSpelled: import("..").MacOSKeyCodeCommand;
        readWordPhonetically: import("..").MacOSKeyCodeCommand;
        readNextWord: import("..").MacOSKeyCodeCommand;
        readPreviousWord: import("..").MacOSKeyCodeCommand;
        readCharacter: import("..").MacOSKeyCodeCommand;
        readCharacterPhonetically: import("..").MacOSKeyCodeCommand;
        readNextCharacter: import("..").MacOSKeyCodeCommand;
        readPreviousCharacter: import("..").MacOSKeyCodeCommand;
        moveToFirstVisibleWord: import("..").MacOSKeyCodeCommand;
        moveToLastVisibleWord: import("..").MacOSKeyCodeCommand;
        moveToBeginningOfText: import("..").MacOSKeyCodeCommand;
        moveToEndOfText: import("..").MacOSKeyCodeCommand;
        readCurrentWordAndCharacter: import("..").MacOSKeyCodeCommand;
        readNumberOfLines: import("..").MacOSKeyCodeCommand;
        moveToNextColumn: import("..").MacOSKeyCodeCommand;
        moveToPreviousColumn: import("..").MacOSKeyCodeCommand;
        moveToNextFrame: import("..").MacOSKeyCodeCommand;
        moveToPreviousFrame: import("..").MacOSKeyCodeCommand;
        moveToNextAutoWebSpot: import("..").MacOSKeyCodeCommand;
        moveToPreviousAutoWebSpot: import("..").MacOSKeyCodeCommand;
        moveToNextWebSpot: import("..").MacOSKeyCodeCommand;
        moveToPreviousWebSpot: import("..").MacOSKeyCodeCommand;
        openWebItemRotor: import("..").MacOSKeyCodeCommand;
        readFromBeginningToCurrent: import("..").MacOSKeyCodeCommand;
        readLinkAddress: import("..").MacOSKeyCodeCommand;
        readWebpageStatistics: import("..").MacOSKeyCodeCommand;
        removeWebSpot: import("..").MacOSKeyCodeCommand;
        setWebSpot: import("..").MacOSKeyCodeCommand;
        setSweetSpot: import("..").MacOSKeyCodeCommand;
        toggleGroupingItemsWithinTable: import("..").MacOSKeyCodeCommand;
    };
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-commander-commands)
     *
     * VoiceOver commander commands.
     *
     * Getter specific to the VoiceOver screen reader.
     *
     * Use with the VoiceOver `perform` command to invoke a Commander action:
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Move down.
     *   await voiceOver.perform(voiceOver.commanderCommands.MOVE_DOWN);
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     */
    get commanderCommands(): {
        readonly ACTIONS: CommanderCommands.ACTIONS;
        readonly ADD_PRONUNCIATION: CommanderCommands.ADD_PRONUNCIATION;
        readonly BRING_WINDOW_TO_FRONT: CommanderCommands.BRING_WINDOW_TO_FRONT;
        readonly CLICK_MOUSE: CommanderCommands.CLICK_MOUSE;
        readonly CLOSE_WINDOW: CommanderCommands.CLOSE_WINDOW;
        readonly DESCRIBE_POSITION_OF_WINDOW: CommanderCommands.DESCRIBE_POSITION_OF_WINDOW;
        readonly DESCRIBE_SIZE_OF_WINDOW: CommanderCommands.DESCRIBE_SIZE_OF_WINDOW;
        readonly DOUBLE_CLICK_MOUSE: CommanderCommands.DOUBLE_CLICK_MOUSE;
        readonly DROP_MARKED_ITEM_AFTER_CHOSEN_HOT_SPOT: CommanderCommands.DROP_MARKED_ITEM_AFTER_CHOSEN_HOT_SPOT;
        readonly DROP_MARKED_ITEM_AFTER_VOICEOVER_CURSOR: CommanderCommands.DROP_MARKED_ITEM_AFTER_VOICEOVER_CURSOR;
        readonly DROP_MARKED_ITEM_BEFORE_CHOSEN_HOT_SPOT: CommanderCommands.DROP_MARKED_ITEM_BEFORE_CHOSEN_HOT_SPOT;
        readonly DROP_MARKED_ITEM_BEFORE_VOICEOVER_CURSOR: CommanderCommands.DROP_MARKED_ITEM_BEFORE_VOICEOVER_CURSOR;
        readonly DROP_MARKED_ITEM_ON_CHOSEN_HOT_SPOT: CommanderCommands.DROP_MARKED_ITEM_ON_CHOSEN_HOT_SPOT;
        readonly DROP_MARKED_ITEM_ON_VOICEOVER_CURSOR: CommanderCommands.DROP_MARKED_ITEM_ON_VOICEOVER_CURSOR;
        readonly ESCAPE: CommanderCommands.ESCAPE;
        readonly FAST_FORWARD: CommanderCommands.FAST_FORWARD;
        readonly IGNORE_NEXT_KEYPRESS: CommanderCommands.IGNORE_NEXT_KEYPRESS;
        readonly INTERACT_WITH_SCROLL_BAR: CommanderCommands.INTERACT_WITH_SCROLL_BAR;
        readonly ITEM_CHOOSER: CommanderCommands.ITEM_CHOOSER;
        readonly KEYBOARD_HELP: CommanderCommands.KEYBOARD_HELP;
        readonly LABEL_ITEM: CommanderCommands.LABEL_ITEM;
        readonly MAGIC_TAP: CommanderCommands.MAGIC_TAP;
        readonly MARK_ITEM_TO_DRAG_AND_DROP: CommanderCommands.MARK_ITEM_TO_DRAG_AND_DROP;
        readonly MORE_CONTENT: CommanderCommands.MORE_CONTENT;
        readonly MOUSE_DOWN: CommanderCommands.MOUSE_DOWN;
        readonly MOUSE_UP: CommanderCommands.MOUSE_UP;
        readonly MOVE_DOWN: CommanderCommands.MOVE_DOWN;
        readonly MOVE_LEFT: CommanderCommands.MOVE_LEFT;
        readonly MOVE_RIGHT: CommanderCommands.MOVE_RIGHT;
        readonly MOVE_UP: CommanderCommands.MOVE_UP;
        readonly OPEN_ACTIVITY_CHOOSER: CommanderCommands.OPEN_ACTIVITY_CHOOSER;
        readonly OPEN_APPLICATION_CHOOSER: CommanderCommands.OPEN_APPLICATION_CHOOSER;
        readonly OPEN_COMMANDS_MENU: CommanderCommands.OPEN_COMMANDS_MENU;
        readonly OPEN_CONTROL_CENTER: CommanderCommands.OPEN_CONTROL_CENTER;
        readonly OPEN_NEXT_SPEECH_ATTRIBUTE_GUIDE: CommanderCommands.OPEN_NEXT_SPEECH_ATTRIBUTE_GUIDE;
        readonly OPEN_NOTIFICATION_CENTRE: CommanderCommands.OPEN_NOTIFICATION_CENTRE;
        readonly OPEN_PREVIOUS_SPEECH_ATTRIBUTE_GUIDE: CommanderCommands.OPEN_PREVIOUS_SPEECH_ATTRIBUTE_GUIDE;
        readonly OPEN_QUICK_START_TUTORIAL: CommanderCommands.OPEN_QUICK_START_TUTORIAL;
        readonly OPEN_SHORTCUT_MENU: CommanderCommands.OPEN_SHORTCUT_MENU;
        readonly OPEN_THE_ANNOUNCEMENT_HISTORY_MENU: CommanderCommands.OPEN_THE_ANNOUNCEMENT_HISTORY_MENU;
        readonly OPEN_THE_NOTIFICATIONS_MENU: CommanderCommands.OPEN_THE_NOTIFICATIONS_MENU;
        readonly OPEN_VERBOSITY_ROTOR: CommanderCommands.OPEN_VERBOSITY_ROTOR;
        readonly OPEN_VOICEOVER_HELP_MENU: CommanderCommands.OPEN_VOICEOVER_HELP_MENU;
        readonly OPEN_VOICEOVER_UTILITY: CommanderCommands.OPEN_VOICEOVER_UTILITY;
        readonly OPEN_WINDOW_CHOOSER: CommanderCommands.OPEN_WINDOW_CHOOSER;
        readonly PAUSE_OR_RESUME_SPEAKING: CommanderCommands.PAUSE_OR_RESUME_SPEAKING;
        readonly PERFORM_ACTION_FOR_ITEM: CommanderCommands.PERFORM_ACTION_FOR_ITEM;
        readonly PREVIOUS_ACTIVITY: CommanderCommands.PREVIOUS_ACTIVITY;
        readonly READ_CONTENTS_OF_VOICEOVER_CURSOR: CommanderCommands.READ_CONTENTS_OF_VOICEOVER_CURSOR;
        readonly READ_CONTENTS_OF_WINDOW: CommanderCommands.READ_CONTENTS_OF_WINDOW;
        readonly READ_CURRENT_ITEM_ALPHABETICALLY: CommanderCommands.READ_CURRENT_ITEM_ALPHABETICALLY;
        readonly READ_CURRENT_ITEM_PHONETICALLY: CommanderCommands.READ_CURRENT_ITEM_PHONETICALLY;
        readonly READ_HELP_TAG_FOR_ITEM: CommanderCommands.READ_HELP_TAG_FOR_ITEM;
        readonly READ_IMAGE_DESCRIPTION_FOR_ITEM: CommanderCommands.READ_IMAGE_DESCRIPTION_FOR_ITEM;
        readonly READ_SELECTED_TEXT_OR_ITEM: CommanderCommands.READ_SELECTED_TEXT_OR_ITEM;
        readonly READ_VISIBLE_TEXT: CommanderCommands.READ_VISIBLE_TEXT;
        readonly READ_VOICEOVER_HINT: CommanderCommands.READ_VOICEOVER_HINT;
        readonly REMOVE_FROM_WINDOW_SPOTS: CommanderCommands.REMOVE_FROM_WINDOW_SPOTS;
        readonly REWIND: CommanderCommands.REWIND;
        readonly RIGHT_CLICK_MOUSE: CommanderCommands.RIGHT_CLICK_MOUSE;
        readonly ROTOR: CommanderCommands.ROTOR;
        readonly SELECT_ITEM: CommanderCommands.SELECT_ITEM;
        readonly SELECT_NEXT_OPTION_DOWN_IN_SPEECH_ATTRIBUTE_GUIDE: CommanderCommands.SELECT_NEXT_OPTION_DOWN_IN_SPEECH_ATTRIBUTE_GUIDE;
        readonly SELECT_NEXT_OPTION_UP_IN_SPEECH_ATTRIBUTE_GUIDE: CommanderCommands.SELECT_NEXT_OPTION_UP_IN_SPEECH_ATTRIBUTE_GUIDE;
        readonly SET_AS_A_WINDOW_SPOT: CommanderCommands.SET_AS_A_WINDOW_SPOT;
        readonly SET_THE_SWEET_SPOT: CommanderCommands.SET_THE_SWEET_SPOT;
        readonly START_INTERACTING_WITH_ITEM: CommanderCommands.START_INTERACTING_WITH_ITEM;
        readonly STOP_INTERACTING_WITH_ITEM: CommanderCommands.STOP_INTERACTING_WITH_ITEM;
        readonly TOGGLE_CURSOR_TRACKING_ON_OR_OFF: CommanderCommands.TOGGLE_CURSOR_TRACKING_ON_OR_OFF;
        readonly TOGGLE_DISCLOSURE_TRIANGLE_OPEN_OR_CLOSED: CommanderCommands.TOGGLE_DISCLOSURE_TRIANGLE_OPEN_OR_CLOSED;
        readonly TOGGLE_KEYBOARD_COMMANDER_ON_OR_OFF: CommanderCommands.TOGGLE_KEYBOARD_COMMANDER_ON_OR_OFF;
        readonly TOGGLE_MULTIPLE_SELECTION_ON_OR_OFF: CommanderCommands.TOGGLE_MULTIPLE_SELECTION_ON_OR_OFF;
        readonly TOGGLE_NUMPAD_COMMANDER_ON_OR_OFF: CommanderCommands.TOGGLE_NUMPAD_COMMANDER_ON_OR_OFF;
        readonly TOGGLE_QUICK_NAV_ON_OR_OFF: CommanderCommands.TOGGLE_QUICK_NAV_ON_OR_OFF;
        readonly TOGGLE_SCREEN_CURTAIN_ON_OR_OFF: CommanderCommands.TOGGLE_SCREEN_CURTAIN_ON_OR_OFF;
        readonly TOGGLE_SINGLE_KEY_QUICK_NAV_ON_OR_OFF: CommanderCommands.TOGGLE_SINGLE_KEY_QUICK_NAV_ON_OR_OFF;
        readonly TOGGLE_THE_VO_MODIFIER_LOCK_ON_OR_OFF: CommanderCommands.TOGGLE_THE_VO_MODIFIER_LOCK_ON_OR_OFF;
        readonly TOGGLE_TRACKPAD_COMMANDER_ON_OR_OFF: CommanderCommands.TOGGLE_TRACKPAD_COMMANDER_ON_OR_OFF;
        readonly USER_GUIDE: CommanderCommands.USER_GUIDE;
        readonly DESCRIBE_ITEM_IN_MOUSE_POINTER: CommanderCommands.DESCRIBE_ITEM_IN_MOUSE_POINTER;
        readonly DESCRIBE_ITEM_IN_VOICEOVER_CURSOR: CommanderCommands.DESCRIBE_ITEM_IN_VOICEOVER_CURSOR;
        readonly DESCRIBE_ITEM_WITH_KEYBOARD_FOCUS: CommanderCommands.DESCRIBE_ITEM_WITH_KEYBOARD_FOCUS;
        readonly DESCRIBE_MOUSE_POINTER_LOCATION_FROM_TOP_LEFT_OF_SCREEN: CommanderCommands.DESCRIBE_MOUSE_POINTER_LOCATION_FROM_TOP_LEFT_OF_SCREEN;
        readonly DESCRIBE_MOUSE_POINTER_LOCATION_FROM_TOP_LEFT_OF_WINDOW: CommanderCommands.DESCRIBE_MOUSE_POINTER_LOCATION_FROM_TOP_LEFT_OF_WINDOW;
        readonly DESCRIBE_OPEN_APPLICATIONS: CommanderCommands.DESCRIBE_OPEN_APPLICATIONS;
        readonly DESCRIBE_POSITION_OF_ITEM_IN_VOICEOVER_CURSOR: CommanderCommands.DESCRIBE_POSITION_OF_ITEM_IN_VOICEOVER_CURSOR;
        readonly DESCRIBE_SIZE_OF_ITEM_IN_VOICEOVER_CURSOR: CommanderCommands.DESCRIBE_SIZE_OF_ITEM_IN_VOICEOVER_CURSOR;
        readonly DESCRIBE_WINDOW: CommanderCommands.DESCRIBE_WINDOW;
        readonly GO_DOWN_ONE_PAGE: CommanderCommands.GO_DOWN_ONE_PAGE;
        readonly GO_LEFT_A_BIT: CommanderCommands.GO_LEFT_A_BIT;
        readonly GO_LEFT_ONE_PAGE: CommanderCommands.GO_LEFT_ONE_PAGE;
        readonly GO_RIGHT_A_BIT: CommanderCommands.GO_RIGHT_A_BIT;
        readonly GO_RIGHT_ONE_PAGE: CommanderCommands.GO_RIGHT_ONE_PAGE;
        readonly GO_TO_BEGINNING: CommanderCommands.GO_TO_BEGINNING;
        readonly GO_TO_BOTTOM_OF_WINDOW: CommanderCommands.GO_TO_BOTTOM_OF_WINDOW;
        readonly GO_TO_DESKTOP: CommanderCommands.GO_TO_DESKTOP;
        readonly GO_TO_DOCK: CommanderCommands.GO_TO_DOCK;
        readonly GO_TO_END: CommanderCommands.GO_TO_END;
        readonly GO_TO_LINKED_ITEM: CommanderCommands.GO_TO_LINKED_ITEM;
        readonly GO_TO_MENU_BAR: CommanderCommands.GO_TO_MENU_BAR;
        readonly GO_TO_POP_UP_ITEM: CommanderCommands.GO_TO_POP_UP_ITEM;
        readonly GO_TO_STATUS_MENUS: CommanderCommands.GO_TO_STATUS_MENUS;
        readonly GO_TO_TOP_OF_WINDOW: CommanderCommands.GO_TO_TOP_OF_WINDOW;
        readonly GO_TO_VISIBLE_BEGINNING: CommanderCommands.GO_TO_VISIBLE_BEGINNING;
        readonly GO_TO_VISIBLE_END: CommanderCommands.GO_TO_VISIBLE_END;
        readonly GO_UP_ONE_PAGE: CommanderCommands.GO_UP_ONE_PAGE;
        readonly MOVE_DOWN_IN_ROTOR: CommanderCommands.MOVE_DOWN_IN_ROTOR;
        readonly MOVE_KEYBOARD_FOCUS_TO_VOICEOVER_CURSOR: CommanderCommands.MOVE_KEYBOARD_FOCUS_TO_VOICEOVER_CURSOR;
        readonly MOVE_MOUSE_POINTER_TO_VOICEOVER_CURSOR: CommanderCommands.MOVE_MOUSE_POINTER_TO_VOICEOVER_CURSOR;
        readonly MOVE_TO_AREA_AFTER_SPLITTER: CommanderCommands.MOVE_TO_AREA_AFTER_SPLITTER;
        readonly MOVE_TO_AREA_BEFORE_SPLITTER: CommanderCommands.MOVE_TO_AREA_BEFORE_SPLITTER;
        readonly MOVE_TO_NEXT_SECTION: CommanderCommands.MOVE_TO_NEXT_SECTION;
        readonly MOVE_TO_PREVIOUS_SECTION: CommanderCommands.MOVE_TO_PREVIOUS_SECTION;
        readonly MOVE_UP_IN_ROTOR: CommanderCommands.MOVE_UP_IN_ROTOR;
        readonly MOVE_VOICEOVER_CURSOR_TO_KEYBOARD_FOCUS: CommanderCommands.MOVE_VOICEOVER_CURSOR_TO_KEYBOARD_FOCUS;
        readonly MOVE_VOICEOVER_CURSOR_TO_MOUSE_POINTER: CommanderCommands.MOVE_VOICEOVER_CURSOR_TO_MOUSE_POINTER;
        readonly NEXT_CONTENT: CommanderCommands.NEXT_CONTENT;
        readonly NEXT_ROTOR_ITEM: CommanderCommands.NEXT_ROTOR_ITEM;
        readonly PREVIOUS_CONTENT: CommanderCommands.PREVIOUS_CONTENT;
        readonly PREVIOUS_ROTO_ITEM: CommanderCommands.PREVIOUS_ROTO_ITEM;
        readonly ROTATE_LEFT: CommanderCommands.ROTATE_LEFT;
        readonly ROTATE_RIGHT: CommanderCommands.ROTATE_RIGHT;
        readonly SCROLL_DOWN_ONE_PAGE: CommanderCommands.SCROLL_DOWN_ONE_PAGE;
        readonly SCROLL_LEFT_ONE_PAGE: CommanderCommands.SCROLL_LEFT_ONE_PAGE;
        readonly SCROLL_RIGHT_ONE_PAGE: CommanderCommands.SCROLL_RIGHT_ONE_PAGE;
        readonly SCROLL_UP_ONE_PAGE: CommanderCommands.SCROLL_UP_ONE_PAGE;
        readonly SPEAK_CURRENT_PAGE_IN_SCROLL_AREA: CommanderCommands.SPEAK_CURRENT_PAGE_IN_SCROLL_AREA;
        readonly SWITCH_WINDOW: CommanderCommands.SWITCH_WINDOW;
        readonly TOGGLE_VOICEOVER_CURSOR_FOLLOWS_MOUSE_ON_OR_OFF: CommanderCommands.TOGGLE_VOICEOVER_CURSOR_FOLLOWS_MOUSE_ON_OR_OFF;
        readonly READ_CURRENT_CHARACTER: CommanderCommands.READ_CURRENT_CHARACTER;
        readonly READ_CURRENT_CHARACTER_PHONETICALLY: CommanderCommands.READ_CURRENT_CHARACTER_PHONETICALLY;
        readonly READ_CURRENT_LINE: CommanderCommands.READ_CURRENT_LINE;
        readonly READ_CURRENT_PARAGRAPH: CommanderCommands.READ_CURRENT_PARAGRAPH;
        readonly READ_CURRENT_SENTENCE: CommanderCommands.READ_CURRENT_SENTENCE;
        readonly READ_CURRENT_WORD: CommanderCommands.READ_CURRENT_WORD;
        readonly READ_CURRENT_WORD_ALPHABETICALLY: CommanderCommands.READ_CURRENT_WORD_ALPHABETICALLY;
        readonly READ_CURRENT_WORD_PHONETICALLY: CommanderCommands.READ_CURRENT_WORD_PHONETICALLY;
        readonly READ_FROM_BEGINNING_TO_VOICEOVER_CURSOR: CommanderCommands.READ_FROM_BEGINNING_TO_VOICEOVER_CURSOR;
        readonly READ_NEXT_CHARACTER: CommanderCommands.READ_NEXT_CHARACTER;
        readonly READ_NEXT_LINE: CommanderCommands.READ_NEXT_LINE;
        readonly READ_NEXT_PARAGRAPH: CommanderCommands.READ_NEXT_PARAGRAPH;
        readonly READ_NEXT_SENTENCE: CommanderCommands.READ_NEXT_SENTENCE;
        readonly READ_NEXT_WORD: CommanderCommands.READ_NEXT_WORD;
        readonly READ_PREVIOUS_CHARACTER: CommanderCommands.READ_PREVIOUS_CHARACTER;
        readonly READ_PREVIOUS_LINE: CommanderCommands.READ_PREVIOUS_LINE;
        readonly READ_PREVIOUS_PARAGRAPH: CommanderCommands.READ_PREVIOUS_PARAGRAPH;
        readonly READ_PREVIOUS_SENTENCE: CommanderCommands.READ_PREVIOUS_SENTENCE;
        readonly READ_PREVIOUS_WORD: CommanderCommands.READ_PREVIOUS_WORD;
        readonly READ_TEXT_ATTRIBUTES: CommanderCommands.READ_TEXT_ATTRIBUTES;
        readonly SELECT_ALL: CommanderCommands.SELECT_ALL;
        readonly SELECT_LEFT_OF_THE_CURSOR: CommanderCommands.SELECT_LEFT_OF_THE_CURSOR;
        readonly SELECT_RIGHT_OF_THE_CURSOR: CommanderCommands.SELECT_RIGHT_OF_THE_CURSOR;
        readonly SELECT_TEXT: CommanderCommands.SELECT_TEXT;
        readonly SELECT_TEXT_IN_VOICEOVER_CURSOR: CommanderCommands.SELECT_TEXT_IN_VOICEOVER_CURSOR;
        readonly TOGGLE_TEXT_SPOKEN_ALL_OR_MOST_RECENT: CommanderCommands.TOGGLE_TEXT_SPOKEN_ALL_OR_MOST_RECENT;
        readonly UNSELECT_TEXT: CommanderCommands.UNSELECT_TEXT;
        readonly ALWAYS_ALLOW_KEYBOARD_COMMANDS_TO_NAVIGATE_WEBSITES: CommanderCommands.ALWAYS_ALLOW_KEYBOARD_COMMANDS_TO_NAVIGATE_WEBSITES;
        readonly FIND_NEXT_AUTO_WEB_SPOT: CommanderCommands.FIND_NEXT_AUTO_WEB_SPOT;
        readonly FIND_NEXT_BUTTON: CommanderCommands.FIND_NEXT_BUTTON;
        readonly FIND_NEXT_COLUMN: CommanderCommands.FIND_NEXT_COLUMN;
        readonly FIND_NEXT_FRAME: CommanderCommands.FIND_NEXT_FRAME;
        readonly FIND_NEXT_LANDMARK: CommanderCommands.FIND_NEXT_LANDMARK;
        readonly FIND_NEXT_LIVE_REGION: CommanderCommands.FIND_NEXT_LIVE_REGION;
        readonly FIND_NEXT_RADIO_GROUP: CommanderCommands.FIND_NEXT_RADIO_GROUP;
        readonly FIND_NEXT_TEXT_FIELD: CommanderCommands.FIND_NEXT_TEXT_FIELD;
        readonly FIND_NEXT_TICKBOX: CommanderCommands.FIND_NEXT_TICKBOX;
        readonly FIND_NEXT_WEB_SPOT: CommanderCommands.FIND_NEXT_WEB_SPOT;
        readonly FIND_PREVIOUS_: CommanderCommands.FIND_PREVIOUS_;
        readonly FIND_PREVIOUS_BUTTON: CommanderCommands.FIND_PREVIOUS_BUTTON;
        readonly FIND_PREVIOUS_COLUMN: CommanderCommands.FIND_PREVIOUS_COLUMN;
        readonly FIND_PREVIOUS_FRAME: CommanderCommands.FIND_PREVIOUS_FRAME;
        readonly FIND_PREVIOUS_LANDMARK: CommanderCommands.FIND_PREVIOUS_LANDMARK;
        readonly FIND_PREVIOUS_REGION: CommanderCommands.FIND_PREVIOUS_REGION;
        readonly FIND_PREVIOUS_GROUP: CommanderCommands.FIND_PREVIOUS_GROUP;
        readonly FIND_PREVIOUS_FIELD: CommanderCommands.FIND_PREVIOUS_FIELD;
        readonly FIND_PREVIOUS_TICKBOX: CommanderCommands.FIND_PREVIOUS_TICKBOX;
        readonly FIND_PREVIOUS_WEB_SPOT: CommanderCommands.FIND_PREVIOUS_WEB_SPOT;
        readonly READ_LINK_ADDRESS: CommanderCommands.READ_LINK_ADDRESS;
        readonly READ_WEB_PAGE_STATISTICS: CommanderCommands.READ_WEB_PAGE_STATISTICS;
        readonly REMOVE_WEB_SPOT: CommanderCommands.REMOVE_WEB_SPOT;
        readonly SET_WEB_SPOT: CommanderCommands.SET_WEB_SPOT;
        readonly TOGGLE_INSERTION_POINT_NAVIGATION: CommanderCommands.TOGGLE_INSERTION_POINT_NAVIGATION;
        readonly TOGGLE_LIVE_REGION: CommanderCommands.TOGGLE_LIVE_REGION;
        readonly TOGGLE_TABLE_INTERACTABILITY: CommanderCommands.TOGGLE_TABLE_INTERACTABILITY;
        readonly TOGGLE_TABLE_ROW_AND_COLUMN_INDICES: CommanderCommands.TOGGLE_TABLE_ROW_AND_COLUMN_INDICES;
        readonly TOGGLE_WEB_NAVIGATION_DOM_OR_GROUP: CommanderCommands.TOGGLE_WEB_NAVIGATION_DOM_OR_GROUP;
    };
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-detect)
     *
     * Detect whether VoiceOver is supported for the current OS:
     *
     * - `false` for Windows
     * - `true` for MacOS
     * - `false` for Linux
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   const isVoiceOverSupportedScreenReader = await voiceOver.detect();
     *
     *   console.log(isVoiceOverSupportedScreenReader);
     * })();
     * ```
     *
     * @returns {Promise<boolean>}
     */
    detect(): Promise<boolean>;
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-default)
     *
     * Detect whether VoiceOver is the default screen reader for the current OS:
     *
     * - `false` for Windows
     * - `true` for MacOS
     * - `false` for Linux
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   const isVoiceOverDefaultScreenReader = await voiceOver.default();
     *
     *   console.log(isVoiceOverDefaultScreenReader);
     * })();
     * ```
     *
     * @returns {Promise<boolean>}
     */
    default(): Promise<boolean>;
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-start)
     *
     * Turn VoiceOver on.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // ... perform some commands.
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @param {object} [options] Additional options.
     */
    start(options?: CommandOptions): Promise<void>;
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-stop)
     *
     * Turn VoiceOver off.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // ... perform some commands.
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @param {object} [options] Additional options.
     */
    stop(options?: CommandOptionsWithoutCapture): Promise<void>;
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-previous)
     *
     * Move the VoiceOver cursor to the previous location.
     *
     * Equivalent of executing `VO-Left Arrow`.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Move to the previous item.
     *   await voiceOver.previous();
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @param {object} [options] Additional options.
     */
    previous(options?: CommandOptions): Promise<void>;
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-next)
     *
     * Move the VoiceOver cursor to the next location.
     *
     * Equivalent of executing `VO-Right Arrow`.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Move to the next item.
     *   await voiceOver.next();
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @param {object} [options] Additional options.
     */
    next(options?: CommandOptions): Promise<void>;
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-act)
     *
     * Perform the default action for the item in the VoiceOver cursor.
     *
     * Equivalent of executing `VO-Space bar`.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Move to the next item.
     *   await voiceOver.next();
     *
     *   // Perform the default action for the item.
     *   await voiceOver.act();
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @param {object} [options] Additional options.
     */
    act(options?: CommandOptions): Promise<void>;
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-interact)
     *
     * Interact with the item under the VoiceOver cursor.
     *
     * Equivalent of executing `VO-Shift-Down Arrow`.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Move to the next item.
     *   await voiceOver.next();
     *
     *   // Interact with the item.
     *   await voiceOver.interact();
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @param {object} [options] Additional options.
     */
    interact(options?: CommandOptions): Promise<void>;
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-stop-interacting)
     *
     * Stop interacting with the current item.
     *
     * Equivalent of executing `VO-Shift-Up Arrow`.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Interact with the item.
     *   await voiceOver.interact();
     *
     *   // ... perform some commands.
     *
     *   // Stop interacting with the item.
     *   await voiceOver.stopInteracting();
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @param {object} [options] Additional options.
     */
    stopInteracting(options?: CommandOptions): Promise<void>;
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-take-cursor-screenshot)
     *
     * Takes a screenshot of the item focussed in the VoiceOver cursor and returns the path to screenshot file.
     *
     * This command is specific to the VoiceOver screen reader.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Move to the next item.
     *   await voiceOver.next();
     *
     *   // Take a screenshot of the item focussed in the VoiceOver cursor.
     *   const screenshotFile = await voiceOver.takeCursorScreenshot();
     *   console.log(screenshotFile);
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @param {object} [options] Additional options.
     * @returns {Promise<string>} The path to the screenshot file.
     */
    takeCursorScreenshot(options?: CommandOptions): Promise<string>;
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-press)
     *
     * Press a key on the focused item.
     *
     * `key` can specify the intended [keyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
     * value or a single character to generate the text for. A superset of the `key` values can be found
     * [on the MDN key values page](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values). Examples of the keys are:
     *
     * `F1` - `F20`, `Digit0` - `Digit9`, `KeyA` - `KeyZ`, `Backquote`, `Minus`, `Equal`, `Backslash`, `Backspace`, `Tab`,
     * `Delete`, `Escape`, `ArrowDown`, `End`, `Enter`, `Home`, `Insert`, `PageDown`, `PageUp`, `ArrowRight`, `ArrowUp`, etc.
     *
     * See [MacOSKeyCodes](https://www.guidepup.dev/docs/api/class-macos-key-codes) for the full range of available keys.
     *
     * Following modification shortcuts are also supported: `Shift`, `Control`, `Alt`, `Meta`, `Command`.
     *
     * See [MacOSModifiers](https://www.guidepup.dev/docs/api/class-macos-modifiers) for the full range of available modifiers.
     *
     * Holding down `Shift` will type the text that corresponds to the `key` in the upper case.
     *
     * If `key` is a single character, it is case-sensitive, so the values `a` and `A` will generate different respective
     * texts.
     *
     * Shortcuts such as `key: "Control+f"` or `key: "Control+Shift+f"` are supported as well. When specified with the
     * modifier, modifier is pressed and being held while the subsequent key is being pressed.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Open a find text modal.
     *   await voiceOver.press("Command+f");
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @param {string} key Name of the key to press or a character to generate, such as `ArrowLeft` or `a`.
     * @param {object} [options] Additional options.
     */
    press(key: string, options?: KeyboardOptions): Promise<void>;
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-type)
     *
     * Type text into the focused item.
     *
     * To press a special key, like `Control` or `ArrowDown`, use `voiceOver.press(key[, options])`.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Type a username and key Enter.
     *   await voiceOver.type("my-username");
     *   await voiceOver.press("Enter");
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @param {string} text Text to type into the focused item.
     * @param {object} [options] Additional options.
     */
    type(text: string, options?: KeyboardOptions): Promise<void>;
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-perform)
     *
     * Perform a VoiceOver command.
     *
     * The command can be a [MacOSKeyCodeCommand](https://www.guidepup.dev/docs/api/class-macos-key-code-command), [MacOSKeystrokeCommand](https://www.guidepup.dev/docs/api/class-macos-keystroke-command), or [VoiceOverCommanderCommands](https://www.guidepup.dev/docs/api/class-voiceover-commander-commands).
     *
     * ```ts
     * import { voiceOver, VoiceOverCommanderCommands } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Type using a custom keystroke command.
     *   await voiceOver.perform({ characters: "my-username" });
     *
     *   // Keyboard commands available on the VoiceOver instance.
     *   await voiceOver.perform(
     *     voiceOver.keyboardCommands.performDefaultActionForItem
     *   );
     *
     *   // Commander commands available on the VoiceOver instance.
     *   await voiceOver.perform(voiceOver.commanderCommands.MOVE_DOWN);
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @param {any} command VoiceOver keyboard command or commander command to execute.
     * @param {object} [options] Additional options.
     */
    perform(command: KeyboardCommand | CommanderCommands, options?: CommandOptions): Promise<void>;
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-click)
     *
     * Click the mouse.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Left-click the mouse.
     *   await voiceOver.click();
     *
     *   // Left-click the mouse using specific options.
     *   await voiceOver.click({ button: "left", clickCount: 1 });
     *
     *   // Double-right-click the mouse.
     *   await voiceOver.click({ button: "right", clickCount: 2 });
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @param {object} [options] Click options.
     */
    click(options?: ClickOptions): Promise<void>;
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-copy-last-spoken-phrase)
     *
     * Copy the last spoken phrase to the Clipboard (also called the
     * "Pasteboard").
     *
     * This command is specific to the VoiceOver screen reader.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Move to the next item.
     *   await voiceOver.next();
     *
     *   // Copy the phrase spoken by VoiceOver from moving to the next item above to
     *   // the Clipboard.
     *   await voiceOver.copyLastSpokenPhrase();
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @param {object} [options] Additional options.
     */
    copyLastSpokenPhrase(options?: CommandOptions): Promise<void>;
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-save-last-spoken-phrase)
     *
     * Save the last spoken phrase and the crash log to a file on the desktop for
     * troubleshooting.
     *
     * This command is specific to the VoiceOver screen reader.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Move to the next item.
     *   await voiceOver.next();
     *
     *   // Save the phrase spoken by VoiceOver from moving to the next item above to
     *   // a file on the desktop.
     *   await voiceOver.saveLastSpokenPhrase();
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @param {object} [options] Additional options.
     */
    saveLastSpokenPhrase(options?: CommandOptions): Promise<void>;
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-last-spoken-phrase)
     *
     * Get the last spoken phrase.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Move to the next item.
     *   await voiceOver.next();
     *
     *   // Get the phrase spoken by VoiceOver from moving to the next item above.
     *   const lastSpokenPhrase = await voiceOver.lastSpokenPhrase();
     *   console.log(lastSpokenPhrase);
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @returns {Promise<string>} The last spoken phrase.
     */
    lastSpokenPhrase(): Promise<string>;
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-item-text)
     *
     * Get the text of the item in the VoiceOver cursor.
     *
     * For VoiceOver this is distinct from `lastSpokenPhrase`.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Move to the next item.
     *   await voiceOver.next();
     *
     *   // Get the text (if any) for the item currently in focus by the VoiceOver
     *   // cursor.
     *   const itemText = await voiceOver.itemText();
     *   console.log(itemText);
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @returns {Promise<string>} The item's text.
     */
    itemText(): Promise<string>;
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-spoken-phrase-log)
     *
     * Get the log of all spoken phrases for this VoiceOver instance.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Move through several items.
     *   for (let i = 0; i < 10; i++) {
     *     await voiceOver.next();
     *   }
     *
     *   // Get the phrase spoken by VoiceOver from moving through the items above.
     *   const spokenPhraseLog = await voiceOver.spokenPhraseLog();
     *   console.log(spokenPhraseLog);
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @returns {Promise<string[]>} The spoken phrase log.
     */
    spokenPhraseLog(): Promise<string[]>;
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-clear-spoken-phrase-log)
     *
     * Clear the log of all spoken phrases for this VoiceOver instance.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // ... perform some commands.
     *
     *   // Clear the spoken phrase log.
     *   await voiceOver.clearSpokenPhraseLog();
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     */
    clearSpokenPhraseLog(): Promise<void>;
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-item-text-log)
     *
     * Get the log of all visited item text for this VoiceOver instance.
     *
     * For VoiceOver this is distinct from `spokenPhraseLog`.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // Move through several items.
     *   for (let i = 0; i < 10; i++) {
     *     await voiceOver.next();
     *   }
     *
     *   // Get the text (if any) for all the items visited by the VoiceOver cursor.
     *   const itemTextLog = await voiceOver.itemTextLog();
     *   console.log(itemTextLog);
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     *
     * @returns {Promise<string[]>} The item text log.
     */
    itemTextLog(): Promise<string[]>;
    /**
     * [API Reference](https://www.guidepup.dev/docs/api/class-voiceover#voiceover-clear-item-text-log)
     *
     * Clear the log of all visited item text for this VoiceOver instance.
     *
     * For VoiceOver this is distinct from `spokenPhraseLog`.
     *
     * ```ts
     * import { voiceOver } from "@guidepup/guidepup";
     *
     * (async () => {
     *   // Start VoiceOver.
     *   await voiceOver.start();
     *
     *   // ... perform some commands.
     *
     *   // Clear the item text log.
     *   await voiceOver.clearItemTextLog();
     *
     *   // Stop VoiceOver.
     *   await voiceOver.stop();
     * })();
     * ```
     */
    clearItemTextLog(): Promise<void>;
}
export {};
