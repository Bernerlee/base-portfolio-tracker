import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { WagmiConfig, createConfig } from "wagmi";
import { base } from "wagmi/chains";
import { injected } from "wagmi/connectors";

const config = createConfig({
  chains: [base],
  connectors: [injected()],
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <WagmiConfig config={config}>
    <App />
  </WagmiConfig>,
);
