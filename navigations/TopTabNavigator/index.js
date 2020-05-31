import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDepartment } from "../../redux/department/selectors";

// Shared components
import { TopBar } from "../../components";

// Shared screens
import { Men as MenFeatured, Women as WomenFeatured } from "../../screens";

const Tab = createMaterialTopTabNavigator();

const Text = styled.Text`
  font-size: 10px;
  letter-spacing: 0.5px;
  font-weight: bold;
  color: ${(props) => props.theme.common.main}
`;

const TopTabNavigator = ({ theme, department }) => {
  const departmentList = (dpt) => {
    switch (dpt) {
      case "Women's":
        return WomenFeatured;
      default:
        return MenFeatured;
    }
  };

  return (
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
        <Tab.Screen name="Featured" component={departmentList(department)} />
        <Tab.Screen name="Categories" component={Text} />
      </Tab.Navigator>
      <TopBar />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  department: selectDepartment
});

export default connect(mapStateToProps, null)(TopTabNavigator);
