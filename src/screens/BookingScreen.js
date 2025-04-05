import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import { colors } from '../styles/globalStyles';

const BookingScreen = ({ navigation }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [activity, setActivity] = useState('');
  const [participants, setParticipants] = useState('');
  
  const handleBooking = () => {
    if (!date || !time || !activity || !participants) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    
    Alert.alert(
      'Booking Confirmation',
      `Thank you for booking with Aqua 360!\n\nDate: ${date}\nTime: ${time}\nActivity: ${activity}\nParticipants: ${participants}`,
      [
        { text: 'OK', onPress: () => navigation.navigate('Home') }
      ]
    );
  };
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Book Your Jet Ski Experience</Text>
        <Text style={styles.subheader}>Choose from our exciting options</Text>
      </View>
      
      <View style={styles.formContainer}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Date</Text>
          <TextInput
            style={styles.input}
            placeholder="Select a date (DD/MM/YYYY)"
            value={date}
            onChangeText={setDate}
            placeholderTextColor="#88A9A8"
          />
        </View>
        
        <View style={styles.formGroup}>
          <Text style={styles.label}>Time</Text>
          <TextInput
            style={styles.input}
            placeholder="Select a time"
            value={time}
            onChangeText={setTime}
            placeholderTextColor="#88A9A8"
          />
        </View>
        
        <View style={styles.formGroup}>
          <Text style={styles.label}>Activity</Text>
          <View style={styles.activityButtons}>
            <TouchableOpacity 
              style={[styles.activityButton, activity === 'Jet Ski Hire' && styles.selectedActivity]}
              onPress={() => setActivity('Jet Ski Hire')}
            >
              <Text style={styles.activityButtonText}>Jet Ski Hire</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.activityButton, activity === 'Guided Tour' && styles.selectedActivity]}
              onPress={() => setActivity('Guided Tour')}
            >
              <Text style={styles.activityButtonText}>Guided Tour</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.activityButton, activity === 'Fishing Adventure' && styles.selectedActivity]}
              onPress={() => setActivity('Fishing Adventure')}
            >
              <Text style={styles.activityButtonText}>Fishing Adventure</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.activityButton, activity === 'Biscuit Ride' && styles.selectedActivity]}
              onPress={() => setActivity('Biscuit Ride')}
            >
              <Text style={styles.activityButtonText}>Biscuit Ride</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.formGroup}>
          <Text style={styles.label}>Number of Participants</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter number of participants"
            value={participants}
            onChangeText={setParticipants}
            keyboardType="numeric"
            placeholderTextColor="#88A9A8"
          />
        </View>
        
        <TouchableOpacity style={styles.bookingButton} onPress={handleBooking}>
          <Text style={styles.bookingButtonText}>BOOK NOW</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  headerContainer: {
    alignItems: 'center',
    marginVertical: 30,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 10,
    textAlign: 'center',
  },
  subheader: {
    fontSize: 18,
    color: colors.primary,
    textAlign: 'center',
    opacity: 0.8,
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 30,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 17,
    color: colors.primary,
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(33, 96, 90, 0.2)',
    padding: 15,
    fontSize: 16,
    color: colors.primary,
  },
  activityButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  activityButton: {
    width: '48%',
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  selectedActivity: {
    backgroundColor: colors.primary,
  },
  activityButtonText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  bookingButton: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 18,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  bookingButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  }
});

export default BookingScreen;
