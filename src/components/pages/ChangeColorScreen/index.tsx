import React, {useReducer} from 'react';
import {View, StyleSheet} from 'react-native';
import ColorCounter from '../../atoms/ColorCounter';
import BasicLayout from '../../layouts/BasicLayout';

const reducer = (state, action) => {
  switch (action.type) {
    case 'change_red':
      return state.red + action.amount > 255 || state.red + action.payload < 0
        ? state
        : {...state, red: state.red + action.payload};
    case 'change_green':
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : {...state, green: state.green + action.payload};
    case 'change_blue':
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : {...state, blue: state.blue + action.payload};
    default:
      return state;
  }
};

const ChangeColorScreen: React.FC = () => {
  const COLOR_INCREMENT = 15;
  // the parent needs to read the state, but we pass a function as a prop and child "modifies it"

  const [state, dispatch] = useReducer(reducer, {red: 0, blue: 0, green: 0});
  const {red, green, blue} = state;

  return (
    <BasicLayout title="Change Color" marginLeft={0} horizontalCenteredItems>
      <>
        <ColorCounter
          color="red"
          onIncrease={() =>
            dispatch({type: 'change_red', payload: COLOR_INCREMENT})
          }
          onDecrease={() =>
            dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT})
          }
        />
        <ColorCounter
          color="blue"
          onIncrease={() =>
            dispatch({type: 'change_blue', payload: COLOR_INCREMENT})
          }
          onDecrease={() =>
            dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})
          }
        />
        <ColorCounter
          color="green"
          onIncrease={() =>
            dispatch({type: 'change_green', payload: COLOR_INCREMENT})
          }
          onDecrease={() =>
            dispatch({
              colorToChange: 'change_green',
              payload: -1 * COLOR_INCREMENT,
            })
          }
        />
        <View
          style={[
            styles.quare,
            {backgroundColor: `rgb(${red}, ${green}, ${blue})`},
          ]}
        />
      </>
    </BasicLayout>
  );
};

const styles = StyleSheet.create({
  quare: {
    height: 150,
    width: 150,
  },
});

export default ChangeColorScreen;
