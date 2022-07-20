import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { getStore } from "./store/store";
import "./styles.sass";
import { startInterval } from "./util";

(async () => {
  const container = document.getElementById("root");
  const root = createRoot(container);
  const store = await getStore();

  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  startInterval(store.dispatch);
})();

serviceWorker.register();
