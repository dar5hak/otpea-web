import React from "react";
import { connect } from "react-redux";
import { allActions } from "../store/actions";

const RemovePrompt = ({ removeAccount, accountToBeRemoved, onClose }) => (
  <div className={accountToBeRemoved ? "modal is-active" : "modal"}>
    <div className="modal-background" onClick={onClose} />
    <div className="modal-content">
      <div className="box">
        <p>Remove this account?</p>
        <div className="field is-grouped is-grouped-right">
          <p className="control">
            <button className="level-item button" onClick={onClose}>
              Cancel
            </button>
          </p>
          <p className="control">
            <button
              className="level-item button is-danger"
              onClick={() => {
                removeAccount(accountToBeRemoved);
                onClose();
              }}
            >
              Remove
            </button>
          </p>
        </div>
      </div>
    </div>
    <button
      className="modal-close is-large"
      aria-label="close"
      onClick={onClose}
    />
  </div>
);

const { removeAccount } = allActions;

export default connect(null, { removeAccount })(RemovePrompt);
