import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const NAV_HEIGHT = 80;

const links = [
  { label: "Home", to: "home" },
  { label: "About Me", to: "about" },
  { label: "Skills", to: "skills" }, // ✅ FIXED
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  /* ---------- Smooth Scroll with Offset ---------- */
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  /* ---------- Scroll Spy (ACTIVE LINK FIXED) ---------- */
  useEffect(() => {
    const sections = links
      .map(l => document.getElementById(l.to))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${NAV_HEIGHT}px 0px -40% 0px`,
        threshold: 0.1,
      }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className="nav">
        {/* LEFT */}
        <div className="nav-left">
          <motion.div
            className="logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            BK
          </motion.div>

          <div className="nav-name">
            <h1>Bharat Kolhe</h1>
            <div className="nav-tagline">
              DSA • Full Stack Developer • IoT Enthusiast
            </div>
          </div>
        </div>

        {/* DESKTOP LINKS */}
        <div className="nav-links">
          {links.map(l => {
            const isActive = active === l.to;

            return (
              <div
                key={l.to}
                className="nav-link-wrapper"
                onClick={() => scrollToSection(l.to)}
              >
                <motion.div
                  className="nav-link-content"
                  whileHover={{
                    scale: 1.1,
                    color: "var(--accent)",
                    textShadow: "0 0 8px var(--accent)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span
                    animate={{ color: isActive ? "var(--accent)" : "#fff" }}
                    transition={{ duration: 0.3 }}
                  >
                    {l.label}
                  </motion.span>

                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="underline"
                    />
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* HAMBURGER */}
        <div className="mobile-btn">
          <button onClick={() => setMenuOpen(true)}>☰</button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-dropdown"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <button className="close-btn" onClick={() => setMenuOpen(false)}>
              ✕
            </button>

            {links.map(l => (
              <div
                key={l.to}
                className="mobile-link"
                onClick={() => scrollToSection(l.to)}
              >
                {l.label}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
