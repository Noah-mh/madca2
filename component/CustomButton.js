import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default CustomButton = ({
  backgroundColor,
  marginBottom,
  onPress,

  color,
  text,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor,
          marginBottom,
        },
      ]}
      onPress={() => {
        onPress();
      }}>
      <Text style={[styles.buttonText, { color }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    borderWidth: 2,
    alignItems: 'center',
    width: 280,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});
