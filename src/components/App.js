import React from "react";
import { connect } from "react-redux";
import AccountForm from "./AccountForm";
import AccountList from "./AccountList";
import Empty from "./Empty";
import Header from "./Header";
import RemovePrompt from "./RemovePrompt";

const App = ({ hasAccounts, ui }) => (
  <section className="all section is-clipped">
    <div>
      <Header />
      <AccountForm isVisible={ui.addingAccount} />
      <RemovePrompt
        accountId={ui.accountToBeRemoved}
        isVisible={ui.removingAccount}
      />
      {hasAccounts ? <AccountList /> : <Empty />}
    </div>
  </section>
);

const select = ({ accounts, ui }) => ({
  hasAccounts: Boolean(accounts.length),
  ui
});

export default connect(
  select,
  null
)(App);
