import React, {useState} from 'react';
import {Text} from 'react-native';
import CustomButton from '../../atoms/CustomButton';
import BasicLayout from '../../layouts/BasicLayout';

const CounterScreen: React.FC = () => {
  const [counterState, setStateCounter] = useState(0);
  return (
    <BasicLayout title="Counter">
      <>
        <CustomButton
          onPress={() => {
            setStateCounter(counterState + 1);
          }}
          title="Increase"
        />
        <CustomButton
          onPress={() => {
            setStateCounter(counterState - 1);
          }}
          title="Decrease"
        />
        <Text style={{color: 'black'}}>Counter: {counterState}</Text>
      </>
    </BasicLayout>
  );
};

export default CounterScreen;
