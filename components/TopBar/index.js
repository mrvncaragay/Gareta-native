import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDepartment } from "../../redux/department/selectors";

// Remove this later after testing
import { persistor } from "../../redux/store";

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

const TopBar = ({ department }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate("DepartmentList")}>
        <Text style={{ color: "white", fontSize: 16 }}>
          {department}
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
        <TouchableOpacity onPress={() => persistor.purge()}><MaterialCommunityIcons color="white" name="shopping" size={22} /></TouchableOpacity>
      </View>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  department: selectDepartment
});

export default connect(mapStateToProps, null)(TopBar);
