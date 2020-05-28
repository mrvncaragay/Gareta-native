
import departmentActionsTypes from "./types";

export const changeDepartment = (department) => ({
  type: departmentActionsTypes.CHANGE_DEPARTMENT,
  payload: department
});

export const deleteMeLater = () => ({});
