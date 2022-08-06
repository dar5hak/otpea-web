import { h, Component } from "preact";

const BASE32_REGEX = "[A-Za-z2-7]+";

class AccountForm extends Component {
  componentDidUpdate() {
    if (this.props.isVisible) {
      // Clear any previous inputs
      this.accountName.value = this.secret.value = "";
      this.accountName.focus();
    }
  }

  render() {
    const { isVisible, onConfirmAdd, onClose } = this.props;

    return (
      <div className={isVisible ? "modal is-active" : "modal"}>
        <div className="modal-background" onClick={onClose} />
        <div className="modal-content">
          <div className="box">
            <form
              autoComplete="off"
              onSubmit={(event) => {
                event.preventDefault();
                onConfirmAdd({
                  name: this.accountName.value,
                  secret: this.secret.value,
                });
                onClose();
              }}
            >
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Name</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        name="accountName"
                        placeholder="GitHub"
                        required
                        ref={(el) => (this.accountName = el)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Secret</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        name="secret"
                        pattern={BASE32_REGEX}
                        placeholder="n34h8yv2n80cxkv1"
                        required
                        ref={(el) => (this.secret = el)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="field is-grouped is-grouped-right">
                <p className="control">
                  <input
                    type="button"
                    className="button"
                    value="Cancel"
                    onClick={onClose}
                  />
                </p>
                <p className="control">
                  <input
                    type="submit"
                    className="button is-primary"
                    value="Save"
                  />
                </p>
              </div>
            </form>
          </div>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={onClose}
        />
      </div>
    );
  }
}

export default AccountForm;
