import { useEffect, useState } from "preact/hooks";
import { loadState, saveState } from "../util";

export default function useAccount() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const load = async () => {
      const { accounts: savedAccounts } = await loadState();
      if (savedAccounts?.length) setAccounts(savedAccounts);
    };

    load();
  }, []);

  function getNextAccountId() {
    const ids = accounts.map((account) => account.id);
    return Math.max(...ids, 0) + 1;
  }

  function addAccount(account) {
    const updatedAccounts = accounts.concat({
      ...account,
      id: getNextAccountId(),
    });
    setAccounts(updatedAccounts);
    saveState("accounts", updatedAccounts);
  }

  function removeAccount(id) {
    const updatedAccounts = accounts.filter((account) => account.id !== id);
    setAccounts(updatedAccounts);
    saveState("accounts", updatedAccounts);
  }

  return {
    accounts,
    addAccount,
    removeAccount,
  };
}
