import Navbar from "../components/NavBar";
import WalletConnect from "../components/WalletConnect";
import BalanceCard from "../components/BalanceCard";
import TransactionList from "../components/TransactionList";

const Home = () => {
  return (
    <div style={styles.page}>
      <Navbar />

      <main style={styles.container}>
        {/* Header Section */}
        <div style={styles.header}>
          <h2>Welcome 👋</h2>
          <p>Connect your wallet to view your Base assets.</p>
          <WalletConnect />
        </div>

        {/* Balance Section */}
        <div style={styles.section}>
          <BalanceCard />
        </div>

        {/* Transactions Section */}
        <div style={styles.section}>
          <TransactionList />
        </div>
      </main>
    </div>
  );
};

export default Home;
