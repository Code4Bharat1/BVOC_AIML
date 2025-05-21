"use client";
import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2C2E33] text-white">
      <div className="mx-auto w-full lg:px-20 px-7">
        <hr className="my-6 border-white" />

        {/* Main layout: description left, links right */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left - Description */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <p className="text-base md:text-lg leading-relaxed text-white">
              <strong className="text-xl">
                <span className="text-[#AC6CFF]">B.</span>Voc in AI & ML
              </strong>{" "}
              is a next-gen undergraduate program designed to equip students with real-world AI skills. Co-developed with industry leaders, it blends theory with hands-on training to launch tech-driven careers.
            </p>
          </div>

          {/* Right - Links section */}
          <div className="md:w-2/3 lg:ml-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Explore More */}
            <div>
              <h2 className="mb-4 text-lg font-semibold text-[#AC6CFF]">
                Explore More
              </h2>
              <ul className="space-y-3 text-white text-base">
                <li>
                  <Link href="/infrastructure" className="hover:underline transition-colors duration-200">
                    Infrastructure
                  </Link>
                </li>
                <li>
                  <Link href="/learn-grow" className="hover:underline transition-colors duration-200">
                    Learn and Grow
                  </Link>
                </li>
                <li>
                  <Link href="/why-us" className="hover:underline transition-colors duration-200">
                    Why Choose Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h2 className="mb-4 text-lg font-semibold text-[#AC6CFF]">
                Policies
              </h2>
              <ul className="space-y-3 text-white text-base">
                <li>
                  <Link href="/selection-policy" className="hover:underline transition-colors duration-200">
                    Selection Policy
                  </Link>
                </li>
                <li>
                  <Link href="/eligibility-criteria" className="hover:underline transition-colors duration-200">
                    Eligibility Criteria
                  </Link>
                </li>
                <li>
                  <Link href="/placement-policy" className="hover:underline transition-colors duration-200">
                    Placement Policy
                  </Link>
                </li>
                <li>
                  <Link href="/internship-policy" className="hover:underline transition-colors duration-200">
                    Paid Internship Policy
                  </Link>
                </li>
                <li>
                  <Link href="/scholarship-policy" className="hover:underline transition-colors duration-200">
                    Scholarship Policy
                  </Link>
                </li>
                <li>
                  <Link href="/fees-policy" className="hover:underline transition-colors duration-200">
                    Fees Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="mb-4 text-lg font-semibold text-[#AC6CFF]">
                Contact Us
              </h2>
              <ul className="space-y-3 text-white text-base">
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <a
                    href="https://www.google.com/maps/place/Nexcore+Alliance+LLP/@19.0726231,72.8778438,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9d250f21f0d:0xdb46fbfa10678856!8m2!3d19.072618!4d72.8804187!16s%2Fg%2F11mdp1lx22?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline transition-colors duration-200"
                  >
                    Kurla West, Mumbai, Maharashtra 400070
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <a href="tel:+919892398976" className="hover:underline transition-colors duration-200">
                    +91 9892398976
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <a
                    href="mailto:bvoc@nexcorealliance.com"
                    className="hover:underline transition-colors duration-200"
                  >
                    bvoc@nexcorealliance.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-8 border-white" />

        <div className="text-center mb-2 text-sm sm:text-base text-gray-400">
          Built with ❤️ and passion by{" "}
          <a
            href="https://code4bharat.com" // Replace with actual site if different
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#AC6CFF] hover:underline"
          >
            Code4Bharat
          </a>
        </div>
        <div className="text-center text-gray-400 pb-5 text-sm">
          © 2025{" "}
          <Link href="#" className="hover:underline text-white transition-colors duration-200">
            BVOC™
          </Link>
          . All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;