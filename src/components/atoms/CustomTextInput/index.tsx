import React from 'react';
import { TextInput, StyleSheet, useColorScheme } from 'react-native';

interface Props {
  children: string | number;
  style?: { [key: string]: string | number };
  inputStyle?: boolean;
  mb?: number;
}

const CustomTextInput: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <TextInput
      style={[isDarkMode ? styles.textLight : styles.textDark, styles.input]}
    />
  );
};

const styles = StyleSheet.create({
  textDark: {
    color: 'black',
  },
  textLight: {
    color: 'black',
  },
  input: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
    borderColor: 'rgb(50,50,50)',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 60,
  },
  empty: {},
});

export default CustomTextInput;

CustomTextInput.defaultProps = {
  style: undefined,
  inputStyle: undefined,
  mb: undefined,
};
