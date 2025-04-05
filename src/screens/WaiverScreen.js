import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors } from '../styles/globalStyles';

const WaiverScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.waiverText}>
        <Text style={styles.header}>Aqua 360 Waiver Form</Text>
        <Text style={styles.paragraph}>
          By signing this waiver, you acknowledge the inherent risks associated with water activities and agree to follow all safety guidelines.
        </Text>
        <Text style={styles.paragraph}>
          1. Participants must follow all posted rules and verbal instructions from staff.
        </Text>
        <Text style={styles.paragraph}>
          2. Children under 12 must be supervised by an adult at all times.
        </Text>
        <Text style={styles.paragraph}>
          3. No running, diving, or horseplay in the water park areas.
        </Text>
        <Text style={styles.paragraph}>
          4. Aqua 360 is not responsible for lost or stolen items.
        </Text>
        <Text style={styles.paragraph}>
          5. Management reserves the right to refuse entry or remove anyone not complying with rules.
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
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    color: colors.darkGrey,
    marginBottom: 15,
    lineHeight: 24,
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
    fontSize: 16,
  },
});

export default WaiverScreen;
