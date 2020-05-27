import React from "react";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import CategoryList from "../../components/CategoryList";

const Tab = createStackNavigator();

const Home = () => (
  <Tab.Navigator headerMode="none">
    <Tab.Screen name="Home" component={BottomTab} />

    <Tab.Screen
      name="Category"
      component={CategoryList}
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
