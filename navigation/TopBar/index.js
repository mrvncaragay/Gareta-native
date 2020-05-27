import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
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

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate("Category")}>
        <Text style={{ color: "white", fontSize: 16 }}>
          Men&apos;s
          &#9660;
        </Text>
      </TouchableOpacity>

      <View style={{
        width: 60,
        flexDirection: "row",
        justifyContent: "space-between"
      }}
      >
        <MaterialCommunityIcons style={{ paddingTop: 1 }} color="white" name="magnify" size={22} />
        <MaterialCommunityIcons color="white" name="shopping" size={22} />
      </View>
    </Container>

  );
};
export default TopBar;
