"use client";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Play } from "lucide-react";

const navItems = [
  { name: "Hub", href: "/" },
  { name: "Learn & Grow", href: "/learn-grow" },
  { name: "Why We're Different", href: "/whychooseus" },
  { name: "Scholarship", href: "/scholarships" },
  // Campus Video - opens YouTube in modal
  {
    name: "Campus Video",
    type: "video",
    youtubeId: "YOUR_YOUTUBE_VIDEO_ID", // 🔁 Replace with your actual YouTube video ID
  },
  // Dropdown: Explore
  {
    name: "Explore",
    type: "dropdown",
    children: [
      // { name: "Jio", href: "/explore/jio" },
      // { name: "IIT Bombay", href: "/explore/iit-bombay" },
      // { name: "IFEX 2026", href: "/explore/ifex" },
      {name:"Industrial Visit",href:"/industrial-visit"},
      { name: "Students Community", href: "/explore/students-community" },
      { name: "Sports", href: "/explore/sports" },
      { name: "Student Profiles", href: "/explore/student-profiles" },
    ],
  },
  // Brochure - direct PDF open in new tab
  {
    name: "Brochure",
    type: "pdf",
    href: "/brochure/brochure.pdf", // 🔁 apni PDF file ka path yahan daalo (public folder mein rakhna)
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Close mobile menu on outside click
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

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close video modal on Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setVideoOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleWhatsApp = (href) => {
    window.open(href, "_blank");
  };

  const FILE_ID = "1dJq9lGzkHFW-ykgabIOc2CW5hu9rHPeK"; // 🔁 Replace with your Google Drive file ID
  const driveEmbedUrl = `https://drive.google.com/file/d/${FILE_ID}/preview`;

  const isActive = (href) => href && !href.startsWith("http") && pathname === href;

  return (
    <>
      <style jsx>{`
        .nav-link {
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: #007bff;
        }
        .mobile-link:hover {
          background-color: rgba(0, 123, 255, 0.05);
        }
        .dropdown-item:hover {
          background-color: rgba(0, 123, 255, 0.07);
          color: #007bff;
        }
        .video-modal-overlay {
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .video-modal-content {
          animation: scaleIn 0.25s ease;
        }
        @keyframes scaleIn {
          from { transform: scale(0.93); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>

      {/* ── Campus Video Modal — Fully Responsive ── */}
      {videoOpen && (
        <div
          className="video-modal-overlay fixed inset-0 z-[999] flex items-center justify-center bg-black/85 p-3 sm:p-5 md:p-10"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="video-modal-content relative w-full flex flex-col rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-[#0d0d0d]"
            style={{ maxWidth: "min(860px, 96vw)", maxHeight: "92vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── Header ── */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#111] border-b border-white/10 flex-shrink-0">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-7 h-7 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <Play className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
                </div>
                <span className="text-white text-sm font-bold truncate">Campus Video</span>
                <span className="text-white/30 text-xs hidden sm:inline truncate">· Nexcore Institute of Technology</span>
              </div>
              <button
                onClick={() => setVideoOpen(false)}
                className="flex-shrink-0 ml-3 p-1.5 rounded-full bg-white/10 hover:bg-red-500/80 transition-all duration-200 flex items-center justify-center group"
                aria-label="Close video"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 group-hover:text-white" />
              </button>
            </div>

            {/* ── Video — 16:9 aspect ratio, fills available space ── */}
            <div className="relative w-full flex-1 bg-black" style={{ paddingTop: "56.25%" }}>
              <iframe
                src={driveEmbedUrl}
                title="Campus Video"
                allow="autoplay; fullscreen"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0, left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                  display: "block",
                }}
              />
            </div>

            {/* ── Footer ── */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#111] border-t border-white/10 flex-shrink-0">
              <span className="text-white/30 text-[11px] hidden sm:block">Press Esc to close</span>
              <button
                onClick={() => setVideoOpen(false)}
                className="ml-auto text-[11px] font-semibold text-white/40 hover:text-white/80 transition px-3 py-1 rounded-lg hover:bg-white/10"
              >
                Close ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Navbar ── */}
      <nav
        className="fixed w-full top-0 z-50 bg-white border-b shadow-sm"
        style={{ borderColor: "#e5e7eb" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 min-w-0">
              <Image
                src="/logo2.png"
                alt="Nexcore Logo Icon"
                width={250}
                height={100}
                className="h-7 mb-7 sm:h-8 md:h-10 w-auto scale-150 mr-4 mt-3 flex-shrink-0"
                priority
              />
              <Image
                src="/logo05.png"
                alt="Nexcore Institute of Technology"
                width={200}
                height={200}
                className="h-9 sm:h-7 md:h-20 ml-15 mt-1 w-fit scale-350"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center ml-auto">
              <ul className="flex items-center gap-1 xl:gap-2">
                {navItems.map((item, index) => {
                  // ── Dropdown ──
                  if (item.type === "dropdown") {
                    return (
                      <li key={item.name} className="relative" ref={dropdownRef}>
                        <button
                          onClick={() => setDropdownOpen((p) => !p)}
                          className="nav-link flex items-center gap-1 py-2 px-2 xl:px-4 font-semibold text-sm xl:text-base whitespace-nowrap"
                          style={{
                            fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                            color: "#2C2C2C",
                          }}
                        >
                          {item.name}
                          <ChevronDown
                            className="w-4 h-4 transition-transform"
                            style={{
                              transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                            }}
                          />
                        </button>
                        {dropdownOpen && (
                          <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-gray-200 rounded-xl shadow-lg py-1 z-50">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                onClick={() => setDropdownOpen(false)}
                                className="dropdown-item block px-4 py-2.5 text-sm font-medium transition-colors"
                                style={{
                                  fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                                  color: isActive(child.href) ? "#007BFF" : "#2C2C2C",
                                  backgroundColor: isActive(child.href)
                                    ? "rgba(0,123,255,0.07)"
                                    : "transparent",
                                }}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </li>
                    );
                  }

                  // ── Campus Video ──
                  if (item.type === "video") {
                    return (
                      <li key={item.name}>
                        <button
                          onClick={() => setVideoOpen(true)}
                          className="nav-link flex items-center gap-1.5 py-2 px-2 xl:px-4 font-semibold text-sm xl:text-base whitespace-nowrap"
                          style={{
                            fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                            color: "#2C2C2C",
                          }}
                        >
                          <Play className="w-3.5 h-3.5 fill-current" style={{ color: "#FF7F00" }} />
                          {item.name}
                        </button>
                      </li>
                    );
                  }

                  // ── PDF Brochure ──
                  if (item.type === "pdf") {
                    return (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="nav-link block py-2 px-2 xl:px-4 font-semibold text-sm xl:text-base whitespace-nowrap"
                          style={{
                            fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                            color: "#2C2C2C",
                          }}
                        >
                          {item.name}
                        </a>
                      </li>
                    );
                  }

                  // ── Regular Link ──
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="nav-link block py-2 px-2 xl:px-4 font-semibold text-sm xl:text-base whitespace-nowrap"
                        style={{
                          fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                          color: isActive(item.href) ? "#007BFF" : "#2C2C2C",
                          borderBottom: isActive(item.href) ? "2px solid #007BFF" : "none",
                        }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Mobile Hamburger */}
            <button
              ref={buttonRef}
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg flex-shrink-0"
              style={{
                backgroundColor: menuOpen
                  ? "rgba(255, 127, 0, 0.1)"
                  : "rgba(0, 123, 255, 0.1)",
              }}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#FF7F00" }} />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#007BFF" }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            ref={menuRef}
            className="lg:hidden border-t bg-white"
            style={{ borderColor: "#e5e7eb" }}
          >
            <ul className="py-2">
              {navItems.map((item) => {
                // ── Dropdown (mobile) ──
                if (item.type === "dropdown") {
                  return (
                    <li key={item.name}>
                      <button
                        onClick={() => setMobileExploreOpen((p) => !p)}
                        className="mobile-link w-full flex items-center justify-between py-3 px-4 sm:px-6 font-semibold text-sm sm:text-base"
                        style={{
                          fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                          color: "#2C2C2C",
                        }}
                      >
                        {item.name}
                        <ChevronDown
                          className="w-4 h-4 transition-transform"
                          style={{
                            transform: mobileExploreOpen ? "rotate(180deg)" : "rotate(0deg)",
                          }}
                        />
                      </button>
                      {mobileExploreOpen && (
                        <ul className="bg-gray-50 border-t border-gray-100">
                          {item.children.map((child) => (
                            <li key={child.name}>
                              <Link
                                href={child.href}
                                onClick={() => {
                                  setMenuOpen(false);
                                  setMobileExploreOpen(false);
                                }}
                                className="mobile-link block py-2.5 pl-8 pr-4 text-sm font-medium"
                                style={{
                                  fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                                  color: isActive(child.href) ? "#007BFF" : "#555",
                                }}
                              >
                                {child.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }

                // ── Campus Video (mobile) ──
                if (item.type === "video") {
                  return (
                    <li key={item.name}>
                      <button
                        onClick={() => {
                          setMenuOpen(false);
                          setVideoOpen(true);
                        }}
                        className="mobile-link w-full flex items-center gap-2 py-3 px-4 sm:px-6 font-semibold text-sm sm:text-base"
                        style={{
                          fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                          color: "#2C2C2C",
                        }}
                      >
                        <Play className="w-3.5 h-3.5 fill-current" style={{ color: "#FF7F00" }} />
                        {item.name}
                      </button>
                    </li>
                  );
                }

                // ── PDF Brochure (mobile) ──
                if (item.type === "pdf") {
                  return (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}
                        className="mobile-link block py-3 px-4 sm:px-6 font-semibold text-sm sm:text-base"
                        style={{
                          fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                          color: "#2C2C2C",
                        }}
                      >
                        {item.name}
                      </a>
                    </li>
                  );
                }

                // ── Regular Link (mobile) ──
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="mobile-link block py-3 px-4 sm:px-6 font-semibold text-sm sm:text-base"
                      style={{
                        fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                        color: isActive(item.href) ? "#007BFF" : "#2C2C2C",
                        backgroundColor: isActive(item.href)
                          ? "rgba(0, 123, 255, 0.05)"
                          : "transparent",
                        borderLeft: isActive(item.href) ? "3px solid #007BFF" : "none",
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;