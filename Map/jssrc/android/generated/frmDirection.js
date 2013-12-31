//Form JS File
function frmDirection_frmDirection_onhide_seq0(eventobject, neworientation) {
    frmDirection.destroy()
};

function addWidgetsfrmDirection() {
    var brwsrDirection = new kony.ui.Browser({
        "id": "brwsrDirection",
        "text": "Browser",
        "isVisible": true,
        "detectTelNumber": true,
        "screenLevelWidget": false,
        "enableZoom": false
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    frmDirection.add(
    brwsrDirection);
};

function frmDirectionGlobals() {
    var MenuId = [];
    frmDirection = new kony.ui.Form2({
        "id": "frmDirection",
        "title": "Map App",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "sknFrmKonyThemeNormal",
        "onHide": frmDirection_frmDirection_onhide_seq0,
        "addWidgets": addWidgetsfrmDirection
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
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