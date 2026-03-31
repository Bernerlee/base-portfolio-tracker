import { useTokens } from "../hooks/useTokens";

const TokenList = () => {
  const { tokens, loading } = useTokens();

  if (loading) return <p>Loading tokens...</p>;

  return (
    <div>
      <h3>Tokens</h3>
      {tokens.slice(0, 10).map((token, i) => (
        <p key={i}>
          {token.contractAddress} — {token.tokenBalance}
        </p>
      ))}
    </div>
  );
};

export default TokenList;
