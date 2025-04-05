import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { colors } from '../styles/globalStyles';

const { width } = Dimensions.get('window');
const cardWidth = width * 0.7;

const AboutUsScreen = ({ navigation }) => {
  const activities = [
    {
      id: 1,
      name: 'Biscuit Rides',
      image: require('../../assets/images/biscuir.jpg'),
      description: 'Experience thrilling biscuit rides on the water!'
    },
    {
      id: 2,
      name: 'Fishing',
      image: require('../../assets/images/fishing.jpg'),
      description: 'Enjoy a relaxing day fishing in the Bay of Plenty'
    },
    {
      id: 3,
      name: 'Jet Skis',
      image: require('../../assets/images/skis.jpg'),
      description: 'Zoom across the water on our high-performance jet skis'
    },
    {
      id: 4,
      name: 'Guided Tours',
      image: require('../../assets/images/guided-jet-ski-tours.webp'),
      description: 'Discover hidden spots with our experienced guides'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>About Aqua 360</Text>
        <Text style={styles.subheader}>Premium Jet Ski Hire & Tours</Text>
      </View>
      
      <View style={styles.cardContainer}>
        <Text style={styles.paragraph}>
          At AQUA 360°, we take great pride in being a family-owned business dedicated to offering thrilling jet ski hire in the stunning Bay of Plenty, where adventure meets breathtaking scenery. We genuinely value your feedback and insights on our social media platforms as they help us enhance your next experience.
        </Text>
        
        <View style={styles.divider} />
        
        <Text style={styles.sectionTitle}>Our Activities</Text>
        
        {/* Horizontal Carousel */}
        <View style={styles.carouselWrapper}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            pagingEnabled={false}
            disableIntervalMomentum={false}
            snapToInterval={cardWidth + 15}
            decelerationRate="fast"
            contentContainerStyle={styles.carouselContainer}
          >
            {activities.map(activity => (
              <View key={activity.id} style={styles.activityCard}>
                <Image 
                  source={activity.image} 
                  style={styles.activityImage}
                  resizeMode="cover" 
                />
                <View style={styles.activityInfo}>
                  <Text style={styles.activityTitle}>{activity.name}</Text>
                  <Text style={styles.activityDescription}>{activity.description}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        
        <View style={styles.divider} />
        
        <Text style={styles.sectionTitle}>Our Services</Text>
        
        <View style={styles.facilityItem}>
          <Text style={styles.facilityIcon}>🏍️</Text>
          <Text style={styles.facilityText}>High-quality jet ski hire with 4 premium vessels</Text>
        </View>
        
        <View style={styles.facilityItem}>
          <Text style={styles.facilityIcon}>🧭</Text>
          <Text style={styles.facilityText}>Guided tours around the Bay of Plenty</Text>
        </View>
        
        <View style={styles.facilityItem}>
          <Text style={styles.facilityIcon}>🎣</Text>
          <Text style={styles.facilityText}>Fishing adventures by jet ski</Text>
        </View>
        
        <View style={styles.facilityItem}>
          <Text style={styles.facilityIcon}>🔄</Text>
          <Text style={styles.facilityText}>Biscuit rides and water activities</Text>
        </View>
        
        <View style={styles.facilityItem}>
          <Text style={styles.facilityIcon}>🛡️</Text>
          <Text style={styles.facilityText}>Comprehensive safety equipment and training</Text>
        </View>
        
        <View style={styles.divider} />
        
        <Text style={styles.sectionTitle}>Location</Text>
        <Text style={styles.paragraph}>
          Operating from Pilot Bay in Mount Maunganui, our trailer is conveniently located approximately 200 meters from the base of the mountain, providing easy access to the bay's pristine waters.
        </Text>
        
        <Text style={styles.paragraph}>
          Visit us at: Pilot Bay, Mount Maunganui, Tauranga 3116
        </Text>
        
        <Text style={styles.contactInfo}>
          📞 021 AQUA (021 2782)
        </Text>
        
        <TouchableOpacity style={styles.confirmButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.confirmButtonText}>CONFIRM</Text>
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
    fontSize: 32,
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
  cardContainer: {
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
  paragraph: {
    fontSize: 17,
    color: colors.darkGrey,
    marginBottom: 15,
    lineHeight: 26,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(33, 96, 90, 0.2)',
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 15,
  },
  carouselWrapper: {
    marginHorizontal: -10, // Extend beyond container padding
    marginBottom: 10,
  },
  carouselContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  activityCard: {
    width: cardWidth,
    marginRight: 15,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  activityImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  activityInfo: {
    padding: 12,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 5,
  },
  activityDescription: {
    fontSize: 14,
    color: colors.darkGrey,
    lineHeight: 20,
  },
  facilityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  facilityIcon: {
    fontSize: 22,
    marginRight: 15,
    width: 30,
    textAlign: 'center',
  },
  facilityText: {
    fontSize: 17,
    color: colors.darkGrey,
    flex: 1,
  },
  contactInfo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 10,
    textAlign: 'center',
  },
  confirmButton: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    marginTop: 30,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  confirmButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  }
});

export default AboutUsScreen;
