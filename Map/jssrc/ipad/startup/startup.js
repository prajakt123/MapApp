//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "Map",
    appName: "Map App",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: null,
    serverPort: null,
    secureServerPort: null,
    isDebug: true,
    middlewareContext: "middleware",
    url: null,
    secureurl: null
};
sessionID = "";
glbCurLocation = {};

function appInit(params) {
    skinsInit();
    initializeftrOne();
    frmAPIKeyGlobals();
    frmDetailsGlobals();
    frmDirectionGlobals();
    frmHomeGlobals();
    frmMapGlobals();
    frmOptionsGlobals();
    viewSelectorGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("KonyTheme", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;