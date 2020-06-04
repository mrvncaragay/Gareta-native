import React, { useState, useEffect } from "react";
import { Animated } from "react-native";
import styled from "styled-components";
import Image from "../Image";

const Container = styled.View`
  height: 170px;
  paddingBottom: 10px;
`;

const AnimatedTest = ({ source }) => {
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
      <Image uri={source} ratio={120 / 150} />
    </Animated.View>

  );
};
const DATA = [
  {
    id: "21",
    url: "https://gareta.s3-us-west-1.amazonaws.com/Native/New+Arrival/Women's/asset+41.webp"
  },
  {
    id: "1",
    url: "https://gareta.s3-us-west-1.amazonaws.com/Native/New+Arrival/Women's/asset+39.jpeg"
  },
  {
    id: "212",
    url: "https://gareta.s3-us-west-1.amazonaws.com/Native/New+Arrival/Women's/asset+5.webp"
  }
];

const NewArrivalCarousel = () => {
  const value = useState(new Animated.ValueXY({ x: 120, y: 0 }))[0];

  useEffect(() => {
    Animated.timing(value, {
      toValue: { x: 0, y: 0 },
      duration: 800,
      useNativeDriver: false
    }).start();
  }, []);

  return (
    <Container>
      <Animated.FlatList
        style={value.getLayout()}
        horizontal
        data={DATA}
        renderItem={({ item }) => <AnimatedTest index={item.id} source={item.url} />}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

export default NewArrivalCarousel;
