import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styled from "styled-components";
import Text from "../Text";
import Button from "../Button";

const Container = styled.View`
  height: 70px;
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
  backgroundColor: white;
  paddingLeft: 15px;
  paddingRight: 15px;
`;

const Header = () => (
  <Container>
    <Text bold letterSpacing={1} size={14}>NEW ARRIVALS</Text>
    <Button
      variant="contained"
      icon={<MaterialCommunityIcons color="white" name="chevron-right" size={18} style={{ marginLeft: 3 }} />}
    >
      <Text bold color="white">VIEW ALL</Text>
    </Button>
  </Container>
);

export default Header;
