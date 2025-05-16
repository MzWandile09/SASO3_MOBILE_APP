import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

interface SchedulingStats {
  total: number;
  pending: number;
  approved: number;
  rejected: number;
}

const DashboardScreen: React.FC = () => {
  // This state simulates scheduling information.
  // In practice, you could fetch these numbers from an API, Redux store, or Context.
  const [schedulingStats, setSchedulingStats] = useState<SchedulingStats>({
    total: 0,
    pending: 0,
    approved: 0,
    rejected: 0,
  });

  // Simulate fetching scheduling stats when the component mounts.
  useEffect(() => {
    // Replace this with your actual data fetching logic.
    const fetchSchedulingData = () => {
      const data: SchedulingStats = {
        total: 5,
        pending: 3,
        approved: 1,
        rejected: 1,
      };
      setSchedulingStats(data);
    };

    fetchSchedulingData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Dashboard</Text>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Attendance Today</Text>
          <Text style={styles.cardData}>Present: 3 / Absent: 1</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Upcoming Classes</Text>
          <Text style={styles.cardData}>3 Classes</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Notices</Text>
          <Text style={styles.cardData}>2 New</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Scheduled Classes</Text>
          <Text style={styles.cardData}>
            Total: {schedulingStats.total}{'\n'}
            Pending: {schedulingStats.pending}{'\n'}
            Approved: {schedulingStats.approved}{'\n'}
            Rejected: {schedulingStats.rejected}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f7ff',
    padding: 16,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
    color: '#003366',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    width: '48%',
    marginBottom: 16,
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  cardData: {
    fontSize: 16,
    color: '#666',
  },
});
