//Form JS File
function frmMap_btnMenu_onClick_seq0(eventobject) {
    viewSelector.show();
};

function frmMap_sliderZoom_onSlide_seq0(eventobject, selectedvalue) {
    sliderCallBack.call(this, eventobject);
};

function frmMap_mapAtms_onPinClick_seq0(eventobject, location) {
    onPinClickCallBack.call(this, location);
};

function addWidgetsfrmMap() {
    var lblTitle = new kony.ui.Label({
        "id": "lblTitle",
        "isVisible": true,
        "text": "Map App",
        "skin": "lblTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 72
    }, {});
    var btnMenu = new kony.ui.Button({
        "id": "btnMenu",
        "isVisible": true,
        "text": null,
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmMap_btnMenu_onClick_seq0
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
        "containerWeight": 13
    }, {});
    var hboxtitle = new kony.ui.Box({
        "id": "hboxtitle",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_HEADER,
        "skin": "sknHboxKonyThemeTitle",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 6,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxtitle.add(
    lblTitle, btnMenu);
    var lblMapInstruct = new kony.ui.Label({
        "id": "lblMapInstruct",
        "isVisible": true,
        "text": "Click on any pin to get location details",
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
        "containerWeight": 48
    }, {});
    var sliderZoom = new kony.ui.Slider({
        "id": "sliderZoom",
        "isVisible": true,
        "min": 0,
        "max": 28,
        "step": 1,
        "selectedValue": null,
        "thumbImage": null,
        "focusThumbImage": null,
        "onSlide": frmMap_sliderZoom_onSlide_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 24,
        "vExpand": false,
        "hExpand": true
    }, {
        "thickness": null,
        "minLabel": null,
        "maxLabel": null
    });
    var vbxZoom = new kony.ui.Box({
        "id": "vbxZoom",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxZoom.add(
    lblMapInstruct, sliderZoom);
    var hbxZoom = new kony.ui.Box({
        "id": "hbxZoom",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_HEADER,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxZoom.add(
    vbxZoom);
    var mapAtms = new kony.ui.Map({
        "id": "mapAtms",
        "isVisible": true,
        "calloutTemplate": hbxCallout,
        "widgetDataMapForCallout": {
            "button237135440529": "button237135440529",
            "btndirection": "btndirection",
            "lblAddress": "lblAddress",
            "lblName": "lblName"
        },
        "mapKey": null,
        "provider": constants.MAP_PROVIDER_GOOGLE,
        "defaultPinImage": "pin.png",
        "screenLevelWidget": true,
        "calloutWidth": 80,
        "onPinClick": frmMap_mapAtms_onPinClick_seq0
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 84
    }, {
        "mode": constants.MAP_VIEW_MODE_NORMAL,
        "mapSource": constants.MAP_SOURCE_NON_NATIVE
    });
    frmMap.add(
    hboxtitle, hbxZoom, mapAtms);
};

function frmMapGlobals() {
    var MenuId = [];
    frmMap = new kony.ui.Form2({
        "id": "frmMap",
        "title": "Map App",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "sknFrmKonyThemeNormal",
        "addWidgets": addWidgetsfrmMap
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