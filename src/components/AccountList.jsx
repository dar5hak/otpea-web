import copy from "copy-text-to-clipboard";
import React, { useEffect, useState } from "react";
import { startInterval, stopInterval, getCurrentOtps } from "../util";
import RemovePrompt from "./RemovePrompt";

const AccountList = ({ accounts, onConfirmRemove }) => {
  const [accountToBeRemoved, setAccountToBeRemoved] = useState();
  const [otps, setOtps] = useState(getCurrentOtps(accounts));

  function reloadOtps() {
    setOtps(getCurrentOtps(accounts));
  }

  useEffect(() => {
    startInterval(reloadOtps);
    return stopInterval;
  }, []);

  useEffect(reloadOtps, [accounts, reloadOtps]);

  return (
    <>
      <main>
        {accounts.map((account) => {
          const currentOTP = otps[account.id];

          return (
            <section className="box" key={account.id}>
              <div className="level is-mobile">
                <div className="level-left is-size-4 is-size-5-mobile">
                  <span className="level-item">{account.name}</span>
                </div>
                <div className="level-right">
                  <span className="level-item is-size-4 is-size-5-mobile has-text-weight-bold">
                    {currentOTP}
                  </span>
                  <button
                    className="level-item button is-small is-bordered"
                    onClick={() => copy(currentOTP)}
                  >
                    Copy
                  </button>
                  <span
                    className="level-item delete"
                    onClick={() => setAccountToBeRemoved(account.id)}
                  />
                </div>
              </div>
            </section>
          );
        })}
      </main>
      <RemovePrompt
        accountToBeRemoved={accountToBeRemoved}
        onConfirmRemove={onConfirmRemove}
        onClose={() => {
          setAccountToBeRemoved(null);
        }}
      />
    </>
  );
};

export default AccountList;
