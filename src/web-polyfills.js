// This file provides necessary polyfills for web compatibility

// Add web-specific polyfills
if (typeof window !== 'undefined') {
  // Fix for global context in web
  window.global = window;
  
  // Fix for react-native-reanimated in web
  if (!window.ReanimatedModule) {
    window.ReanimatedModule = {};
  }
  
  // Fix for react-native-gesture-handler
  if (!window.reactNativeGestureHandlerIsAvailable) {
    window.reactNativeGestureHandlerIsAvailable = true;
  }
  
  // Polyfill for requestAnimationFrame
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(callback) {
      return setTimeout(callback, 0);
    };
  }
  
  // Polyfill for cancelAnimationFrame
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
  }
}

export default {};
