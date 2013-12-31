//Form JS File
function frmDirection_frmDirection_onhide_seq0(eventobject, neworientation) {
    frmDirection.destroy()
};

function addWidgetsfrmDirection() {
    var brwsrDirection = new kony.ui.Browser({
        "id": "brwsrDirection",
        "text": "Browser",
        "isVisible": true,
        "screenLevelWidget": false,
        "enableZoom": false,
        "detectTelNumber": true
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": true,
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