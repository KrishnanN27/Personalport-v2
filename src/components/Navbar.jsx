import { motion } from "framer-motion";
import { Atom, Briefcase, Home, Mail, Moon, Sun, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/about", icon: User, label: "About" },
    { path: "/portfolio", icon: Briefcase, label: "Portfolio" },
    { path: "/research", icon: Atom, label: "Research" },
    { path: "/contact", icon: Mail, label: "Contact" },
  ];

  return (
    <>
      {/* ---------------- NAVBAR ---------------- */}
      <nav className="navbar-container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
            padding: "0.5rem",
            background: "var(--glass-bg)",
            color: "var(--text)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            border: "1px solid var(--glass-border)",
            borderRadius: "20px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
            position: "relative",
          }}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.7rem 1.1rem",
                  background: "transparent",
                  color: "inherit",
                  border: "none",
                  borderRadius: "14px",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  fontWeight: isActive ? 600 : 500,
                  zIndex: 1,
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active-pill"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "14px",
                      background:
                        theme === "dark"
                          ? "rgba(255,255,255,0.16)"
                          : "rgba(0,0,0,0.06)",
                      boxShadow:
                        theme === "dark"
                          ? "inset 0 1px 0 rgba(255,255,255,0.25)"
                          : "inset 0 1px 0 rgba(255,255,255,0.6)",
                      zIndex: -1,
                    }}
                  />
                )}

                <Icon size={18} strokeWidth={2.5} />
                <span className="nav-label">{item.label}</span>
              </button>
            );
          })}

          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              marginLeft: 4,
              background: "rgba(255,255,255,0.12)",
              color: "inherit",
              border: "1px solid var(--glass-border)",
              borderRadius: "14px",
              cursor: "pointer",
            }}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>

      {/* ---------------- TIME ---------------- */}
      <div
        style={{
          position: "fixed",
          top: "1.5rem",
          right: "1.5rem",
          zIndex: 1000,
          padding: "0.75rem 1.2rem",
          background: "var(--glass-bg)",
          color: "var(--text)",
          border: "1px solid var(--glass-border)",
          borderRadius: "18px",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          fontWeight: 600,
          fontSize: "0.9rem",
        }}
      >
        {currentTime.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "America/Denver",
        })}{" "}
        <span style={{ opacity: 0.6, fontSize: "0.7rem" }}>MST</span>
      </div>

      {/* ---------------- RESPONSIVE CSS ---------------- */}
      <style>{`
        .navbar-container {
          position: fixed;
          top: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
        }

        @media (max-width: 768px) {
          .navbar-container {
            top: auto;
            bottom: 1.5rem;
          }

          .nav-label {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
