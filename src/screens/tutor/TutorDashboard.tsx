// src/screens/tutor/TutorDashboard.js
import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { Header, AttendanceProgress, ScheduleItem } from '../../components';
import { colors } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSchedule, getAttendance } from '../../redux/actions';
import { GlobalStyles } from '../../styles';

const TutorDashboard = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user, schedule, attendance } = useSelector(state => state.tutor);

  useEffect(() => {
    dispatch(fetchSchedule());
    dispatch(getAttendance());
    if (!user?.bioVerified) {
      navigation.navigate('BioVerification');
    }
  }, [dispatch, navigation, user?.bioVerified]);

  return (
    <View style={GlobalStyles.container}>
      <Header
        title="Tutor Dashboard"
        showNotification={true}
        onProfilePress={() => navigation.navigate('ProfileSettings')}
      />
      <ScrollView>
        {/* Attendance Summary */}
        <AttendanceProgress
          current={attendance?.attended}
          total={attendance?.total}
          style={GlobalStyles.card}
        />
        {/* Class Schedule */}
        <View style={GlobalStyles.section}>
          <Header.Subtitle>Today's Schedule</Header.Subtitle>
          {schedule.map((item, index) => (
            <ScheduleItem
              key={index}
              time={item.time}
              course={item.course}
              location={item.location}
              status={item.status}
            />
          ))}
        </View>
        {/* Quick Actions */}
        <View style={GlobalStyles.row}>
          <TouchableOpacity
            style={[GlobalStyles.button, { backgroundColor: colors.primary }]}
            onPress={() => navigation.navigate('SessionScheduling')}>
            <Header.Subtitle style={{ color: colors.white }}>Manage Schedule</Header.Subtitle>
          </TouchableOpacity>
          <TouchableOpacity
            style={[GlobalStyles.button, { backgroundColor: colors.secondary }]}
            onPress={() => navigation.navigate('TutorFAQ')}>
            <Header.Subtitle style={{ color: colors.white }}>FAQs</Header.Subtitle>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default TutorDashboard;
