@echo off
echo Cleaning project...
rmdir /s /q node_modules
del package-lock.json
echo Project cleaned.
