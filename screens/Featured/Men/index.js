import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";

import { SignInJoinTabBar, SummerPromo } from "../../../components";

const Container = styled.View`
  backgroundColor: white;
`;

const Men = () => (
  <ScrollView style={{ top: 50 }}>
    <Container>
      <SignInJoinTabBar />
      <SummerPromo />
    </Container>
  </ScrollView>
);

export default Men;
