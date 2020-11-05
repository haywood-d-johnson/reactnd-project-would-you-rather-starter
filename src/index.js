import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

//import "./reset.css";
import "./index.css";

import App from "./components/App";
import middleware from "./middleware";

const appRoot = document.getElementById("root");
const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  appRoot
);
