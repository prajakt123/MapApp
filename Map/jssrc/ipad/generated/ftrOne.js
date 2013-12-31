//Template File
function initializeftrOne() {
    hbox144342718529137 = new kony.ui.Box({
        "id": "hbox144342718529137",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 31,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});

    function addWidgetshbox144342718529137() {
        var image2237135440580 = new kony.ui.Image2({
            "id": "image2237135440580",
            "isVisible": true,
            "src": "poweredby_google_img.png",
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
            "containerWeight": 100
        }, {
            "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
        });
        hbox144342718529137.add(
        image2237135440580);
    }
    addWidgetshbox144342718529137();
};