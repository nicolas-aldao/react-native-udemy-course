import React from 'react';
import { View } from 'react-native';
import CustomButton from '../CustomButton';

const ColorCounter = ({
  color = String,
  onIncrease = () => {},
  onDecrease = () => {},
}) => {
  return (
    <View>
      <CustomButton title={`Increase ${color}`} onPress={() => onIncrease()} />
      <CustomButton title={`Decrease ${color}`} onPress={() => onDecrease()} />
    </View>
  );
};

export default ColorCounter;
