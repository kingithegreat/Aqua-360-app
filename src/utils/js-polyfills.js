/**
 * This file provides manual polyfills to replace @react-native/js-polyfills
 */

// Main polyfills function
export function applyPolyfills() {
  // Add String.prototype.replaceAll polyfill if needed
  if (!String.prototype.replaceAll) {
    String.prototype.replaceAll = function(pattern, replacement) {
      return this.split(pattern).join(replacement);
    };
  }

  // Add Object.hasOwn polyfill if needed
  if (!Object.hasOwn) {
    Object.hasOwn = function(instance, prop) {
      return Object.prototype.hasOwnProperty.call(instance, prop);
    };
  }

  // Console log confirmation
  console.log('JS polyfills applied successfully');
}

// Export a list of polyfills - this can be used by Metro if it's looking for them
export const polyfills = [
  require.resolve('./js-polyfills.js'),
];

// Apply polyfills immediately when imported
applyPolyfills();
