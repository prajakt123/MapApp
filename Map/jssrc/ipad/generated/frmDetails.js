//Form JS File
function frmDetails_btnGetDirections_onClick_seq0(eventobject) {
    getDirection.call(this);
};

function addWidgetsfrmDetails() {
    var lblAtmName = new kony.ui.Label({
        "id": "lblAtmName",
        "isVisible": true,
        "text": null,
        "skin": "sknLblKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 45
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblAtmAddress = new kony.ui.Label({
        "id": "lblAtmAddress",
        "isVisible": true,
        "text": null,
        "skin": "sknLblKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 55
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var vbox237135440529 = new kony.ui.Box({
        "id": "vbox237135440529",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 87,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox237135440529.add(
    lblAtmName, lblAtmAddress);
    var image2237135440532 = new kony.ui.Image2({
        "id": "image2237135440532",
        "isVisible": true,
        "src": "green_dot.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 13
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var hbxAtmDetails = new kony.ui.Box({
        "id": "hbxAtmDetails",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 19,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxAtmDetails.add(
    vbox237135440529, image2237135440532);
    var btnGetDirections = new kony.ui.Button({
        "id": "btnGetDirections",
        "isVisible": true,
        "text": "Get directions",
        "skin": "sknBtnKonyThemeNormal",
        "focusSkin": "sknBtnKonyThemeFocus",
        "onClick": frmDetails_btnGetDirections_onClick_seq0
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
        "containerWeight": 6
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    frmDetails.add(
    hbxAtmDetails, btnGetDirections);
};

function frmDetailsGlobals() {
    var MenuId = [];
    frmDetails = new kony.ui.Form2({
        "id": "frmDetails",
        "title": "Map App",
        "needAppMenu": true,
        "footers": [hbox144342718529137],
        "enabledForIdleTimeout": false,
        "skin": "sknFrmKonyThemeNormal",
        "addWidgets": addWidgetsfrmDetails
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