import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import CustomText from '../../atoms/CustomText';

const ImageDetails = ({ title, imageSource }) => {
  return (
    <View>
      <CustomText mb={7}>{title}</CustomText>
      <Image source={imageSource} style={styles.imageStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default ImageDetails;
