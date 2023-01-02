/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'; // Stable commit
import { Image, useColorScheme, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { TouchableOpacity } from 'react-native';
import { Provider as BlogProvider } from './src/context/AppContext';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { theme } from './src/themes';
import HomeScreen from './src/components/pages/HomeScreen';
import ListScreen from './src/components/pages/ListScreen';
import ComponentScreen from './src/components/pages/ComponentScreen';
import ImagesScreen from './src/components/pages/ImagesScreen';
import CounterScreen from './src/components/pages/CounterScreen';
import ColorScreen from './src/components/pages/ColorScreen';
import ChangeColorScreen from './src/components/pages/ChangeColorScreen';
import ReduxScreen from './src/components/pages/ReduxScreen';
import DigimonScreen from './src/components/pages/DigimonScreen';
import ApiScreen from './src/components/pages/ApiScreen';
import FormScreen from './src/components/pages/FormScreen';
import SearchScreen from './src/components/pages/SearchScreen';
import DetailsScreen from './src/components/pages/DetailsScreen';
import BlogsScreen from './src/components/pages/BlogsScreen';
import BlogpostDetailScreen from './src/components/pages/BlogpostDetailScreen';
import AddBlogpostFormScreen from './src/components/pages/AddBlogpostFormScreen';
import EditBlogpostFormScreen from './src/components/pages/EditBlogpostFormScreen';
import SignUpScreen from './src/components/pages/SignUpScreen';
import SignInScreen from './src/components/pages/SignInScreen';
import TrackListScreen from './src/components/pages/TrackListScreen';
import TrackCreateScreen from './src/components/pages/TrackCreateScreen';
import AccountScreen from './src/components/pages/AccountScreen';
import ResolveAuthScreen from './src/components/pages/ResolveAuthScreen';

export type RootStackParamList = {
  Home: undefined;
  Blogs: undefined;
  Components: undefined;
  List: undefined;
  Images: undefined;
  Counter: undefined;
  Color: undefined;
  ChangeColor: undefined;
  Redux: undefined;
  Api: undefined;
  Digimon: undefined;
  Form: undefined;
  BlogpostDetail: {
    id: string;
  };
  AddBlogpost: undefined;
  EditBlogpost: {
    id: string;
  };
  Search: undefined;
  Details: {
    id: string;
  };
  ResolveAuth: undefined;
  SignUp: undefined;
  SignIn: undefined;
  MainFlow: undefined;
  TrackList: undefined;
  TrackCreate: undefined;
  Account: undefined;
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const Tab = createBottomTabNavigator<RootStackParamList>();

  const PlusIcon = () =>
    isDarkMode ? (
      <Image
        source={require('./src/assets/img/plus-icon-dark.png')}
        style={styles.plusIcon}
      />
    ) : (
      <Image
        source={require('./src/assets/img/plus-icon.png')}
        style={styles.plusIcon}
      />
    );

  function MainFlow() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="TrackCreate"
          component={TrackCreateScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="TrackList"
          component={TrackListScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    );
  }
  // TODO: Different contexts affecting differents parts of the app (AuthProvider)
  return (
    <BlogProvider>
      <AuthProvider>
        <Provider store={store}>
          <NavigationContainer theme={theme}>
            <Stack.Navigator id="MyNavigator">
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Components" component={ComponentScreen} />
              <Stack.Screen name="List" component={ListScreen} />
              <Stack.Screen name="Images" component={ImagesScreen} />
              <Stack.Screen name="Counter" component={CounterScreen} />
              <Stack.Screen name="Color" component={ColorScreen} />
              <Stack.Screen name="ChangeColor" component={ChangeColorScreen} />
              <Stack.Screen name="Redux" component={ReduxScreen} />
              <Stack.Screen name="Api" component={ApiScreen} />
              <Stack.Screen name="Digimon" component={DigimonScreen} />
              <Stack.Screen name="Form" component={FormScreen} />
              <Stack.Screen name="Search" component={SearchScreen} />
              <Stack.Screen name="Details" component={DetailsScreen} />
              <Stack.Screen
                name="Blogs"
                component={BlogsScreen}
                options={({ navigation }) => ({
                  headerRight: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('AddBlogpost')}>
                      <PlusIcon />
                    </TouchableOpacity>
                  ),
                })}
              />
              <Stack.Screen
                name="AddBlogpost"
                component={AddBlogpostFormScreen}
              />
              <Stack.Screen
                name="EditBlogpost"
                component={EditBlogpostFormScreen}
              />
              <Stack.Screen
                name="BlogpostDetail"
                component={BlogpostDetailScreen}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MainFlow"
                component={MainFlow}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ResolveAuth"
                component={ResolveAuthScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </AuthProvider>
    </BlogProvider>
  );
};

const styles = StyleSheet.create({
  plusIcon: {
    height: 25,
    width: 25,
  },
});

export default App;
