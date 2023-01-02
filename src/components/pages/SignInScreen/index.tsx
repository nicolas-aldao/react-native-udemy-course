import React, { useContext, useEffect, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import { Context as AuthContext } from '../../../context/AuthContext';
import TextLink from '../../atoms/TextLink';
import BasicLayout from '../../layouts/BasicLayout';
import CustomText from '../../atoms/CustomText';
import { Button, TextInput } from 'react-native-paper';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const SignInScreen: React.FC<Props> = ({ navigation }) => {
  const { state, signIn, clearErrorMessages } = useContext(AuthContext);
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
      style={{ justifyContent: 'space-around' }}>
      {/* //TODO parametrize this kind of centering for basic layout */}
      <>
        <CustomText>Sign In for Tracker</CustomText>
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
            signIn(
              {
                email,
                password,
              },
              () => navigation.navigate('MainFlow', { screen: 'TrackList' }),
            )
          }>
          Sign In
        </Button>
        <TextLink
          navigate={() => {
            navigation.navigate('SignUp');
          }}
          text="Don't have an account? Go back to sign up."
        />
        {state.errorMessage && <CustomText>{state.errorMessage}</CustomText>}
      </>
    </BasicLayout>
  );
};

export default SignInScreen;
