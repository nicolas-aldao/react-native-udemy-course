import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
}

const CustomButton: React.FC<Props> = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.buttonStyle}
      activeOpacity={0.9}
      onPress={onPress}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    marginVertical: 10,
    height: 50,
    width: 200,
    backgroundColor: '#6C4AB6',
    font: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
  },
});

export default CustomButton;

CustomButton.defaultProps = {};
