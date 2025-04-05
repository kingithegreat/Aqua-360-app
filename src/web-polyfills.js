// This file provides necessary polyfills for web compatibility

// Add any web-specific polyfills here
if (typeof window !== 'undefined') {
  // Fix for potential issues with global context in web
  window.global = window;
  
  // Fix for react-native-reanimated in web
  if (!window.ReanimatedModule) {
    window.ReanimatedModule = {};
  }
}

export default {};
