/**
 * Command-line diagnostic tool to check for issues in the Aqua 360 app
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m'
};

console.log(`${colors.cyan}=============================================`);
console.log(`     Aqua 360 App Command-Line Diagnostics`);
console.log(`=============================================\n${colors.reset}`);

// Check package.json
try {
  console.log(`${colors.blue}Checking package.json...${colors.reset}`);
  const packageJsonPath = path.join(__dirname, 'package.json');
  
  if (!fs.existsSync(packageJsonPath)) {
    console.log(`${colors.red}✗ package.json not found!${colors.reset}`);
  } else {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    console.log(`${colors.green}✓ package.json exists and is valid${colors.reset}`);
    
    // Check dependencies
    console.log(`\n${colors.blue}Checking critical dependencies...${colors.reset}`);
    const criticalDeps = [
      'react-native', 'expo', 'metro', 'metro-core', 
      'react-native-gesture-handler', 'react-native-screens'
    ];
    
    criticalDeps.forEach(dep => {
      if (packageJson.dependencies[dep]) {
        console.log(`${colors.green}✓ ${dep}: ${packageJson.dependencies[dep]}${colors.reset}`);
      } else {
        console.log(`${colors.red}✗ ${dep}: MISSING${colors.reset}`);
      }
    });
    
    // Check react-native version
    const rnVersion = packageJson.dependencies['react-native'];
    if (rnVersion) {
      if (rnVersion.includes('0.71.7') || rnVersion.includes('0.71.8') || rnVersion.includes('0.71.14')) {
        console.log(`${colors.green}✓ React Native version is compatible with Expo 48${colors.reset}`);
      } else {
        console.log(`${colors.red}✗ React Native version ${rnVersion} may not be compatible with Expo 48${colors.reset}`);
      }
    }
  }
} catch (e) {
  console.log(`${colors.red}Error checking package.json: ${e.message}${colors.reset}`);
}

// Check node_modules
console.log(`\n${colors.blue}Checking node_modules...${colors.reset}`);
const modulesToCheck = [
  'react-native', 'expo', 'metro', 'metro-core', 
  'react-native-gesture-handler', 'react-native-screens',
  '@react-navigation/native', '@react-navigation/stack'
];

modulesToCheck.forEach(mod => {
  const modulePath = path.join(__dirname, 'node_modules', mod);
  if (fs.existsSync(modulePath)) {
    try {
      const modulePackageJson = require(path.join(modulePath, 'package.json'));
      console.log(`${colors.green}✓ ${mod} (${modulePackageJson.version})${colors.reset}`);
    } catch (e) {
      console.log(`${colors.yellow}⚠ ${mod} exists but couldn't read version${colors.reset}`);
    }
  } else {
    console.log(`${colors.red}✗ ${mod} is missing${colors.reset}`);
  }
});

// Check metro.config.js
console.log(`\n${colors.blue}Checking metro.config.js...${colors.reset}`);
const metroConfigPath = path.join(__dirname, 'metro.config.js');
if (!fs.existsSync(metroConfigPath)) {
  console.log(`${colors.yellow}⚠ metro.config.js not found - using Expo defaults${colors.reset}`);
} else {
  console.log(`${colors.green}✓ metro.config.js exists${colors.reset}`);
  
  // Check content for problematic imports
  const metroConfig = fs.readFileSync(metroConfigPath, 'utf8');
  if (metroConfig.includes('@react-native/js-polyfills')) {
    console.log(`${colors.red}✗ metro.config.js contains problematic @react-native/js-polyfills import${colors.reset}`);
  } else {
    console.log(`${colors.green}✓ metro.config.js doesn't have problematic imports${colors.reset}`);
  }
}

// Print suggested fixes
console.log(`\n${colors.cyan}=============================================`);
console.log(`                 Suggested Fixes`);
console.log(`=============================================\n${colors.reset}`);

console.log(`${colors.yellow}If you're still having issues, try these commands:${colors.reset}`);
console.log(`
1. ${colors.cyan}npm install metro@0.73.7 metro-core@0.73.7 --save${colors.reset}
2. ${colors.cyan}npm install react-native@0.71.7 --save-exact${colors.reset}
3. ${colors.cyan}npm uninstall react-native react-native-web expo metro metro-core${colors.reset}
4. ${colors.cyan}npm install${colors.reset}
5. ${colors.cyan}expo install react-native@0.71.7 expo~48.0.15${colors.reset}
6. ${colors.cyan}npm start -- --clear${colors.reset}
`);

// Try to run the app with verbose logging
console.log(`${colors.cyan}=============================================`);
console.log(`             Attempting to start app`);
console.log(`=============================================\n${colors.reset}`);

try {
  console.log(`Starting Expo with verbose logging...`);
  execSync('npx expo start --clear', { stdio: 'inherit' });
} catch (error) {
  console.log(`\n${colors.red}Failed to start Expo: ${error.message}${colors.reset}`);
}
