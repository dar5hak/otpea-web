import React from "react";
import { connect } from "react-redux";
import AccountList from "./AccountList";
import Empty from "./Empty";
import Header from "./Header";
import RemovePrompt from "./RemovePrompt";

const App = ({ hasAccounts }) => (
  <section className="all section is-clipped">
    <div>
      <Header />
      {hasAccounts ? <AccountList /> : <Empty />}
    </div>
  </section>
);

const select = ({ accounts }) => ({
  hasAccounts: Boolean(accounts.length),
});

export default connect(select, null)(App);
