import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../../themes';
import CustomText from '../CustomText';

interface Props {
  navigate: () => void;
  text: string;
}

const TextLink: React.FC<Props> = ({ navigate, text }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigate();
      }}>
      <CustomText stylesFromProps={styles.link}>{text}</CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: theme.colors.link,
  },
});

export default TextLink;

TextLink.defaultProps = {};
