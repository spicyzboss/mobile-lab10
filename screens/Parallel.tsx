import { useRef } from "react";
import { View, Button, Animated } from "react-native";
import itlogo from "../assets/itkmitl.png";

const Parallel = () => {
  const scaleRef = useRef(new Animated.Value(1)).current;
  const slideRef = useRef(new Animated.Value(0)).current;

  const slide = slideRef.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, 50]
  })

  const handleClick = () => {
    Animated.parallel([
      Animated.spring(scaleRef, {
        toValue: 2,
        useNativeDriver: true,
        friction: 1
      }),
      Animated.spring(slideRef, {
        toValue: 1,
        useNativeDriver: true,
        friction: 1
      }),
    ]).start(() => {
      scaleRef.setValue(1);
      slideRef.setValue(0);
    })
  }

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
            transform: [{ scale: scaleRef }]
          }}
        />
        <Animated.Text style={{
          color: 'orange',
          fontSize: 20,
          transform: [{ translateX: slide }]
        }}>Welcome to Faculty of IT!</Animated.Text>
      </View>
      <View
        style={{
          flex: 1,
          flexGrow: 1,
        }}
      >
        <Button title="RUN PARALLEL" onPress={handleClick} />
      </View>
    </>
  );
};

export default Parallel;
