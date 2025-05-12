import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Colors} from '../constants/colors';
import App from './src/app/App';

// Screens
const LoginScreen = () => (
  <View style={styles.container}>
    <Text>Welcome to SASO3 Mobile App!</Text>
    <Image
      source={require('../assets/images/tut_logo.png')}
      style={styles.image}
    />
  </View>
);

const ScheduleScreen = () => (
  <View style={styles.container}>
    <Text>Schedule Screen</Text>
  </View>
);

const BlankScreen = () => (
  <View style={styles.container}>
    <Text>Blank Screen</Text>
  </View>
);

const FAQScreen = () => (
  <View style={styles.container}>
    <Text>FAQ Screen</Text>
  </View>
);

const Stack = createNativeStackNavigator();

const theme = {
  colors: {
    primary: Colors.primary,
    secondary: Colors.secondary,
    surface: Colors.surface,
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Schedule" component={ScheduleScreen} />
          <Stack.Screen name="Blank" component={BlankScreen} />
          <Stack.Screen name="FAQ" component={FAQScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default App;
