import { useAccount, useConnect, useDisconnect } from "wagmi";
import { formatAddress } from "../utils/format";

const WalletConnect = () => {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    alert("Address copied!");
  };

  if (isConnected) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-400">{formatAddress(address)}</span>
        <button
          onClick={disconnect}
          className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-sm"
        >
          Disconnect
        </button>
        <button
          onClick={copyAddress}
          className="bg-slate-700 px-3 py-1 rounded-lg text-sm"
        >
          Copy
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
