import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useTheme } from "../context/ThemeContext";

const MainLayout = () => {
  const bgRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    import("beautiful-backgrounds").then(() => {
      if (!bgRef.current) return;

      bgRef.current
        .querySelectorAll("bb-ambient-ribbon")
        .forEach((n) => n.remove());

      const ribbon = document.createElement("bb-ambient-ribbon");

      if (theme === "dark") {
        ribbon.setAttribute("ribbon-count", "8");
        ribbon.setAttribute("ribbon-hue-start", "260");
        ribbon.setAttribute("ribbon-hue-end", "290");
        ribbon.setAttribute("ribbon-lightness-start", "45");
        ribbon.setAttribute("ribbon-lightness-end", "35");
        ribbon.setAttribute("ribbon-line-opacity", "0.08");
        ribbon.setAttribute("bg-colors", "#050208, #0a0410");
      } else {
        ribbon.setAttribute("ribbon-count", "8");
        ribbon.setAttribute("ribbon-hue-start", "310");
        ribbon.setAttribute("ribbon-hue-end", "280");
        ribbon.setAttribute("ribbon-lightness-start", "70");
        ribbon.setAttribute("ribbon-lightness-end", "65");
        ribbon.setAttribute("ribbon-line-opacity", "0.1");
        ribbon.setAttribute("bg-colors", "#f3f1ee, #f3f1ee");
      }

      bgRef.current.prepend(ribbon);
    });
  }, [theme]);

  return (
    <>
      {/* Background host */}
      <div ref={bgRef} />

      <Navbar />

      {/* Page content */}
      <main style={{ position: "relative", zIndex: 1 }}>
        <Outlet />
      </main>

      <style>{`
        bb-ambient-ribbon {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }
      `}</style>
    </>
  );
};

export default MainLayout;
