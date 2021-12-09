import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import Fetch_GH from "./Reducer"
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(Fetch_GH, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga);

export default store