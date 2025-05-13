// src/redux/actions/StudentActions.js
import attendanceService from '../../services/attendanceService'; // Add missing import

export const fetchSchedule = () => async dispatch => {
  try {
    const response = await attendanceService.getSchedule();
    dispatch({ type: 'SET_SCHEDULE', payload: response.data });
  } catch (error) {
    console.error('Error fetching schedule:', error);
  }
};

export const getAttendance = () => async dispatch => {
  try {
    const response = await attendanceService.getAttendance();
    dispatch({ type: 'SET_ATTENDANCE', payload: response.data });
  } catch (error) {
    console.error('Error fetching attendance:', error);
  }
};
// Add newline at end of file