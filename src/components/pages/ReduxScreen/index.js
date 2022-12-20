import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { decrement, increment } from '../../../redux/slices/counterSlice';
import CustomButton from '../../atoms/CustomButton';

const ReduxScreen = () => {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <View>
      <Text style={{ color: 'black' }}>Redux Example</Text>
      <CustomButton title="Increment" onPress={() => dispatch(increment())} />
      <Text style={{ color: 'black' }}>{count}</Text>
      <CustomButton title="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  );
};

export default ReduxScreen;
