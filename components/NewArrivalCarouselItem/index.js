import React, { useState, useEffect } from "react";
import { Animated } from "react-native";
import Image from "../Image";

const NewArrivalCarouselItem = ({ uri }) => {
  const value = useState(new Animated.Value(0))[0];
  const translateX = value.interpolate({
    inputRange: [0, 1],
    outputRange: [500, 1]
  });

  useEffect(() => {
    Animated.spring(value, {
      toValue: 1,
      tension: 25,
      useNativeDriver: false
    }).start();
  }, []);

  return (
    <Animated.View
      style={[{
        width: 120,
        height: 150,
        marginRight: 1,
        marginLeft: 15,
        elevation: 5,
        backgroundColor: "gray"
      }, { transform: [{ translateX }] }]}
    >
      <Image uri={uri} ratio={120 / 150} />
    </Animated.View>

  );
};

export default NewArrivalCarouselItem;
