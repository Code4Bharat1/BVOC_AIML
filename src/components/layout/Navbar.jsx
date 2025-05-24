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

  // Animation variants for mobile menu
  const mobileMenuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for menu items
  const menuItemVariants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
    open: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <nav className="bg-[#2C2E33] fixed w-full top-0 z-50 border-b border-gray-700">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between gap-x-8">
        {/* Logo with animation */}
        <motion.div
          className="text-white text-2xl font-extrabold tracking-wide"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link href="/">
            <span>
              <span className="text-[#AC6CFF]">B</span>VOC
            </span>
          </Link>
        </motion.div>

        <div className="flex items-center space-x-4">
          {/* Animated hamburger menu button */}
          <motion.button
            ref={buttonRef}
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-gray-400 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all"
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
                animate={
                  menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>

          {/* Desktop navigation with animations */}
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
                    className="relative"
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
                      className={`block py-2 px-3 transition-colors ${
                        isActive ? "font-bold" : "hover:text-gray-300"
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
                        <span className="w-1 h-1 bg-purple-500 rounded-full block" />
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
                  href="/docs/BVoc_Program_Brochure.pdf"
                  download
                  className="block py-2 px-3 transition-colors hover:text-gray-300"
                >
                  Brochure
                </a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Mobile navigation menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                ref={menuRef}
                className="md:hidden absolute top-full left-0 w-full bg-[#2C2E33] z-40 overflow-hidden"
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
                        className="relative"
                        custom={index}
                        variants={menuItemVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                      >
                        <Link
                          href={href}
                          className={`block py-3 px-6 transition-colors ${
                            isActive
                              ? "font-bold bg-gray-700"
                              : "hover:bg-gray-700"
                          }`}
                          onClick={() => setMenuOpen(false)}
                        >
                          {name}
                        </Link>
                        {isActive && (
                          <motion.div
                            className="absolute left-1/2 bottom-2 transform -translate-x-1/2"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                          >
                            <span className="w-1 h-1 bg-purple-500 rounded-full block" />
                          </motion.div>
                        )}
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
                      href="/docs/BVoc_Program_Brochure.pdf"
                      download
                      className="block py-3 px-6 transition-colors hover:bg-gray-700"
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
