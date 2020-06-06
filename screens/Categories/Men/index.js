import React, { useEffect } from "react";
import { ScrollView } from "react-native";

import { connect } from "react-redux";
import { NewArrival, CategoryList } from "../../../components";

import { fetchDepartmentStart } from "../../../redux/department/departmentActions";

const Men = ({ fetchDepartmentStart }) => {
  useEffect(() => {
    fetchDepartmentStart();
  }, [fetchDepartmentStart]);

  return (
    <ScrollView style={{ marginTop: 50 }}>
      <NewArrival />
      <CategoryList />
    </ScrollView>
  );
};

export default connect(null, { fetchDepartmentStart })(Men);
