const TokenList = () => {
  const tokens = [
    { name: "USDC", balance: "120" },
    { name: "DAI", balance: "50" },
  ];

  return (
    <div>
      <h3>Tokens</h3>
      {tokens.map((token, i) => (
        <p key={i}>
          {token.name}: {token.balance}
        </p>
      ))}
    </div>
  );
};

export default TokenList;
