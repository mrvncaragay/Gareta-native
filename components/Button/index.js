import React from "react";
import { TouchableNativeFeedback } from "react-native";
import styled from "styled-components";

const variant = (props) => {
  switch (props.variant) {
    case "contained":
      return `
        backgroundColor: ${props.theme.common.main};
      `;

    case "outlined":
      return `
        border: 1px;
        borderColor: ${props.theme.common.main};
      `;

    default:
      return "";
  }
};

const size = (props) => {
  switch (props.size) {
    case "small":
      return `
        backgroundColor: ${props.theme.common.main};
      `;

    case "medium":
      return `
        paddingLeft: 40px;
        paddingRight: ${(props.icon ? "8" : "40")}px;
      `;

    default:
      return `
        paddingLeft: 16px;
        paddingRight: ${(props.icon ? "8" : "16")}px;
      `;
  }
};

const Container = styled.View`
  marginTop: 12px;
  marginBottom: 12px;
  alignItems: center;
  justifyContent: center;
`;

const View = styled.View`
  flexDirection: row;
  justifyContent: center;
  alignItems: center;
  paddingTop: 8px;
  paddingBottom: 8px;
  ${(props) => size(props)}
  ${(props) => variant(props)}
`;

const Button = ({ children, icon, ...props }) => (
  <Container>
    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple("#EEE")}>
      <View icon={icon} {...props}>
        {children}
        {icon}
      </View>
    </TouchableNativeFeedback>
  </Container>
);

export default Button;
