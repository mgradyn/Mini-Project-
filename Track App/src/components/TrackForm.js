import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { StyleSheet, View } from "react-native";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder='Enter name'
        />
      </Spacer>
      <View style={styles.Button}>
        {recording ? (
          <Button title='Stop' onPress={stopRecording} />
        ) : (
          <Button title='Record' onPress={startRecording} />
        )}
      </View>
      <View style={styles.Button_2}>
        {!recording && locations.length ? (
          <Button title='Save Recording' onPress={saveTrack} />
        ) : null}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Button: {
    margin: 20,
  },
  Button_2: {
    marginHorizontal: 20,
  },
});

export default TrackForm;
