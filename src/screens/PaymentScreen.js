import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet,
  Alert
} from 'react-native';
import globalStyles, { colors } from '../styles/globalStyles';

const PaymentScreen = ({ route, navigation }) => {
  const { formData, extras } = route.params || { formData: {}, extras: {} };
  
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (field, value) => {
    setPaymentDetails({
      ...paymentDetails,
      [field]: value,
    });
  };

  // Calculate booking total
  const calculateTotal = () => {
    // Base price
    let total = 0;
    
    // Add ticket prices
    const adultPrice = 25;
    const childPrice = 15;
    total += (parseInt(formData.adults) || 0) * adultPrice;
    total += (parseInt(formData.children) || 0) * childPrice;
    
    // Add extras
    if (extras.towel) {
      total += 5 * ((parseInt(formData.adults) || 0) + (parseInt(formData.children) || 0));
    }
    if (extras.locker) total += 10;
    if (extras.foodPackage) total += 25;
    if (extras.privateArea) total += 40;
    
    return total;
  };

  const handlePayment = () => {
    // In a real app, you would process payment here
    Alert.alert(
      "Booking Confirmed!",
      "Your booking has been confirmed. You will receive a confirmation email shortly.",
      [
        { text: "OK", onPress: () => navigation.navigate('Home') }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Payment Details</Text>
        <Text style={styles.subheader}>Secure Checkout</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.summary}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Date:</Text>
            <Text style={styles.summaryValue}>{formData.date || 'Not specified'}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Time:</Text>
            <Text style={styles.summaryValue}>{formData.time || 'Not specified'}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Adults:</Text>
            <Text style={styles.summaryValue}>{formData.adults || '0'}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Children:</Text>
            <Text style={styles.summaryValue}>{formData.children || '0'}</Text>
          </View>
          
          {/* Extras */}
          <Text style={[styles.sectionTitle, {marginTop: 15}]}>Selected Extras</Text>
          {Object.entries(extras).some(([key, value]) => value) ? (
            Object.entries(extras).map(([key, value]) => 
              value && (
                <View key={key} style={styles.summaryRow}>
                  <Text style={styles.summaryLabel}>
                    {key === 'towel' ? 'Towel Service' : 
                     key === 'locker' ? 'Locker Rental' : 
                     key === 'foodPackage' ? 'Food Package' : 'Private Area'}:
                  </Text>
                  <Text style={styles.summaryValue}>Yes</Text>
                </View>
              )
            )
          ) : (
            <Text style={styles.noExtras}>No extras selected</Text>
          )}
          
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Total:</Text>
            <Text style={styles.totalAmount}>${calculateTotal()}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Payment Method</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          placeholderTextColor={colors.placeholderText}
          keyboardType="numeric"
          value={paymentDetails.cardNumber}
          onChangeText={(text) => handleInputChange('cardNumber', text)}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Card Holder Name"
          placeholderTextColor={colors.placeholderText}
          value={paymentDetails.cardHolder}
          onChangeText={(text) => handleInputChange('cardHolder', text)}
        />
        
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Expiry Date (MM/YY)"
            placeholderTextColor={colors.placeholderText}
            value={paymentDetails.expiryDate}
            onChangeText={(text) => handleInputChange('expiryDate', text)}
          />
          
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="CVV"
            placeholderTextColor={colors.placeholderText}
            keyboardType="numeric"
            secureTextEntry
            value={paymentDetails.cvv}
            onChangeText={(text) => handleInputChange('cvv', text)}
          />
        </View>

        <TouchableOpacity 
          style={styles.paymentButton}
          onPress={handlePayment}
        >
          <Text style={styles.paymentButtonText}>Complete Payment</Text>
        </TouchableOpacity>
        
        <Text style={styles.secureNote}>
          🔒 All payments are secure and encrypted
        </Text>
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
    padding: 20,
    paddingTop: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: colors.primary,
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
  summary: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: colors.secondary,
    backgroundColor: colors.white,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },
  summaryLabel: {
    fontSize: 16,
    color: colors.darkGrey,
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.secondary,
  },
  noExtras: {
    fontSize: 16,
    color: colors.darkGrey,
    fontStyle: 'italic',
    paddingVertical: 8,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingTop: 10,
    borderTopWidth: 2,
    borderTopColor: colors.secondary,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.darkGrey,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.secondary,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: colors.lightGrey,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  paymentButton: {
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: colors.primary,
  },
  paymentButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  secureNote: {
    textAlign: 'center',
    marginTop: 15,
    color: colors.white,
    fontSize: 14,
  },
});

export default PaymentScreen;
