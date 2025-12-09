import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/content';

interface NavbarProps {
  onNavigate: (view: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    // Check if it's the specific "about" route
    if (href === 'about') {
        onNavigate({ type: 'about' });
        setMobileMenuOpen(false);
        window.scrollTo(0, 0);
        return;
    }

    // Otherwise standard home scroll behavior
    onNavigate({ type: 'home' });
    setMobileMenuOpen(false);
    
    // Smooth scroll to section after view reset
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (href === '#hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
    >
      <nav
        className={`
          relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300
          ${scrolled ? 'bg-surface/80 backdrop-blur-md border border-purple-500/20 shadow-[0_0_15px_rgba(147,51,234,0.15)] w-full max-w-5xl' : 'bg-transparent w-full max-w-7xl'}
        `}
      >
        {/* Logo */}
        <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); handleLinkClick('#hero'); }}
            className="text-2xl font-display font-bold tracking-tighter text-white"
        >
          Rishabh <span className="text-accent">Labs</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-1 bg-white/5 backdrop-blur-sm px-2 py-1.5 rounded-full border border-white/5">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                className="relative px-5 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white rounded-full hover:bg-white/10"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleLinkClick('#contact'); }}
            className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-secondary rounded-full hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-all"
          >
            Start Project
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-24 left-4 right-4 bg-surface border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col space-y-4 md:hidden z-50"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                className="text-lg font-medium text-gray-300 hover:text-accent"
              >
                {link.name}
              </a>
            ))}
            <div className="h-px bg-white/10 my-2" />
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleLinkClick('#contact'); }}
              className="w-full text-center py-3 bg-gradient-to-r from-purple-600 to-secondary text-white font-bold rounded-xl"
            >
              Start Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;