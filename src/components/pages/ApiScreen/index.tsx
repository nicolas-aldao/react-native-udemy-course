import React, {useState} from 'react';
import {FlatList} from 'react-native';
import CustomButton from '../../atoms/CustomButton';
import CustomText from '../../atoms/CustomText';
import BasicLayout from '../../layouts/BasicLayout';
import {apiCall} from '../../../services/apiMethods';
import ImageDetailsUri from '../../organisms/ImageDetailsUri';

const ApiScreen = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onPressButton = async () => {
    setLoading(true);
    try {
      const data = await apiCall();
      let cardsValue = [];
      cardsValue = data.data.records;
      for (var element of cardsValue) {
        setCards(prevState => [...prevState, element.baseimageurl]);
      }
    } catch (err) {
      setError(err.Message);
    }
    setLoading(false);
  };

  return (
    <BasicLayout title="API Example" marginLeft={0} horizontalCenteredItems>
      <>
        <CustomButton
          title="Call API"
          onPress={async () => {
            await onPressButton();
          }}
        />
        {loading && <CustomText>loading...</CustomText>}
        {!loading && cards !== undefined && (
          <FlatList
            data={cards}
            renderItem={({item}) => {
              return (
                <ImageDetailsUri
                  title=""
                  imageSource={`${item}?height=200&width=200`}
                  width={200}
                  height={200}
                />
              );
            }}
          />
        )}
        {error && <CustomText>{error}</CustomText>}
      </>
    </BasicLayout>
  );
};

export default ApiScreen;
