import React, { useContext, useEffect, useState } from 'react';
import { Text, StyleSheet, ActivityIndicator, Platform } from 'react-native';
import MapView, {
  Polyline,
  Circle,
  Marker,
  AnimatedRegion,
} from 'react-native-maps';
import { Context as LocationContext } from '../../../context/LocationContext';

const Map = region => {
  console.log("🚀 ~ file: index.tsx:12 ~ Map ~ region", region)
  return (
    <MapView
      region={region}
      //onRegionChange={this.onRegionChange}
      style={styles.map}>
      {/* {this.state.markers.map((marker, index) => ( */}
      {/* <Marker
        key={region}
        coordinate={region}
        title={marker.title}
        description={marker.description}
      /> */}
      {/* ))} */}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
