import React, { useContext } from "react";
import { Text, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    //use only the currentlocation inside state
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  if (!currentLocation) {
    //loading indicator
    return <ActivityIndicator size='large' style={{ marginTop: 200 }} />;
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        //... means things inside it (latitude, longitude)
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      //region recenter map to current location
      /*region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }} */
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        //rgba(a = opacity)
        strokeCOlor='rgba(158, 158, 255,1.0)'
        fillColor='rgba(158,158, 255, 0.3)'
      />
      <Polyline coordinates={locations.map((loc) => loc.coords)} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
