import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import styled from "styled-components";

const Tab = createMaterialTopTabNavigator();

const Featured = styled.Text`
  font-family: 'SourceSerifPro-Bold';
  color: red
`;

const HomeTopTab = () => (
  <Tab.Navigator tabBarOptions={{ indicatorStyle: { backgroundColor: "#1c2b36" } }}>
    <Tab.Screen name="Featured" component={Featured} />
    <Tab.Screen name="Categories" component={Featured} />
  </Tab.Navigator>
);

export default HomeTopTab;
