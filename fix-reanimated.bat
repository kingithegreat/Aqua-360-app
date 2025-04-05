@echo off
echo ===================================
echo Fixing React Native Reanimated
echo ===================================
echo.

echo Installing react-native-reanimated...
call npx expo install react-native-reanimated

echo.
echo Clearing Expo cache...
call npx expo start --clear

echo.
echo React Native Reanimated should now be properly installed.
echo To start the app, run:
echo npm start
