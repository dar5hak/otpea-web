import { getCurrentIntervalId } from "../util";

const initialState = {
  currentInterval: getCurrentIntervalId(),
};

export const time = (state = initialState, { type, payload }) => {
  if (type === "INTERVAL_CHANGED") {
    return { ...state, currentInterval: payload };
  }

  return state;
};
