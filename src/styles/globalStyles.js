import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#21605A',
  secondary: '#5AD8DA',
  white: '#FFFFFF',
  darkGrey: '#333333',
  grey: '#AAAAAA',
  lightGrey: '#F5F5F5',
  placeholderText: '#CCCCCC',
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: colors.white,
  },
  header: {
    fontSize: 24,
    color: colors.white,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: colors.white,
    marginBottom: 10,
  },
});

export default globalStyles;
