import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App.js";
import * as serviceWorker from "./serviceWorker";
import { getStore } from "./store/store.js";
import "./styles.sass";
import { startInterval } from "./util.js";

(async () => {
  const rootElement = document.getElementById("root");
  const store = await getStore();
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  );

  startInterval(store.dispatch);
  serviceWorker.register();
})();
