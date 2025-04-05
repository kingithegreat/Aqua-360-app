import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#21605A',
  secondary: '#5AD8DA',
  white: '#FFFFFF',
  darkGrey: '#333333',
  grey: '#AAAAAA',
  lightGrey: '#F5F5F5',
  placeholderText: '#CCCCCC',
  textDark: '#222222', // Darker text for better contrast
};

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    padding: 15,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.secondary,
  },
  headerContainer: {
    backgroundColor: colors.primary,
    padding: 15,
    paddingTop: 40,
    paddingBottom: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18, // Increased from 16
    fontWeight: 'bold',
    letterSpacing: 0.5, // Adds slight spacing between letters
  },
  input: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 5,
    padding: 12, // Increased padding for text input
    marginBottom: 15,
    backgroundColor: colors.white,
    fontSize: 16, // Explicit font size for inputs
  },
  header: {
    fontSize: 26, // Increased from 24
    color: colors.white,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  text: {
    fontSize: 17, // Increased from 16
    color: colors.white,
    marginBottom: 12, // Increased from 10
    lineHeight: 24, // Added line height for better readability
  },
  // Adding more global text styles for consistency
  labelText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.primary,
    marginBottom: 8,
  },
  paragraphText: {
    fontSize: 17,
    lineHeight: 26,
    color: colors.darkGrey,
    marginBottom: 15,
  },
});

export default globalStyles;
