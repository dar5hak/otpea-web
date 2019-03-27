import { get, keys, set } from "idb-keyval";
import { zip } from "zip-array";
import { allActions } from "./store/actions";

/**
 * Return a unique identifier for the current 30-second interval
 */
export const getCurrentIntervalId = () => Math.floor(Date.now() / 30000);

let interval;

/**
 * Start dispatching interval change actions at
 * every 0th and 30th second of each minute
 */
export const startInterval = dispatch => {
  const secondsToNextTick = 30 - (new Date().getSeconds() % 30);

  const triggerIntervalChange = () => {
    const action = allActions.changeInterval(getCurrentIntervalId());
    dispatch(action);
  };

  setTimeout(() => {
    // Dispatch a change the first time, then set an interval
    triggerIntervalChange();
    interval = setInterval(triggerIntervalChange, 30000);
  }, secondsToNextTick * 1000);
};

export const stopInterval = () => {
  clearInterval(interval);
};

export const saveState = async (key, value) => {
  try {
    return set(key, {
      timestamp: Date.now(),
      version: 1,
      data: value
    });
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const loadState = async () => {
  try {
    const allKeys = await keys();
    const allValuePromises = Promise.all(allKeys.map(key => get(key)));
    const allValues = (await allValuePromises).map(value => value.data);
    return Object.fromEntries(zip(allKeys, await allValues));
  } catch (err) {
    console.log(err);
    return null;
  }
};
