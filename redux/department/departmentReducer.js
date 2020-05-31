import departmentActionsTypes from "./types";

const INITIAL_STATE = {
  department: "Men's",
  departments: ["Men's", "Women's"]
};

const departmentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case departmentActionsTypes.CHANGE_DEPARTMENT:
      return {
        ...state,
        department: action.payload
      };

    default:
      return state;
  }
};

export default departmentReducer;
