//Form JS File
function frmAPIKey_chkSaveKey_onSelection_seq0(eventobject) {
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
    }, {});
    var txtAPIKey = new kony.ui.TextBox2({
        "id": "txtAPIKey",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": " Google API key...",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTbxKonyThemeNormal",
        "focusSkin": "sknTbxKonyThemeFocus",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
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
        "margin": [1, 1, 0, 1],
        "padding": [0, 0, 0, 0],
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "tickedImage": null,
        "untickedImage": null
    });
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
        "margin": [5, 10, 5, 0],
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
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmAPIKey.add(
    lblInstructions, txtAPIKey, chkSaveKey, btnProceed, lnkNoKey);
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
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "titleBarSkin": "sknTitleKonyTheme",
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};