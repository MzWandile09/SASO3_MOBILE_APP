import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function ScheduleScreen({navigation}) {
  const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>TUTOR DASHBOARD</Text>
      </View>
      <ScrollView style={styles.card}>
        <Text style={styles.title}>TUTORIAL SCHEDULE</Text>
        {days.map(day => (
          <View key={day} style={styles.row}>
            <Text>{day}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>ADD</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>VIEW</Text>
            </TouchableOpacity>
          </View>
        ))}
        <TouchableOpacity
          style={styles.buttonNav}
          onPress={() => navigation.navigate('Blank')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white', paddingTop: 50},
  header: {alignItems: 'center', padding: 10, borderBottomWidth: 1},
  headerText: {fontWeight: 'bold', fontSize: 16},
  card: {backgroundColor: '#ccc', margin: 20, padding: 20, borderRadius: 10},
  title: {fontWeight: 'bold', marginBottom: 10},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    gap: 10,
  },
  button: {backgroundColor: 'black', padding: 10, borderRadius: 5},
  buttonText: {color: 'white'},
  buttonNav: {
    marginTop: 20,
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
});
