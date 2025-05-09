import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from '../navigation/AuthStack';
import StudentStack from '../navigation/StudentStack';
import TutorStack from '../navigation/TutorStack';
import AdminStack from '../navigation/AdminStack';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen 
          name="Auth" 
          component={AuthStack} 
          options={{ 
            headerTitle: 'SASO 3 Mobile Application', 
            headerShown: true 
          }} 
        />
        <Stack.Screen 
          name="Student" 
          component={StudentStack} 
          options={{ 
            headerTitle: 'Student Portal',
            headerShown: true 
          }} 
        />
        <Stack.Screen 
          name="Tutor" 
          component={TutorStack} 
          options={{ 
            headerTitle: 'Tutor Portal',
            headerShown: true 
          }} 
        />
        <Stack.Screen 
          name="Admin" 
          component={AdminStack} 
          options={{ 
            headerTitle: 'Admin Portal',
            headerShown: true 
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
