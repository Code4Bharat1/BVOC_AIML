"use client";

import { MapPin, Phone, Mail, Heart } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://www.facebook.com/profile.php?id=61585525156166", label: "Facebook" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/nexcoreinstitute?igsh=eDF4NHR3ZG50NWE0", label: "Instagram" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/school/nexcore-institute-of-technology-nit/posts/?feedView=all", label: "LinkedIn" },
    { icon: <FaYoutube />, url: "https://www.youtube.com/@NexcoreInstitute", label: "YouTube" },
    { icon: <FaWhatsapp />, url: "https://wa.me/919892398976", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 opacity-50" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-slate-800/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-800/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        {/* ===== MAIN GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-12 mb-12 border-b border-slate-800">
          {/* LOGO + ABOUT */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="bg-white rounded-lg p-3 inline-block shadow-lg">
                <Image
                  src="/logo.png"
                  alt="Nexcore Institute"
                  width={140}
                  height={80}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm mb-6">
              A next-generation institute empowering students with real-world
              AI and technology skills for industry-ready careers.
            </p>

            {/* Social Links - Desktop */}
            <div className="hidden sm:flex gap-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-white hover:text-slate-900 hover:border-white transition-all duration-300 group"
                >
                  <span className="text-sm">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <h3 className="text-base font-semibold mb-6 text-white uppercase tracking-wide">
              Explore
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/infrastructure", label: "Infrastructure" },
                { href: "/learn-grow", label: "Learn & Grow" },
                { href: "/whychooseus", label: "Why Choose Us" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm inline-flex items-center group"
                  >
                    <span className="w-0 h-px bg-white transition-all duration-200 group-hover:w-4 group-hover:mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* POLICIES */}
          <div>
            <h3 className="text-base font-semibold mb-6 text-white uppercase tracking-wide">
              Policies
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/selection-policy", label: "Selection Policy" },
                { href: "/eligibility-criteria", label: "Eligibility Criteria" },
                { href: "/placement-policy", label: "Placement Policy" },
                { href: "/scholarship-policy", label: "Scholarship Policy" },
                { href: "/fees-policy", label: "Fees Policy" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm inline-flex items-center group"
                  >
                    <span className="w-0 h-px bg-white transition-all duration-200 group-hover:w-4 group-hover:mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-base font-semibold mb-6 text-white uppercase tracking-wide">
              Contact
            </h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex gap-3 items-start group">
                <MapPin className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5 group-hover:text-white transition-colors duration-200" />
                <span className="group-hover:text-white transition-colors duration-200">
                  Kurla West, Mumbai 400070
                </span>
              </li>
              <li className="flex gap-3 items-center group">
                <Phone className="w-5 h-5 text-slate-500 flex-shrink-0 group-hover:text-white transition-colors duration-200" />
                <a 
                  href="tel:+919892398976"
                  className="group-hover:text-white transition-colors duration-200"
                >
                  +91 9892398976
                </a>
              </li>
              <li className="flex gap-3 items-start group">
                <Mail className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5 group-hover:text-white transition-colors duration-200" />
                <a 
                  href="mailto:admin@nexcoreinstitute.org"
                  className="group-hover:text-white transition-colors duration-200 break-all"
                >
                  admin@nexcoreinstitute.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links - Mobile */}
        <div className="sm:hidden flex justify-center gap-3 pb-8 mb-8 border-b border-slate-800">
          {socialLinks.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-white hover:text-slate-900 hover:border-white transition-all duration-300"
            >
              <span className="text-base">{s.icon}</span>
            </a>
          ))}
        </div>

        {/* ===== BOTTOM BAR ===== */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          {/* Copyright */}
          <div className="text-slate-500 text-center md:text-left order-2 md:order-1">
            © 2026{" "}
            <Link 
              href="/" 
              className="text-white font-medium hover:underline transition-all duration-200"
            >
              Nexcore Institute Of Technology
            </Link>
            {" "}— All Rights Reserved
          </div>

          {/* Designed by */}
          <div className="flex items-center gap-2 text-slate-500 order-1 md:order-2">
            <span>Designed with</span>
            <Heart className="w-4 h-4 fill-red-500 text-red-500 animate-pulse" />
            <span>by</span>
            <a
              href="https://nexcorealliance.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium hover:underline transition-all duration-200"
            >
              Nexcore Alliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;