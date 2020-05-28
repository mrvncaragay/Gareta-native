import { createSelector } from "reselect";

const department = (state) => state.department;

export const selectDepartment = createSelector(
  [department],
  (dept) => dept.department
);

export const selectDepartments = createSelector(
  [department],
  (dept) => dept.departments
);
