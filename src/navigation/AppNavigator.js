import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import BookingScreen from '../screens/BookingScreen';
import AIAssistantScreen from '../screens/AIAssistantScreen';
import ReviewsScreen from '../screens/ReviewsScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import WaiverScreen from '../screens/WaiverScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="AI Assistant" component={AIAssistantScreen} />
        <Stack.Screen name="Reviews" component={ReviewsScreen} />
        <Stack.Screen name="About Us" component={AboutUsScreen} />
        <Stack.Screen name="Waiver" component={WaiverScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
