import React from 'react';
import { View } from 'react-native';
import CustomButton from '../CustomButton';

interface Props {
  color: string;
  onIncrease: () => void;
  onDecrease: () => void;
}

const ColorCounter: React.FC<Props> = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <CustomButton title={`Increase ${color}`} onPress={() => onIncrease()} />
      <CustomButton title={`Decrease ${color}`} onPress={() => onDecrease()} />
    </View>
  );
};

export default ColorCounter;
