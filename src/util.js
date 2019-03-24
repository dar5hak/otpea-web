import { allActions } from "./store/actions";
import { store } from "./store/store";

/**
 * Return a unique identifier for the current 30-second interval
 */
export const getCurrentIntervalId = () => Math.floor(Date.now() / 30000);

let interval;

/**
 * Start dispatching interval change actions at
 * every 0th and 30th second of each minute
 */
export const startInterval = () => {
  const secondsToNextTick = 30 - (new Date().getSeconds() % 30);
  setTimeout(() => {
    interval = setInterval(() => {
      const currentInterval = getCurrentIntervalId();
      const action = allActions.changeInterval(currentInterval);
      store.dispatch(action);
    }, 30000);
  }, secondsToNextTick * 1000);
};

export const stopInterval = () => {
  clearInterval(interval);
};
