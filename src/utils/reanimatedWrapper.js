import { tagMessage } from '../../utils';
let Reanimated;

// Patch the reanimatedWrapper.js file to use our fallback

try {
  // First try to load the real Reanimated
  Reanimated = require('react-native-reanimated');
  
  // If that fails, try to load our fallback
  if (!Reanimated || !Reanimated.useSharedValue) {
    try {
      Reanimated = require('../../../../../src/utils/reanimatedFallback');
      console.warn('Using mock Reanimated implementation');
    } catch (fallbackError) {
      console.error('Failed to load Reanimated fallback:', fallbackError);
      
      // If even the fallback fails, use a minimal mock
      Reanimated = {
        useSharedValue: () => ({ value: 0 }),
        useAnimatedStyle: () => ({}),
        withTiming: (v) => v,
        VERSION: 2
      };
    }
  }
} catch (e) {
  // Same fallback approach if the initial require fails
  try {
    Reanimated = require('../../../../../src/utils/reanimatedFallback');
    console.warn('Using mock Reanimated implementation after error');
  } catch (fallbackError) {
    console.error('Failed to load Reanimated fallback after error:', fallbackError);
    
    // Minimal mock as last resort
    Reanimated = {
      useSharedValue: () => ({ value: 0 }),
      useAnimatedStyle: () => ({}),
      withTiming: (v) => v,
      VERSION: 2
    };
  }
}

if (!Reanimated.setGestureState) {
  Reanimated.setGestureState = () => {
    'worklet';

    console.warn(tagMessage('Please use newer version of react-native-reanimated in order to control state of the gestures.'));
  };
} // When 'react-native-reanimated' is not available we want to
// quietly continue
// eslint-disable-next-line no-empty

export { Reanimated };
