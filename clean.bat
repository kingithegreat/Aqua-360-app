@echo off
echo ===================================
echo Aqua 360 App - Clean Project Tool
echo ===================================
echo.

echo Step 1: Cleaning up node_modules...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
if exist yarn.lock del yarn.lock

echo.
echo Step 2: Clearing cache...
call npm cache clean --force

echo.
echo Step 3: Reinstalling dependencies...
call npm install

echo.
echo Step 4: Specifically installing react-native-reanimated...
call npx expo install react-native-reanimated

echo.
echo Step 5: Clearing Expo cache...
call npx expo start --clear --no-dev --minify

echo.
echo Cleanup complete! Your project should be ready.
echo To start the app, run:
echo npm start
