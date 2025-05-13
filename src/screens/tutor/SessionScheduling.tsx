// src/screens/tutor/SessionScheduling.js
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const SessionScheduling = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tutorial Schedule</Text>
      <ScrollView>
        {days.map((day) => (
          <View key={day} style={styles.row}>
            <Text style={styles.day}>{day}</Text>
            <TouchableOpacity
              style={[styles.btn, { backgroundColor: '#6750A4' }]}
              onPress={() => alert(`Add session for ${day}`)}>
              <Text style={styles.btnText}>ADD</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, { backgroundColor: '#21005E' }]}
              onPress={() => alert(`View session for ${day}`)}>
              <Text style={styles.btnText}>VIEW</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default SessionScheduling;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  day: {
    fontSize: 16,
    fontWeight: '500',
  },
  btn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
