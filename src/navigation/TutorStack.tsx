// src/navigation/TutorStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TutorDashboard from '../screens/tutor/TutorDashboard';
import SessionScheduling from '../screens/tutor/SessionScheduling';
import TutorFAQScreen from '../screens/tutor/TutorFAQScreen';

const Stack = createStackNavigator();

const TutorStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TutorDashboard" component={TutorDashboard} />
      <Stack.Screen name="SessionScheduling" component={SessionScheduling} />
      <Stack.Screen name="TutorFAQ" component={TutorFAQScreen} />
    </Stack.Navigator>
  );
};

export default TutorStack;
