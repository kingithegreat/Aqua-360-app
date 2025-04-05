const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Running diagnostics for Aqua 360 app...');

// Check package.json
const packageJsonPath = path.join(__dirname, 'package.json');
if (!fs.existsSync(packageJsonPath)) {
  console.error('Error: package.json not found!');
  process.exit(1);
}

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
console.log('✓ package.json found');

// Check app.json
const appJsonPath = path.join(__dirname, 'app.json');
if (!fs.existsSync(appJsonPath)) {
  console.error('Error: app.json not found!');
  process.exit(1);
}

console.log('✓ app.json found');

// Check babel.config.js
const babelConfigPath = path.join(__dirname, 'babel.config.js');
if (!fs.existsSync(babelConfigPath)) {
  console.error('Error: babel.config.js not found!');
  process.exit(1);
}

console.log('✓ babel.config.js found');

// Check key screens
const requiredScreens = [
  'HomeScreen.js',
  'BookingScreen.js',
  'AIAssistantScreen.js',
  'ReviewsScreen.js',
  'AboutUsScreen.js',
  'WaiverScreen.js',
  'SignUpScreen.js',
  'LoginScreen.js'
];

requiredScreens.forEach(screen => {
  const screenPath = path.join(__dirname, 'src', 'screens', screen);
  if (!fs.existsSync(screenPath)) {
    console.error(`Error: ${screen} not found!`);
  } else {
    console.log(`✓ ${screen} found`);
  }
});

// Check for node_modules
const nodeModulesPath = path.join(__dirname, 'node_modules');
if (!fs.existsSync(nodeModulesPath)) {
  console.log('✗ node_modules not found, dependencies need to be installed');
  console.log('  Run: npm install');
} else {
  console.log('✓ node_modules found');
}

console.log('\nDiagnostics completed.');
console.log('If all checks passed, try running: npm start');
console.log('If there are missing files, they need to be created.');
console.log('If node_modules is missing, run: npm install');
