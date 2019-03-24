import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App.js";
import { store } from "./store/store.js";
import "./styles.sass";
import { startInterval } from "./util.js";
import * as serviceWorker from "./serviceWorker";

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

startInterval();
serviceWorker.register();
