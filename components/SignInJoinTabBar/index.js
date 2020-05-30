import React from "react";
import styled from "styled-components";
import Text from "../Text";

const Container = styled.View`
  flex: 1;
  flexDirection: row;
  height: 60px;
  padding: 10px;
  backgroundColor: white;
`;

const View = styled.View`
  flexDirection: ${(props) => (props.row ? "row" : "column")};
  alignItems: ${(props) => (props.alignItems ? props.alignItems : "flex-start")};
  justifyContent: ${(props) => (props.justifyContent ? props.justifyContent : "flex-start")};
  marginLeft: ${(props) => (props.marginLeft ? "8" : "0")}px;
`;

const SignInJoinTabBar = () => (
  <Container>
    <View row alignItems="center">
      <Text fontFamily="IMFellDoublePica-Italic">
        my
        {" "}
      </Text>
      <Text fontFamily="SourceSerifPro-Bold">Gareta</Text>
    </View>

    <View marginLeft>
      <Text letterSpacing={1} bold>Get Points.</Text>
      <Text letterSpacing={1}>Earn Rewards.</Text>
    </View>

    <View row justifyContent="flex-end" style={{ flex: 1 }}>
      <Text underline>Sign In</Text>
      <Text underline marginLeft={16}>Join</Text>
    </View>
  </Container>
);

export default SignInJoinTabBar;
