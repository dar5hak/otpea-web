/**
 * The persistence logic used here is inspired by
 * Henrik Joreteg's approach in his excellent book,
 * Human Redux.
 *
 * Read this chapter to understand the reasoning
 * behind this particular approach:
 * https://read.reduxbook.com/markdown/part2/12-clientside-persistance.html
 *  */

import requestIdleCallback from "ric-shim";
import { saveState } from "../util";

export const persist = (store) => (next) => (action) => {
  const result = next(action);

  const actionsToPersist = {
    ACCOUNT_ADDED: ["accounts"],
    ACCOUNT_REMOVED: ["accounts"],
  };

  const shouldPersist = actionsToPersist[action.type];

  if (shouldPersist) {
    requestIdleCallback(() => {
      const appState = store.getState();
      for (const reducerName of shouldPersist) {
        saveState(reducerName, appState[reducerName]);
      }
    });
  }

  return result;
};
