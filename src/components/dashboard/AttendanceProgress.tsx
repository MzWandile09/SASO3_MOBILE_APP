// src/components/dashboard/AttendanceProgress.js
import React from 'react';
import {View, Text, ProgressBarAndroid, StyleSheet} from 'react-native';
import {colors} from '../../constants';

const styles = StyleSheet.create({
  attendanceText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

const AttendanceProgress = ({current, total, style}) => {
  const progress = current / total;

  return (
    <View style={style}>
      <Text style={styles.attendanceText}>
        Attendance: {current}/{total} sessions
      </Text>
      <ProgressBarAndroid
        styleAttr="Horizontal"
        indeterminate={false}
        progress={progress}
        color={progress >= 0.75 ? colors.success : colors.warning}
      />
    </View>
  );
};
// Add newline at end of file
export default AttendanceProgress;
