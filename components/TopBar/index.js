import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation, useRoute } from "@react-navigation/native";
import styled from "styled-components";

const Container = styled.View`
  flex-direction: row;
  position: absolute;
  width: 100%
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 10px;
  padding-right: 15px;
  padding-left: 15px;
  height: ${(props) => (props.height ? props.height : "50")}px;
  background-color: ${(props) => props.theme.common.main};
`;

const TopBar = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate("DepartmentList")}>
        <Text style={{ color: "white", fontSize: 16 }}>
          {(route && route.params) ? route.params.department : "Men's"}
          &#9660;
        </Text>
      </TouchableOpacity>

      <View style={{
        width: 60,
        flexDirection: "row",
        justifyContent: "space-between"
      }}
      >
        <TouchableOpacity><MaterialCommunityIcons style={{ paddingTop: 1 }} color="white" name="magnify" size={22} /></TouchableOpacity>
        <TouchableOpacity><MaterialCommunityIcons color="white" name="shopping" size={22} /></TouchableOpacity>
      </View>
    </Container>
  );
};
export default TopBar;
