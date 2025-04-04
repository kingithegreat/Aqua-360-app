@echo off
echo ===================================
echo Aqua 360 App - Dependency Fix Tool
echo ===================================
echo.

echo Step 1: Cleaning up node_modules...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
if exist yarn.lock del yarn.lock

echo.
echo Step 2: Installing dependencies...
call npm install

echo.
echo Step 3: Installing metro and metro-core...
call npm install metro@0.76.0 metro-core@0.76.0 --save

echo.
echo Step 4: Installing exact React Native version...
call npx expo install react-native@0.71.14

echo.
echo Step 5: Clearing Expo cache...
call npx expo start --clear

echo.
echo All fixes applied! Try running:
echo npm start
