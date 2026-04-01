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

const styles = {
  page: {
    backgroundColor: "#0f172a",
    minHeight: "100vh",
    color: "#fff",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "2rem",
  },
  header: {
    marginBottom: "2rem",
    padding: "1.5rem",
    backgroundColor: "#1e293b",
    borderRadius: "12px",
  },
  section: {
    marginBottom: "2rem",
    padding: "1.5rem",
    backgroundColor: "#1e293b",
    borderRadius: "12px",
  },
};

export default Home;
