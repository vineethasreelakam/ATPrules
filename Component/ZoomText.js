import * as React from "react";
import {
  State,
  TapGestureHandler,
} from "react-native-gesture-handler";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";
import { HighlightText } from "./HighlightText";
import { Alert, Platform, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ZoomText = ({ children }) => {
  const [iszoom, setisZoom] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const checkPopupStatus = async () => {
      try {
        const popupStatus = await AsyncStorage.getItem('popupShown');
        if (!popupStatus && Platform.OS === 'android') {
          // Pop-up has not been shown, on Android, set showPopup to true and mark as shown
          Alert.alert('Zoom Instructions', 'To initiate Zoom, please double tap.');
          await AsyncStorage.setItem('popupShown', 'true');
        }
      } catch (error) {
      
      }
    };

    checkPopupStatus();
  }, []);

  const handleDoubleTap = ({ nativeEvent }) => {
    setisZoom(true);
    if (nativeEvent.state === State.ACTIVE) {
        const { x, y } = nativeEvent;
        // console.log("nativeEvent.location",nativeEvent.x);
        setisZoom(true);
        setPosition({ x, y });
    }
  };
  return iszoom ? (
    <ReactNativeZoomableView
      maxZoom={10}
      minZoom={1}
      zoomStep={0.5}
      initialZoom={1.01}
      bindToBorders={true}
      onDoubleTapAfter={() => setisZoom(false)}
      moveTo={position}
      panBoundaryPadding={50}
    >
      {children}
    </ReactNativeZoomableView>
  ) : (
    <>
    <Pressable onPress={handleDoubleTap}>
     {children}
    </Pressable>
    </>
  );
};

export default ZoomText;
