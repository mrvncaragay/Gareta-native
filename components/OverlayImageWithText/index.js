import React from "react";
import styled from "styled-components";
import Image from "../Image";

const Container = styled.View`
  marginTop: 10px;
`;

const TextContainer = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  alignItems: center;
  justifyContent: center;
  padding: 20px;
  backgroundColor: "rgba(0, 0, 0, 0.10)";
`;

const OverlayImageWithText = ({ url, ratio, texts }) => (
  <Container>
    <Image uri={url} ratio={ratio} />

    <TextContainer>
      {texts}
    </TextContainer>
  </Container>
);

export default OverlayImageWithText;
