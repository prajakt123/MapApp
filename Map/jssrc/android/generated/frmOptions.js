//Form JS File
function frmOptions_openNowChkBox_onSelection_seq0(eventobject) {
    openNow.call(this);
};

function frmOptions_btnShowAtms_onClick_seq0(eventobject) {
    getAtms.call(this);
};

function addWidgetsfrmOptions() {
    var lblDistOptInstruction = new kony.ui.Label({
        "id": "lblDistOptInstruction",
        "isVisible": true,
        "text": "Show ATMs within",
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
    var txtDistance = new kony.ui.TextBox2({
        "id": "txtDistance",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": "5000",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTbxKonyThemeNormal",
        "focusSkin": "sknTbxKonyThemeFocus",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 37
    }, {
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var lblDistUnits = new kony.ui.Label({
        "id": "lblDistUnits",
        "isVisible": true,
        "text": "Meters",
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
        "containerWeight": 63
    }, {});
    var hbxDistance = new kony.ui.Box({
        "id": "hbxDistance",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxDistance.add(
    txtDistance, lblDistUnits);
    var openNowChkBox = new kony.ui.CheckBoxGroup({
        "id": "openNowChkBox",
        "isVisible": true,
        "masterData": [
            ["1", "Open Now"]
        ],
        "selectedKeys": [],
        "skin": "sknCbxKonyThemeNormal",
        "focusSkin": "sknCbxKonyThemeFocus",
        "onSelection": frmOptions_openNowChkBox_onSelection_seq0
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "tickedImage": null,
        "untickedImage": null
    });
    var btnShowAtms = new kony.ui.Button({
        "id": "btnShowAtms",
        "isVisible": true,
        "text": "Show Nearby Atms",
        "skin": "sknBtnKonyThemeNormal",
        "focusSkin": "sknBtnKonyThemeFocus",
        "onClick": frmOptions_btnShowAtms_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [5, 10, 5, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmOptions.add(
    lblDistOptInstruction, hbxDistance, openNowChkBox, btnShowAtms);
};

function frmOptionsGlobals() {
    var MenuId = [];
    frmOptions = new kony.ui.Form2({
        "id": "frmOptions",
        "title": "Map App",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "sknFrmKonyThemeNormal",
        "addWidgets": addWidgetsfrmOptions
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