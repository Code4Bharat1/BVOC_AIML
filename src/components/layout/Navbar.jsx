"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiSparkles, HiMenu, HiX } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Hub", href: "/" },
  { name: "Infrastructure", href: "/infrastructure" },
  { name: "Learn & Grow", href: "/learn-grow" },
  { name: "Why We're Different", href: "/whychooseus" },
  {
    name: "Brochure",
    href: "https://wa.me/919594402822?text=Hi%2C%20I'm%20interested%20in%20viewing%20the%20brochure%20for%20the%20B.Voc%20Program.",
    external: true,
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  const activeIndex = navItems.findIndex(
    (item) => !item.external && item.href === pathname
  );

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (menuRef.current && !menuRef.current.contains(event.target)) &&
        (buttonRef.current && !buttonRef.current.contains(event.target)) &&
        (dropdownRef.current && !dropdownRef.current.contains(event.target))
      ) {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-xl border-b border-[#26C6DA]/20 bg-gradient-to-r from-[#1A287E]/90 via-[#2C3560]/90 to-[#212121]/90 shadow-lg shadow-[#26C6DA]/10">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#26C6DA 1px, transparent 1px), linear-gradient(90deg, #26C6DA 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-[#26C6DA] rounded-full"
            style={{
              left: `${20 + i * 20}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 1,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between relative z-10">
        {/* Logo */}
        <motion.div 
          className="text-white text-2xl md:text-3xl font-extrabold tracking-wide"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <HiSparkles className="text-[#26C6DA] text-xl" />
            </motion.div>
            <span className="hover:text-[#26C6DA] transition-all duration-300">
              <span className="text-[#26C6DA]">B</span>VOC
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.li 
                key={item.name} 
                className="relative group"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 px-3 transition-all duration-300 text-white hover:text-[#26C6DA] font-medium"
                  >
                    {item.name}
                    <span className="absolute inset-0 bg-[#26C6DA]/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></span>
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={`block py-2 px-3 transition-all duration-300 font-medium ${
                      activeIndex === index
                        ? "text-[#26C6DA]"
                        : "text-white hover:text-[#26C6DA]"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
                {activeIndex === index && (
                  <motion.div 
                    className="absolute left-1/2 -bottom-1 transform -translate-x-1/2"
                    layoutId="activeIndicator"
                  >
                    <motion.span 
                      className="w-1.5 h-1.5 bg-[#26C6DA] rounded-full block shadow-[0_0_8px_rgba(38,198,218,0.8)]"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                )}
              </motion.li>
            ))}

            {/* Student Panel Dropdown */}
            <li className="relative" ref={dropdownRef}>
              <motion.button
                onClick={toggleDropdown}
                className="flex items-center gap-1 py-2 px-3 text-white hover:text-[#26C6DA] transition-all duration-300 font-medium"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Student Panel
                <motion.div
                  animate={{ rotate: dropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <MdKeyboardArrowDown />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div 
                    className="absolute right-0 mt-2 w-44 bg-[#1A287E]/95 border border-[#26C6DA]/30 rounded-xl shadow-lg backdrop-blur-xl overflow-hidden"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="https://nexcore.classpro.in/users/sign_in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-white hover:bg-[#26C6DA]/20 hover:text-[#26C6DA] transition-colors"
                    >
                      Admin Panel
                    </a>
                    <div className="h-px bg-[#26C6DA]/20"></div>
                    <a
                      href="https://nexcore.classpro.in/people/sign_in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-white hover:bg-[#26C6DA]/20 hover:text-[#26C6DA] transition-colors"
                    >
                      Student Panel
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          ref={buttonRef}
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-[#26C6DA] rounded-lg hover:bg-[#26C6DA]/10 focus:outline-none focus:ring-2 focus:ring-[#26C6DA]/40 transition-all"
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <HiX className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <HiMenu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            className="md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-[#1A287E]/98 via-[#2C3560]/96 to-[#212121]/98 border-t border-[#26C6DA]/20 shadow-lg shadow-[#26C6DA]/10 backdrop-blur-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col text-white text-center py-4">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMenuOpen(false)}
                      className="block py-3 px-6 transition-all duration-300 hover:bg-[#26C6DA]/10 hover:text-[#26C6DA]"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block py-3 px-6 transition-all duration-300 ${
                        activeIndex === index
                          ? "bg-[#26C6DA]/20 text-[#26C6DA] font-bold"
                          : "hover:bg-[#26C6DA]/10 hover:text-[#26C6DA]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.li>
              ))}

              {/* Student Panel Dropdown in Mobile */}
              <motion.li 
                className="px-6 py-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <button
                  onClick={toggleDropdown}
                  className="w-full flex items-center justify-center gap-1 py-2 px-3 text-white hover:text-[#26C6DA] transition-all duration-300"
                >
                  Student Panel
                  <motion.div
                    animate={{ rotate: dropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MdKeyboardArrowDown />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div 
                      className="mt-2 bg-[#1A287E]/95 border border-[#26C6DA]/30 rounded-xl shadow-lg backdrop-blur-xl overflow-hidden"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <a
                        href="https://nexcore.classpro.in/users/sign_in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 text-white hover:bg-[#26C6DA]/20 hover:text-[#26C6DA] transition-colors"
                      >
                        Admin Panel
                      </a>
                      <div className="h-px bg-[#26C6DA]/20"></div>
                      <a
                        href="https://nexcore.classpro.in/people/sign_in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 text-white hover:bg-[#26C6DA]/20 hover:text-[#26C6DA] transition-colors"
                      >
                        Student Panel
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;