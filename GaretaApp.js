import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

// Shared components
import { DepartmentList } from "./components";
import { BottomTabNavigator } from "./navigations";

const Tab = createStackNavigator();

/* eslint-disable react/no-children-prop */
export default () => (
  <NavigationContainer>
    <StatusBar backgroundColor="#1c2b36" />
    <Tab.Navigator headerMode="none">
      <Tab.Screen name="Home" component={BottomTabNavigator} />

      <Tab.Screen
        name="DepartmentList"
        component={DepartmentList}
        options={{
          animationEnabled: true,
          cardStyle: { backgroundColor: "transparent" },
          cardOverlayEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
