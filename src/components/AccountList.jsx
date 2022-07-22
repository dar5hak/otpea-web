import copy from "copy-text-to-clipboard";
import { TOTP } from "jsotp";
import React, { useState } from "react";
import { connect } from "react-redux";
import { allActions } from "../store/actions";
import RemovePrompt from "./RemovePrompt";

const AccountList = ({ accounts }) => {
  const [accountToBeRemoved, setAccountToBeRemoved] = useState();

  return (
    <>
      <main>
        {accounts.map((account) => {
          const currentOTP = TOTP(account.secret).now();
          const copyOTP = () => copy(currentOTP);

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
                    onClick={copyOTP}
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
        onClose={() => {
          setAccountToBeRemoved(null);
        }}
      />
    </>
  );
};

const select = ({ accounts, time, ui }) => ({
  accounts,
  // Not directly used, but forces component to reload when OTP needs to be changed
  currentInterval: time.currentInterval,
});

export default connect(select, null)(AccountList);
