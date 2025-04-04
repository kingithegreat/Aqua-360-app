import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
  Dimensions
} from 'react-native';
import globalStyles, { colors } from '../styles/globalStyles';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.75;

// Activity data for horizontal carousel
const ACTIVITIES = [
  { 
    id: 1, 
    title: 'Jet Skis', 
    description: 'Experience the thrill of riding our high-performance jet skis across the bay.', 
    icon: '🏄‍♂️'
  },
  { 
    id: 2, 
    title: 'Biscuits', 
    description: 'Hold on tight as you ride our inflatable biscuits pulled by our speed boats.', 
    icon: '🛟'
  },
  { 
    id: 3, 
    title: 'Tours', 
    description: 'Explore hidden gems around the Bay of Plenty with our guided tours.', 
    icon: '🗺️'
  },
  { 
    id: 4, 
    title: 'Aqua Lounge', 
    description: 'Relax on our floating aqua lounge platforms with friends and family.', 
    icon: '🏝️'
  },
  { 
    id: 5, 
    title: 'Wakeboarding', 
    description: 'Try wakeboarding with our professional instructors for all skill levels.', 
    icon: '🏂'
  },
  { 
    id: 6, 
    title: 'Fishing', 
    description: 'Join our fishing trips to the best spots in the Bay of Plenty.', 
    icon: '🎣'
  }
];

const AboutUsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>About AQUA 360°</Text>
        <Text style={styles.subheader}>Bay of Plenty's Premier Water Experience</Text>
      </View>
      
      <View style={styles.content}>
        {/* Main company description */}
        <View style={styles.section}>
          <View style={styles.storyCard}>
            <Text style={styles.paragraph}>
              At AQUA 360°, we take great pride in being a family-owned business dedicated to offering thrilling jet ski hire in the stunning Bay of Plenty, where adventure meets breathtaking scenery. We genuinely value your feedback and insights on our social media platforms as they help us enhance your next experience.
            </Text>
          </View>
        </View>
        
        {/* Activities Carousel */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Activities</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carouselContainer}
            snapToInterval={CARD_WIDTH + 20}
            decelerationRate="fast"
          >
            {ACTIVITIES.map((activity) => (
              <View key={activity.id} style={styles.activityCard}>
                <Text style={styles.activityIcon}>{activity.icon}</Text>
                <Text style={styles.activityTitle}>{activity.title}</Text>
                <Text style={styles.activityDescription}>{activity.description}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Location & Hours</Text>
          <Text style={styles.addressText}>
            123 Splash Avenue, Mount Maunganui, Bay of Plenty
          </Text>
          <Text style={styles.hoursText}>
            Monday - Friday: 9:00 AM - 5:00 PM{'\n'}
            Weekends & Holidays: 8:00 AM - 7:00 PM
          </Text>
          <TouchableOpacity 
            style={styles.mapButton}
            onPress={() => Linking.openURL('https://maps.google.com')}
          >
            <Text style={styles.mapButtonText}>View on Map</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Us</Text>
          <TouchableOpacity onPress={() => Linking.openURL('tel:+6475551234')}>
            <Text style={styles.contactText}>📞 Phone: (07) 555-1234</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('mailto:info@aqua360.co.nz')}>
            <Text style={styles.contactText}>✉️ Email: info@aqua360.co.nz</Text>
          </TouchableOpacity>
          
          <View style={styles.socialLinks}>
            {['Facebook', 'Instagram', 'TripAdvisor'].map((platform, index) => (
              <TouchableOpacity key={index} style={styles.socialButton}>
                <Text style={styles.socialButtonText}>{platform}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Updated image source to handle missing file */}
        <Image
          source={require('../../assets/images/about us image.webp')}
          style={styles.wetsuitImage}
          defaultSource={{ uri: 'https://via.placeholder.com/400x300/21605A/ffffff?text=Aqua+360' }}
        />
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
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 15,
    paddingBottom: 5,
  },
  storyCard: {
    borderRadius: 10,
    padding: 15,
    backgroundColor: colors.white,
  },
  paragraph: {
    fontSize: 16,
    color: colors.darkGrey,
    lineHeight: 24,
  },
  carouselContainer: {
    paddingRight: 20, // Add padding to end of carousel
  },
  activityCard: {
    width: CARD_WIDTH,
    marginRight: 20,
    borderRadius: 10,
    padding: 15,
    backgroundColor: colors.white,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  activityIcon: {
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 10,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 10,
  },
  activityDescription: {
    fontSize: 14,
    color: colors.darkGrey,
    textAlign: 'center',
    lineHeight: 20,
  },
  addressText: {
    fontSize: 16,
    color: colors.white,
    marginBottom: 5,
  },
  hoursText: {
    fontSize: 16,
    color: colors.white,
    marginBottom: 15,
  },
  mapButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'flex-start',
    backgroundColor: colors.primary,
  },
  mapButtonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  contactText: {
    fontSize: 16,
    color: colors.white,
    marginBottom: 10,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  socialButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  socialButtonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default AboutUsScreen;
