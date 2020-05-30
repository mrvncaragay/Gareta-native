import React from "react";
import styled from "styled-components";

const Image = styled.Image`
  width: 100%;
  aspectRatio: ${200 / 76};
`;

const CustomImage = ({ uri }) => (
  <Image source={{ uri }} />
);

export default CustomImage;
