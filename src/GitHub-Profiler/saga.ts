import { put, takeLatest } from "redux-saga/effects";
import { FETCH_PROFILE } from "./Actions";


function* newCounterListener(actions:any) {
  console.log("Actions",actions);
}

export function* watchNewCounter() {
  yield takeLatest(FETCH_PROFILE, newCounterListener);
}