import { useBalance, useAccount } from "wagmi";

const BalanceCard = () => {
  const { address } = useAccount();
  const { data, isLoading } = useBalance({
    address,
  });

  if (isLoading) return <p>Loading balance...</p>;

  return (
    <div>
      <h3>Balance</h3>
      <p>
        {data?.formatted} {data?.symbol}
      </p>
    </div>
  );
};

export default BalanceCard;
