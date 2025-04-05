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
    comment: "Absolutely amazing experience! The wave pool was so much fun for the entire family."
  },
  {
    id: 2,
    name: "Michael B.",
    rating: 4,
    comment: "Great place to spend a hot day. The water slides were thrilling and the food was good too."
  },
  {
    id: 3,
    name: "Emma W.",
    rating: 5,
    comment: "Perfect day out with the kids! The children's area is well designed and safe."
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
              Discover the ultimate water adventure at Aqua 360. We provide premium water experiences 
              for all ages with state-of-the-art facilities and expert instructors.
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
            <Text style={styles.actionButtonText}>Waiver</Text>
          </TouchableOpacity>
          
          {/* Review Button */}
          <TouchableOpacity 
            style={[styles.actionButton, styles.reviewButton]}
            onPress={() => navigation.navigate('Reviews')}
          >
            <Text style={styles.actionButtonIcon}>⭐</Text>
            <Text style={styles.lightButtonText}>Review</Text>
          </TouchableOpacity>
          
          {/* AI Assistant Button */}
          <TouchableOpacity 
            style={[styles.actionButton, styles.assistantButton]}
            onPress={() => navigation.navigate('AI Assistant')}
          >
            <Text style={styles.actionButtonIcon}>🤖</Text>
            <Text style={styles.actionButtonText}>AI Assistant</Text>
          </TouchableOpacity>
          
          {/* Book Now Button */}
          <TouchableOpacity 
            style={[styles.actionButton, styles.bookButton]}
            onPress={() => navigation.navigate('Booking')}
          >
            <Text style={styles.actionButtonIcon}>📅</Text>
            <Text style={styles.lightButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
        
        {/* Review Carousel - Replacing Latest News */}
        <View style={styles.reviewCarouselSection}>
          <Text style={styles.sectionTitle}>What Our Customers Say</Text>
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
          <Text style={styles.footerText}>123 Splash Avenue, Watertown, WA 98765</Text>
          <Text style={styles.footerContact}>📞 (555) 123-4567</Text>
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
    fontSize: 14,
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
    fontSize: 14,
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
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 8,
  },
  aboutUsText: {
    fontSize: 16,
    color: colors.white,
    lineHeight: 22,
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
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  waiverButton: {
    backgroundColor: '#3d8c8a', // Lighter tealfor stronger contrast
  },
  reviewButton: {
    backgroundColor: '#5ad8da', // Brighter cyan
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
    backgroundColor: '#45a2a0', // Medium teal teal
  },
  bookButton: {
    backgroundColor: '#6be7e8', // Light cyan cyan
  },
  actionButtonIcon: {
    fontSize: 30,
    marginBottom: 8,
    color: colors.white, // Keep white for light backgrounds
  },
  actionButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white, // Keep white for most buttons
    textAlign: 'center',
  },
  lightButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
  },
  reviewCarouselSection: {
    marginBottom: 30,
  },
  reviewCarousel: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  reviewerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  reviewComment: {
    fontSize: 16,
    fontStyle: 'italic',
    color: colors.darkGrey,
    lineHeight: 22,
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
    fontSize: 14,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.3)',
    paddingTop: 20,
    alignItems: 'center',
  },
  footerText: {
    color: colors.white,
    fontSize: 12,
    marginBottom: 5,
    textAlign: 'center',
  },
  footerContact: {
    color: colors.white,
    fontSize: 12,
    marginTop: 5,
  },
});

export default HomeScreen;
