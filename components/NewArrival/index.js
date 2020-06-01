import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Container = styled.View`
  height: 230px;
  width: 100%;
  backgroundColor: gray;
`;

const NewArrival = () => (
  <Container>
    <Header />
  </Container>
);

export default NewArrival;
