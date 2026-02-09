import { motion } from "framer-motion";

import Widget from "../components/Widget";
import NowPlaying from "../components/widgets/NowPlaying";
import ContactCard from "../components/widgets/ContactCard";
import LatestProject from "../components/widgets/LatestProject";
import LatestBlog from "../components/widgets/LatestBlog";

/* ---------------- animation presets ---------------- */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

/* ---------------- component ---------------- */

const Home = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "10rem 2rem 6rem",
        color: "var(--text)",
        display: "flex",
        flexDirection: "column",
        gap: "3.2rem",
      }}
    >
      {/* ---------------- WIDGET ROW ---------------- */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.75rem",
          alignItems: "stretch",
        }}
      >
        <motion.div variants={fadeUp}>
          <Widget title="Latest Project">
            <LatestProject />
          </Widget>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Widget title="Latest Blog">
            <LatestBlog />
          </Widget>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Widget title="Get in Touch">
            <ContactCard />
          </Widget>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Widget title="Now Playing">
            <NowPlaying />
          </Widget>
        </motion.div>
      </motion.div>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ maxWidth: 720 }}
      >
        <motion.h1
          variants={fadeUp}
          style={{
            fontSize: "3.8rem",
            fontWeight: 700,
            letterSpacing: "-0.035em",
            marginBottom: "0.8rem",
          }}
        >
          Sowndarya Krishnan
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          style={{
            fontSize: "1.35rem",
            fontWeight: 400,
            opacity: 0.8,
            marginBottom: "1.8rem",
          }}
        >
          PhD Student · Research Assistant
        </motion.h2>

        <motion.p
          variants={fadeUp}
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.7,
            opacity: 0.78,
            marginBottom: "1.4rem",
          }}
        >
          I am a PhD student in Computer Science at Colorado School of Mines and
          a research assistant working on scientific and computational methods
          for complex physical systems.
        </motion.p>

        <motion.p
          variants={fadeUp}
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.7,
            opacity: 0.7,
          }}
        >
          My research focuses on hybrid quantum–AI approaches for solving
          partial differential equations, with applications in physics-based
          modeling and simulation.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Home;
