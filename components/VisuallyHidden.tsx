/* eslint-disable prettier/prettier */
import {StyleSheet, Text} from 'react-native';
import React from 'react';

const VisuallyHidden = () => {
  return <Text style={styles.hiddenText}>VisuallyHidden</Text>;
};

export default VisuallyHidden;

const styles = StyleSheet.create({
  hiddenText: {
    display: 'none',
  },
});
