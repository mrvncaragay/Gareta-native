import React from "react";
import { TouchableNativeFeedback } from "react-native";
import styled from "styled-components";

const Root = styled.View`
  flex: 1;
  justify-content: center;
  padding: 25px;
  padding-left: 15px;
`;

const Text = styled.Text`
  color: ${(props) => props.theme.common.main}
`;

const CategoryListItem = ({ label }) => (
  <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple("#EEE")}>
    <Root>
      <Text>{label}</Text>
    </Root>
  </TouchableNativeFeedback>
);

export default CategoryListItem;
