// src/navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/auth/LoginScreen';
import TutorLoginScreen from '../screens/auth/TutorLoginScreen';
import StudentStack from '../navigation/StudentStack';
import TutorStack from '../navigation/TutorStack';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}>
        {/* Authentication Screens */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="TutorLogin" component={TutorLoginScreen} />

        {/* Student Portal */}
        <Stack.Screen
          name="Student"
          component={StudentStack}
          options={{ headerTitle: 'Student Portal', headerShown: true }}
        />

        {/* Tutor Portal */}
        <Stack.Screen
          name="Tutor"
          component={TutorStack}
          options={{ headerTitle: 'Tutor Portal', headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
