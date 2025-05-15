import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type LecturerStackParamList = {
  LecturerDashboard: undefined;
  FaqManagement: undefined;
  NotificationManagement: undefined;
  ClassMaterialManagement: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<LecturerStackParamList, 'LecturerDashboard'>;
};

export default function LecturerDashboard({ navigation }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Lecturer Dashboard</Text>
      <Button title="Manage FAQs" onPress={() => navigation.navigate('FaqManagement')} />
      <Button title="Manage Notifications" onPress={() => navigation.navigate('NotificationManagement')} />
      <Button title="Manage Class Materials" onPress={() => navigation.navigate('ClassMaterialManagement')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
