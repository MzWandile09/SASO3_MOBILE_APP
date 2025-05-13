//SASO3 Mobile App/src/components/common/Buttons.js
import {TouchableOpacity, Text, StyleSheet} from 'react-native'; // 1. Added StyleSheet
import React from 'react';
import {Colors} from '../constants/colors';

// Fixed component with StyleSheet
const Button = ({title}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

// Add styles
const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 8,
  },
  text: {
    color: Colors.onPrimary, // 2. Added trailing comma
  },
});
export default Button;
