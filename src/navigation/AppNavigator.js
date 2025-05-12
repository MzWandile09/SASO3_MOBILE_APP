import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import LoginScreen from '../screens/auth/LoginScreen';
import TutorLoginScreen from '../screens/auth/TutorLoginScreen';
import ScheduleScreen from '../screens/tutor/ScheduleScreen';
import TutorScheduleScreen from '../screens/tutor/TutorScheduleScreen';
import BlankScreen from '../screens/tutor/BlankScreen';
import TutorBlankScreen from '../screens/tutor/TutorBlankScreen';
import FAQScreen from '../screens/tutor/FAQScreen';
import TutorFAQScreen from '../screens/tutor/TutorFAQScreen';

// Stacks
import AuthStack from '../navigation/AuthStack';
import StudentStack from '../navigation/StudentStack';
import TutorStack from '../navigation/TutorStack';
import AdminStack from '../navigation/AdminStack';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        {/* Authentication Screens */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="TutorLogin" component={TutorLoginScreen} />
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={{
            headerTitle: 'SASO 3 Mobile Application',
            headerShown: true,
          }}
        />

        {/* Student Portal */}
        <Stack.Screen
          name="Student"
          component={StudentStack}
          options={{headerTitle: 'Student Portal', headerShown: true}}
        />

        {/* Tutor Portal */}
        <Stack.Screen
          name="Tutor"
          component={TutorStack}
          options={{headerTitle: 'Tutor Portal', headerShown: true}}
        />
        <Stack.Screen name="Schedule" component={ScheduleScreen} />
        <Stack.Screen name="TutorSchedule" component={TutorScheduleScreen} />
        <Stack.Screen name="Blank" component={BlankScreen} />
        <Stack.Screen name="TutorBlank" component={TutorBlankScreen} />
        <Stack.Screen name="FAQ" component={FAQScreen} />
        <Stack.Screen name="TutorFAQ" component={TutorFAQScreen} />

        {/* Admin Portal */}
        <Stack.Screen
          name="Admin"
          component={AdminStack}
          options={{headerTitle: 'Admin Portal', headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
