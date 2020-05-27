import React from "react";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import Category from "../../components/Category";

const Tab = createStackNavigator();

const Home = () => (
  <Tab.Navigator headerMode="none">
    <Tab.Screen name="Home" component={BottomTab} />

    <Tab.Screen
      name="Category"
      component={Category}
      options={{
        animationEnabled: true,
        cardStyle: { backgroundColor: "transparent" },
        cardOverlayEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
      }}
    />
  </Tab.Navigator>
);

export default Home;
