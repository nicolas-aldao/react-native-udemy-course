import { useContext, useEffect } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import { Context as AuthContext } from '../../../context/AuthContext';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const ResolveAuthScreen = ({ navigation }) => {
  const { tryLocalSignIn } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignIn(
      () => navigation.navigate('MainFlow', { screen: 'TrackList' }),
      () => {
        navigation.navigate('SignUp');
      },
    );
  }, []);

  return null;
};

export default ResolveAuthScreen;
