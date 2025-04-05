import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../styles/globalStyles';

const AboutUsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>About Aqua 360</Text>
        <Text style={styles.paragraph}>
          Aqua 360 is a premier water adventure park dedicated to providing unforgettable experiences for visitors of all ages.
        </Text>
        <Text style={styles.paragraph}>
          Founded in 2015, our mission is to create a safe, fun environment where families can enjoy quality time together while experiencing the joy of water activities.
        </Text>
        <Text style={styles.subheader}>Our Facilities</Text>
        <Text style={styles.paragraph}>
          • State-of-the-art wave pool
        </Text>
        <Text style={styles.paragraph}>
          • Multiple water slides for all thrill levels
        </Text>
        <Text style={styles.paragraph}>
          • Children's splash zone
        </Text>
        <Text style={styles.paragraph}>
          • Relaxation areas and hot tubs
        </Text>
        <Text style={styles.paragraph}>
          • Food court with healthy options
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
  content: {
    padding: 20,
  },
  header: {
    fontSize: 28, // Increased from 24
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 24, // Increased from 20
  },
  subheader: {
    fontSize: 22, // Increased from 20
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 24, // Increased from 20
    marginBottom: 12, // Increased from 10
  },
  paragraph: {
    fontSize: 17, // Increased from 16
    color: colors.darkGrey,
    marginBottom: 14, // Increased from 10
    lineHeight: 26, // Increased from 24
  },
});

export default AboutUsScreen;
