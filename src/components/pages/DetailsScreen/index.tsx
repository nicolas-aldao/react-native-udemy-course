import React, { useContext, useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import { AppContext } from '../../../context/AppContext';
import CustomText from '../../atoms/CustomText';
import yelp from '../../../services/yelp';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen: React.FC<DetailsProps> = ({
  route: {
    params: { id },
  },
}) => {
  const [result, setResult] = useState(null);
  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  const value = useContext(AppContext);

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <CustomText>{result.name}</CustomText>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
      <CustomText>{value.toString()}</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default DetailsScreen;
