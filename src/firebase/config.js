// This is just a mock implementation of Firebase - not a real database connection

// Basic mock auth implementation
export const auth = {
  onAuthStateChanged: (callback) => {
    // Just call with null (no user logged in)
    setTimeout(() => callback(null), 100);
    // Return empty function for unsubscribe
    return () => {};
  },
  signOut: () => Promise.resolve(true),
  signInWithEmailAndPassword: () => Promise.resolve({ 
    user: { uid: 'mock-user-id', email: 'test@example.com' } 
  }),
  createUserWithEmailAndPassword: () => Promise.resolve({ 
    user: { uid: 'mock-user-id', email: 'test@example.com' } 
  })
};

// Simple mock database implementation
export const db = {
  collection: () => ({
    add: async (data) => ({ id: 'mock-id', ...data }),
    doc: (id) => ({
      get: async () => ({
        exists: true,
        data: () => ({ name: 'Test Item', ...data }),
        id
      }),
      set: async (data) => true,
      update: async (data) => true,
      delete: async () => true
    }),
    where: () => ({
      get: async () => ({
        docs: []
      })
    })
  })
};

// Simple mock storage implementation
export const storage = {
  ref: () => ({
    put: async () => ({
      ref: {
        getDownloadURL: async () => 'https://example.com/image.jpg'
      }
    })
  })
};

// Log that we're using mocks
console.log('Using mock Firebase implementation');
