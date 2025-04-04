import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView,
  StyleSheet,
  Image
} from 'react-native';
import globalStyles, { colors } from '../styles/globalStyles';

const SAMPLE_REVIEWS = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    date: "15 May 2023",
    comment: "Absolutely amazing experience! The wave pool was so much fun for the entire family. Staff were friendly and helpful. Will definitely be back!",
  },
  {
    id: 2,
    name: "Michael Brown",
    rating: 4,
    date: "2 May 2023",
    comment: "Great place to spend a hot day. The water slides were thrilling and the food was good too. Only giving 4 stars because it was a bit crowded.",
  },
  {
    id: 3,
    name: "Emma Wilson",
    rating: 5,
    date: "28 April 2023",
    comment: "Perfect day out with the kids! The children's area is well designed and safe. Clean facilities and friendly staff made it extra special.",
  },
  {
    id: 4,
    name: "David Thompson",
    rating: 3,
    date: "15 April 2023",
    comment: "The attractions are good but somewhat limited. Could use more variety. Staff were friendly though and everything was clean.",
  }
];

const ReviewsScreen = () => {
  const [reviews, setReviews] = useState(SAMPLE_REVIEWS);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: '',
  });
  const [showAddReview, setShowAddReview] = useState(false);

  const handleSubmitReview = () => {
    if (!newReview.name.trim() || !newReview.comment.trim()) return;
    
    const review = {
      id: reviews.length + 1,
      name: newReview.name,
      rating: newReview.rating,
      date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }),
      comment: newReview.comment,
    };
    
    setReviews([review, ...reviews]);
    setNewReview({
      name: '',
      rating: 5,
      comment: '',
    });
    setShowAddReview(false);
  };

  const StarRating = ({ rating, onRatingChange }) => {
    return (
      <View style={styles.starContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity
            key={star}
            onPress={() => onRatingChange && onRatingChange(star)}
          >
            <Text style={[styles.star, star <= rating ? styles.filledStar : styles.emptyStar]}>
              ★
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Customer Reviews</Text>
        <View style={styles.overallRating}>
          <Text style={styles.overallRatingText}>4.8</Text>
          <StarRating rating={5} />
          <Text style={styles.ratingCount}>Based on {reviews.length} reviews</Text>
        </View>
      </View>

      <ScrollView style={styles.reviewsContainer}>
        {!showAddReview && (
          <TouchableOpacity 
            style={styles.addReviewButton}
            onPress={() => setShowAddReview(true)}
          >
            <Text style={styles.addReviewButtonText}>Write a Review</Text>
          </TouchableOpacity>
        )}

        {showAddReview && (
          <View style={styles.addReviewForm}>
            <Text style={styles.formLabel}>Your Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              placeholderTextColor={colors.placeholderText}
              value={newReview.name}
              onChangeText={(text) => setNewReview({...newReview, name: text})}
            />
            
            <Text style={styles.formLabel}>Rating</Text>
            <StarRating 
              rating={newReview.rating}
              onRatingChange={(rating) => setNewReview({...newReview, rating})}
            />
            
            <Text style={styles.formLabel}>Your Review</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Share your experience..."
              placeholderTextColor={colors.placeholderText}
              multiline
              numberOfLines={4}
              value={newReview.comment}
              onChangeText={(text) => setNewReview({...newReview, comment: text})}
            />
            
            <View style={styles.formButtons}>
              <TouchableOpacity 
                style={[styles.formButton, styles.cancelButton]}
                onPress={() => setShowAddReview(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.formButton, styles.submitButton]}
                onPress={handleSubmitReview}
              >
                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {reviews.map((review) => (
          <View
            key={review.id}
            style={styles.reviewCard}
          >
            <View style={styles.reviewHeader}>
              <View style={styles.reviewerInfo}>
                <View style={styles.reviewerAvatar}>
                  <Text style={styles.avatarText}>{review.name.charAt(0)}</Text>
                </View>
                <View>
                  <Text style={styles.reviewerName}>{review.name}</Text>
                  <Text style={styles.reviewDate}>{review.date}</Text>
                </View>
              </View>
              <StarRating rating={review.rating} />
            </View>
            <Text style={styles.reviewComment}>{review.comment}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
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
  overallRating: {
    alignItems: 'center',
    marginTop: 10,
  },
  overallRatingText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.secondary,
  },
  ratingCount: {
    fontSize: 14,
    color: colors.white,
    marginTop: 5,
  },
  reviewsContainer: {
    padding: 15,
  },
  addReviewButton: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: colors.primary,
  },
  addReviewButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  addReviewForm: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: colors.white,
  },
  formLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.grey,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  formButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  formButton: {
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    flex: 0.48,
  },
  cancelButton: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  cancelButtonText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: colors.primary,
  },
  submitButtonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  reviewCard: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    backgroundColor: colors.white,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  reviewerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },
  reviewDate: {
    fontSize: 12,
    color: colors.darkGrey,
  },
  reviewComment: {
    fontSize: 14,
    color: colors.darkGrey,
    lineHeight: 20,
  },
  starContainer: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 20,
    marginHorizontal: 2,
  },
  filledStar: {
    color: colors.primary,
  },
  emptyStar: {
    color: colors.grey,
  },
});

export default ReviewsScreen;
