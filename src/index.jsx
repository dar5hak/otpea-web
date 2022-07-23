import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import "./styles.sass";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

serviceWorker.register();
