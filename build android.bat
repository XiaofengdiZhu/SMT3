@echo off
call cordova-hcp build
call cordova build android
echo 热更新和安卓构建完成
pause