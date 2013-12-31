//Form JS File
function frmAPIKey_chkSaveKey_onSelection_seq0(eventobject) {
    saveKey.call(this);
};

function frmAPIKey_switch1589254130527_onSlide_seq0(eventobject) {
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
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
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
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "autoCorrect": false,
        "autoComplete": false
    });
    var chkSaveKey = new kony.ui.CheckBoxGroup({
        "id": "chkSaveKey",
        "isVisible": true,
        "masterData": [
            ["1", "Save my key"]
        ],
        "selectedKeys": [],
        "skin": "sknCbxKonyThemeNormal",
        "focusSkin": "sknCbxKonyThemeFocus",
        "onSelection": frmAPIKey_chkSaveKey_onSelection_seq0
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {});
    var lblApiKey = new kony.ui.Label({
        "id": "lblApiKey",
        "isVisible": true,
        "text": "Save my key",
        "skin": "sknLblKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 80
    }, {});
    var switch1589254130527 = new kony.ui.Switch({
        "id": "switch1589254130527",
        "isVisible": true,
        "leftSideText": null,
        "rightSideText": null,
        "onSlide": frmAPIKey_switch1589254130527_onSlide_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 20
    }, {});
    var hbxApiKey = new kony.ui.Box({
        "id": "hbxApiKey",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxApiKey.add(
    lblApiKey, switch1589254130527);
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
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
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
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmAPIKey.add(
    lblInstructions, txtAPIKey, chkSaveKey, hbxApiKey, btnProceed, lnkNoKey);
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
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "outTransitionConfig": {
            "formTransition": "None"
        }
    });
};