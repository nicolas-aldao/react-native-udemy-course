import React, { useReducer } from 'react';
import BasicLayout from '../../layouts/BasicLayout';
import CustomText from '../../atoms/CustomText';
import CustomButton from '../../atoms/CustomButton';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase_counter':
      return { ...state, counter: state.counter + action.payload };
    case 'decrease_counter':
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const CounterScreen: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  return (
    <BasicLayout title="Counter with Reducers">
      <>
        <CustomButton
          onPress={() => {
            dispatch({ type: 'increase_counter', payload: 1 });
          }}
          title="Increase"
        />
        <CustomButton
          onPress={() => {
            dispatch({ type: 'decrease_counter', payload: 1 });
          }}
          title="Decrease"
        />
        <CustomText>{`Counter: ${counter}`}</CustomText>
      </>
    </BasicLayout>
  );
};

export default CounterScreen;
