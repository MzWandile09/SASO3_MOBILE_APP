// src/screens/tutor/TutorFAQScreen.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const TutorFAQScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
        <Text style={styles.question}>Q: How do I add a new session?</Text>
        <Text style={styles.answer}>A: Tap "ADD" next to the desired day.</Text>

        <Text style={styles.question}>Q: Can I edit an existing session?</Text>
        <Text style={styles.answer}>A: Yes, navigate to the session and tap "Edit".</Text>
      </ScrollView>
    </View>
  );
};

export default TutorFAQScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  question: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  answer: {
    marginBottom: 10,
  },
});
