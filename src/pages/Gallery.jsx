import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/* ---------- AUTO LOAD + CATEGORIZE ---------- */

const portraitModules = import.meta.glob(
  "../assets/gallery/portraits/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" },
);

const landscapeModules = import.meta.glob(
  "../assets/gallery/landscapes/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" },
);

const formatImages = (modules, category) =>
  Object.entries(modules).map(([path, src]) => {
    const name = path.split("/").pop().split(".")[0];
    const caption = name.replace(/[-_]/g, " ");
    return { src, caption, category };
  });

const images = [
  ...formatImages(portraitModules, "Portraits"),
  ...formatImages(landscapeModules, "Landscapes"),
];

/* ---------- COMPONENT ---------- */

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  /* ---------- Arrow Key Navigation ---------- */

  useEffect(() => {
    const handleKey = (e) => {
      if (activeIndex === null) return;

      if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }

      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      }

      if (e.key === "Escape") setActiveIndex(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  return (
    <section
      style={{
        minHeight: "100vh",
        maxWidth: "1200px",
        margin: "0 auto",
        paddingTop: "clamp(7rem, 14vh, 11rem)",

        paddingBottom: "clamp(3rem, 8vh, 5rem)",
        paddingInline: "clamp(1rem, 4vw, 2rem)",
        position: "relative",
        color: "var(--text)",
      }}
    >
      {/* ---------- QUOTE SECTION ---------- */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: "100%", // 👈 match gallery width
          margin: "0 0 clamp(1rem, 2.5vh, 2rem)",

          padding: "clamp(1.2rem, 3vw, 2.4rem)",

          borderRadius: "18px",
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
          position: "relative",
          textAlign: "center",
        }}
      >
        {/* subtle glossy top shine */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "40%",
            borderRadius: "18px",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.12), transparent)",
            pointerEvents: "none",
            opacity: 0.3,
          }}
        />

        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: "clamp(1.15rem, 2.4vw, 1.5rem)",

            fontFamily:
              "'Crimson Pro', 'Crimson Text', 'Libre Baskerville', serif",
            fontStyle: "italic",
            lineHeight: 1.7,
            margin: 0,
            position: "relative",
            zIndex: 1,
            opacity: 0.92,
          }}
        >
          “Medicine, law, business, engineering — these are noble pursuits and
          necessary to sustain life.{" "}
          <span
            style={{
              fontFamily: "inherit",
              fontStyle: "inherit",
              fontWeight: "inherit",
              fontSize: "inherit",
              lineHeight: "inherit",
              letterSpacing: "inherit",
              color: "#8b5cf6",
            }}
          >
            But poetry, beauty, romance, love —
          </span>{" "}
          these are what we stay alive for.”
        </motion.blockquote>

        <motion.footer
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: "clamp(1rem, 2vh, 1.6rem)",

            fontSize: "clamp(0.7rem, 1vw, 0.85rem)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            opacity: 0.55,
            position: "relative",
            zIndex: 1,
          }}
        >
          — Dead Poets Society
        </motion.footer>
      </motion.div>

      {/* ---------- RESPONSIVE GRID ---------- */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "clamp(0.75rem, 2vw, 1.5rem)",
        }}
      >
        {images.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: i * 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              overflow: "hidden",
              borderRadius: "12px",
            }}
          >
            <motion.img
              layoutId={img.src}
              src={img.src}
              loading="lazy"
              onClick={() => setActiveIndex(i)}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
              style={{
                width: "100%",
                aspectRatio: "4 / 5",
                objectFit: "cover",
                display: "block",
                cursor: "pointer",
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* ---------- LIGHTBOX ---------- */}

      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.95)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "clamp(1rem, 4vw, 3rem)",
              zIndex: 9999,
            }}
          >
            <motion.img
              layoutId={activeImage.src}
              src={activeImage.src}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "100%",
                maxHeight: "90vh",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((prev) =>
                  prev === 0 ? images.length - 1 : prev - 1,
                );
              }}
              style={arrowStyle("left")}
            >
              ‹
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((prev) =>
                  prev === images.length - 1 ? 0 : prev + 1,
                );
              }}
              style={arrowStyle("right")}
            >
              ›
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex(null);
              }}
              style={closeStyle}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

/* ---------- BUTTON STYLES ---------- */

const arrowStyle = (side) => ({
  position: "absolute",
  top: "50%",
  [side]: "2rem",
  transform: "translateY(-50%)",
  fontSize: "2rem",
  background: "rgba(255,255,255,0.1)",
  border: "none",
  color: "#fff",
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  cursor: "pointer",
});

const closeStyle = {
  position: "absolute",
  top: "1.5rem",
  right: "1.5rem",
  fontSize: "1.2rem",
  background: "rgba(255,255,255,0.1)",
  border: "none",
  color: "#fff",
  width: "38px",
  height: "38px",
  borderRadius: "50%",
  cursor: "pointer",
};

export default Gallery;
