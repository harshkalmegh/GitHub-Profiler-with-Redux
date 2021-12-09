import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import Fetch_GH from "./Reducer"

const sagaMiddleware = createSagaMiddleware();

const store = createStore(Fetch_GH, applyMiddleware(sagaMiddleware))

export default store