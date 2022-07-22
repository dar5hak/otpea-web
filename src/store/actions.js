let nextAccountId = 1;

/* Account Actions */
const doAddAccount = (payload) => ({
  type: "ACCOUNT_ADDED",
  payload: { ...payload, id: nextAccountId++ },
});
const doRemoveAccount = (payload) => ({ type: "ACCOUNT_REMOVED", payload });

/* Time Actions */
const doChangeInterval = (payload) => ({ type: "INTERVAL_CHANGED", payload });

export const allActions = {
  /* Account Actions */
  addAccount: doAddAccount,
  removeAccount: doRemoveAccount,
  /* Time Actions */
  changeInterval: doChangeInterval,
};
