import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  Image, 
  ScrollView, 
  TouchableOpacity, 
  StyleSheet, 
  Dimensions,
  SafeAreaView,
  Platform
} from 'react-native';
import globalStyles, { colors } from '../styles/globalStyles';

// Get screen dimensions for responsive layout
const { width, height } = Dimensions.get('window');

// Sample reviews for the carousel
const SAMPLE_REVIEWS = [
  {
    id: 1,
    name: "Sarah J.",
    rating: 5,
    comment: "Amazing jet ski tour around the bay! The guides were knowledgeable and made the experience unforgettable."
  },
  {
    id: 2,
    name: "Michael B.",
    rating: 4,
    comment: "Great day out on the water. The jet skis were well-maintained and the safety briefing was thorough."
  },
  {
    id: 3,
    name: "Emma W.",
    rating: 5,
    comment: "Perfect adventure for our family vacation. We saw dolphins during our tour which was incredible!"
  }
];

const HomeScreen = ({ navigation }) => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  
  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => 
        prevIndex === SAMPLE_REVIEWS.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change review every 5 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <View style={styles.starContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Text 
            key={star} 
            style={star <= rating ? styles.filledStar : styles.emptyStar}
          >
            ★
          </Text>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Sign Up')} style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
      </SafeAreaView>
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        {/* About Us Card with Local Image */}
        <TouchableOpacity 
          style={styles.aboutUsCard}
          onPress={() => navigation.navigate('About Us')}
        >
          <Image
            source={require('../../assets/images/about us image.webp')}
            style={styles.wetsuitImage}
            onError={() => console.log('Image load error')}
          />
          <View style={styles.imageOverlay}>
            <Text style={styles.aboutUsTitle}>About Us</Text>
            <Text style={styles.aboutUsText}>
              Experience thrilling jet ski adventures with Aqua 360, Mount Maunganui's premium jet ski hire and tour service operating from the beautiful Pilot Bay.
            </Text>
          </View>
        </TouchableOpacity>
        
        {/* Four Action Buttons */}
        <View style={styles.actionButtonsGrid}>
          {/* Waiver Button */}
          <TouchableOpacity 
            style={[styles.actionButton, styles.waiverButton]}
            onPress={() => navigation.navigate('Waiver')}
          >
            <Text style={styles.actionButtonIcon}>📝</Text>
            <Text style={styles.matchingButtonText}>Waiver</Text>
          </TouchableOpacity>
          
          {/* Review Button */}
          <TouchableOpacity 
            style={[styles.actionButton, styles.reviewButton]}
            onPress={() => navigation.navigate('Reviews')}
          >
            <Text style={styles.actionButtonIcon}>⭐</Text>
            <Text style={styles.matchingButtonText}>Review</Text>
          </TouchableOpacity>
          
          {/* AI Assistant Button */}
          <TouchableOpacity 
            style={[styles.actionButton, styles.assistantButton]}
            onPress={() => navigation.navigate('AI Assistant')}
          >
            <Text style={styles.actionButtonIcon}>🤖</Text>
            <Text style={styles.matchingButtonText}>AI Assistant</Text>
          </TouchableOpacity>
          
          {/* Book Now Button */}
          <TouchableOpacity 
            style={[styles.actionButton, styles.bookButton]}
            onPress={() => navigation.navigate('Booking')}
          >
            <Text style={styles.actionButtonIcon}>📅</Text>
            <Text style={styles.matchingButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
        
        {/* Review Carousel - Replacing Latest News */}
        <View style={styles.reviewCarouselSection}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>CUSTOMER TESTIMONIALS</Text>
            <View style={styles.sectionTitleUnderline}></View>
          </View>
          <View style={styles.reviewCarousel}>
            <View style={styles.reviewCard}>
              <View style={styles.reviewHeader}>
                <Text style={styles.reviewerName}>{SAMPLE_REVIEWS[currentReviewIndex].name}</Text>
                <StarRating rating={SAMPLE_REVIEWS[currentReviewIndex].rating} />
              </View>
              <Text style={styles.reviewComment}>"{SAMPLE_REVIEWS[currentReviewIndex].comment}"</Text>
            </View>
            
            {/* Carousel Indicators */}
            <View style={styles.carouselIndicators}>
              {SAMPLE_REVIEWS.map((_, index) => (
                <View 
                  key={index} 
                  style={[
                    styles.indicator, 
                    index === currentReviewIndex && styles.activeIndicator
                  ]} 
                />
              ))}
            </View>
            
            <TouchableOpacity 
              style={styles.viewAllReviewsButton}
              onPress={() => navigation.navigate('Reviews')}
            >
              <Text style={styles.viewAllReviewsText}>View All Reviews</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2023 Aqua 360. All rights reserved.</Text>
          <Text style={styles.footerText}>Pilot Bay, Mount Maunganui, Tauranga 3116</Text>
          <Text style={styles.footerContact}>📞 021 AQUA (021 2782)</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between', // This spaces items at opposite ends
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 50 : 40,
    paddingBottom: 15,
    paddingHorizontal: 20, // Changed from 30 to 20 to align with other content
    marginHorizontal: 20, // Added horizontal margin to align with other components
    backgroundColor: 'transparent',
  },
  signUpButton: {
    backgroundColor: colors.white,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  signUpButtonText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 16, // Increased from 14
  },
  loginButton: {
    backgroundColor: 'transparent',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.white,
  },
  loginButtonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16, // Increased from 14
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  aboutUsCard: {
    marginTop: 10,
    borderRadius: 15,
    overflow: 'hidden',
    height: height * 0.3,
    marginBottom: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  wetsuitImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover', // Ensures the image fills the card
  },
  imageOverlay: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: 'rgba(33, 96, 90, 0.5)', // Lightened to 0.5 from 0.7
  },
  aboutUsTitle: {
    fontSize: 30, // Increased from 28
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 10, // Increased from 8
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  aboutUsText: {
    fontSize: 18, // Increased from 16
    color: colors.white,
    lineHeight: 26, // Increased from 22
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  actionButtonsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  actionButton: {
    width: '48%',
    aspectRatio: 1.5,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 15,
    elevation: 8, // Increased for more prominence
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)', // Add subtle white border for glass effect
    backgroundColor: 'rgba(33, 96, 90, 0.8)', // Updated to colors.primary with transparency
  },
  waiverButton: {
    backgroundColor: 'rgba(33, 96, 90, 0.85)', // Updated to colors.primary with transparency
    borderColor: 'rgba(255, 255, 255, 0.6)',
  },
  reviewButton: {
    backgroundColor: 'rgba(33, 96, 90, 0.85)', // Updated to colors.primary with transparency
    borderColor: 'rgba(255, 255, 255, 0.6)',
  },
  aboutUsButton: {
    backgroundColor: colors.secondary,
  },
  actionButtonBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  buttonOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(33, 96, 90, 0.7)',
    paddingVertical: 8,
    alignItems: 'center',
  },
  assistantButton: {
    backgroundColor: 'rgba(33, 96, 90, 0.85)', // Updated to colors.primary with transparency
    borderColor: 'rgba(255, 255, 255, 0.6)',
  },
  bookButton: {
    backgroundColor: 'rgba(33, 96, 90, 0.85)', // Updated to colors.primary with transparency
    borderColor: 'rgba(255, 255, 255, 0.6)',
  },
  actionButtonIcon: {
    fontSize: 34, // Increased from 32
    marginBottom: 10,
    color: colors.white,
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  actionButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  lightButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    textShadowColor: 'rgba(255, 255, 255, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  matchingButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  reviewCarouselSection: {
    marginBottom: 30,
    marginTop: 10,
    paddingVertical: 15,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingHorizontal: 15,
  },
  sectionTitleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24, // Increased from 22
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    letterSpacing: 1.5,
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  sectionTitleUnderline: {
    width: 60,
    height: 3,
    backgroundColor: colors.white,
    marginTop: 8,
    borderRadius: 2,
  },
  reviewCarousel: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginHorizontal: 5,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  reviewerName: {
    fontSize: 20, // Increased from 18
    fontWeight: 'bold',
    color: colors.primary,
  },
  reviewComment: {
    fontSize: 18, // Increased from 16
    fontStyle: 'italic',
    color: colors.darkGrey,
    lineHeight: 26, // Increased from 22
    marginBottom: 15,
  },
  starContainer: {
    flexDirection: 'row',
  },
  filledStar: {
    color: colors.primary,
    fontSize: 16,
    marginHorizontal: 1,
  },
  emptyStar: {
    color: colors.grey,
    fontSize: 16,
    marginHorizontal: 1,
  },
  carouselIndicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.grey,
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: colors.primary,
    width: 12,
    height: 8,
  },
  viewAllReviewsButton: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  viewAllReviewsText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 16, // Increased from 14
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.3)',
    paddingTop: 20,
    alignItems: 'center',
  },
  footerText: {
    color: colors.white,
    fontSize: 14, // Increased from 12
    marginBottom: 5,
    textAlign: 'center',
  },
  footerContact: {
    color: colors.white,
    fontSize: 14, // Increased from 12
    marginTop: 5,
  },
});

export default HomeScreen;
