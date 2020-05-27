import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import styled from "styled-components";
import CategoryListItem from "../CategoryListItem";

const categories = ["Men's", "Women's", "Boy", "Girl"];

const Root = styled.View`
  background-color: white;
  width: 150px;
  height: 200px;
  top: 20px;
  left: 15px;
`;

const Category = ({ navigation }) => (
  <TouchableWithoutFeedback
    style={{
      backgroundColor: "transparent",
      width: "100%",
      height: "100%"
    }}
    onPress={() => navigation.pop()}
  >
    <Root>
      {categories.map((label) => <CategoryListItem key={label} label={label} />)}
    </Root>
  </TouchableWithoutFeedback>
);

export default Category;
