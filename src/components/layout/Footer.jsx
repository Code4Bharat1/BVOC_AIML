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
    { icon: <FaFacebookF />, url: "https://www.facebook.com/profile.php?id=61585525156166" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/nexcoreinstitute?igsh=eDF4NHR3ZG50NWE0" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/school/nexcore-institute-of-technology-nit/posts/?feedView=all" },
    { icon: <FaYoutube />, url: "https://www.youtube.com/@NexcoreInstitute" },
    { icon: <FaWhatsapp />, url: "https://wa.me/919892398976" },
  ];

  return (
    <footer className="bg-white text-gray-800 pt-10 relative overflow-hidden border-t">
      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#007BFF 1px, transparent 1px),
            linear-gradient(90deg, #007BFF 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20">

        {/* ===== GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-gray-200">

          {/* LOGO + ABOUT */}
          <div>
            <div className="flex justify-center sm:justify-start">
              <Link href="/" className="inline-block">
                <div className="bg-white rounded-xl p-3 inline-block mb-5 shadow-md">
                  <Image
                    src="/logo.png"
                    alt="Nexcore Institute"
                    width={150}
                    height={90}
                    className="object-contain justify-center items-center"
                    priority
                  />
                </div>
              </Link>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              A next-generation institute empowering students with real-world
              AI and technology skills for industry-ready careers.
            </p>
          </div>

          {/* EXPLORE */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-[#007BFF]">Explore</h3>
            <ul className="space-y-3">
              {[
                { href: "/infrastructure", label: "Infrastructure" },
                { href: "/learn-grow", label: "Learn & Grow" },
                { href: "/whychooseus", label: "Why Choose Us" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#007BFF] transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* POLICIES */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-[#FF7F00]">Policies</h3>
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
                    className="text-gray-600 hover:text-[#FF7F00] transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-[#007BFF]">Contact</h3>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#007BFF]" />
                Kurla West, Mumbai 400070
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-[#FF7F00]" />
                +91 9892398976
              </li>
              <li className="flex gap-3 break-all">
                <Mail className="w-5 h-5 text-[#FFCD00]" />
                admin@nexcoreinstitute.org
              </li>
            </ul>
          </div>
        </div>

        {/* ===== SOCIAL + BOTTOM (SAME LINE) ===== */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">

          {/* SOCIAL */}
          <div className="flex gap-3">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-9 h-9 rounded-md
                  bg-gray-100
                  flex items-center justify-center
                  hover:bg-[#007BFF]
                  hover:text-white
                  hover:scale-110
                  transition
                "
              >
                <span className="text-sm">{s.icon}</span>
              </a>
            ))}
          </div>

          {/* LEFT TEXT */}
          <div className="text-center">
            © 2026{" "}
            <Link href="/" className="text-[#007BFF] font-semibold">
              Nexcore Institute Of Technology
            </Link>{" "}
            — All Rights Reserved
          </div>

          {/* RIGHT TEXT */}
          <div className="flex items-center gap-1">
            Designed by{" "}
            <a
              href="https://nexcorealliance.com/"
              target="_blank"
              className="text-[#FF7F00] font-semibold inline-flex items-center gap-1"
            >
              Nexcore Alliance
              <Heart className="w-4 h-4 fill-current text-red-500" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
