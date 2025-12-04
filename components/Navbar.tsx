"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navigation links
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Skills", href: "#terminal-skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Control navbar visibility based on scroll
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      // Show/hide based on scroll direction
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      // Add background on scroll
      setScrolled(window.scrollY > 50);
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 z-50 w-full h-[70px] flex justify-between items-center px-6 md:px-16 transition-all duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      } ${scrolled ? "glass border-b border-white/5" : "bg-transparent"}`}
    >
      <div className="flex flex-row gap-2 items-center">
        <Link href="/">
          <motion.div 
            className="flex flex-row gap-3 items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {/* Logo Image */}
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-purple-500/30">
              <Image
                src="/assets/images/placeholder-profile.png"
                alt="Logo"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <h1 className="text-white text-[18px] font-semibold tracking-wide">
              Girijesh
              <span className="text-purple-400 ml-1">.</span>
            </h1>
          </motion.div>
        </Link>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex flex-row gap-1">
        {navLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="nav-link px-4 py-2 text-white-200/80 text-sm font-medium hover:text-white transition-colors duration-300"
          >
            {link.name}
          </motion.a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <motion.button 
        onClick={toggleMobileMenu} 
        className="md:hidden text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
        whileTap={{ scale: 0.95 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="absolute top-[70px] left-0 w-full glass border-b border-white/5 p-6 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-2 items-center">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="w-full text-center py-3 text-white-200 text-lg hover:text-purple-400 transition-colors duration-300 rounded-lg hover:bg-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
