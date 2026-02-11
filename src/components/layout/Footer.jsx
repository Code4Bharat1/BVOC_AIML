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
    { 
      icon: <FaFacebookF />, 
      url: "https://www.facebook.com/profile.php?id=61585525156166",
      label: "Facebook",
      color: "hover:bg-blue-600"
    },
    { 
      icon: <FaInstagram />, 
      url: "https://www.instagram.com/nexcoreinstitute?igsh=eDF4NHR3ZG50NWE0",
      label: "Instagram",
      color: "hover:bg-pink-600"
    },
    { 
      icon: <FaLinkedinIn />, 
      url: "https://www.linkedin.com/school/nexcore-institute-of-technology-nit/posts/?feedView=all",
      label: "LinkedIn",
      color: "hover:bg-blue-700"
    },
    { 
      icon: <FaYoutube />, 
      url: "https://www.youtube.com/@NexcoreInstitute",
      label: "YouTube",
      color: "hover:bg-red-600"
    },
    { 
      icon: <FaWhatsapp />, 
      url: "https://wa.me/919892398976",
      label: "WhatsApp",
      color: "hover:bg-green-600"
    },
  ];

  const exploreLinks = [
    { href: "/infrastructure", label: "Infrastructure" },
    { href: "/learn-grow", label: "Learn & Grow" },
    { href: "/whychooseus", label: "Why We're Different" },
  ];

  const policyLinks = [
    { href: "/selection-policy", label: "Selection Policy" },
    { href: "/eligibility-criteria", label: "Eligibility Criteria" },
    { href: "/placement-policy", label: "Placement Policy" },
    { href: "/scholarship-policy", label: "Scholarship Policy" },
    { href: "/fees-policy", label: "Fees Policy" },
  ];

  const contactInfo = [
    {
      icon: <MapPin className="w-4 h-4" />,
      text: "Kurla West, Mumbai 400070",
      color: "text-blue-600",
    },
    {
      icon: <Phone className="w-4 h-4" />,
      text: "+91 9892398976",
      color: "text-orange-500",
      href: "tel:+919892398976",
    },
    {
      icon: <Mail className="w-4 h-4" />,
      text: "admin@nexcoreinstitute.org",
      color: "text-amber-500",
      href: "mailto:admin@nexcoreinstitute.org",
    },
  ];

  if (!mounted) return null;

  return (
    <footer className="relative bg-gradient-to-b from-slate-50 to-white border-t border-slate-200 overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #007BFF 1px, transparent 1px),
            linear-gradient(to bottom, #007BFF 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 py-8 sm:py-12 lg:py-16">
          {/* Logo & About */}
          <div className="lg:col-span-1 text-center sm:text-left">
            <Link href="/" className="inline-block mb-4 group">
              <div className="bg-white rounded-xl p-2.5 shadow-md border border-slate-200 group-hover:shadow-lg transition-shadow">
                <Image
                  src="/logo.png"
                  alt="Nexcore Institute"
                  width={120}
                  height={72}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            <p className="text-slate-700 leading-relaxed text-sm font-medium">
              A next-generation institute empowering students with real-world
              AI and technology skills for industry-ready careers.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-base font-bold mb-3 text-blue-600 flex items-center gap-2">
              Explore
              <div className="h-px flex-1 bg-gradient-to-r from-blue-300 to-transparent" />
            </h3>
            <ul className="space-y-2">
              {exploreLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-slate-700 hover:text-blue-600 transition-colors text-sm inline-flex items-center group font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-blue-600 transition-colors mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies Links */}
          <div>
            <h3 className="text-base font-bold mb-3 text-orange-500 flex items-center gap-2">
              Policies
              <div className="h-px flex-1 bg-gradient-to-r from-orange-300 to-transparent" />
            </h3>
            <ul className="space-y-2">
              {policyLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-slate-700 hover:text-orange-500 transition-colors text-sm inline-flex items-center group font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-orange-500 transition-colors mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-bold mb-3 text-blue-600 flex items-center gap-2">
              Contact
              <div className="h-px flex-1 bg-gradient-to-r from-blue-300 to-transparent" />
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm">
                  <span className={`${item.color} mt-0.5 flex-shrink-0`}>
                    {item.icon}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-slate-700 font-medium">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

        {/* Bottom Section */}
        <div className="py-4 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-2.5 order-1 md:order-1">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`
                  w-9 h-9 rounded-lg
                  bg-slate-100 border border-slate-200
                  flex items-center justify-center
                  text-slate-700
                  ${social.color}
                  hover:text-white
                  hover:border-transparent
                  hover:scale-110
                  transition-all duration-300
                  shadow-sm hover:shadow-md
                `}
              >
                <span className="text-sm">{social.icon}</span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-xs sm:text-sm text-slate-700 font-medium order-3 md:order-2">
            © 2026{" "}
            <Link 
              href="/" 
              className="text-blue-600 font-bold hover:text-blue-700 transition-colors"
            >
              Nexcore Institute Of Technology
            </Link>{" "}
            — All Rights Reserved
          </div>

          {/* Design Credit */}
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-700 font-medium order-2 md:order-3">
            Designed by{" "}
            <a
              href="https://nexcorealliance.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 font-bold hover:text-orange-600 inline-flex items-center gap-1 transition-colors"
            >
              Nexcore Alliance
              <Heart className="w-3.5 h-3.5 fill-current text-red-500 animate-pulse" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;