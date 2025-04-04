/**
 * This script helps fix dependency issues in the Aqua 360 app
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting dependency fixes for Aqua 360 app...');

// List of required dependencies
const requiredDependencies = [
  'expo@~48.0.15',
  'react-native@0.71.14',
  'metro@^0.76.0',
  'metro-core@^0.76.0',
  'react-native-gesture-handler@~2.9.0',
  'react-native-safe-area-context@4.5.0',
  'react-native-screens@~3.20.0',
  '@react-navigation/native@^6.1.6',
  '@react-navigation/stack@^6.3.16'
];

try {
  // Check for node_modules directory
  if (!fs.existsSync(path.join(__dirname, 'node_modules'))) {
    console.log('node_modules directory not found. Creating a fresh installation...');
    
    // Clean install dependencies
    execSync('npm cache clean --force', { stdio: 'inherit' });
    execSync('npm install', { stdio: 'inherit' });
  } else {
    console.log('Installing required dependencies...');
    
    // Install required dependencies one by one
    for (const dep of requiredDependencies) {
      try {
        console.log(`Installing ${dep}...`);
        execSync(`npx expo install ${dep}`, { stdio: 'inherit' });
      } catch (err) {
        console.error(`Error installing ${dep}:`, err.message);
      }
    }
  }

  console.log('\nAttempting to fix metro dependencies...');
  // Explicitly install metro dependencies
  execSync('npm install metro metro-core --save', { stdio: 'inherit' });
  
  console.log('\nDependency fixes completed! Try running your app with:');
  console.log('npx expo start --clear');
} catch (error) {
  console.error('Error fixing dependencies:', error.message);
  console.log('\nIf you continue to have issues, try running the following commands manually:');
  console.log('1. rm -rf node_modules');
  console.log('2. npm cache clean --force');
  console.log('3. npm install');
  console.log('4. npx expo install react-native@0.71.14 metro metro-core');
}
