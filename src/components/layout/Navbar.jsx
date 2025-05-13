'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Hub', href: '/' },
  { name: 'Infrastructure', href: '/infrastructure' },
  { name: 'Learn & Grow', href: '/learn-grow' },
  { name: "Why We're Different", href: '/whychooseus' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-[#2C2E33] fixed w-full top-0 z-50 border-b border-gray-700">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-wrap items-center justify-between">
        
        {/* Brand Name */}
        <div className="text-white pl-4 lg:pl-0 text-2xl font-extrabold tracking-wide">
          <Link href="/">
            <span>
              <span className="text-[#AC6CFF]">B</span>VOC
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {/* Navigation links */}
        <div
          className={`w-full md:flex md:items-center md:justify-center md:w-auto ${menuOpen ? 'block' : 'hidden'}`}
          id="navbar-default"
        >
          <ul className="flex flex-col md:flex-row md:space-x-10 font-medium text-white mt-4 md:mt-0">
            {navItems.map(({ name, href }) => {
              const isActive = pathname === href;
              return (
                <li key={name} className="relative text-center">
                  <Link
                    href={href}
                    className={`block py-2 px-3 transition-colors ${
                      isActive ? 'font-bold' : 'hover:text-gray-300'
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
