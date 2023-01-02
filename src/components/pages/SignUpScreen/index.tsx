import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import { Context as AuthContext } from '../../../context/AuthContext';
import CustomText from '../../atoms/CustomText';
import BasicLayout from '../../layouts/BasicLayout';
import TextLink from '../../atoms/TextLink';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const { state, signUp, clearErrorMessages } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    let focus: any = navigation.addListener('focus', () => {
      // every time this screen gets focus again
      setEmail('');
      setPassword('');
    });
    let listener: any = navigation.addListener('blur', () => {
      // every time this screen gets blur again
      clearErrorMessages();
    });
    return () => {
      // when we don't use this screen anymore we remove the listener
      listener = undefined;
      focus = undefined;
    };
  }, []);

  return (
    <BasicLayout
      horizontalCenteredItems
      style={{ justifyContent: 'space-evenly' }}>
      <>
        <CustomText>Sign Up for Tracker</CustomText>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus
        />
        <TextInput
          secureTextEntry
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Button
          onPress={() =>
            signUp(
              {
                email,
                password,
              },
              () => navigation.navigate('MainFlow', { screen: 'TrackList' }),
            )
          }>
          Sign Up
        </Button>
        {state.errorMessage && <CustomText>{state.errorMessage}</CustomText>}
        <TextLink
          navigate={() => {
            navigation.navigate('SignIn');
          }}
          text="Already have an account? Sign in instead"
        />
      </>
    </BasicLayout>
  );
};

const styles = StyleSheet.create({});

export default SignUpScreen;
