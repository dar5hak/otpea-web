let nextAccountId = 1;

/* Account Actions */
const doAddAccount = payload => ({
  type: "ACCOUNT_ADDED",
  payload: { ...payload, id: nextAccountId++ }
});
const doRemoveAccount = payload => ({ type: "ACCOUNT_REMOVED", payload });

/* Time Actions */
const doChangeInterval = payload => ({ type: "INTERVAL_CHANGED", payload });

/* UI Actions */
const doToggleAddAccount = () => ({ type: "ADD_ACCOUNT_TOGGLED" });
const doCancelAddAccount = () => ({ type: "ADD_ACCOUNT_CANCELLED" });
const doToggleRemoveAccount = payload => ({
  type: "REMOVE_ACCOUNT_TOGGLED",
  payload
});
const doCancelRemoveAccount = () => ({ type: "REMOVE_ACCOUNT_CANCELLED" });

export const allActions = {
  /* Account Actions */
  addAccount: doAddAccount,
  removeAccount: doRemoveAccount,
  /* Time Actions */
  changeInterval: doChangeInterval,
  /* UI Actions */
  toggleAddAccount: doToggleAddAccount,
  cancelAddAccount: doCancelAddAccount,
  toggleRemoveAccount: doToggleRemoveAccount,
  cancelRemoveAccount: doCancelRemoveAccount
};
