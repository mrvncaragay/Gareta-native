import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styled, { withTheme } from "styled-components";
import { Text } from "react-native";

// Hometab
import TopTab from "./TopTab";

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
      children={() => <TopTab theme={theme} />}
      options={{
        tabBarLabel: <Text>Shop</Text>,
        tabBarIcon: ({ color }) => <MaterialCommunityIcons color={color} name="hanger" size={22} />
      }}
    />
    <Tab.Screen
      name="Save"
      component={Save}
      options={{
        tabBarLabel: <Text>Save</Text>,
        tabBarIcon: ({ color }) => <MaterialCommunityIcons color={color} name="heart-outline" size={22} />
      }}
    />
    <Tab.Screen
      name="Music"
      component={Cool}
      options={{
        tabBarLabel: <Text>Music</Text>,
        tabBarIcon: ({ color }) => <MaterialCommunityIcons color={color} name="music-clef-treble" size={22} />
      }}
    />
    <Tab.Screen
      name="User"
      component={Profile}
      options={{
        tabBarLabel: <Text>Account</Text>,
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account-outline" color={color} size={22} />
      }}
    />
  </Tab.Navigator>
);

export default withTheme(BottomTab);
