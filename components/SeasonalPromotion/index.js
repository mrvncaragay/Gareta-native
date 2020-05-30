import React from "react";
import styled from "styled-components";
import Image from "../Image";
import Text from "../Text";

const Container = styled.View`
`;

const TextContainer = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  alignItems: center;
  padding: 20px;
`;

export const SummerPromo = () => (
  <Container>
    <Image uri="https://gareta.s3-us-west-1.amazonaws.com/Native/Season+Promo/Summer.png" />

    <TextContainer>
      <Text color="white" fontSize={38} fontFamily="IMFellDoublePica-Italic">Summer Sale</Text>
      <Text color="white" fontSize={14} style={{ lineHeight: 40 }} fontFamily="SourceSerifPro-Regular">up to 50% off*</Text>
      <Text color="white" fontSize={12} letterSpacing={2}>PLUS, 25% OFF ENTIRE PURCHASE**</Text>
    </TextContainer>
  </Container>
);

export const Fall = () => {};
