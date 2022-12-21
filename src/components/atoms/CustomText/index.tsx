import React from 'react';
import {Text, StyleSheet, useColorScheme} from 'react-native';

interface Props {
  children: string;
  style?: {[key: string]: string | number};
  titleStyle?: boolean;
  mb?: number;
}

const CustomText: React.FC<Props> = ({children, titleStyle, mb}, props) => {
  const marginBottom = {marginBottom: mb ? mb : 0};
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Text
      style={[
        isDarkMode ? styles.textLight : styles.textDark,
        titleStyle ? styles.title : styles.empty,
        marginBottom,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  textDark: {
    color: 'black',
  },
  textLight: {
    color: 'black',
  },
  title: {
    fontSize: 25,
    marginBottom: 10,
    textAlign: 'center',
  },
  empty: {},
});

export default CustomText;

CustomText.defaultProps = {
  style: undefined,
  titleStyle: undefined,
  mb: undefined,
};
