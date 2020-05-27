import React from "react";
import { View, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Category = ({ navigation }) => (
  <TouchableWithoutFeedback
    style={{
      backgroundColor: "transparent",
      width: "100%",
      height: "100%"
    }}
    onPress={() => navigation.pop()}
  >
    <View style={{
      backgroundColor: "white",
      width: 150,
      height: 150,
      top: 20,
      left: 15

    }}
    >
      <Text>Option 1</Text>
      <Text>Option 2</Text>
    </View>
  </TouchableWithoutFeedback>
);

export default Category;
