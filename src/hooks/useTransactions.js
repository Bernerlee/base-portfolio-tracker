import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { getTransactions } from "../utils/alchemy";

export const useTransactions = () => {
  const { address } = useAccount();
  const [txs, setTxs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!address) return;

    const fetchTxs = async () => {
      setLoading(true);
      try {
        const data = await getTransactions(address);
        setTxs(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTxs();
  }, [address]);

  return { txs, loading };
};