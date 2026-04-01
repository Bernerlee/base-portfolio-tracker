export const getTransactions = async (address) => {
  const apiKey = import.meta.env.VITE_ALCHEMY_API_KEY;

  const url = `https://base-mainnet.g.alchemy.com/v2/${apiKey}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "alchemy_getAssetTransfers",
      params: [
        {
          fromBlock: "0x0",
          toAddress: address,
          category: ["external", "erc20", "erc721"],
          maxCount: "0x10", // 16 txs
          order: "desc",
          withMetadata: true,
        },
      ],
      id: 1,
    }),
  });

  const data = await response.json();
  return data.result.transfers;
};
