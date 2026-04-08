import { useEffect, useState } from "react";
import { getTokenBalances } from "../utils/alchemy";
import { useAccount } from "wagmi";

export const useTokens = () => {
  const { address } = useAccount();
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!address) return;

    const fetchTokens = async () => {
      setLoading(true);
      try {
        const data = await getTokenBalances(address);
        const filtered = data.filter((token) => token.tokenBalance !== "0x0");

        setTokens(filtered);
      } catch (err) {
        console.error(err);
        setError("Fail to fetch tokens");
      } finally {
        setLoading(false);
      }
    };

    fetchTokens();
  }, [address]);

  return { tokens, loading, error };
};
