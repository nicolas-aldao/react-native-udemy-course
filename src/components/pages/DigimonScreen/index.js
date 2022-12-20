import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import CustomButton from '../../atoms/CustomButton';
import CustomText from '../../atoms/CustomText';
import BasicLayout from '../../layouts/BasicLayout';
import { apiDigimon } from '../../../services/apiMethods';
import ImageDetailsUri from '../../organisms/ImageDetailsUri';

const DigimonScreen = () => {
  const [loading, setLoading] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');
  const [digimon, setDigimon] = useState({});

  const onPressButton = async idParam => {
    setLoading(true);
    const data = await apiDigimon(idParam);
    const id = data.data.id;
    const images = data.data.images[0].href;
    const name = data.data.name;
    const types = data.data.types[0].type;

    setDigimon(prevState => ({
      ...prevState,
      id: id,
      name: name,
      images: images,
      types: types,
    }));

    setLoading(false);
  };

  useEffect(() => {}, [textInputValue, digimon]);

  return (
    <BasicLayout title="Digimon Searcher" marginLeft={0}>
      <TextInput
        onChangeText={value => {
          setTextInputValue(value);
        }}
        value={textInputValue}
      />
      <CustomButton
        title="Call API"
        onPress={async () => {
          await onPressButton(textInputValue);
        }}
      />
      {loading && <CustomText>loading...</CustomText>}
      {digimon && (
        <View style={styles.viewStyle}>
          <CustomText>{digimon.id}</CustomText>
          <CustomText>{digimon.name}</CustomText>
          <ImageDetailsUri
            imageSource={digimon.images}
            width={200}
            height={200}
          />
          <CustomText>{digimon.types}</CustomText>
        </View>
      )}
    </BasicLayout>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 10,
    paddingVertical: 20,
  },
});

export default DigimonScreen;
