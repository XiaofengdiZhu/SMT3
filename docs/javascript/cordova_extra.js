let exitAppFlag = false;

function cordova_onload() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

window.onload = cordova_onload;

function onDeviceReady() {
    document.addEventListener("menubutton", onMenuButtonDown, false);
    document.addEventListener("searchbutton", onSearchButtonDown, false);
    document.addEventListener("backbutton", onBackButtonDown, false);
}

function onMenuButtonDown() {
    $mdOverlay.click();
}

function onSearchButtonDown() {
    $mdSearchOverlay.click();
}

function onBackButtonDown() {
    if ($mdOverlay.css("opacity") > 0) {
        $mdOverlay.click();
    }
    else if ($mdSearchOverlay.css("opacity") > 0) {
        $mdSearchOverlay.click();
    }
    else if (exitAppFlag) {
        navigator.app.exitApp();
    } else {
        exitAppFlag = true;
        window.plugins.toast.showShortBottom("再按一次退出");
        setTimeout(function () {
            exitAppFlag = false;
        }, 2000);
    }
}