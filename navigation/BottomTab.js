import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styled, { withTheme } from "styled-components";

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
const BottomTab = ({ theme }) => (
  <Tab.Navigator
    activeColor={theme.common.main}
    inactiveColor={theme.common.muted}
    barStyle={{ backgroundColor: "#fff" }}
  >
    <Tab.Screen
      name="Shop"
      children={HomeTopTab}
      options={{
        tabBarIcon: ({ color }) => <MaterialCommunityIcons color={color} name="hanger" size={22} />
      }}
    />
    <Tab.Screen
      name="Save"
      component={Save}
      options={{
        tabBarIcon: ({ color }) => <MaterialCommunityIcons color={color} name="heart-outline" size={22} />
      }}
    />
    <Tab.Screen
      name="Music"
      component={Cool}
      options={{
        tabBarIcon: ({ color }) => <MaterialCommunityIcons color={color} name="music-clef-treble" size={22} />
      }}
    />
    <Tab.Screen
      name="User"
      component={Profile}
      options={{
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account-outline" color={color} size={22} />
      }}
    />
  </Tab.Navigator>
);

export default withTheme(BottomTab);
