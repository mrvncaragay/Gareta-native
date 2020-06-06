import { all, call } from "redux-saga/effects";

import { departmentSagas } from "./department/sagas";

export default function* rootSaga() {
  yield all([
    call(departmentSagas)
  ]);
}
