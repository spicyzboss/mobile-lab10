import { useRef } from "react";
import { View, Button, Animated } from "react-native";
import itlogo from "../assets/itkmitl.png";

const Spring = () => {
  const ITLogoRef = useRef(new Animated.Value(1)).current;

  const spring = () => {
    Animated.spring(ITLogoRef, {
      toValue: 5,
      useNativeDriver: true,
      friction: 1,
    }).start(() => ITLogoRef.setValue(1));
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 9,
        }}
      >
        <Animated.Image
          source={itlogo}
          style={{
            width: 60,
            height: 50,
            transform: [{ scale: ITLogoRef }]
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexGrow: 1,
        }}
      >
        <Button title="RUN SPRING" onPress={spring} />
      </View>
    </>
  );
};

export default Spring;
