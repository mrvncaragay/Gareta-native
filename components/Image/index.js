import React from "react";
import styled from "styled-components";

const Image = styled.Image`
  width: 100%;
`;

const CustomImage = ({ uri, ratio }) => (
  <Image source={{ uri }} aspectRatio={ratio} />
);

export default CustomImage;
