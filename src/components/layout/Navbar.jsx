"use client";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { IoSchoolSharp } from "react-icons/io5";
import { HiSpeakerphone } from "react-icons/hi";

const navItems = [
  { name: "Hub", href: "/" },
  // { name: "Infrastructure", href: "/infrastructure" },
  { name: "Learn & Grow", href: "/learn-grow" },
  { name: "Why We're Different", href: "/whychooseus" },
  {
    name: "Brochure",
    href: "https://wa.me/919594402822?text=Hi%2C%20I'm%20interested%20in%20viewing%20the%20brochure%20for%20the%20B.Voc%20Program.",
    external: true,
  },
  { name: "Scholarships", href: "#", comingSoon: true },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const activeIndex = navItems.findIndex(
    (item) => !item.external && !item.comingSoon && item.href === pathname
  );

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleComingSoonClick = (e) => {
    e.preventDefault();
    setShowComingSoon(true);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (menuRef.current && !menuRef.current.contains(event.target)) &&
        (buttonRef.current && !buttonRef.current.contains(event.target))
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (showComingSoon) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showComingSoon]);

  return (
    <>
      <style jsx>{`
        .nav-link {
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: #007BFF;
        }
        .mobile-link:hover {
          background-color: rgba(0, 123, 255, 0.05);
        }
      `}</style>

      <nav className="fixed w-full top-0 z-50 bg-white border-b shadow-sm" style={{ borderColor: '#e5e7eb' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
          <div className="flex items-center justify-between ">
            {/* Logo & Brand Name - LEFT ALIGNED - RESPONSIVE */}
            <Link
              href="/"
              className="flex items-center  flex-shrink-0 min-w-0"
            >
              {/* Left Logo (Icon) */}
              <Image
                src="/logo2.png"
                alt="Nexcore Logo Icon"
                width={250}
                height={100}
                className="h-7 mb-7 sm:h-8 md:h-10 w-auto scale-150 mr-4 mt-3 flex-shrink-0"
                priority
              />

              {/* Right Logo (Text) */}
              <Image
                src="/logo05.png"
                alt="Nexcore Institute of Technology"
                width={200}
                height={200}
                className="h-9 sm:h-7 md:h-20 ml-15 mt-1 w-fit scale-350"
              />
            </Link>

            {/* Desktop Navigation - RIGHT SIDE - Hidden on mobile/tablet */}
            <div className="hidden lg:flex items-center ml-auto">
              <ul className="flex items-center gap-1 xl:gap-2">
                {navItems.map((item, index) => (
                  <li key={item.name}>
                    {item.comingSoon ? (
                      <button
                        onClick={handleComingSoonClick}
                        className="nav-link block py-2 px-2 xl:px-4 font-semibold text-sm xl:text-base whitespace-nowrap"
                        style={{
                          fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                          color: '#2C2C2C'
                        }}
                      >
                        {item.name}
                      </button>
                    ) : item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link block py-2 px-2 xl:px-4 font-semibold text-sm xl:text-base whitespace-nowrap"
                        style={{
                          fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                          color: '#2C2C2C'
                        }}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="nav-link block py-2 px-2 xl:px-4 font-semibold text-sm xl:text-base whitespace-nowrap"
                        style={{
                          fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                          color: activeIndex === index ? '#007BFF' : '#2C2C2C',
                          borderBottom: activeIndex === index ? '2px solid #007BFF' : 'none'
                        }}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Button - RIGHT SIDE - Visible on mobile/tablet */}
            <button
              ref={buttonRef}
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg flex-shrink-0"
              style={{
                backgroundColor: menuOpen ? 'rgba(255, 127, 0, 0.1)' : 'rgba(0, 123, 255, 0.1)'
              }}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#FF7F00' }} />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#007BFF' }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Fully responsive */}
        {menuOpen && (
          <div
            ref={menuRef}
            className="lg:hidden border-t bg-white"
            style={{ borderColor: '#e5e7eb' }}
          >
            <ul className="py-2">
              {navItems.map((item, index) => (
                <li key={item.name}>
                  {item.comingSoon ? (
                    <button
                      onClick={handleComingSoonClick}
                      className="mobile-link block py-3 px-4 sm:px-6 font-semibold text-sm sm:text-base w-full text-left"
                      style={{
                        fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                        color: '#2C2C2C'
                      }}
                    >
                      {item.name}
                    </button>
                  ) : item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMenuOpen(false)}
                      className="mobile-link block py-3 px-4 sm:px-6 font-semibold text-sm sm:text-base"
                      style={{
                        fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                        color: '#2C2C2C'
                      }}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="mobile-link block py-3 px-4 sm:px-6 font-semibold text-sm sm:text-base"
                      style={{
                        fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                        color: activeIndex === index ? '#007BFF' : '#2C2C2C',
                        backgroundColor: activeIndex === index ? 'rgba(0, 123, 255, 0.05)' : 'transparent',
                        borderLeft: activeIndex === index ? '3px solid #007BFF' : 'none'
                      }}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Coming Soon Modal */}
      <AnimatePresence>
        {showComingSoon && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowComingSoon(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />

            {/* Modal */}
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center"
              >
                {/* Close button */}
                <button
                  onClick={() => setShowComingSoon(false)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="inline-block mb-6"
                >
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                    <IoSchoolSharp className="text-blue-600 text-5xl" />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  Coming Soon!
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 text-lg">
                  Our Scholarships program is currently under development. Stay tuned for exciting opportunities!
                </p>

                {/* Additional Info */}
                <div className="bg-blue-50 rounded-xl p-4 mb-6 text-left">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm flex items-center gap-2">
                    <HiSpeakerphone className="text-blue-600 text-lg" />
                    Get Notified
                  </h4>
                  <p className="text-sm text-gray-600">
                    Follow us on social media or contact our admissions team to be the first to know when scholarship applications open.
                  </p>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setShowComingSoon(false)}
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  style={{ backgroundColor: '#007BFF' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#007BFF'}
                >
                  Got It!
                </button>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;