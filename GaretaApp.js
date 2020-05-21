import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// Shared component
import { Topbar } from "./components";

// Navigation
import { BottomTab } from "./navigation";

/* eslint-disable react/no-children-prop */
export default () => (
  <NavigationContainer>
    <StatusBar backgroundColor="#1c2b36" />
    <Topbar />
    <BottomTab />
  </NavigationContainer>
);
