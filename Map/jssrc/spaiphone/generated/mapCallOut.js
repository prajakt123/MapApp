//Template File
function mapCallOut_button237135440529_onClick_seq0(eventobject) {
    frmMap.mapAtms.dismissCallout(frmMap.mapAtms.locationData);
};

function mapCallOut_btndirection_onClick_seq0(eventobject) {
    getDirection.call(this);
};

function initializemapCallOut() {
    var lblName = new kony.ui.Label({
        "id": "lblName",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 90
    }, {});
    var button237135440529 = new kony.ui.Button({
        "id": "button237135440529",
        "isVisible": true,
        "text": null,
        "skin": "btnCallout",
        "focusSkin": "sknBtnKonyThemeFocus",
        "onClick": mapCallOut_button237135440529_onClick_seq0
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
        "containerWeight": 10
    }, {});
    var hbox237135440531 = new kony.ui.Box({
        "id": "hbox237135440531",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 24,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox237135440531.add(
    lblName, button237135440529);
    var lblAddress = new kony.ui.Label({
        "id": "lblAddress",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 23
    }, {});
    var btndirection = new kony.ui.Button({
        "id": "btndirection",
        "isVisible": true,
        "text": "Get direction",
        "skin": "btnCalloutDirec",
        "focusSkin": "btnCalloutDirec",
        "onClick": mapCallOut_btndirection_onClick_seq0
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
    var vbox237135440530 = new kony.ui.Box({
        "id": "vbox237135440530",
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
    vbox237135440530.add(
    hbox237135440531, lblAddress, btndirection);
    hbxCallout = new kony.ui.Box({
        "id": "hbxCallout",
        "isVisible": true,
        "skin": "sknHbxCallout",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 49,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxCallout.add(
    vbox237135440530);
};