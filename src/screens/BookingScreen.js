import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  Switch,
  StyleSheet 
} from 'react-native';
import globalStyles, { colors } from '../styles/globalStyles';

const BookingScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    adults: '',
    children: '',
  });
  
  const [extras, setExtras] = useState({
    towel: false,
    locker: false,
    foodPackage: false,
    privateArea: false,
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleToggleExtras = (item) => {
    setExtras({
      ...extras,
      [item]: !extras[item],
    });
  };

  const handleSubmit = () => {
    // Here you would validate the form data
    console.log('Booking form submitted:', { ...formData, extras });
    // Navigate to payment screen
    navigation.navigate('Payment', { formData, extras });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Book Your Visit</Text>
        <Text style={styles.subheader}>Fill in the details to secure your spot</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          placeholderTextColor={colors.placeholderText}
          value={formData.name}
          onChangeText={(text) => handleInputChange('name', text)}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          placeholderTextColor={colors.placeholderText}
          keyboardType="email-address"
          value={formData.email}
          onChangeText={(text) => handleInputChange('email', text)}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Enter Phone Number"
          placeholderTextColor={colors.placeholderText}
          keyboardType="phone-pad"
          value={formData.phone}
          onChangeText={(text) => handleInputChange('phone', text)}
        />

        <Text style={styles.sectionTitle}>Booking Details</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Select Date (DD/MM/YYYY)"
          placeholderTextColor={colors.placeholderText}
          value={formData.date}
          onChangeText={(text) => handleInputChange('date', text)}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Select Time"
          placeholderTextColor={colors.placeholderText}
          value={formData.time}
          onChangeText={(text) => handleInputChange('time', text)}
        />
        
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="No. of Adults"
            placeholderTextColor={colors.placeholderText}
            keyboardType="numeric"
            value={formData.adults}
            onChangeText={(text) => handleInputChange('adults', text)}
          />
          
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="No. of Children"
            placeholderTextColor={colors.placeholderText}
            keyboardType="numeric"
            value={formData.children}
            onChangeText={(text) => handleInputChange('children', text)}
          />
        </View>

        <Text style={styles.sectionTitle}>Add Extras</Text>
        
        <View style={styles.extrasContainer}>
          {Object.entries({
            towel: 'Towel Service ($5 per person)',
            locker: 'Locker Rental ($10)',
            foodPackage: 'Food & Beverage Package ($25)',
            privateArea: 'Private Seating Area ($40)'
          }).map(([key, label]) => (
            <View key={key} style={styles.extraItem}>
              <Text style={styles.extraLabel}>{label}</Text>
              <Switch
                trackColor={{ false: colors.grey, true: colors.primary }}
                thumbColor={extras[key] ? colors.white : '#f4f3f4'}
                onValueChange={() => handleToggleExtras(key)}
                value={extras[key]}
              />
            </View>
          ))}
        </View>

        <TouchableOpacity 
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={styles.submitButtonText}>Proceed to Payment</Text>
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
    backgroundColor: colors.primary,
    padding: 20,
    paddingTop: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
  subheader: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
    marginTop: 5,
  },
  formContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
    marginTop: 15,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: colors.white,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  extrasContainer: {
    marginBottom: 20,
  },
  extraItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  },
  extraLabel: {
    fontSize: 16,
    color: colors.white,
  },
  submitButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  submitButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BookingScreen;
