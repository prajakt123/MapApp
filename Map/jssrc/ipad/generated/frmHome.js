//Form JS File
function frmHome_btnContinue_onClick_seq0(eventobject) {
    checkStorage.call(this, "mapKey");
};

function addWidgetsfrmHome() {
    var lblAppDescription = new kony.ui.Label({
        "id": "lblAppDescription",
        "isVisible": true,
        "text": "This app shows the nearby ATM locators showcasing the features of Kony map widget.",
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
    var label144342718529134 = new kony.ui.Label({
        "id": "label144342718529134",
        "isVisible": true,
        "text": "*Note:",
        "skin": "lblInstruction"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var label144342718529135 = new kony.ui.Label({
        "id": "label144342718529135",
        "isVisible": true,
        "text": "Google Places API key required to access the app",
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
        "containerWeight": 91
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox144342718529133 = new kony.ui.Box({
        "id": "hbox144342718529133",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox144342718529133.add(
    label144342718529134, label144342718529135);
    var btnContinue = new kony.ui.Button({
        "id": "btnContinue",
        "isVisible": true,
        "text": "Continue",
        "skin": "sknBtnKonyThemeNormal",
        "focusSkin": "sknBtnKonyThemeFocus",
        "onClick": frmHome_btnContinue_onClick_seq0
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
    var lnkUsage = new kony.ui.Link({
        "id": "lnkUsage",
        "isVisible": true,
        "text": "Terms of use",
        "skin": "sknLnkKonyThemeNormal",
        "focusSkin": "sknLnkKonyThemeFocus"
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
    frmHome.add(
    lblAppDescription, hbox144342718529133, btnContinue, lnkUsage);
};

function frmHomeGlobals() {
    var MenuId = [];
    frmHome = new kony.ui.Form2({
        "id": "frmHome",
        "title": "Map App",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "sknFrmKonyThemeNormal",
        "addWidgets": addWidgetsfrmHome
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
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
            "renderTitleText": true
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