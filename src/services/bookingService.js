// Mock booking service implementation that doesn't require Firebase

// Create a new booking
export const createBooking = async (bookingData) => {
  try {
    // Mock implementation
    return { 
      id: 'booking-' + Date.now(), 
      ...bookingData,
      createdAt: new Date(),
      status: 'pending'
    };
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error;
  }
};

// Get bookings for a specific user
export const getUserBookings = async (userId) => {
  try {
    // Return mock data
    return [
      {
        id: 'booking-1',
        userId,
        date: '2023-08-15',
        time: '10:00 AM',
        adults: 2,
        children: 1,
        status: 'confirmed',
        createdAt: new Date()
      }
    ];
  } catch (error) {
    console.error('Error fetching user bookings:', error);
    throw error;
  }
};

// Update booking status
export const updateBookingStatus = async (bookingId, status) => {
  try {
    console.log(`Updated booking ${bookingId} status to ${status}`);
    return true;
  } catch (error) {
    console.error('Error updating booking status:', error);
    throw error;
  }
};

// Delete a booking
export const deleteBooking = async (bookingId) => {
  try {
    console.log(`Deleted booking ${bookingId}`);
    return true;
  } catch (error) {
    console.error('Error deleting booking:', error);
    throw error;
  }
};
