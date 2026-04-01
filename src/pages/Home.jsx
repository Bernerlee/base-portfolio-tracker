import Navbar from "../components/NavBar";
import WalletConnect from "../components/WalletConnect";
import BalanceCard from "../components/BalanceCard";
import TransactionList from "../components/TransactionList";

const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <h3>Welcome 👋</h3>
        <p>Connect your wallet to view your Base assets.</p>
      </div>
      <WalletConnect />
      <BalanceCard />
      <TransactionList />
    </>
  );
};

export default Home;
