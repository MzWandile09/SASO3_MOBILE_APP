// src/screens/NotificationManagement.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function NotificationManagement() {
    const [notifications, setNotifications] = useState<Array<{ id: string; message: string }>>([]);
    const [message, setMessage] = useState('');

  const addNotification = () => {
    if (message) {
      setNotifications([...notifications, { id: Date.now().toString(), message }]);
      setMessage('');
    }
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Manage Notifications</Text>

      <TextInput style={styles.input} placeholder="Notification Message" value={message} onChangeText={setMessage} />
      <Button title="Add Notification" onPress={addNotification} />

      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.message}</Text>
            <Button title="Delete" onPress={() => deleteNotification(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, marginVertical: 5, padding: 8 },
  item: { marginTop: 10, backgroundColor: '#eee', padding: 10, borderRadius: 5 },
});
