import { useEffect } from "react";

import Navbar from "../components/NavBar";
import WalletConnect from "../components/WalletConnect";
import BalanceCard from "../components/BalanceCard";
import TransactionList from "../components/TransactionList";

const Home = () => {
  useEffect(() => {
    document.title = "Base Portfolio Tracker";
  }, []);
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <div>
            <h2 className="text-2xl font-semibold">Dashboard 👋</h2>
            <p className="text-gray-400">
              Track your Base wallet activity in real-time
            </p>
          </div>

          <WalletConnect />
        </div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Balance */}
          <div className="md:col-span-1 bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <BalanceCard />
          </div>

          {/* Transactions */}
          <div className="md:col-span-2 bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <TransactionList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
