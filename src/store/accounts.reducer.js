export const accounts = (state = [], { type, payload }) => {
  if (type === "ACCOUNT_ADDED") {
    return [...state, payload];
  }

  if (type === "ACCOUNT_REMOVED") {
    return state.filter(account => account.id !== payload);
  }

  return state;
};
