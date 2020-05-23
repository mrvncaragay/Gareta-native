import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// Shared component
import { Text } from "../../components";

const Tab = createMaterialTopTabNavigator();

const TopTab = ({ theme }) => (
  <Tab.Navigator
    tabBarOptions={{
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
);

export default TopTab;
