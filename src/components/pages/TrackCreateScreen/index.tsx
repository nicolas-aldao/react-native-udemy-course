import React, { useState, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import RNLocation from 'react-native-location';
import MapView, {
  Polyline,
  Circle,
  Marker,
  AnimatedRegion,
} from 'react-native-maps';

import { Context as LocationContext } from '../../../context/LocationContext';
import { getCurrentLocation } from '../../../helpers/location';
import useLocation from './useLocation';
import CustomButton from '../../atoms/CustomButton';
import BasicLayout from '../../layouts/BasicLayout';
import Map from '../../organisms/Map';
import { Platform } from 'react-native';

const TrackCreateScreen: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState({});
  //const { addLocation } = useContext(LocationContext);
  const { requestPermission, getCurrentPermission } = useLocation();
  const isAndroid = Platform.OS == 'android';

  //requestPermission();
  RNLocation.requestPermission({
    ios: 'whenInUse', // or 'always'
    android: {
      detail: 'coarse', // or 'fine'
      rationale: {
        title: 'We need to access your location',
        message: 'We use your location to show where you are on the map',
        buttonPositive: 'OK',
        buttonNegative: 'Cancel',
      },
    },
  });

  // getCurrentPermission();
  let res;
  const getLiveLocation = async () => {
    res = await getCurrentLocation();
    console.log('🚀 ~ file: index.tsx:30 ~ getCurrentLocation ~ res', res);
    console.log(
      '🚀 ~ file: index.tsx:45 ~ getLiveLocation ~ res.latitude',
      res.latitude,
    );
    console.log(
      '🚀 ~ file: index.tsx:48 ~ getLiveLocation ~ res.longitude',
      res.longitude,
    );
    setCurrentLocation(res);
  };

  useEffect(() => {
    // let listener: any = navigation.addListener('blur', () => {
    //   // every time this screen gets blur again
    //   console.log(
    //     '------------------------------------------------------leaving page---------------------------------------',
    //   );
    //   stopUpgradeLocationProcess();
    // });
    // return () => {
    //   // when we don't use this screen anymore we remove the listener
    //   listener = undefined;
    // };
    getLiveLocation();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getLiveLocation();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <BasicLayout title="TrackCreateScreen">
      <>
        {currentLocation && <Text>ye</Text>}
        {currentLocation && (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          />
        )}
        <CustomButton
          title="Back to Home"
          onPress={() => {
            //navigation.navigate('Home');
          }}
        />
      </>
    </BasicLayout>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default TrackCreateScreen;
