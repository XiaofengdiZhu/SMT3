let exitAppFlag = false;
let isBusy = false;
let isUpdateAvailable = false;
let isUpdateDownloaded = false;

let webVersion = "1970.01.01-08.00.00";

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
            else if (isUpdateDownloaded) {
                isBusy = true;
                $updateButton.text("安装中");
                chcp.installUpdate(installationCallback);
            }
            else if (isUpdateAvailable) {
                isBusy = true;
                $updateButton.text("下载中");
                chcp.fetchUpdate(fetchUpdateCallback);
            }
        },
        "hover": function (event) {
            if (isBusy) {
                event.preventDefault();
            }
        }
    });

    //获取当前应用和网页版本
    chcp.getVersionInfo(getLocalVersion);

    //启动时是否已下载更新
    chcp.isUpdateAvailableForInstallation(function (error, data) {
        if (error) {
            console.log(error.description);
            checkUpdateAvailable();
            setTimeout(function () {
                if(isUpdateAvailable){
                    $updateFooter.show();
                }
            },2000);
            return;
        }
        isUpdateDownloaded = true;
        $updateText.text("已下载新的版本");
        $updateButton.text("安装!");
        $updateFooter.show();
        chcp.installUpdate(installationCallback);
    });
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
}

function fetchUpdateCallback(error, data) {
    isBusy = false;
    if (error) {
        console.log('Failed to load the update with error code: ' + error.code);
        console.log(error.description);
        $updateText.text("下载更新失败");
        $updateButton.text("重试!");
        return;
    }
    isUpdateDownloaded = true;
    $updateText.text("已下载新的版本");
    $updateButton.text("安装!");
}

function installationCallback(error) {
    isBusy = false;
    if (error) {
        console.log('Failed to install the update with error code: ' + error.code);
        console.log(error.description);
        $updateText.text("安装更新失败");
        $updateButton.text("重试!");
    } else {
        $updateText.text("已安装新的版本");
        $updateButton.text("完成!");
    }
}

function checkUpdateAvailable() {
    $.getJSON("https://xiaofengdizhu.github.io/SMT3/chcp.json", function (data) {
        isUpdateAvailable =  webVersion2Date(data.release) > webVersion2Date(webVersion);
    });
}

//2018.06.02-23.07.00
function webVersion2Date(str){
    let array1 = str.split('-');
    let array2 = array1[0].split('.');
    let array3 = array1[1].split('.');
    return new Date(array2[0],array2[1],array2[2],array3[0],array3[1],array3[2],0);
}