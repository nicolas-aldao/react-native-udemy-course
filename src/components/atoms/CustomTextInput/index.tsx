import React from 'react';
import { TextInput, StyleSheet, useColorScheme } from 'react-native';

interface Props {
  value?: string;
  onChangeText?: (val: string) => void;
}

const CustomTextInput: React.FC<Props> = ({ value, onChangeText }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <TextInput
      style={[isDarkMode ? styles.textLight : styles.textDark, styles.input]}
      autoCapitalize="none"
      autoCorrect={false}
      value={value}
      onChangeText={onChangeText}
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
  value: undefined,
  onChangeText: undefined,
};
