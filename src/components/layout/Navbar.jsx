"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Hub", href: "/" },
  { name: "Infrastructure", href: "/infrastructure" },
  { name: "Learn & Grow", href: "/learn-grow" },
  { name: "Why We're Different", href: "/whychooseus" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const mobileMenuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md border-b border-white/10 bg-gradient-to-r from-[#0A0F1C]/90 via-[#111A2C]/80 to-[#1B0D2E]/90 shadow-[0_0_20px_rgba(172,108,255,0.2)]">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between gap-x-8">
        {/* Logo */}
        <motion.div
          className="text-white text-2xl font-extrabold tracking-wide"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link href="/">
            <span className="hover:text-[#00FFFF] transition-all duration-300">
              <span className="text-[#AC6CFF] drop-shadow-[0_0_6px_#AC6CFF]">B</span>VOC
            </span>
          </Link>
        </motion.div>

        <div className="flex items-center space-x-4">
          {/* Mobile menu toggle */}
          <motion.button
            ref={buttonRef}
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-[#AC6CFF] rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#AC6CFF]/40 transition-all"
            aria-controls="navbar-default"
            aria-expanded={menuOpen}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="sr-only">Open main menu</span>
            <div className="space-y-1">
              <motion.span
                className="block w-6 h-0.5 bg-white origin-center"
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-white"
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-white origin-center"
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex md:items-center md:space-x-10"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <ul className="flex font-medium text-white space-x-10">
              {navItems.map(({ name, href }, index) => {
                const isActive = pathname === href;
                return (
                  <motion.li
                    key={name}
                    className="relative group"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.4 + index * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <Link
                      href={href}
                      className={`block py-2 px-3 transition-all duration-300 ${
                        isActive
                          ? "text-[#00FFFF] font-bold drop-shadow-[0_0_8px_#00FFFF]"
                          : "text-white hover:text-[#AC6CFF] hover:drop-shadow-[0_0_8px_#AC6CFF]"
                      }`}
                    >
                      {name}
                    </Link>
                    {isActive && (
                      <motion.div
                        className="absolute left-1/2 -bottom-1 transform -translate-x-1/2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <span className="w-1.5 h-1.5 bg-[#00FFFF] rounded-full block shadow-[0_0_6px_#00FFFF]" />
                      </motion.div>
                    )}
                  </motion.li>
                );
              })}
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.4 + navItems.length * 0.1,
                  ease: "easeOut",
                }}
              >
                <a
                  href="https://wa.me/919876543210?text=Hi%2C%20I'm%20interested%20in%20viewing%20the%20brochure%20for%20the%20B.Voc%20Program."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 px-3 transition-all text-white hover:text-[#00FFFF] hover:drop-shadow-[0_0_8px_#00FFFF]"
                >
                  Brochure
                </a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                ref={menuRef}
                className="md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-[#0A0F1C]/95 via-[#111A2C]/90 to-[#1B0D2E]/95 border-t border-white/10 shadow-[0_0_25px_rgba(172,108,255,0.2)] backdrop-blur-md z-40 overflow-hidden"
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                id="navbar-default"
              >
                <ul className="flex flex-col font-medium text-white text-center py-4">
                  {navItems.map(({ name, href }, index) => {
                    const isActive = pathname === href;
                    return (
                      <motion.li
                        key={name}
                        custom={index}
                        variants={menuItemVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="relative"
                      >
                        <Link
                          href={href}
                          onClick={() => setMenuOpen(false)}
                          className={`block py-3 px-6 transition-all duration-300 ${
                            isActive
                              ? "bg-[#AC6CFF]/20 text-[#00FFFF] font-bold"
                              : "hover:bg-[#AC6CFF]/10 hover:text-[#AC6CFF]"
                          }`}
                        >
                          {name}
                        </Link>
                      </motion.li>
                    );
                  })}
                  <motion.li
                    custom={navItems.length}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <a
                      href="https://wa.me/919892398976?text=Hi%2C%20I'm%20interested%20in%20viewing%20the%20brochure%20for%20the%20B.Voc%20Program."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-3 px-6 transition-all duration-300 hover:bg-[#AC6CFF]/10 hover:text-[#AC6CFF]"
                      onClick={() => setMenuOpen(false)}
                    >
                      Brochure
                    </a>
                  </motion.li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
