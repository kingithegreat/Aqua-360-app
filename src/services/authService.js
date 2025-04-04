// Mock authentication service that doesn't require Firebase

// Register a new user
export const registerUser = async (email, password, fullName, phone) => {
  try {
    // Mock implementation
    const user = {
      uid: 'user-' + Date.now(),
      email,
      displayName: fullName,
      phoneNumber: phone
    };
    
    console.log('Registered user:', user);
    return user;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

// Sign in user
export const loginUser = async (email, password) => {
  try {
    // Mock implementation
    return {
      uid: 'user-123',
      email,
      displayName: 'Test User'
    };
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// Sign out user
export const logoutUser = async () => {
  try {
    return true;
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
};

// Reset password
export const resetPassword = async (email) => {
  try {
    console.log(`Password reset email sent to ${email}`);
    return true;
  } catch (error) {
    console.error('Error resetting password:', error);
    throw error;
  }
};

// Update user waiver status
export const updateWaiverStatus = async (userId, status) => {
  try {
    console.log(`Updated waiver status for user ${userId} to ${status}`);
    return true;
  } catch (error) {
    console.error('Error updating waiver status:', error);
    throw error;
  }
};

// Get user profile
export const getUserProfile = async (userId) => {
  try {
    // Return mock user data
    return {
      fullName: 'Test User',
      email: 'user@example.com',
      phone: '123-456-7890',
      waiverSigned: true
    };
  } catch (error) {
    console.error('Error getting user profile:', error);
    throw error;
  }
};
