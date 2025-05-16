// ScheduleScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Modal,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export type Status = 'Pending' | 'Approved' | 'Rejected';

export interface Module {
  code: string;
  title: string;
  level: number;
  credits: number;
  prerequisite?: string;
}

export interface ScheduledClass {
  id: string;
  module: Module;
  date: string;
  time: string;
  status: Status;
}

interface Semester {
  semester: string;
  modules: Module[];
  totalCredits: number;
}

interface YearSchedule {
  year: string;
  modules?: Module[];
  semesters?: Semester[];
  totalCredits: number;
}

// Dummy curriculum data; add additional years/semesters as needed.
const scheduleData: YearSchedule[] = [
  {
    year: 'First Year',
    modules: [
      { code: 'CAPF05X', title: 'Communication for Academic Purposes', level: 5, credits: 10 },
      { code: 'CFAF05D', title: 'Computing Fundamentals A', level: 5, credits: 15 },
      { code: 'COHF05D', title: 'Computational Mathematics', level: 5, credits: 15 },
      { code: 'INFF25D', title: 'Information Literacy (block module)', level: 5, credits: 3 },
      { code: 'LFSF25X', title: 'Life Skills (block module)', level: 5, credits: 2 },
      { code: 'PPAF05D', title: 'Principles of Programming A', level: 5, credits: 15 },
    ],
    totalCredits: 60,
  },
  // Additional years/semesters can be added here.
];

interface ScheduleScreenProps {
  scheduledClasses: ScheduledClass[];
  addScheduledClass: (newClass: ScheduledClass) => void;
}

interface ModuleItemProps {
  module: Module;
  onSchedule: (module: Module) => void;
}

const ModuleItem: React.FC<ModuleItemProps> = ({ module, onSchedule }) => (
  <View style={styles.moduleItem}>
    <Text style={styles.moduleCode}>{module.code}</Text>
    <View style={styles.moduleDetails}>
      <Text style={styles.moduleTitle}>{module.title}</Text>
      <Text style={styles.moduleInfo}>
        NQF-L: {module.level} | Credits: {module.credits}
        {module.prerequisite ? ` | Pre-req: ${module.prerequisite}` : ''}
      </Text>
      <TouchableOpacity style={styles.scheduleButton} onPress={() => onSchedule(module)}>
        <Text style={styles.scheduleButtonText}>Schedule Class</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const ScheduleScreen: React.FC<ScheduleScreenProps> = ({ scheduledClasses, addScheduledClass }) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);

  // Date objects that store the chosen date and time.
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  // Controls for picking date and time.
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [showTimePicker, setShowTimePicker] = useState<boolean>(false);

  const handleSchedule = (module: Module) => {
    setSelectedModule(module);
    setSelectedDate(null);
    setSelectedTime(null);
    setModalVisible(true);
  };

  const handleDateChange = (event: any, date?: Date) => {
    setShowDatePicker(false);
    if (date) {
      setSelectedDate(date);
    }
  };

  const handleTimeChange = (event: any, time?: Date) => {
    setShowTimePicker(false);
    if (time) {
      setSelectedTime(time);
    }
  };

  const confirmSchedule = () => {
    if (selectedModule && selectedDate && selectedTime) {
      // Format date to YYYY-MM-DD and time (HH:MM in 24-hour format)
      const dateString = selectedDate.toISOString().split('T')[0];
      const timeString = selectedTime.toTimeString().split(' ')[0].substring(0, 5);

      const newScheduledClass: ScheduledClass = {
        id: Date.now().toString(),
        module: selectedModule,
        date: dateString,
        time: timeString,
        status: 'Pending',
      };

      addScheduledClass(newScheduledClass);
      Alert.alert(
        'Class Scheduled',
        `Module ${selectedModule.code} - ${selectedModule.title}\nis scheduled on ${dateString} at ${timeString} (Status: Pending).`
      );
      setSelectedModule(null);
      setSelectedDate(null);
      setSelectedTime(null);
      setModalVisible(false);
    } else {
      Alert.alert('Error', 'Please select both a date and time.');
    }
  };

  const cancelSchedule = () => {
    setSelectedModule(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Curriculum Schedule</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {scheduleData.map((yearData, index) => (
          <View key={index} style={styles.yearSection}>
            <Text style={styles.yearHeader}>
              {yearData.year} (Total Credits: {yearData.totalCredits})
            </Text>
            {yearData.modules &&
              yearData.modules.map((module, idx) => (
                <ModuleItem key={idx} module={module} onSchedule={handleSchedule} />
              ))}
            {yearData.semesters &&
              yearData.semesters.map((semesterData, semIndex) => (
                <View key={semIndex} style={styles.semesterSection}>
                  <Text style={styles.semesterHeader}>
                    {semesterData.semester} (Credits: {semesterData.totalCredits})
                  </Text>
                  {semesterData.modules.map((module, modIndex) => (
                    <ModuleItem key={modIndex} module={module} onSchedule={handleSchedule} />
                  ))}
                </View>
              ))}
          </View>
        ))}
        {scheduledClasses.length > 0 && (
          <View style={styles.scheduledContainer}>
            <Text style={styles.scheduledHeader}>My Scheduled Classes</Text>
            {scheduledClasses.map((sc) => (
              <View key={sc.id} style={styles.scheduledItem}>
                <Text style={styles.scheduledModule}>
                  {sc.module.code} - {sc.module.title}
                </Text>
                <Text style={styles.scheduledDetails}>
                  Date: {sc.date} | Time: {sc.time} | Status: {sc.status}
                </Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      {/* Scheduling Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Schedule Class</Text>
            {selectedModule && (
              <View style={styles.previewCard}>
                <Text style={styles.previewModule}>
                  {selectedModule.code} - {selectedModule.title}
                </Text>
                <Text style={styles.previewText}>
                  {selectedDate
                    ? `Date: ${selectedDate.toLocaleDateString()}`
                    : 'No Date Selected'}
                </Text>
                <Text style={styles.previewText}>
                  {selectedTime
                    ? `Time: ${selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
                    : 'No Time Selected'}
                </Text>
              </View>
            )}
            <TouchableOpacity style={styles.dateTimeButton} onPress={() => setShowDatePicker(true)}>
              <Text style={styles.dateTimeButtonText}>
                {selectedDate ? 'Change Date' : 'Select Date'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dateTimeButton} onPress={() => setShowTimePicker(true)}>
              <Text style={styles.dateTimeButtonText}>
                {selectedTime ? 'Change Time' : 'Select Time'}
              </Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={selectedDate || new Date()}
                mode="date"
                display="default"
                onChange={handleDateChange}
                minimumDate={new Date()}
              />
            )}
            {showTimePicker && (
              <DateTimePicker
                value={selectedTime || new Date()}
                mode="time"
                display="default"
                onChange={handleTimeChange}
              />
            )}
            <View style={styles.modalButtons}>
              <Button title="Confirm" onPress={confirmSchedule} />
              <Button title="Cancel" onPress={cancelSchedule} color="#cc0000" />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ScheduleScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  scrollContainer: { paddingBottom: 16 },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
    color: '#333',
  },
  yearSection: { marginBottom: 20 },
  yearHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#004080',
  },
  semesterSection: { marginLeft: 10, marginBottom: 10 },
  semesterHeader: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    color: '#0066cc',
  },
  moduleItem: {
    flexDirection: 'row',
    backgroundColor: '#f4f4f4',
    padding: 8,
    borderRadius: 5,
    marginBottom: 8,
  },
  moduleCode: { fontWeight: 'bold', color: '#333', width: 100 },
  moduleDetails: { flex: 1, paddingLeft: 10 },
  moduleTitle: { fontSize: 16, fontWeight: '600', color: '#333' },
  moduleInfo: { fontSize: 14, color: '#555' },
  scheduleButton: {
    marginTop: 8,
    backgroundColor: '#007bff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  scheduleButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  scheduledContainer: {
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  scheduledHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  scheduledItem: {
    backgroundColor: '#e0f7fa',
    padding: 10,
    marginBottom: 8,
    borderRadius: 5,
  },
  scheduledModule: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  scheduledDetails: {
    fontSize: 14,
    color: '#555',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  modalModule: { fontSize: 18, marginBottom: 20, textAlign: 'center' },
  previewCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '100%',
    alignItems: 'center',
  },
  previewModule: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  previewText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
  dateTimeButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginBottom: 10,
    width: '90%',
    alignItems: 'center',
  },
  dateTimeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginTop: 10,
  },
});
