import React from "react";
import { withTheme } from "styled-components";

// Hometab
import BottomTab from "./BottomTab";

const Home = ({ theme }) => (
  <BottomTab theme={theme} />
);

export default withTheme(Home);
