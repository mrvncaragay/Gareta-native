import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import styled from "styled-components";
import DepartmentListItem from "../DepartmentListItem";

const categories = ["Men's", "Women's", "Boy", "Girl"];

const Container = styled.View`
  background-color: white;
  width: 150px;
  height: 200px;
  top: 20px;
  left: 15px;
`;

const DepartmentList = ({ navigation }) => (
  <TouchableWithoutFeedback
    style={{
      backgroundColor: "transparent",
      width: "100%",
      height: "100%"
    }}
    onPress={() => navigation.pop()}
  >
    <Container>
      {categories.map((label) => (
        <DepartmentListItem
          key={label}
          label={label}
          navigation={navigation}
        />
      ))}
    </Container>
  </TouchableWithoutFeedback>
);
export default DepartmentList;
