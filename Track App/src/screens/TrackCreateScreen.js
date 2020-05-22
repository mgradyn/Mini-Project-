import React, { useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
import { AntDesign } from "@expo/vector-icons";
//import "../_mockLocation";

//isFocused is from withnavigationfocus
const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    /* when the recording has the same value as before,
    it will run the same thing before, when the value is changed
    then it will run other callback that will trigger the useeffect 
    in useLocation */
    [recording]
  );

  //not refer to the err, but it gets err from that file and uselocation(isfocused,callback)
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create Track</Text>
      <Map />

      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon: <AntDesign name='pluscircle' size={20} color='black' />,
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
