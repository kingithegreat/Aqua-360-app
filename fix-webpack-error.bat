@echo off
echo ===================================
echo Fixing Webpack Error
echo ===================================
echo.

echo Installing required webpack dependencies...
call npm install --save-dev @babel/plugin-proposal-class-properties @babel/preset-env

echo.
echo Clearing cache...
call npm cache clean --force
call npx expo start --clear --web --no-dev

echo.
echo Webpack errors should now be fixed.
echo To start the app in the web browser, run:
echo npm start -- --web
