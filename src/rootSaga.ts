import { all, fork } from "redux-saga/effects";
import { watchNewCounter } from "./GitHub-Profiler/saga";


export default function* rootSaga() {
  yield all([fork(watchNewCounter)]);
}