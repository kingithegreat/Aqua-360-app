@echo off
echo ===================================
echo Aqua 360 App - Complete Fix Tool
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
echo Step 3: Installing specific metro versions...
call npm install metro@0.76.0 metro-core@0.76.0 metro-config@0.76.0 metro-react-native-babel-transformer@0.76.0 --save

echo.
echo Step 4: Installing exact React Native version...
call npm install react-native@0.71.7 --save-exact

echo.
echo Step 5: Clearing Expo cache...
call npx expo start --clear --no-dev

echo.
echo All fixes applied! Try running:
echo npm start
