//Form JS File
function viewSelector_radioView_onSelection_seq0(eventobject) {
    setViewMode.call(this, eventobject);
};

function addWidgetsviewSelector() {
    var radioView = new kony.ui.RadioButtonGroup({
        "id": "radioView",
        "isVisible": true,
        "masterData": [
            ["1", "Hybrid mode"],
            ["2", "Satellite mode"],
            ["3", "Earth mode"]
        ],
        "selectedKey": "3",
        "skin": "sknRadioKonyThemeNormal",
        "focusSkin": "sknRadioKonyThemeFocus",
        "onSelection": viewSelector_radioView_onSelection_seq0
    }, {
        "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "viewType": constants.RADIOGROUP_VIEW_TYPE_TABLEVIEW,
        "groupCells": false,
        "tickedImage": null,
        "untickedImage": null
    });
    viewSelector.add(
    radioView);
};

function viewSelectorGlobals() {
    viewSelector = new kony.ui.Popup({
        "id": "viewSelector",
        "title": null,
        "transparencyBehindThePopup": 60,
        "skin": "sknPopupKonyThemeNormal",
        "isModal": false,
        "addWidgets": addWidgetsviewSelector
    }, {
        "padding": [0, 0, 0, 0],
        "containerWeight": 60,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "bounces": false,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "fromRight",
            "transitionEffect": "transitionMoveIn"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        }
    });
};