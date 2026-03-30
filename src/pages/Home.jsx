import Navbar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <h3>Welcome 👋</h3>
        <p>Connect your wallet to view your Base assets.</p>
      </div>
    </>
  );
};

export default Home;
