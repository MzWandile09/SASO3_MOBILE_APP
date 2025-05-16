import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

interface FAQItemData {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItemData[] = [
  {
    id: '1',
    question: 'How do I mark my attendance?',
    answer:
      'You can mark your attendance by tapping the "Mark Attendance" button on the Attendance page. Ensure you do it at the beginning of your class session.',
  },
  {
    id: '2',
    question: 'What do I do if I miss a class?',
    answer:
      'If you miss a class, please contact your instructor for details on catching up or arranging a makeup session. Check any available class recordings as well.',
  },
  {
    id: '3',
    question: 'How can I view my grades?',
    answer:
      'Your grades are displayed on the Dashboard page where you can see your performance across different subjects. You can also check detailed reports in your profile.',
  },
  {
    id: '4',
    question: 'How do I schedule a class or consultation session?',
    answer:
      'Use the Schedule page to pick a date and time for a class or a consultation session. Your request will show as pending until approved by a tutor.',
  },
  {
    id: '5',
    question: 'Who do I contact for technical support?',
    answer:
      'If you encounter any technical issues with the app, please reach out to the IT support team via the "Contact Us" section on the top navigation bar.',
  },
  {
    id: '6',
    question: 'How do I update my student profile information?',
    answer:
      'To update your profile, navigate to the Profile section from the app menu. There you can update your personal and academic details.',
  },
  {
    id: '7',
    question: 'Where can I find the course curriculum and study materials?',
    answer:
      'The course curriculum is available on the Schedule page, while additional study materials can be found in the Resources section (if available) or via your institution’s portal.',
  },
  {
    id: '8',
    question: 'What happens if my scheduled class is rejected or rescheduled?',
    answer:
      'If your scheduled class is rejected or needs rescheduling, you will receive an update on your Dashboard. Please check notifications for further instructions.',
  },
  {
    id: '9',
    question: 'How do I check the exam timetable?',
    answer:
      'Exam timetables will be posted on the Dashboard and communicated by your institution. Keep an eye on the Notices section for updates.',
  },
];

interface FAQItemProps {
  item: FAQItemData;
}

const FAQItem: React.FC<FAQItemProps> = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.faqItem}>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text style={styles.question}>{item.question}</Text>
      </TouchableOpacity>
      {expanded && <Text style={styles.answer}>{item.answer}</Text>}
    </View>
  );
};

const StudentFAQScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.faqContainer}>
        <Text style={styles.header}>Student FAQ</Text>
        {faqData.map((item) => (
          <FAQItem key={item.id} item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default StudentFAQScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#e6f2ff', padding: 16 },
  faqContainer: { paddingBottom: 16 },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
    color: '#002244',
  },
  faqItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  question: { fontSize: 18, fontWeight: '600', color: '#333' },
  answer: { fontSize: 16, color: '#555', marginTop: 8 },
});
