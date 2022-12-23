import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import CustomText from '../../atoms/CustomText';

interface Props {
  title?: string;
}

const ResultDetail: React.FC<Props> = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: result.image_url }} style={styles.image} />
      <CustomText bold>{result.name}</CustomText>
      <CustomText
        restaurantDetail>{`${result.rating} Stars, ${result.review_count} Reviews`}</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 10,
    marginBottom: 5,
  },
});

export default ResultDetail;

ResultDetail.defaultProps = {
  title: undefined,
};
