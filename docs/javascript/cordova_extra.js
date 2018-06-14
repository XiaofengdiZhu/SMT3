let exitAppFlag = false;
let isBusy = false;
let isAppUpdateAvailable = false;
let isUpdateAvailable = false;
let isUpdateDownloaded = false;

let webVersion = "1970.01.01-08.00.00";
let appVersion = "0.0.0";

let $updateFooter = $(".footer-Update");
let $updateText = $(".footer-Update-innerText");
let $updateButton = $(".footer-Update-button");

function cordova_onload() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

window.onload = cordova_onload;

function onDeviceReady() {
    document.addEventListener("menubutton", onMenuButtonDown, false);
    document.addEventListener("searchbutton", onSearchButtonDown, false);
    document.addEventListener("backbutton", onBackButtonDown, false);
    $updateButton.on({
        "click": function (event) {
            if (isBusy) {
                event.preventDefault();
            }
            else if (isAppUpdateAvailable) {
                isBusy = true;
                window.open("https://www.pgyer.com/EXaZ", "_blank");
            }
            else if (isUpdateDownloaded) {
                isBusy = true;
                $updateButton.text("替换中");
                chcp.installUpdate(installationCallback);
            }
            else if (isUpdateAvailable) {
                isBusy = true;
                $updateButton.text("离线中");
                chcp.fetchUpdate(fetchUpdateCallback);
            }
        },
        "hover": function (event) {
            if (isBusy) {
                event.preventDefault();
            }
        }
    });

    //首页检测更新
    if (isHomepage) {
        chcp.getVersionInfo(getLocalVersion);
        chcp.isUpdateAvailableForInstallation(function (error, data) {
            if (error) {
                checkAppUpdateAvailable();
                checkUpdateAvailable();
                setTimeout(function () {
                    if (isAppUpdateAvailable) {
                        $updateText.text("检测到新版本App");
                        $updateButton.text("下载!");
                        $updateFooter.show();
                    }
                    else if (isUpdateAvailable) {
                        $updateText.text("检测到新版本导航");
                        $updateButton.text("离线!");
                        $updateFooter.show();
                    }
                }, 2000);
                return;
            }
            isUpdateDownloaded = true;
            $updateText.text("已下载新版本导航");
            $updateButton.text("替换!");
            $updateFooter.show();
            chcp.installUpdate(installationCallback);
        });
        if(isAndroidBrowser){
            $("#qrcodeForAndroid").hide();
        }
    }
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

function getLocalVersion(err, data) {
    webVersion = data.currentWebVersion;
    appVersion = data.appVersion;
}

function fetchUpdateCallback(error, data) {
    isBusy = false;
    if (error) {
        console.log('Failed to load the update with error code: ' + error.code);
        console.log(error.description);
        $updateText.text("离线新版本导航失败");
        $updateButton.text("重试!");
        return;
    }
    isUpdateDownloaded = true;
    $updateText.text("已离线新版本导航");
    $updateButton.text("安装!");
}

function installationCallback(error) {
    isBusy = false;
    if (error) {
        console.log('Failed to install the update with error code: ' + error.code);
        console.log(error.description);
        $updateText.text("替换新导航版本失败");
        $updateButton.text("重试!");
    } else {
        $updateText.text("已替换新导航版本");
        $updateButton.text("完成!");
    }
}

function checkUpdateAvailable() {
    $.getJSON("https://xiaofengdizhu.github.io/SMT3/chcp.json", function (data) {
        isUpdateAvailable = webVersion2Date(data.release) > webVersion2Date(webVersion);
    });
}

function checkAppUpdateAvailable() {
    $.ajax({
        url: "https://www.pgyer.com/apiv2/app/check",
        type: "post",
        data: {
            _api_key: "398cd0b3301dc547fb6fa44a2a9ca906",
            appKey: "e83e1c6af401203340f8f0267d754a81"
        },
        success: function (result) {
            isAppUpdateAvailable = appVersion !== result.data.buildVersion;
        }
    });
}

function webVersion2Date(str) {
    let array1 = str.split('-');
    let array2 = array1[0].split('.');
    let array3 = array1[1].split('.');
    return new Date(array2[0], array2[1], array2[2], array3[0], array3[1], array3[2], 0);
}