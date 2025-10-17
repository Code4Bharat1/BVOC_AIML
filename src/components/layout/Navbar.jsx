"use client";
import { useState, useRef, useEffect } from "react";
import { HiSparkles, HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { name: "Hub", href: "/" },
  { name: "Infrastructure", href: "/infrastructure" },
  { name: "Learn & Grow", href: "/learn-grow" },
  { name: "Why We're Different", href: "/whychooseus" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md border-b border-cyan-500/20 bg-gradient-to-r from-[#0f2847]/90 via-[#1a3a5c]/90 to-[#2d1b69]/90 shadow-lg shadow-cyan-500/10">
      {/* Decorative Stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <HiSparkles className="absolute top-2 left-20 text-cyan-400 text-sm animate-pulse" />
        <HiSparkles className="absolute top-3 right-32 text-orange-400 text-xs animate-pulse delay-300" />
        <HiSparkles className="absolute bottom-2 left-1/3 text-purple-400 text-sm animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between relative z-10">
        {/* Logo */}
        <div className="text-white text-2xl md:text-3xl font-extrabold tracking-wide">
          <a href="/" className="flex items-center gap-2 group">
            <HiSparkles className="text-cyan-400 text-xl group-hover:rotate-180 transition-transform duration-500" />
            <span className="hover:text-cyan-400 transition-all duration-300">
              <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(0,212,255,0.6)]">B</span>VOC
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <li key={item.name} className="relative group">
                <a
                  href={item.href}
                  onClick={() => setActiveIndex(index)}
                  className={`block py-2 px-3 transition-all duration-300 ${
                    activeIndex === index
                      ? "text-cyan-400 font-bold drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]"
                      : "text-white hover:text-cyan-400 hover:drop-shadow-[0_0_6px_rgba(0,212,255,0.6)]"
                  }`}
                >
                  {item.name}
                </a>
                {activeIndex === index && (
                  <div className="absolute left-1/2 -bottom-1 transform -translate-x-1/2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full block shadow-[0_0_8px_rgba(0,212,255,0.8)] animate-pulse" />
                  </div>
                )}
              </li>
            ))}
            <li>
              <a
                href="/contact"
                className="px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/50"
              >
                Brochure
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-cyan-400 rounded-lg hover:bg-cyan-500/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition-all"
        >
          {menuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-[#0f2847]/98 via-[#1a3a5c]/96 to-[#2d1b69]/98 border-t border-cyan-500/20 shadow-lg shadow-cyan-500/10 backdrop-blur-md"
        >
          <ul className="flex flex-col text-white text-center py-4">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => {
                    setActiveIndex(index);
                    setMenuOpen(false);
                  }}
                  className={`block py-3 px-6 transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-cyan-500/20 text-cyan-400 font-bold"
                      : "hover:bg-cyan-500/10 hover:text-cyan-400"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="px-6 py-3">
              <a
                href="/contact"
                className="block px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/50"
                onClick={() => setMenuOpen(false)}
              >
                Brochure
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;