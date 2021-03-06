import React from "react";
import { ScrollView } from "react-native";

import { NewArrival, CategoryList } from "../../../components";

const Women = () => (
  <ScrollView style={{ marginTop: 50 }}>
    <NewArrival />
    <CategoryList />
  </ScrollView>
);

export default Women;
