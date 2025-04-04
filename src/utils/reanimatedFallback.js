// This file provides a minimal fallback for react-native-reanimated
// to prevent errors when it's not installed

// Create a mock Reanimated API with the necessary functions
const MockReanimated = {
  useSharedValue: (initialValue) => ({ value: initialValue }),
  useAnimatedStyle: (callback) => callback(),
  withTiming: (toValue, config, callback) => toValue,
  withSpring: (toValue, config, callback) => toValue,
  withDecay: () => ({}),
  runOnJS: (fn) => fn,
  Worklet: () => ({}),
  VERSION: 2
};

// Export the mock
module.exports = MockReanimated;
