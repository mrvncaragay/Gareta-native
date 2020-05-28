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
  color: ${(props) => props.theme.common.main};
  
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
`;

const DepartmentListItem = ({ label, navigation, active }) => (
  <TouchableNativeFeedback
    background={TouchableNativeFeedback.Ripple("#EEE")}
    onPress={() => navigation.navigate("Shop", { department: label })}
  >
    <Root>
      <Text active={active}>{label}</Text>
    </Root>
  </TouchableNativeFeedback>
);
export default DepartmentListItem;
