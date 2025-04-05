@echo off
echo ===================================
echo Fixing Web Support
echo ===================================
echo.

echo Installing web-specific dependencies...
call npm install react-dom@18.2.0 react-native-web@~0.18.10 --save

echo.
echo Clearing Expo cache...
call npx expo start --clear --web

echo.
echo Web support should now be properly configured.
echo To start the app in the web browser, run:
echo npm start -- --web
