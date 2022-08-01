import { render } from "preact";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import "./styles.sass";

render(<App />, document.getElementById("root"));

serviceWorker.register();
