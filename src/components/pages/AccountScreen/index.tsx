import React, { useContext } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import { Context as AuthContext } from '../../../context/AuthContext';
import CustomButton from '../../atoms/CustomButton';
import BasicLayout from '../../layouts/BasicLayout';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const AccountScreen: React.FC<Props> = ({ navigation }) => {
  const { signOut } = useContext(AuthContext);

  return (
    <BasicLayout title="AccountScreen">
      <>
        <CustomButton
          title="Sign out"
          onPress={() => {
            signOut(() => {
              navigation.navigate('SignIn');
            });
          }}
        />
        <CustomButton
          title="Back to Home"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </>
    </BasicLayout>
  );
};

export default AccountScreen;
