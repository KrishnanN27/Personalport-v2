const Research = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "8rem 2rem 4rem",
        maxWidth: "900px",
        margin: "0 auto",
        color: "var(--text)",
      }}
    >
      <h1
        style={{
          fontSize: "2.75rem",
          fontWeight: 700,
          marginBottom: "1.5rem",
        }}
      >
        Research
      </h1>

      <p
        style={{
          fontSize: "1.1rem",
          lineHeight: 1.8,
          opacity: 0.85,
          marginBottom: "3rem",
        }}
      >
        My research focuses on machine learning systems, distributed
        optimization, and the design of scalable algorithms that bridge theory
        and practice.
      </p>

      <div style={{ display: "grid", gap: "2rem" }}>
        {[
          {
            title: "Scalable Federated Learning with Privacy Guarantees",
            venue: "NeurIPS 2024",
            desc: "A framework for large-scale federated learning with formal privacy guarantees and minimal communication overhead.",
          },
          {
            title: "Efficient Neural Architecture Search via Gradient Sharing",
            venue: "ICML 2023",
            desc: "Introduces a gradient-based NAS method that reduces search cost by an order of magnitude.",
          },
          {
            title: "Adaptive Scheduling in Distributed Training Systems",
            venue: "Under Review",
            desc: "Explores adaptive resource allocation strategies for heterogeneous distributed training environments.",
          },
        ].map((paper) => (
          <div
            key={paper.title}
            style={{
              padding: "1.75rem",
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              borderRadius: "16px",
              backdropFilter: "blur(12px)",
            }}
          >
            <h3 style={{ fontSize: "1.3rem", fontWeight: 600 }}>
              {paper.title}
            </h3>
            <div
              style={{
                marginTop: "0.25rem",
                fontSize: "0.85rem",
                opacity: 0.6,
              }}
            >
              {paper.venue}
            </div>
            <p
              style={{
                marginTop: "0.75rem",
                lineHeight: 1.7,
                opacity: 0.8,
              }}
            >
              {paper.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Research;
