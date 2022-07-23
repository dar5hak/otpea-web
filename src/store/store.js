import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import { loadState } from "../util";
import { accounts } from "./accounts.reducer";
import { persist } from "./persist.middleware";

let store;

const reducer = combineReducers({
  accounts,
});

const middlewareList = [persist];
if (process.env.NODE_ENV === "development") {
  const logger = createLogger({
    collapsed: (_, action) => action.type === "INTERVAL_CHANGED",
  });
  middlewareList.push(logger);
}

const middleware = applyMiddleware(...middlewareList);

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
