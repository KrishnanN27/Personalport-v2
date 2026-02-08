const Home = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "var(--text)",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "4rem", fontWeight: 700 }}>Sowndayra Krishnan</h1>

      <h2 style={{ opacity: 0.8, marginTop: "1rem" }}>
        Computer Science PhD · Research Scientist
      </h2>

      <p style={{ maxWidth: 650, marginTop: "2rem", opacity: 0.75 }}>
        Exploring the frontiers of machine learning and distributed systems.
      </p>
    </section>
  );
};

export default Home;
