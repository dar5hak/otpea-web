import { applyMiddleware, combineReducers, createStore } from "redux";
import { logger } from "redux-logger";
import { loadState } from "../util";
import { accounts } from "./accounts.reducer";
import { persist } from "./persist.middleware";
import { time } from "./time.reducer";
import { ui } from "./ui.reducer";

let store;

const reducer = combineReducers({
  accounts,
  time,
  ui
});

const middleware = applyMiddleware(logger, persist);

const getStore = async () => {
  try {
    const persistedState = await loadState();
    store = createStore(reducer, persistedState, middleware);
  } catch (err) {
    store = createStore(reducer, middleware);
  }

  return store;
};

export { getStore };
