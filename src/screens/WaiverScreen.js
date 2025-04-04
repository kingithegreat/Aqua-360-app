import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  StyleSheet,
  Alert,
  SafeAreaView,
  Dimensions
} from 'react-native';
import globalStyles, { colors } from '../styles/globalStyles';

// Get screen dimensions for height calculations
const { height: screenHeight } = Dimensions.get('window');

const WaiverScreen = ({ navigation }) => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    Alert.alert(
      "Waiver Accepted",
      "Thank you for accepting our waiver agreement. You can now continue to use all Aqua 360 facilities.",
      [
        { text: "OK", onPress: () => navigation.navigate('Home') }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Liability Waiver</Text>
        <Text style={styles.subheader}>Please read carefully and accept</Text>
      </View>

      <View style={styles.contentContainer}>
        {/* Scrollable waiver text in a fixed height box */}
        <View style={styles.waiverBox}>
          <ScrollView style={styles.waiverScrollView}>
            <Text style={styles.sectionTitle}>RELEASE OF LIABILITY</Text>
            
            <Text style={styles.paragraph}>
              READ CAREFULLY - THIS AFFECTS YOUR LEGAL RIGHTS
            </Text>
            
            <Text style={styles.paragraph}>
              In exchange for participation in water-related activities organized by Aqua 360, 
              I hereby agree to the following:
            </Text>
            
            <Text style={styles.paragraph}>
              1. I acknowledge that water activities involve risks that may result in injury, 
              including the potential for severe injury or death. I knowingly and freely assume 
              all such risks, both known and unknown, even if arising from the negligence of others.
            </Text>
            
            <Text style={styles.paragraph}>
              2. I will comply with all rules and regulations set by Aqua 360, including all safety 
              instructions provided by staff members. I understand that failure to follow rules may 
              result in removal from the facilities without refund.
            </Text>
            
            <Text style={styles.paragraph}>
              3. I certify that I (and any minor children for whom I am responsible) am/are physically 
              fit to participate in any activities, and have not been advised otherwise by a qualified 
              medical professional.
            </Text>
            
            <Text style={styles.paragraph}>
              4. I, for myself and on behalf of my heirs, assigns, personal representatives, and next of kin, 
              HEREBY RELEASE AND HOLD HARMLESS Aqua 360, their officers, officials, agents, employees, 
              volunteers, and representatives from any and all claims, demands, losses, and liability.
            </Text>
            
            <Text style={styles.paragraph}>
              5. I acknowledge that I have read this release of liability and assumption of risk agreement, 
              fully understand its terms, and understand that I have given up substantial rights by signing 
              it, and sign it freely and voluntarily without any inducement.
            </Text>
            
            <Text style={styles.sectionTitle}>MEDICAL AUTHORIZATION</Text>
            
            <Text style={styles.paragraph}>
              In the event of an injury to me or to any minor children for whom I am responsible, I authorize 
              Aqua 360 staff to secure necessary medical treatment. I acknowledge that any costs for such 
              treatment are my responsibility.
            </Text>
            
            <Text style={styles.sectionTitle}>PHOTO/MEDIA RELEASE</Text>
            
            <Text style={styles.paragraph}>
              I grant to Aqua 360 the right to take photographs or video of me and my family in connection 
              with water activities. I authorize Aqua 360 to use such photographs for lawful promotional 
              purposes, including publicity, advertising, and web content.
            </Text>
          </ScrollView>
        </View>
        
        {/* Acceptance checkbox outside the scrollable area */}
        <View style={styles.checkboxContainer}>
          <TouchableOpacity 
            style={[styles.checkbox, accepted && styles.checkboxChecked]}
            onPress={() => setAccepted(!accepted)}
          >
            {accepted && <Text style={styles.checkmark}>✓</Text>}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>
            I have read and understand the terms above and agree to be bound by them.
          </Text>
        </View>
      </View>
      
      {/* Footer with action button */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={[
            styles.acceptButton, 
            !accepted && styles.acceptButtonDisabled
          ]}
          disabled={!accepted}
          onPress={handleAccept}
        >
          <Text style={styles.acceptButtonText}>
            {accepted ? "Confirm & Accept" : "Please Accept Waiver"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  headerContainer: {
    padding: 20,
    backgroundColor: colors.primary,
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
  contentContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  waiverBox: {
    height: screenHeight * 0.6, // Set height to 60% of screen height
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 15,
    overflow: 'hidden', // Ensure content doesn't spill out
  },
  waiverScrollView: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
    marginTop: 10,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: colors.white,
    marginBottom: 15,
    lineHeight: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: colors.primary,
  },
  checkmark: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkboxLabel: {
    flex: 1,
    fontSize: 16,
    color: colors.white,
  },
  footer: {
    padding: 15,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
  },
  acceptButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  acceptButtonDisabled: {
    backgroundColor: colors.grey,
    opacity: 0.7,
  },
  acceptButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WaiverScreen;
