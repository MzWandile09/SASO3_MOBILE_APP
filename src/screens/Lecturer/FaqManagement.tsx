// src/screens/FaqManagement.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function FaqManagement() {
  const [faqs, setFaqs] = useState([{ id: '1', question: 'How do I mark attendance?', answer: 'Go to the class page and tap "Mark Attendance".' }]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const addFaq = () => {
    if (question && answer) {
      setFaqs([...faqs, { id: Date.now().toString(), question, answer }]);
      setQuestion('');
      setAnswer('');
    }
  };

  const deleteFaq = (id: string) => {
    setFaqs(faqs.filter(f => f.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Manage FAQs</Text>

      <TextInput style={styles.input} placeholder="Question" value={question} onChangeText={setQuestion} />
      <TextInput style={styles.input} placeholder="Answer" value={answer} onChangeText={setAnswer} />
      <Button title="Add FAQ" onPress={addFaq} />

      <FlatList
        data={faqs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.faqItem}>
            <Text style={styles.question}>{item.question}</Text>
            <Text>{item.answer}</Text>
            <Button title="Delete" onPress={() => deleteFaq(item.id)} />
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
  faqItem: { marginTop: 10, backgroundColor: '#eee', padding: 10, borderRadius: 5 },
  question: { fontWeight: 'bold' },
});
