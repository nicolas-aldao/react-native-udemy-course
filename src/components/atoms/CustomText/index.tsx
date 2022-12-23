import React from 'react';
import { Text, StyleSheet, useColorScheme } from 'react-native';
import { theme } from '../../../themes';

interface Props {
  children: string | number;
  style?: { [key: string]: string | number };
  titleStyle?: boolean;
  mb?: number;
  stylesFromProps?: object;
  restaurantDetail?: boolean;
  bold?: boolean;
}

const CustomText: React.FC<Props> = (
  { children, titleStyle, mb, stylesFromProps, restaurantDetail, bold },
  props,
) => {
  const marginBottom = { marginBottom: mb ? mb : 0 };
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Text
      style={[
        isDarkMode ? styles.textLight : styles.textDark,
        titleStyle ? styles.title : styles.empty,
        bold ? styles.bold : styles.empty,
        restaurantDetail ? styles.restaurantDetail : styles.empty,
        marginBottom,
        stylesFromProps,
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
  bold: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: 25,
    marginBottom: 10,
    textAlign: 'center',
  },
  restaurantDetail: {
    color: theme.colors.gray,
    fontWeight: '600',
  },
  empty: {},
});

export default CustomText;

CustomText.defaultProps = {
  style: undefined,
  titleStyle: undefined,
  mb: undefined,
  stylesFromProps: undefined,
  restaurantDetail: undefined,
  bold: undefined,
};
