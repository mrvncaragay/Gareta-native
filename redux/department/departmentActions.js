
import departmentActionsTypes from "./types";

export const changeDepartment = (department) => ({
  type: departmentActionsTypes.CHANGE_DEPARTMENT,
  payload: department
});

export const fetchDepartmentStart = () => ({
  type: departmentActionsTypes.FETCH_DEPARTMENT_START
});

export const fetchDepartmentSuccess = (directoriesMap) => ({
  type: departmentActionsTypes.FETCH_DEPARTMENT_SUCCESS,
  payload: directoriesMap
});

export const fetchDepartmentFailure = (errorMessage) => ({
  type: departmentActionsTypes.FETCH_DEPARTMENT_FAILURE,
  payload: errorMessage
});
