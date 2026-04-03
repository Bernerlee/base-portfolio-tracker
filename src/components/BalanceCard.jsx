import { useBalance, useAccount } from "wagmi";

const BalanceCard = () => {
  const { address } = useAccount();
  const { data, isLoading } = useBalance({ address });

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Wallet Balance</h3>

      {isLoading ? (
        <div className="animate-pulse h-8 bg-slate-700 rounded w-1/2"></div>
      ) : (
        <p className="text-3xl font-bold">
          {data?.formatted} {data?.symbol}
        </p>
      )}
    </div>
  );
};

export default BalanceCard;
