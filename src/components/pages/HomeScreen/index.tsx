import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import {
  //NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import BasicLayout from '../../layouts/BasicLayout';
import CustomButton from '../../atoms/CustomButton';

type RootStackParamList = {
  Home: undefined;
};

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  //TODO: Pass files js to ts
  const options = [
    'Components',
    'List',
    'Images',
    'Counter',
    'Color',
    'Redux',
    'Api',
    'Digimon',
    'ChangeColor',
  ];
  return (
    <BasicLayout marginLeft={0} title="Inicio">
      <View style={styles.mainContainer}>
        <FlatList
          data={options}
          renderItem={({ item }) => {
            return (
              <CustomButton
                onPress={() => navigation.navigate(item)}
                title={item}
              />
            );
          }}
        />
      </View>
    </BasicLayout>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;

HomeScreen.defaultProps = {};
