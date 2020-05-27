import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// Navigation
import { Home } from "./navigation";

/* eslint-disable react/no-children-prop */
export default () => (
  <NavigationContainer>
    <StatusBar backgroundColor="#1c2b36" />
    <Home />
  </NavigationContainer>
);
