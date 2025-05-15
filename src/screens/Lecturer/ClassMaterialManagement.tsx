// src/screens/ClassMaterialManagement.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function ClassMaterialManagement() {
    const [materials, setMaterials] = useState<Array<{ id: string; title: string; link: string }>>([]);
    const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  const addMaterial = () => {
    if (title && link) {
      setMaterials([...materials, { id: Date.now().toString(), title, link }]);
      setTitle('');
      setLink('');
    }
  };

  const deleteMaterial = (id: string) => {
    setMaterials(materials.filter(m => m.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Manage Class Materials</Text>

      <TextInput style={styles.input} placeholder="Title" value={title} onChangeText={setTitle} />
      <TextInput style={styles.input} placeholder="Link (e.g., Google Drive)" value={link} onChangeText={setLink} />
      <Button title="Add Material" onPress={addMaterial} />

      <FlatList
        data={materials}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.link}</Text>
            <Button title="Delete" onPress={() => deleteMaterial(item.id)} />
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
  title: { fontWeight: 'bold' },
});
