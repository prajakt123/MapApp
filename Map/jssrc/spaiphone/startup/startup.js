//startup.js file
var appConfig = {
    appId: "Map",
    appName: "Map App",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: null,
    serverPort: null,
    secureServerPort: null,
    url: null,
    secureurl: null,
    middlewareContext: "middleware"
};
sessionID = "";
glbCurLocation = {};

function appInit(params) {
    skinsInit();
    initializeftrOne();
    initializemapCallOut();
    frmAPIKeyGlobals();
    frmDetailsGlobals();
    frmDirectionGlobals();
    frmHomeGlobals();
    frmMapGlobals();
    frmOptionsGlobals();
    viewSelectorGlobals();
    //to generate adherePercentageStrictly, retainSpace, marginPaddingConsistency flags as true if the project is created in 5.5
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
    kony.theme.packagedthemes(
    ["default", "KonyTheme"]);
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("KonyTheme", themeCallBack, themeCallBack);
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};
kony.print = function() {
    return;
};