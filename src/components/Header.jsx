import React, { useState } from "react";
import AccountForm from "./AccountForm";

const Header = ({ onConfirmAdd }) => {
  const [addingAccount, setAddingAccount] = useState(false);

  return (
    <>
      <header className="level is-mobile">
        <div className="level-left">
          <h1 className="level-item title">OTPea</h1>
        </div>
        <div className="level-right">
          <button
            className="level-item button is-primary"
            onClick={() => {
              setAddingAccount(true);
            }}
          >
            Add account
          </button>
        </div>
      </header>
      <AccountForm
        isVisible={addingAccount}
        onConfirmAdd={onConfirmAdd}
        onClose={() => {
          setAddingAccount(false);
        }}
      />
    </>
  );
};

export default Header;
