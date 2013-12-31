//Form JS File
function frmDirection_frmDirection_onhide_seq0(eventobject, neworientation) {
    frmDirection.destroy()
};

function addWidgetsfrmDirection() {
    var brwsrDirection = new kony.ui.Browser({
        "id": "brwsrDirection",
        "text": "Browser",
        "isVisible": true,
        "detectTelNumber": true
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