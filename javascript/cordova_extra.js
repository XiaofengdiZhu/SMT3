let exitAppFlag = false;

function cordova_onload() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

window.onload = cordova_onload;

function onDeviceReady() {
    document.addEventListener("menubutton", onMenuButtonDown, false);
    document.addEventListener("searchbutton", onSearchButtonDown, false);
    document.addEventListener("backbutton", onBackButtonDown, false);
    $("body").append("<div>设备就绪 " + window.location.href + "</div>");
}

function onMenuButtonDown() {
    $("body").append("<div>菜单键</div>");
    $mdOverlay.click();
}

function onSearchButtonDown() {
    $("body").append("<div>搜索键</div>");
    $mdSearchOverlay.click();
}

function onBackButtonDown() {
    $("body").append("<div>返回键</div>");
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