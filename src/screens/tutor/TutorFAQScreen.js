import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function TutorFAQScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>TUTOR DASHBOARD</Text>
      </View>
      <View style={styles.card}>
        <Text>FAQ</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white', paddingTop: 50},
  header: {alignItems: 'center', padding: 10, borderBottomWidth: 1},
  headerText: {fontWeight: 'bold', fontSize: 16},
  card: {backgroundColor: '#ccc', margin: 20, padding: 20, borderRadius: 10},
});
