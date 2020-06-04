import React from "react";
import styled from "styled-components";
import Header from "./Header";
import NewArrivalCarousel from "../NewArrivalCarousel";

const Container = styled.View`
  width: 100%;
`;

const NewArrival = () => (
  <Container>
    <Header />
    <NewArrivalCarousel />
  </Container>
);

export default NewArrival;
