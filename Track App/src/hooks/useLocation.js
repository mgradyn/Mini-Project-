import { useState, useEffect } from "react";
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync,
} from "expo-location";

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);

  //if shouldtrack value and callback change it will run the useeffect
  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        await requestPermissionsAsync();
        /*the subscriber here will run, and
        when it is set to null then when useeffect is called again
        the subscriber is set to the original value */
        subscriber = await watchPositionAsync(
          {
            //track position continuously
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
            //but doesnt affect callback
          },
          callback
        );
      } catch (e) {
        setErr(e);
      }
    };

    //if true startwatching
    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
        //stop subscriber
        subscriber = null;
      }
    }
    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  //you can use other thing than an array
  return [err];
};
