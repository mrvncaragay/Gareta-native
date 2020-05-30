import styled from "styled-components";

export default styled.Text`
  color: ${(props) => (props.color ? props.color : props.theme.common.main)};
  fontSize: ${(props) => (props.fontSize ? props.fontSize : 12)}px;
  fontWeight: ${(props) => (props.bold ? "bold" : "400")};
  fontStyle: ${(props) => (props.italic ? "italic" : "normal")};
  fontFamily: ${(props) => (props.fontFamily ? props.fontFamily : "normal")};
  letterSpacing: ${(props) => (props.letterSpacing ? props.letterSpacing : "0")}px;
  textDecorationLine: ${(props) => (props.underline ? "underline" : "none")};
  marginLeft: ${(props) => (props.marginLeft ? props.marginLeft : "0")}px;
`;
