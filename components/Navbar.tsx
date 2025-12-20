import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/content";

interface NavbarProps {
  onNavigate: (view: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const MAIN_LINKS = [
    { name: "Home", href: "#hero" },
    { name: "Work", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const MENU_LINKS = NAV_LINKS.filter(
    (l) => !MAIN_LINKS.find((m) => m.name === l.name)
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);

    if (href === "about") {
      onNavigate({ type: "about" });
      window.scrollTo(0, 0);
      return;
    }

    onNavigate({ type: "home" });
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-3"
    >
      <nav
        className={`w-full max-w-7xl flex items-center justify-between rounded-full px-4 py-2 transition-all duration-300
        ${
          scrolled
            ? "bg-surface/80 backdrop-blur-md border border-purple-500/20 shadow-lg"
            : "bg-transparent"
        }`}
      >
        {/* Desktop Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("#hero");
          }}
          className="hidden lg:block text-2xl font-bold text-white"
        >
          Code<span className="text-accent">Kea</span>
        </a>

        {/* SM + MD — Only Home | Work | Contact */}
        <ul className="flex lg:hidden items-center gap-4 text-gray-200 font-medium">
          {MAIN_LINKS.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleLinkClick(link.href)}
                className="py-1 px-2 hover:text-accent"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-3 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleLinkClick(link.href)}
                className="px-4 py-2 rounded-full text-sm text-gray-200 hover:bg-white/10 hover:text-white"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Start Project button — ONLY visible on lg */}
        <button
          onClick={() => handleLinkClick("#contact")}
          className="hidden lg:flex px-5 py-2 bg-gradient-to-r from-purple-600 to-secondary rounded-full text-sm font-semibold text-white"
        >
          Start Project
        </button>

        {/* Hamburger — sm & md only */}
        <button
          className="text-white p-2 lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-4 right-4 bg-surface border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col gap-4 lg:hidden"
          >
            {MENU_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className="text-lg text-gray-300 hover:text-accent"
              >
                {link.name}
              </button>
            ))}

            {/* Start Project still available in mobile menu */}
            <button
              onClick={() => handleLinkClick("#contact")}
              className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-secondary text-white font-bold"
            >
              Start Project
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
