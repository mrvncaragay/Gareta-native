import React from "react";
import { Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Paper } from "../../components";

const TopBar = () => (
  <Paper>
    <Text style={{ color: "white" }}>Sections</Text>
    <View style={{
      width: 60,
      flexDirection: "row",
      justifyContent: "space-between"
    }}
    >
      <MaterialCommunityIcons style={{ paddingTop: 1 }} color="white" name="magnify" size={22} />
      <MaterialCommunityIcons color="white" name="shopping" size={22} />
    </View>
  </Paper>
);

export default TopBar;
