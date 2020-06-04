import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDepartments } from "../../redux/department/selectors";

import DepartmentListItem from "../DepartmentListItem";

const Container = styled.View`
  background-color: white;
  width: 150px;
  top: 20px;
  left: 15px;
  borderWidth: 1px;
  borderColor: #bababa;
`;

const DepartmentList = ({ navigation, departments }) => (
  <TouchableWithoutFeedback
    style={{
      backgroundColor: "transparent",
      width: "100%",
      height: "100%"
    }}
    onPress={() => navigation.pop()}
  >
    <Container>
      {departments.map((label) => (
        <DepartmentListItem
          key={label}
          label={label}
        />
      ))}
    </Container>
  </TouchableWithoutFeedback>
);

const mapStateToProps = createStructuredSelector({
  departments: selectDepartments
});

export default connect(mapStateToProps, null)(DepartmentList);
