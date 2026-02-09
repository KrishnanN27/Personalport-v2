const Contact = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "8rem 2rem 4rem",
        maxWidth: "700px",
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
        Contact
      </h1>

      <p
        style={{
          fontSize: "1.1rem",
          lineHeight: 1.8,
          opacity: 0.85,
          marginBottom: "3rem",
        }}
      >
        I’m always open to discussions about research, collaborations, or
        interesting problems. Feel free to reach out.
      </p>

      <div
        style={{
          padding: "2rem",
          background: "var(--glass-bg)",
          border: "1px solid var(--glass-border)",
          borderRadius: "18px",
          backdropFilter: "blur(12px)",
        }}
      >
        <div style={{ marginBottom: "1.5rem" }}>
          <div style={{ opacity: 0.6, fontSize: "0.85rem" }}>Email</div>
          <div style={{ fontSize: "1rem", fontWeight: 500 }}>
            yourname@university.edu
          </div>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <div style={{ opacity: 0.6, fontSize: "0.85rem" }}>Affiliation</div>
          <div style={{ fontSize: "1rem", fontWeight: 500 }}>
            Department of Computer Science
          </div>
        </div>

        <div>
          <div style={{ opacity: 0.6, fontSize: "0.85rem" }}>Links</div>
          <div
            style={{
              display: "flex",
              gap: "1.25rem",
              marginTop: "0.5rem",
              fontSize: "0.95rem",
            }}
          >
            <span style={{ opacity: 0.8 }}>Google Scholar</span>
            <span style={{ opacity: 0.8 }}>GitHub</span>
            <span style={{ opacity: 0.8 }}>LinkedIn</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
