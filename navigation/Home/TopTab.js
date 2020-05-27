import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import styled from "styled-components";

import TopBar from "../TopBar";

const Tab = createMaterialTopTabNavigator();

const Text = styled.Text`
  font-size: 10px;
  letter-spacing: 0.5px;
  font-weight: bold;
  color: ${(props) => props.theme.common.main}
`;

const TopTab = ({ theme }) => (
  <>
    <Tab.Navigator
      tabBarOptions={{
        style: { top: 50 },
        inactiveTintColor: theme.common.muted,
        activeTintColor: theme.common.main,
        labelStyle: { letterSpacing: 1.5, fontWeight: "bold" },
        indicatorStyle: {
          backgroundColor: theme.common.main
        }
      }}
    >
      <Tab.Screen name="Featured" component={Text} />
      <Tab.Screen name="Categories" component={Text} />
    </Tab.Navigator>
    <TopBar />
  </>
);

export default TopTab;
