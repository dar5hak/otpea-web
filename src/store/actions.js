let nextAccountId = 1;

const doAddAccount = (payload) => ({
  type: "ACCOUNT_ADDED",
  payload: { ...payload, id: nextAccountId++ },
});
const doRemoveAccount = (payload) => ({ type: "ACCOUNT_REMOVED", payload });

export const allActions = {
  addAccount: doAddAccount,
  removeAccount: doRemoveAccount,
};
