import { combineReducers, createStore, applyMiddleware } from "redux";
import { accounts } from "./accounts.reducer";
import { time } from "./time.reducer";
import { ui } from "./ui.reducer";
import { logger } from "redux-logger";

export const store = createStore(
  combineReducers({
    accounts,
    time,
    ui
  }),
  applyMiddleware(logger)
);
