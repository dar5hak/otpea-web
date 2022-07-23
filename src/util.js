import { get, keys, set } from "idb-keyval";
import { TOTP } from "jsotp";
import { zip } from "zip-array";

let interval;

/**
 * Fire the callback at 0th and 30th second of each minute
 */
export const startInterval = (callback) => {
  const secondsToNextTick = 30 - (new Date().getSeconds() % 30);

  setTimeout(() => {
    // Dispatch a change the first time, then set an interval
    callback();
    interval = setInterval(callback, 30000);
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
      data: value,
    });
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const loadState = async () => {
  try {
    const allKeys = await keys();
    const allValuePromises = Promise.all(allKeys.map((key) => get(key)));
    const allValues = (await allValuePromises).map((value) => value.data);
    return Object.fromEntries(zip(allKeys, await allValues));
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getCurrentOtps = (accounts) => {
  return Object.fromEntries(
    accounts.map((account) => [account.id, TOTP(account.secret).now()])
  );
};
