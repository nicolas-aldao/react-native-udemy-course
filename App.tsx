/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/components/pages/HomeScreen';
import ListScreen from './src/components/pages/ListScreen';
import ComponentsScreen from './src/components/pages/ComponentsScreen';
import ImagesScreen from './src/components/pages/ImagesScreen';
import CounterScreen from './src/components/pages/CounterScreen';
import ColorScreen from './src/components/pages/ColorScreen';
import ChangeColorScreen from './src/components/pages/ChangeColorScreen';
import ReduxScreen from './src/components/pages/ReduxScreen';
import DigimonScreen from './src/components/pages/DigimonScreen';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import ApiScreen from './src/components/pages/ApiScreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator id="MyNavigator">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="Components" component={ComponentsScreen} />
          <Stack.Screen name="List" component={ListScreen} />
          <Stack.Screen name="Images" component={ImagesScreen} />
          <Stack.Screen name="Counter" component={CounterScreen} />
          <Stack.Screen name="Color" component={ColorScreen} />
          <Stack.Screen name="ChangeColor" component={ChangeColorScreen} />
          <Stack.Screen name="Redux" component={ReduxScreen} />
          <Stack.Screen name="Api" component={ApiScreen} />
          <Stack.Screen name="Digimon" component={DigimonScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
