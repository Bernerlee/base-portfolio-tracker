import { useTransactions } from "../hooks/useTransactions";

const TransactionList = () => {
  const { txs, loading } = useTransactions();

  if (loading) return <p>Loading transactions...</p>;

  return (
    <div>
      <h3>Recent Transactions</h3>

      {txs.length === 0 && <p>No transactions found.</p>}

      {txs.map((tx, i) => (
        <div key={i} style={{ marginBottom: "1rem" }}>
          <p>
            <strong>From:</strong> {tx.from}
          </p>
          <p>
            <strong>To:</strong> {tx.to}
          </p>
          <p>
            <strong>Asset:</strong> {tx.asset}
          </p>
          <p>
            <strong>Value:</strong> {tx.value}
          </p>
          <p>
            <strong>Time:</strong>{" "}
            {new Date(tx.metadata.blockTimestamp).toLocaleString()}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
