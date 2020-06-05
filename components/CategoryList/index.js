import React from "react";
import { ScrollView } from "react-native";
import CategoryListItem from "../CategoryListItem";

const DATA = [
  {
    id: "1",
    label: "Dresses & Jumpsuits",
    uri: "https://gareta.s3-us-west-1.amazonaws.com/Native/Categories/Women/Dresses+%26+Jumpsuits/asset+114.jpeg"
  },
  {
    id: "2",
    label: "Tops",
    uri: "https://gareta.s3-us-west-1.amazonaws.com/Native/Categories/Women/Tops/asset+18.webp"
  },
  {
    id: "3",
    label: "Bottoms",
    uri: "https://gareta.s3-us-west-1.amazonaws.com/Native/Categories/Women/Bottoms/asset+20.jpeg"
  }
];

const CategoryList = () => (
  <ScrollView
    style={{ width: "100%" }}
  >
    {DATA.map((item) => <CategoryListItem key={item.id} item={item} />)}
  </ScrollView>
);

export default CategoryList;
