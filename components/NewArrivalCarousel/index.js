import React from "react";
import { FlatList } from "react-native";
import NewArrivalCarouselItem from "../NewArrivalCarouselItem";

const DATA = [
  {
    id: "21",
    url: "https://gareta.s3-us-west-1.amazonaws.com/Native/Categories/Women/New+Arrival/asset+5.webp"
  },
  {
    id: "1",
    url: "https://gareta.s3-us-west-1.amazonaws.com/Native/Categories/Women/New+Arrival/asset+15.webp"

  },
  {
    id: "212",
    url: "https://gareta.s3-us-west-1.amazonaws.com/Native/Categories/Women/New+Arrival/asset+27.jpeg"
  }
];

const NewArrivalCarousel = () => (
  <FlatList
    style={{ height: 155 }}
    horizontal
    data={DATA}
    renderItem={({ item }) => <NewArrivalCarouselItem index={item.id} uri={item.url} />}
    keyExtractor={(item) => item.id}
  />
);
export default NewArrivalCarousel;
