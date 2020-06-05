import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDepartment } from "../../redux/department/selectors";

// Shared components
import { TopBar } from "../../components";

// Shared screens
import {
  MenFeatured, WomenFeatured, WomenCategory, MenCategory
} from "../../screens";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = ({ theme, department }) => {
  const departmentList = (dpt) => {
    switch (dpt) {
      case "Women's":
        return WomenFeatured;
      default:
        return MenFeatured;
    }
  };

  const categoryList = (category) => {
    switch (category) {
      case "Women's":
        return WomenCategory;
      default:
        return MenCategory;
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
        <Tab.Screen name="Categories" component={categoryList(department)} />
      </Tab.Navigator>
      <TopBar />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  department: selectDepartment
});

export default connect(mapStateToProps, null)(TopTabNavigator);
