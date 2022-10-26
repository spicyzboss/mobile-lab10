import { View, Button, Animated } from "react-native";
import itlogo from "../assets/itkmitl.png";
import { useRef } from "react";

const Sequence = () => {
  const opacityRef = useRef(new Animated.Value(1)).current;
  const rotateRef = useRef(new Animated.Value(0)).current;

  const rotate = rotateRef.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const sequence = () => {
    Animated.sequence([
      Animated.timing(opacityRef, {
        toValue: 0,
        useNativeDriver: true,
        duration: 5000,
      }),
      Animated.timing(opacityRef, {
        toValue: 1,
        useNativeDriver: true,
        duration: 5000,
      }),
      Animated.timing(rotateRef, {
        useNativeDriver: true,
        duration: 5000,
        toValue: 1
      }),
      Animated.timing(rotateRef, {
        useNativeDriver: true,
        duration: 5000,
        toValue: 0
      })
    ]).start(() => {
      opacityRef.setValue(1);
      rotateRef.setValue(0);
    })
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
          style={[
            {
              width: 120,
              height: 100,
            },
            {
              opacity: opacityRef,
            },
            {
              transform: [{ rotate: rotate }]
            }
          ]}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexGrow: 1,
        }}
      >
        <Button title="RUN SEQUENCE" onPress={sequence} />
      </View>
    </>
  );
};

export default Sequence;
