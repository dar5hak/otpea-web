import React from "react";
import { connect } from "react-redux";
import { allActions } from "../store/actions";

const RemovePrompt = ({
  isVisible,
  accountId,
  removeAccount,
  cancelRemoveAccount
}) => (
  <div className={isVisible ? "modal is-active" : "modal"}>
    <div className="modal-background" onClick={cancelRemoveAccount} />
    <div className="modal-content">
      <div className="box">
        <p>Remove this account?</p>
        <div className="field is-grouped is-grouped-right">
          <p className="control">
            <button className="level-item button" onClick={cancelRemoveAccount}>
              Cancel
            </button>
          </p>
          <p className="control">
            <button
              className="level-item button is-danger"
              onClick={() => removeAccount(accountId)}>
              Remove
            </button>
          </p>
        </div>
      </div>
    </div>
    <button
      className="modal-close is-large"
      aria-label="close"
      onClick={cancelRemoveAccount}
    />
  </div>
  // <div className="level is-mobile is-pulled-right">
  //   <div className="level-left" />
  //   <div className="level-right">
  //     <span className="level-item">Remove this account?</span>
  //     <button
  //       className="level-item button is-small is-bordered"
  //       onClick={cancelRemoveAccount}>
  //       No
  //     </button>
  //     <button
  //       className="level-item button is-small is-bordered is-danger"
  //       onClick={() => removeAccount(accountId)}>
  //       Yes
  //     </button>
  //   </div>
  // </div>
);

const { removeAccount, cancelRemoveAccount } = allActions;

export default connect(
  null,
  { removeAccount, cancelRemoveAccount }
)(RemovePrompt);
