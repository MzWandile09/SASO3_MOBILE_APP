import React from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';

const attendanceData = [
  { id: '1', date: '2025-05-13', status: 'Present' },
  { id: '2', date: '2025-05-14', status: 'Absent' },
  { id: '3', date: '2025-05-15', status: 'Present' },
];

const AttendanceScreen = ({ navigation }) => {
  const renderItem = ({ item }: { item: { id: string; date: string; status: string } }) => (
    <View style={styles.attendanceItem}>
      <Text style={styles.itemDate}>{item.date}</Text>
      <Text style={[styles.itemStatus, item.status === 'Present' ? styles.present : styles.absent]}>
        {item.status}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Attendance</Text>
      <FlatList
        data={attendanceData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 16,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
    color: '#333',
  },
  listContainer: {
    paddingBottom: 16,
  },
  attendanceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  itemDate: {
    fontSize: 18,
    color: '#333',
  },
  itemStatus: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  present: {
    color: 'green',
  },
  absent: {
    color: 'red',
  },
});

export default AttendanceScreen;
