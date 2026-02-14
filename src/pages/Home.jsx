import { motion } from "framer-motion";
import Status from "../components/widgets/Status";
import NowPlaying from "../components/widgets/NowPlaying";
import Widget from "../components/Widget";
import headshot from "../assets/images/about/headshot.jpeg";

/* ---------------- animation presets ---------------- */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

/* ---------------- Tag component ---------------- */

const Tag = ({ children }) => (
  <motion.span
    variants={tagVariants}
    style={{
      padding: "0.25rem 0.6rem",
      fontSize: "0.75rem",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      borderRadius: "4px",
      background: "var(--tag-bg)",
      border: "1px solid var(--tag-border)",
      color: "var(--text)",
    }}
  >
    {children}
  </motion.span>
);

/* ---------------- component ---------------- */

const Home = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "var(--text)",
    fontWeight: 500,
    transition: "text-shadow 0.3s ease",
  };

  const handleEnter = (e) => {
    e.currentTarget.style.textShadow = "0 0 8px rgba(59,130,246,0.6)";
  };

  const handleLeave = (e) => {
    e.currentTarget.style.textShadow = "none";
  };

  return (
    <section
      style={{
        flex: 1,
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "10rem 2rem 6rem",
        position: "relative",
      }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 320px",
          gap: "3.5rem",
          alignItems: "start",
        }}
      >
        {/* ================= LEFT COLUMN ================= */}
        <div style={{ maxWidth: 720 }}>
          <motion.h1
            variants={fadeUp}
            style={{
              fontSize: "clamp(2.6rem, 5vw, 3.8rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              marginBottom: "0.8rem",
              lineHeight: 1.05,
            }}
          >
            Sowndarya{" "}
            <span style={{ opacity: 0.55, fontWeight: 400 }}>Krishnan</span>
          </motion.h1>

          <motion.div
            variants={container}
            style={{
              display: "flex",
              gap: "0.6rem",
              flexWrap: "wrap",
              marginBottom: "2rem",
            }}
          >
            <Tag>PhD Student</Tag>
            <Tag>Research Assistant</Tag>
            <Tag>Former Software Engineer</Tag>
          </motion.div>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.7,
              opacity: 0.75,
              marginBottom: "1.8rem",
            }}
          >
            PhD Student in Computer Science at{" "}
            <a
              href="https://www.mines.edu/"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              Colorado School of Mines
            </a>{" "}
            ·{" "}
            <a
              href="https://cs.mines.edu/"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              Computer Science
            </a>
          </motion.p>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              opacity: 0.6,
              marginBottom: "2.5rem",
            }}
          >
            A space where I share my research, personal journey, and
            photography.
          </motion.p>

          {/* ===== Upgraded Portfolio Button ===== */}
          <motion.a
            variants={fadeUp}
            href="/portfolio"
            whileHover={{ y: -2 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.7rem",
              padding: "0.55rem 1.2rem 0.55rem 0.55rem",
              borderRadius: "999px",
              textDecoration: "none",
              color: "var(--text)",
              fontWeight: 500,
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(59,130,246,0.3)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "rgba(59,130,246,0.6)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "rgba(59,130,246,0.3)")
            }
          >
            <img
              src={headshot}
              alt="Sowndarya"
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "1.5px solid rgba(255,255,255,0.6)",
              }}
            />
            View Portfolio
          </motion.a>
        </div>
        {/* ================= END LEFT COLUMN ================= */}

        {/* ================= RIGHT COLUMN ================= */}
        <motion.div
          variants={container}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <motion.div variants={fadeUp}>
            <Widget title="Spotify Now">
              <NowPlaying />
            </Widget>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Widget title="Status">
              <Status />
            </Widget>
          </motion.div>
        </motion.div>
        {/* ================= END RIGHT COLUMN ================= */}
      </motion.div>

      {/* ---------- mobile stack ---------- */}
      <style>
        {`
          @media (max-width: 900px) {
            section > div {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Home;
