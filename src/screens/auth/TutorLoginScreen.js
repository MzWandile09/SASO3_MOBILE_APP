import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function TutorLoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>TUTOR DASHBOARD</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>EMAIL</Text>
        <TextInput style={styles.input} placeholder="Enter email" />
        <Text style={styles.label}>PASSWORD</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TutorSchedule')}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white', paddingTop: 50},
  header: {alignItems: 'center', padding: 10, borderBottomWidth: 1},
  headerText: {fontWeight: 'bold', fontSize: 16},
  card: {backgroundColor: '#ccc', margin: 20, padding: 20, borderRadius: 10},
  label: {marginTop: 10, marginBottom: 5},
  input: {backgroundColor: 'white', padding: 10, borderRadius: 5},
  button: {
    marginTop: 20,
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {color: 'white'},
});
