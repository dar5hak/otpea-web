import { h } from "preact";

const RemovePrompt = ({ accountToBeRemoved, onConfirmRemove, onClose }) => (
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
                console.log("Removing account", accountToBeRemoved);
                onConfirmRemove(accountToBeRemoved);
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

export default RemovePrompt;
