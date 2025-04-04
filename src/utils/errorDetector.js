/**
 * Diagnostics utility to help identify issues in the app
 */
import React from 'react';
import { Alert, Platform, View, Text, TouchableOpacity } from 'react-native';

// Store logs in memory when we can't write to console
const appLogs = [];

// Maximum number of logs to keep in memory
const MAX_LOGS = 100;

// Helper to format error objects
const formatError = (error) => {
  if (!error) return 'Unknown error';
  
  if (error instanceof Error) {
    return `${error.name}: ${error.message}\n${error.stack || ''}`;
  }
  
  return String(error);
};

// Timestamp helper
const timestamp = () => new Date().toISOString();

// Log levels
export const LogLevel = {
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
  FATAL: 'FATAL'
};

// Main logging function
export const logEvent = (level, message, error = null, data = null) => {
  const logEntry = {
    timestamp: timestamp(),
    level,
    message,
    error: error ? formatError(error) : null,
    data: data ? JSON.stringify(data) : null
  };
  
  // Keep logs in memory
  appLogs.unshift(logEntry);
  if (appLogs.length > MAX_LOGS) {
    appLogs.pop();
  }
  
  // Format console output
  const logString = `[${logEntry.timestamp}] ${level}: ${message}${error ? '\n' + formatError(error) : ''}`;
  
  // Log to console based on level
  switch (level) {
    case LogLevel.DEBUG:
      console.log(logString);
      break;
    case LogLevel.INFO:
      console.info(logString);
      break;
    case LogLevel.WARN:
      console.warn(logString);
      break;
    case LogLevel.ERROR:
    case LogLevel.FATAL:
      console.error(logString);
      break;
    default:
      console.log(logString);
  }
  
  // For fatal errors, show an alert in development
  if (level === LogLevel.FATAL && __DEV__) {
    Alert.alert(
      'Fatal Error',
      `${message}\n${error ? formatError(error) : ''}`,
      [{ text: 'OK' }]
    );
  }
  
  return logEntry;
};

// Convenience methods
export const debug = (message, data = null) => logEvent(LogLevel.DEBUG, message, null, data);
export const info = (message, data = null) => logEvent(LogLevel.INFO, message, null, data);
export const warn = (message, error = null, data = null) => logEvent(LogLevel.WARN, message, error, data);
export const error = (message, error = null, data = null) => logEvent(LogLevel.ERROR, message, error, data);
export const fatal = (message, error = null, data = null) => logEvent(LogLevel.FATAL, message, error, data);

// Get all logs (for debugging)
export const getLogs = () => [...appLogs];

// Run startup diagnostics
export const runStartupDiagnostics = async () => {
  try {
    info('Starting app diagnostics...');
    
    // Log platform info
    info(`Platform: ${Platform.OS} ${Platform.Version}`);
    
    // Check for common dependency issues
    const modules = {
      'React': React !== undefined,
      'ReactNative': require('react-native') !== undefined,
      'Expo': require('expo-status-bar') !== undefined,
      'ReactNavigation': require('@react-navigation/native') !== undefined,
      'SafeAreaContext': require('react-native-safe-area-context') !== undefined,
      'ReactNativeScreens': require('react-native-screens') !== undefined,
      'GestureHandler': require('react-native-gesture-handler') !== undefined
    };
    
    info('Module availability check', modules);
    
    // Check for specific issues based on errors we've seen
    try {
      const screens = require('react-native-screens');
      screens.enableScreens();
      info('react-native-screens enabled successfully');
    } catch (err) {
      warn('Failed to enable react-native-screens', err);
    }
    
    info('Startup diagnostics completed');
    return true;
  } catch (err) {
    error('Startup diagnostics failed', err);
    return false;
  }
};

// Error boundary component
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    fatal('Component error boundary caught error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
            Something went wrong
          </Text>
          <Text style={{ color: 'red', marginBottom: 20 }}>
            {this.state.error?.message || 'Unknown error'}
          </Text>
          <TouchableOpacity 
            style={{ padding: 10, backgroundColor: '#2196F3', borderRadius: 5 }}
            onPress={() => this.setState({ hasError: false, error: null })}
          >
            <Text style={{ color: 'white' }}>Try Again</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return this.props.children;
  }
}
