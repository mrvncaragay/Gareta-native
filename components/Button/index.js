import React from "react";
import { TouchableNativeFeedback } from "react-native";
import styled from "styled-components";

const View = styled.View`
  top: 50px;
  justifyContent: center;
  alignItems: center;
  height: 40px;
  width: ${(props) => (props.width ? props.width : "50")}%;
  backgroundColor: white;
  border: 1px;
  borderColor: ${(props) => props.theme.common.main};
`;

const Text = styled.Text`
  letterSpacing: 1px;
  color: ${(props) => props.theme.common.main};
`;

const Button = () => (
  <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple("#EEE")}>
    <View>
      <Text>SHOP NOW</Text>
    </View>
  </TouchableNativeFeedback>
);

export default Button;
