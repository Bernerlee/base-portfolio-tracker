import { useBalance, useAccount } from "wagmi";

const BalanceCard = () => {
  const { address } = useAccount();
  const { data, isLoading } = useBalance({ address });

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Wallet Balance</h3>

      {isLoading ? (
        <p className="text-gray-400">Loading...</p>
      ) : (
        <p className="text-3xl font-bold">
          {data?.formatted} {data?.symbol}
        </p>
      )}
    </div>
  );
};

export default BalanceCard;
