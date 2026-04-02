import { useAccount, useConnect, useDisconnect } from "wagmi";

const WalletConnect = () => {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-400">
          {address.slice(0, 6)}...{address.slice(-4)}
        </span>
        <button
          onClick={disconnect}
          className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-sm"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => connect({ connector: connectors[0] })}
      className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl font-medium"
    >
      Connect Wallet
    </button>
  );
};

export default WalletConnect;
