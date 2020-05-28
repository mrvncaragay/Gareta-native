import React from "react";
import { TouchableNativeFeedback } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";
import { changeDepartment } from "../../redux/department/departmentActions";
import { selectDepartment } from "../../redux/department/selectors";

const Root = styled.View`
  flex: 1;
  justify-content: center;
  padding: 25px;
  padding-left: 15px;
`;

const Text = styled.Text`
  color: ${(props) => props.theme.common.main};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
`;

/* eslint-disable no-shadow */
const DepartmentListItem = ({ label, department, changeDepartment }) => (
  <TouchableNativeFeedback
    background={TouchableNativeFeedback.Ripple("#EEE")}
    onPress={() => changeDepartment(label)}
  >
    <Root>
      <Text active={label === department}>{label}</Text>
    </Root>
  </TouchableNativeFeedback>
);

const mapStateToProps = createStructuredSelector({
  department: selectDepartment
});

export default connect(mapStateToProps, { changeDepartment })(DepartmentListItem);
