"use client";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Sparkles, Menu, X, ChevronDown } from "lucide-react";
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
  const pathname = usePathname();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

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
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md border-b border-slate-200 bg-white/95 shadow-sm">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-blue-400/30 rounded-full"
            style={{
              left: `${20 + i * 20}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0, 0.6, 0],
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
          className="text-slate-900 text-2xl md:text-3xl font-bold tracking-wide"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
          style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}
        >
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="text-blue-600 w-5 h-5" />
            </motion.div>
            <span className="hover:text-blue-600 transition-all duration-300">
              <span className="text-blue-600">B</span>VOC
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
                    className="block py-2 px-3 transition-all duration-300 text-slate-700 hover:text-blue-600 font-medium"
                    style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
                  >
                    {item.name}
                    <span className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></span>
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={`block py-2 px-3 transition-all duration-300 font-medium ${
                      activeIndex === index
                        ? "text-blue-600"
                        : "text-slate-700 hover:text-blue-600"
                    }`}
                    style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
                  >
                    {item.name}
                  </Link>
                )}
                {activeIndex === index && !item.external && (
                  <motion.div 
                    className="absolute left-1/2 -bottom-1 transform -translate-x-1/2"
                    layoutId="activeIndicator"
                  >
                    <motion.span 
                      className="w-1.5 h-1.5 bg-blue-600 rounded-full block shadow-sm"
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
                className="flex items-center gap-1 py-2 px-3 text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
                style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
              >
                Student Panel
                <motion.div
                  animate={{ rotate: dropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div 
                    className="absolute right-0 mt-2 w-44 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="https://nexcore.classpro.in/users/sign_in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
                    >
                      Admin Panel
                    </a>
                    <div className="h-px bg-slate-200"></div>
                    <a
                      href="https://nexcore.classpro.in/people/sign_in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
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
          className="md:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-blue-600 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
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
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
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
            className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-200 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col text-slate-700 text-center py-4">
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
                      className="block py-3 px-6 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600"
                      style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block py-3 px-6 transition-all duration-300 ${
                        activeIndex === index
                          ? "bg-blue-50 text-blue-600 font-semibold"
                          : "hover:bg-blue-50 hover:text-blue-600"
                      }`}
                      style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
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
                  className="w-full flex items-center justify-center gap-1 py-2 px-3 text-slate-700 hover:text-blue-600 transition-all duration-300"
                  style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
                >
                  Student Panel
                  <motion.div
                    animate={{ rotate: dropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div 
                      className="mt-2 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <a
                        href="https://nexcore.classpro.in/users/sign_in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
                      >
                        Admin Panel
                      </a>
                      <div className="h-px bg-slate-200"></div>
                      <a
                        href="https://nexcore.classpro.in/people/sign_in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
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