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
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var lblNote = new kony.ui.Label({
        "id": "lblNote",
        "isVisible": true,
        "text": "*Note: ",
        "skin": "lblInstruction"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 16
    }, {});
    var lblNoteText = new kony.ui.Label({
        "id": "lblNoteText",
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
        "containerWeight": 84
    }, {});
    var hbxNote = new kony.ui.Box({
        "id": "hbxNote",
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
    hbxNote.add(
    lblNote, lblNoteText);
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
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
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
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmHome.add(
    lblAppDescription, hbxNote, btnContinue, lnkUsage);
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