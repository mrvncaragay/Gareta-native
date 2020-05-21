import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styled from "styled-components";

// Hometab
import HomeTopTab from "./HomeTopTab";

const Tab = createMaterialBottomTabNavigator();

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

/* eslint-disable react/no-children-prop */
const BottomTab = () => (
  <Tab.Navigator activeColor="black" barStyle={{ backgroundColor: "#fff" }}>
    <Tab.Screen
      name="Shop"
      children={HomeTopTab}
      options={{
        tabBarIcon: () => <MaterialCommunityIcons name="hanger" size={26} />
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Save}
      options={{
        tabBarIcon: () => <MaterialCommunityIcons name="heart-outline" size={26} />
      }}
    />
    <Tab.Screen
      name="Music"
      component={Cool}
      options={{
        tabBarIcon: () => <MaterialCommunityIcons name="music-clef-treble" size={26} />
      }}
    />
    <Tab.Screen
      name="User"
      component={Profile}
      options={{
        tabBarIcon: () => <MaterialCommunityIcons name="account-outline" size={26} />
      }}
    />
  </Tab.Navigator>
);

export default BottomTab;
