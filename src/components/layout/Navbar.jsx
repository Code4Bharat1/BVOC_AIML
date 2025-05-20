"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Hub", href: "/" },
  { name: "Infrastructure", href: "/infrastructure" },
  { name: "Learn & Grow", href: "/learn-grow" },
  { name: "Why We're Different", href: "/whychooseus" },
];

const dropdownItems = [
  {
    name: "Admission Criteria",
    href: "/docs/Admission Eligibility Criteria.pdf",
  },
  { name: "Scholarships", href: "/docs/BVoc_Scholarship_Policy.pdf" },
  { name: "Paid Internships", href: "/docs/BVoc_Paid_Internship_Policy.pdf" },
  {
    name: "Fees Structure",
    href: "/docs/BVoc_Fee_Structure_and_Payment_Policy.pdf",
  },
  {
    name: "Selection Process",
    href: "/docs/Internal_Selection_Process_Policy.pdf",
  },
  {
    name: "Placement Guarantee",
    href: "/docs/Guaranteed_Placement_Policy.pdf",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const menuRef = useRef(null);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

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
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <style>{`
        /* Mobile menu animation */
        .mobile-menu {
          max-height: 0;
          opacity: 0;
          transform: translateY(-10px);
          transition: max-height 0.4s ease, opacity 0.4s ease, transform 0.4s ease;
          position: absolute;
          width: 100%;
          left: 0;
          top: 100%;
          background: #2C2E33;
          z-index: 40;
          pointer-events: none; /* Disable pointer events when closed */
        }
        .mobile-menu.open {
          max-height: 600px;
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto; /* Enable pointer events when open */
        }
        /* Dropdown animation */
        .dropdown-menu {
          max-height: 0;
          opacity: 0;
          transform: translateY(-10px);
          transition: max-height 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
          position: absolute;
          top: 100%;
          left: 50%;
          transform-origin: top;
          background: #2C2E33;
          pointer-events: none; /* Disable pointer events when closed */
          z-index: 50;
        }
        .dropdown-menu.open {
          max-height: 600px;
          opacity: 1;
          transform: translateY(0) translateX(-50%);
          pointer-events: auto; /* Enable pointer events when open */
        }
        /* Ensure no layout shift */
        @media (min-width: 768px) {
          .mobile-menu {
            position: static;
            max-height: none;
            opacity: 1;
            transform: none;
            transition: none;
            pointer-events: auto; /* Always interactive in desktop view */
          }
          .dropdown-menu {
            position: absolute;
            pointer-events: none; /* Keep dropdown non-interactive when closed */
          }
          .dropdown-menu.open {
            pointer-events: auto; /* Enable when open */
          }
        }
      `}</style>

      <nav className="bg-[#2C2E33] fixed w-full top-0 z-50 border-b border-gray-700">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between gap-x-8">
          <div className="text-white text-2xl font-extrabold tracking-wide">
            <Link href="/">
              <span>
                <span className="text-[#AC6CFF]">B</span>VOC
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* Hamburger for Mobile */}
            <button
              ref={buttonRef}
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-gray-400 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all"
              aria-controls="navbar-default"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="space-y-1">
                <span
                  className={`block w-6 h-0.5 bg-white transform transition duration-300 ${
                    menuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-white transform transition duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
            </button>

            {/* Main Nav */}
            <div
              ref={menuRef}
              className={`mobile-menu md:flex md:items-center md:space-x-10 md:static md:w-auto ${
                menuOpen ? "open" : ""
              }`}
              id="navbar-default"
            >
              <ul className="flex flex-col md:flex-row font-medium text-white mt-4 md:mt-0 text-center md:space-x-10">
                {navItems.map(({ name, href }) => {
                  const isActive = pathname === href;
                  return (
                    <li key={name} className="relative">
                      <Link
                        href={href}
                        className={`block py-2 px-3 transition-colors ${
                          isActive ? "font-bold" : "hover:text-gray-300"
                        }`}
                      >
                        {name}
                      </Link>
                      {isActive && (
                        <div className="absolute left-1/2 -bottom-1 transform -translate-x-1/2">
                          <span className="w-1 h-1 bg-purple-500 rounded-full block" />
                        </div>
                      )}
                    </li>
                  );
                })}

                {/* Opportunities Dropdown */}
                <li className="relative" ref={dropdownRef}>
                  <button
                    onClick={toggleDropdown}
                    className="block py-2 px-3 w-full transition-colors hover:text-gray-300 md:group"
                  >
                    Opportunities
                  </button>

                  <ul
                    className={`dropdown-menu bg-[#2C2E33] border border-gray-600 rounded shadow-lg min-w-[200px] text-sm text-white ${
                      dropdownOpen ? "open" : ""
                    }`}
                  >
                    {dropdownItems.map(({ name, href }) => (
                      <li key={name}>
                        <a
                          href={href}
                          download
                          className="block px-4 py-2 hover:bg-gray-700"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
