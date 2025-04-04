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

// Check dependencies
const dependencies = [
  'react-native',
  'expo',
  'metro',
  'react-native-gesture-handler',
  'react-native-screens'
];

dependencies.forEach(dep => {
  try {
    require.resolve(dep);
    console.log(`✓ ${dep} is installed`);
  } catch {
    console.error(`✗ ${dep} is missing`);
  }
});

// Check Metro configuration
const metroConfigPath = path.join(__dirname, 'metro.config.js');
if (!fs.existsSync(metroConfigPath)) {
  console.error('Error: metro.config.js not found!');
} else {
  console.log('✓ metro.config.js found');
}

console.log('Diagnostics completed.');
