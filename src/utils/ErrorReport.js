import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { colors } from '../styles/globalStyles';
import { getLogs } from './diagnostics';

/**
 * Component to display error information when something goes wrong
 */
export const ErrorReport = ({ error, resetError, componentStack }) => {
  const [showDetails, setShowDetails] = useState(false);
  const logs = getLogs().slice(0, 20); // Get the 20 most recent logs

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Something went wrong</Text>
        
        <View style={styles.errorBox}>
          <Text style={styles.errorMessage}>{error?.message || "Unknown error"}</Text>
        </View>
        
        <TouchableOpacity 
          style={styles.detailsToggle}
          onPress={() => setShowDetails(!showDetails)}
        >
          <Text style={styles.detailsToggleText}>
            {showDetails ? "Hide Details" : "Show Details"}
          </Text>
        </TouchableOpacity>
        
        {showDetails && (
          <ScrollView style={styles.detailsContainer}>
            {componentStack && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Component Stack</Text>
                <Text style={styles.stackText}>{componentStack}</Text>
              </View>
            )}
            
            {error?.stack && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Error Stack</Text>
                <Text style={styles.stackText}>{error.stack}</Text>
              </View>
            )}
            
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Recent Logs</Text>
              {logs.map((log, index) => (
                <View key={index} style={styles.logEntry}>
                  <Text style={[
                    styles.logLevel, 
                    log.level === 'ERROR' || log.level === 'FATAL' 
                      ? styles.errorLevel 
                      : log.level === 'WARN' 
                        ? styles.warnLevel 
                        : styles.infoLevel
                  ]}>
                    {log.level}
                  </Text>
                  <Text style={styles.logMessage}>{log.message}</Text>
                  {log.error && <Text style={styles.logError}>{log.error}</Text>}
                </View>
              ))}
            </View>
          </ScrollView>
        )}
        
        <TouchableOpacity 
          style={styles.button}
          onPress={resetError}
        >
          <Text style={styles.buttonText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    padding: 20,
  },
  content: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 20,
  },
  errorBox: {
    backgroundColor: '#ffeeee',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    marginBottom: 20,
  },
  errorMessage: {
    color: '#cc0000',
    fontSize: 16,
  },
  detailsToggle: {
    marginBottom: 15,
  },
  detailsToggleText: {
    color: colors.primary,
    textDecorationLine: 'underline',
  },
  detailsContainer: {
    maxHeight: 300,
    width: '100%',
    marginBottom: 20,
  },
  section: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: colors.primary,
  },
  stackText: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: '#666',
  },
  logEntry: {
    marginBottom: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#ddd',
    paddingLeft: 8,
  },
  logLevel: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
  errorLevel: {
    color: '#cc0000',
  },
  warnLevel: {
    color: '#cc7700',
  },
  infoLevel: {
    color: '#0077cc',
  },
  logMessage: {
    fontSize: 14,
    marginBottom: 2,
  },
  logError: {
    color: '#cc0000',
    fontSize: 12,
    fontFamily: 'monospace',
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
