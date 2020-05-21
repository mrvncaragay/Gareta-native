import React from "react";
import styled from "styled-components";

const Root = styled.View`
  height: 60px;
  background-color: ${((props) => props.theme.common.main)}
`;

const Topbar = ({ children }) => (
  <Root>
    {children}
  </Root>
);

export default Topbar;
