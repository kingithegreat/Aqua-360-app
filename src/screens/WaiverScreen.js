import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors } from '../styles/globalStyles';

const WaiverScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.waiverText}>
        <Text style={styles.header}>Aqua 360 Jet Ski Waiver Form</Text>
        <Text style={styles.paragraph}>
          By signing this waiver, you acknowledge the inherent risks associated with jet ski activities and water sports, and agree to follow all safety guidelines.
        </Text>
        <Text style={styles.paragraph}>
          1. Participants must follow all instructions from Aqua 360 staff at all times.
        </Text>
        <Text style={styles.paragraph}>
          2. Participants must wear life jackets and any other provided safety equipment at all times.
        </Text>
        <Text style={styles.paragraph}>
          3. No reckless behavior or stunts that may endanger yourself or others are permitted.
        </Text>
        <Text style={styles.paragraph}>
          4. Aqua 360 is not responsible for lost or damaged personal belongings.
        </Text>
        <Text style={styles.paragraph}>
          5. Participants must not operate jet skis under the influence of alcohol or drugs.
        </Text>
        <Text style={styles.paragraph}>
          6. Management reserves the right to cancel activities due to unsafe weather conditions or to remove anyone not complying with safety regulations.
        </Text>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>I Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    padding: 20,
  },
  waiverText: {
    flex: 1,
    marginBottom: 20,
  },
  header: {
    fontSize: 28, // Increased from 24
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 24, // Increased from 20
  },
  paragraph: {
    fontSize: 17, // Increased from 16
    color: colors.darkGrey,
    marginBottom: 18, // Increased from 15
    lineHeight: 26, // Increased from 24
  },
  buttonContainer: {
    paddingVertical: 20,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18, // Increased from 16
    letterSpacing: 0.5,
  },
});

export default WaiverScreen;
