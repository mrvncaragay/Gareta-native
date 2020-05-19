import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Profile = styled.Text`
  font-family: 'SourceSerifPro-Bold';
  color: red
`;

const Save = styled.Text`
  font-family: 'SourceSerifPro-Bold';
  color: red
`;

const Cool = styled.Text`
  font-family: 'SourceSerifPro-Bold';
  color: red
`;

const Featured = styled.Text`
  font-family: 'SourceSerifPro-Bold';
  color: red
`;

const BottomTab = createMaterialBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

export default function App() {
  const createHomeTopTab = () => (
    <TopTab.Navigator tabBarOptions={{ indicatorStyle: { backgroundColor: "red" } }}>
      <TopTab.Screen name="Featured" component={Featured} />
      <TopTab.Screen name="Categories" component={Featured} />
    </TopTab.Navigator>
  );

  return (
    <NavigationContainer>
      <View style={{ height: 70, backgroundColor: "#374e62" }}>
        <Text>This is a head</Text>
      </View>
      <BottomTab.Navigator activeColor="black" barStyle={{ backgroundColor: "#fff" }}>
        <BottomTab.Screen name="Home" children={createHomeTopTab} />
        <BottomTab.Screen name="Profile" component={Profile} />
        <BottomTab.Screen name="Save" component={Save} />
        <BottomTab.Screen name="Cool" component={Cool} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
