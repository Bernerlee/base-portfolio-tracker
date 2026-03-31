import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { WagmiProvider, createConfig, http } from "wagmi";
import { base } from "wagmi/chains";
import { injected } from "wagmi/connectors";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const config = createConfig({
  chains: [base],
  connectors: [injected()],
  transports: {
    [base.id]: http(),
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </WagmiProvider>,
);
