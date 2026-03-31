import { useEffect, useState } from "react";
import { getTokenBalances } from "../utils/alchemy";
import { useAccount } from "wagmi";

export const useTokens = () => {
  const { address } = useAccount();
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!address) return;

    const fetchTokens = async () => {
      setLoading(true);
      try {
        const data = await getTokenBalances(address);
        setTokens(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTokens();
  }, [address]);

  return { tokens, loading };
};
