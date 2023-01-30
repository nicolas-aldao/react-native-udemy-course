import React, { useContext } from 'react';
import RNLocation from 'react-native-location';
import { Context as LocationContext } from '../../../context/LocationContext';

export default () => {
  //const { addLocation } = useContext(LocationContext);

  // RNLocation.configure({
  //   distanceFilter: 300, // Meters
  //   desiredAccuracy: {
  //     ios: 'best',
  //     android: 'balancedPowerAccuracy',
  //   },
  //   // Android only
  //   androidProvider: 'auto',
  //   interval: 10000, // Milliseconds
  //   fastestInterval: 10000, // Milliseconds
  //   maxWaitTime: 10000, // Milliseconds
  //   // iOS Only
  //   activityType: 'other',
  //   allowsBackgroundLocationUpdates: false,
  //   headingFilter: 1, // Degrees
  //   headingOrientation: 'portrait',
  //   pausesLocationUpdatesAutomatically: false,
  //   showsBackgroundLocationIndicator: false,
  // });

  const requestPermission = () => {
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
  };

  const getCurrentPermission = () =>
    RNLocation.getCurrentPermission().then(currentPermission => {
      console.log(
        '🚀 ~ file: useLocation.ts:45 ~ RNLocation.getCurrentPermission ~ currentPermission',
        currentPermission,
      );
      // console.log(
      //   '🚀 ~ file: index.tsx:19 ~ Map ~ permissionResult',
      //   currentPermission,
      // );
    });

  // let unsubscribe = RNLocation.subscribeToLocationUpdates(locations => {
  //   //let num = Math.floor(Math.random() * 100);

  //   //if (num % 7 == 0) {
  //   addLocation(locations[0], false);
  //   //}
  // });

  //const stopUpgradeLocationProcess = () => {
  // unsubscribe = RNLocation.subscribeToLocationUpdates(locations => {
  //   return null;
  // });
  // };

  return [
    requestPermission,
    getCurrentPermission,
    // unsubscribe,
    // stopUpgradeLocationProcess,
  ];
};
