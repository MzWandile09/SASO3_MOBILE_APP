// src/screens/student/StudentFAQScreen.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const StudentFAQScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>

        {/* Question 1 */}
        <Text style={styles.question}>Q: How do I reset my student portal password?</Text>
        <Text style={styles.answer}>
          A: Go to Settings > Account > Reset Password or contact IT support.
        </Text>

        {/* Question 2 */}
        <Text style={styles.question}>Q: Where can I find my class schedule?</Text>
        <Text style={styles.answer}>
          Your full schedule is in the Class Schedule section of this dashboard.
        </Text>

        {/* Add more questions as needed */}
      </ScrollView>
    </View>
  );
};

export default StudentFAQScreen;

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
