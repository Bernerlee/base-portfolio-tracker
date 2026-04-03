import { useTransactions } from "../hooks/useTransactions";
import { useAccount } from "wagmi";

const TransactionList = () => {
  const { txs, loading } = useTransactions();
  const { address } = useAccount();

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>

      {loading && <p className="text-gray-400">Loading...</p>}

      <div className="space-y-4">
        {txs.map((tx, i) => {
          const isReceived = tx.to?.toLowerCase() === address?.toLowerCase();

          return (
            <div
              key={i}
              className="p-4 bg-slate-800 rounded-xl border border-slate-700"
            >
              <p className="text-xs text-gray-400">
                {isReceived ? "Received" : "Sent"}
              </p>

              <p className="text-sm text-gray-400">
                {tx.from.slice(0, 6)}... → {tx.to?.slice(0, 6)}...
              </p>

              <p className="font-semibold">
                {tx.value} {tx.asset}
              </p>

              <a
                href={`https://basescan.org/tx/${tx.hash}`}
                target="_blank"
                className="text-blue-400 text-sm"
              >
                View on BaseScan
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TransactionList;
