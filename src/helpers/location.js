import Geolocation from 'react-native-geolocation-service';

export const getCurrentLocation = () =>
  new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        const cords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          heading: position?.coords?.heading,
        };
        console;
        resolve(cords);
      },
      error => {
        reject(error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  });
