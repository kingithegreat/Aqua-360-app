import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../styles/globalStyles';

// Default gradient with primary and secondary colors
export const DefaultGradient = ({ style, children }) => {
  return (
    <LinearGradient
      colors={[colors.primary, colors.secondary]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.gradient, style]}
    >
      {children}
    </LinearGradient>
  );
};

// Inverted gradient (secondary to primary)
export const InvertedGradient = ({ style, children }) => {
  return (
    <LinearGradient
      colors={[colors.secondary, colors.primary]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.gradient, style]}
    >
      {children}
    </LinearGradient>
  );
};

// Lighter variant for subtle gradients
export const LightGradient = ({ style, children }) => {
  // Lighter versions of the colors
  const lightPrimary = '#3a7d76'; // Lighter version of primary
  const lightSecondary = '#7ad5d7'; // Lighter version of secondary
  
  return (
    <LinearGradient
      colors={[lightPrimary, lightSecondary]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.gradient, style]}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});
