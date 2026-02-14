import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

const Contact = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        paddingTop: "clamp(7rem, 14vh, 9rem)",
        paddingBottom: "clamp(3rem, 8vh, 4rem)",
        paddingLeft: "clamp(1.25rem, 5vw, 2rem)",
        paddingRight: "clamp(1.25rem, 5vw, 2rem)",
        maxWidth: "680px",
        margin: "0 auto",
        color: "var(--text)",
      }}
    >
      <motion.div variants={container} initial="hidden" animate="show">
        {/* Intro (no title now) */}
        <motion.p
          variants={fadeUp}
          style={{
            fontSize: "clamp(1rem, 3.5vw, 1.1rem)",
            lineHeight: 1.75,
            opacity: 0.85,
            marginBottom: "2.5rem",
          }}
        >
          If you'd like to reach out, here are a few ways to connect.
        </motion.p>

        {/* Glass Card */}
        <motion.div
          variants={fadeUp}
          style={{
            padding: "clamp(1.25rem, 4vw, 2rem)",
            background: "var(--glass-bg)",
            border: "1px solid var(--glass-border)",
            borderRadius: "18px",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Academic Email */}
          <div style={{ marginBottom: "1.5rem" }}>
            <div style={labelStyle}>Academic Email</div>
            <a
              href="mailto:sowndaryakrishnanna@mines.edu"
              style={valueLinkStyle}
            >
              sowndaryakrishnanna@mines.edu
            </a>
          </div>

          {/* Personal Email */}
          <div style={{ marginBottom: "1.5rem" }}>
            <div style={labelStyle}>Personal Email</div>
            <a href="mailto:krishnaofficial27@gmail.com" style={valueLinkStyle}>
              krishnaofficial27@gmail.com
            </a>
          </div>

          {/* GitHub */}
          <div style={{ marginBottom: "1.5rem" }}>
            <div style={labelStyle}>GitHub</div>
            <a
              href="https://github.com/KrishnanN27"
              target="_blank"
              rel="noreferrer"
              style={valueLinkStyle}
            >
              github.com/KrishnanN27
            </a>
          </div>

          {/* LinkedIn */}
          <div>
            <div style={labelStyle}>LinkedIn</div>
            <a
              href="https://www.linkedin.com/in/krishnan-n/"
              target="_blank"
              rel="noreferrer"
              style={valueLinkStyle}
            >
              linkedin.com/in/krishnan-n/
            </a>
          </div>
        </motion.div>

        {/* Soft close line */}
        <motion.div
          variants={fadeUp}
          style={{
            marginTop: "2.5rem",
            fontSize: "0.9rem",
            opacity: 0.6,
          }}
        >
          I usually reply promptly.
        </motion.div>
      </motion.div>
    </section>
  );
};

/* ---------- styles ---------- */

const labelStyle = {
  opacity: 0.55,
  fontSize: "0.85rem",
  marginBottom: "0.35rem",
};

const valueLinkStyle = {
  fontSize: "1rem",
  fontWeight: 500,
  color: "var(--text)",
  textDecoration: "none",
  transition: "opacity 0.2s ease",
};

export default Contact;
