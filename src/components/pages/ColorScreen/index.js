import React, { useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import BasicLayout from '../../layouts/BasicLayout';
import CustomButtom from '../../atoms/CustomButton';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <BasicLayout title="Color">
      <CustomButtom
        title="Add a color"
        onPress={() => {
          if (colors.length < 10) {
            setColors([...colors, randomRGB()]);
          }
        }}
      />
      <FlatList
        data={colors}
        horizontal={true}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: item,
              }}></View>
          );
        }}
      />
      {colors.length === 10 && <Text>Max number of color reached!</Text>}
    </BasicLayout>
  );
};

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

export default ColorScreen;
