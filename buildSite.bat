@echo off
call mkdocs build
call grunt
call cordova-hcp build
pause