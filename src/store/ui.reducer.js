const initialState = {
  addingAccount: false,
  removingAccount: false,
  accountToBeRemoved: null
};

export const ui = (state = initialState, { type, payload }) => {
  if (type === "ADD_ACCOUNT_TOGGLED") {
    return { ...state, addingAccount: !state.addingAccount };
  }

  if (type === "ACCOUNT_ADDED" || type === "ADD_ACCOUNT_CANCELLED") {
    return { ...state, addingAccount: false };
  }

  if (type === "REMOVE_ACCOUNT_TOGGLED") {
    return {
      ...state,
      removingAccount: !state.removingAccount,
      accountToBeRemoved: payload
    };
  }

  if (type === "ACCOUNT_REMOVED" || type === "REMOVE_ACCOUNT_CANCELLED") {
    return { ...state, removingAccount: false, accountToBeRemoved: null };
  }

  return state;
};
