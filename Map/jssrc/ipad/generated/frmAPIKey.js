//Form JS File
function frmAPIKey_saveSwitch_onSlide_seq0(eventobject) {
    saveKey.call(this);
};

function frmAPIKey_btnProceed_onClick_seq0(eventobject) {
    checkKey.call(this);
};

function frmAPIKey_lnkNoKey_onClick_seq0(eventobject) {
    onLinkClick.call(this);
};

function addWidgetsfrmAPIKey() {
    var lblInstructions = new kony.ui.Label({
        "id": "lblInstructions",
        "isVisible": true,
        "text": "Please enter your api key here to proceed with the app.",
        "skin": "sknLblKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtAPIKey = new kony.ui.TextBox2({
        "id": "txtAPIKey",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": " Google API key...",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTbxKonyThemeNormal",
        "focusSkin": "sknTbxKonyThemeFocus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 20, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_NO_PASTE_BOARD,
        "showClearButton": true,
        "showProgressIndicator": true,
        "leftViewImage": null,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "closeButtonText": "Done",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var lblFrmApi = new kony.ui.Label({
        "id": "lblFrmApi",
        "isVisible": true,
        "text": "Save my key",
        "skin": "sknLblKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 25
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var saveSwitch = new kony.ui.Switch({
        "id": "saveSwitch",
        "isVisible": true,
        "leftSideText": null,
        "rightSideText": null,
        "onSlide": frmAPIKey_saveSwitch_onSlide_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 20, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 75
    }, {});
    var hbxFrmApi = new kony.ui.Box({
        "id": "hbxFrmApi",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxFrmApi.add(
    lblFrmApi, saveSwitch);
    var btnProceed = new kony.ui.Button({
        "id": "btnProceed",
        "isVisible": true,
        "text": "Continue to the app",
        "skin": "sknBtnKonyThemeNormal",
        "focusSkin": "sknBtnKonyThemeFocus",
        "onClick": frmAPIKey_btnProceed_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [20, 25, 20, 1],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var lnkNoKey = new kony.ui.Link({
        "id": "lnkNoKey",
        "isVisible": true,
        "text": "Do not have an API Key?",
        "skin": "sknLnkKonyThemeNormal",
        "focusSkin": "sknLnkKonyThemeFocus",
        "onClick": frmAPIKey_lnkNoKey_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    frmAPIKey.add(
    lblInstructions, txtAPIKey, hbxFrmApi, btnProceed, lnkNoKey);
};

function frmAPIKeyGlobals() {
    var MenuId = [];
    frmAPIKey = new kony.ui.Form2({
        "id": "frmAPIKey",
        "title": "Map App",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "sknFrmKonyThemeNormal",
        "addWidgets": addWidgetsfrmAPIKey
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "bounces": true,
        "titleBar": true,
        "titleBarSkin": "sknTitleKonyTheme",
        "titleBarConfig": {
            "renderTitleText": true,
            "titleBarLeftSideView": "button",
            "imageLeftSideView": "back_ico.png"
        },
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "deprecated": {
            "titleBarBackGroundImage": "blue_pixel.png"
        }
    });
};