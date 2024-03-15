import "./Transactions.css";
import Navbar from "../../components/navbar/Navbar";
import TransactionsTable from "../../components/transactionsTable/TransactionsTable";

const Transactions = () => {
  return (
    <div className="containerTransactions">
      <div className="headerTransactions">
        <Navbar />
      </div>
      <div className="transactions">
        <h2>Your Transactions</h2>
        <TransactionsTable />
      </div>
    </div>
  );
};

export default Transactions;
