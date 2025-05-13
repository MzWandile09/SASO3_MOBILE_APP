// src/navigation/StudentStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/native-stack';
import DashboardScreen from '../screens/student/DashboardScreen';
import ClassScheduleScreen from '../screens/student/ClassScheduleScreen';
import StudentFAQScreen from '../screens/student/StudentFAQScreen';

const Stack = createStackNavigator();

const StudentStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="ClassSchedule" component={ClassScheduleScreen} />
      <Stack.Screen name="StudentFAQ" component={StudentFAQScreen} />
    </Stack.Navigator>
  );
};

export default StudentStack;
