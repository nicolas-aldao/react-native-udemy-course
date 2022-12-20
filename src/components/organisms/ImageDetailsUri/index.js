import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import CustomText from '../../atoms/CustomText';

const ImageDetailsUri = ({ title, width, height, imageSource }) => {
  return (
    <View>
      {title && <CustomText mb={7}>{title}</CustomText>}
      <Image
        source={{ uri: imageSource }}
        style={[{ width: width, height: height }, styles.imageStyle]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default ImageDetailsUri;
