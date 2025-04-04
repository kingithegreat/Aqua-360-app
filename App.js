import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, ActivityIndicator, Alert } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import { colors } from './src/styles/globalStyles';

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function initializeApp() {
      try {
        setIsReady(true);
      } catch (err) {
        console.error('Error during app initialization:', err);
        setError(err.message);
        Alert.alert(
          "Initialization Error",
          err.message,
          [{ text: "OK" }]
        );
      }
    }

    initializeApp();
  }, []);

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.primary }}>
        <Text style={{ color: colors.white, marginBottom: 10 }}>Error: {error}</Text>
        <Text style={{ color: colors.white }}>Please check the logs for more details.</Text>
      </View>
    );
  }

  if (!isReady) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.primary }}>
        <ActivityIndicator size="large" color={colors.white} />
        <Text style={{ color: colors.white, marginTop: 10 }}>Loading Aqua 360...</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" backgroundColor={colors.primary} />
      <AppNavigator />
    </SafeAreaProvider>
  );
}
