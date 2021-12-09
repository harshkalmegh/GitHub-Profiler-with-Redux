import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Fetch_GH from "./GitHub-Profiler/Index";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Fetch_GH />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
