import React from "react";
import { connect } from "react-redux";
import { allActions } from "../store/actions";

const Header = ({ toggleAddAccount }) => (
  <header className="level is-mobile">
    <div className="level-left">
      <h1 className="level-item title">OTPea</h1>
    </div>
    <div className="level-right">
      <button
        className="level-item button is-primary"
        onClick={toggleAddAccount}>
        Add account
      </button>
    </div>
  </header>
);

const { toggleAddAccount } = allActions;

export default connect(
  null,
  { toggleAddAccount }
)(Header);
