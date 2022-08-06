import { h } from "preact";
import AccountList from "./AccountList";
import Empty from "./Empty";
import Header from "./Header";
import useAccounts from "./useAccounts";

const App = () => {
  const { accounts, addAccount, removeAccount } = useAccounts();

  return (
    <section className="all section is-clipped">
      <div>
        <Header onConfirmAdd={addAccount} />
        {accounts.length ? (
          <AccountList accounts={accounts} onConfirmRemove={removeAccount} />
        ) : (
          <Empty />
        )}
      </div>
    </section>
  );
};

export default App;
