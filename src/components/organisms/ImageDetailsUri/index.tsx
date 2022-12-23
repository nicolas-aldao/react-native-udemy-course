import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import CustomText from '../../atoms/CustomText';

interface Props {
  title?: string;
  width: number;
  height: number;
  imageSource: string;
}

const ImageDetailsUri: React.FC<Props> = ({
  title,
  width,
  height,
  imageSource,
}) => {
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

ImageDetailsUri.defaultProps = {
  title: undefined,
};
