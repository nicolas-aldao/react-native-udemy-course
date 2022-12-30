import React from 'react';
import { Button } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import CustomText from '../../atoms/CustomText';
import BasicLayout from '../../layouts/BasicLayout';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <BasicLayout title="SignUpScreen">
      <>
        <Button
          onPress={() => {
            navigation.navigate('SignIn');
          }}>
          Go to Sign In
        </Button>
        <Button
          onPress={() => {
            navigation.navigate('MainFlow', { screen: 'TrackList' });
          }}>
          Go to Main Flow
        </Button>
      </>
    </BasicLayout>
  );
};

export default SignUpScreen;

SignUpScreen.defaultProps = {
  title: undefined,
};
