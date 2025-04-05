import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/globalStyles';

const BookingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Book Your Visit</Text>
      <Text style={styles.text}>Booking functionality will be available soon.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: colors.primary,
    textAlign: 'center',
  },
});

export default BookingScreen;
