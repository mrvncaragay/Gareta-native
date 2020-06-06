import {
  takeLatest, put, all, call
} from "redux-saga/effects";

import { firestore, convertDepartmentSnapshotToMap } from "../../firebase";

import {
  fetchDepartmentSuccess,
  fetchDepartmentFailure
} from "./departmentActions";
import directoryActionTypes from "./types";

export function* fetchDepartmentAsync() {
  try {
    const collectionRef = firestore.collection("categories");
    const snapshot = yield collectionRef.get();
    const categoriesMap = yield call(convertDepartmentSnapshotToMap, snapshot);
    yield put(fetchDepartmentSuccess(categoriesMap));
  } catch (error) {
    yield put(fetchDepartmentFailure(error));
  }
}

export function* fetchDepartmentStart() {
  yield takeLatest(
    directoryActionTypes.FETCH_DEPARTMENT_START,
    fetchDepartmentAsync
  );
}

export function* departmentSagas() {
  yield all([call(fetchDepartmentStart)]);
}
