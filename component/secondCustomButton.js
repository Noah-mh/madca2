import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default SecondCustomButton = ({
  backgroundColor,
  marginBottom,
  onPress,

  color,
  icon,
  iconColor,
  text,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor, marginBottom }]}
      onPress={() => {
        onPress();
      }}>
      <Ionicons name={icon} size={20} color={iconColor} />
      <Text style={[styles.buttonText, { color }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    borderRadius: 20,
    padding: 10,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent:'center',
    width: 280,
  },
  buttonText: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
