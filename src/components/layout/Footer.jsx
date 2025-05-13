"use client";
import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2C2E33] text-white mt-auto">
      <div className="mx-auto w-full px-14 py-10">
        <hr className="my-8 border-white" />

        {/* Main layout: description left, links right */}
        <div className="flex flex-col md:flex-row justify-between gap-x-20">
          {/* Left - Description */}
          <div className="md:w-1/2 mb-10 md:my-8 md:mb-0">
            <p className="hidden md:block text-base md:text-xl leading-relaxed text-white">
              <strong className="text-xl">
                <span className="text-[#AC6CFF]">B.</span>Voc in AI & ML
              </strong>{" "}
              is a next-gen undergraduate <br />
              program designed to equip students with real- <br />
              world AI skills. Co-developed with industry <br />
              leaders, it blends theory with hands-on training to <br />
              launch tech-driven careers.
            </p>
            <p className="text-base md:text-xl leading-relaxed text-white md:hidden">
              <strong className="text-xl">
                <span className="text-[#AC6CFF]">B.</span>Voc in AI & ML
              </strong>{" "}
              is a next-gen undergraduate program designed to equip students
              with real- world AI skills. Co-developed with industry leaders, it
              blends theory with hands-on training to launch tech-driven
              careers.
            </p>
          </div>

          {/* Right - Links section */}
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Explore More */}
            <div>
              <h2 className="mb-4 text-lg font-semibold text-[#AC6CFF]">
                Explore More
              </h2>
              <ul className="space-y-5 text-white text-base">
                <li>
                  <Link href="/infrastructure" className="hover:underline">
                    Infrastructure
                  </Link>
                </li>
                <li>
                  <Link href="/learn-grow" className="hover:underline">
                    Learn and Grow
                  </Link>
                </li>
                <li>
                  <Link href="/why-us" className="hover:underline">
                    Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:underline">
                    Privacy and Policy
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
                  <MapPin className="w-5 h-5 mt-0.5" />
                  <a
                    href="https://www.google.com/maps?q=Off+BKC+Mumbai,+India,+400070"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Off BKC Mumbai, India, 400070
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-5 h-5 mt-0.5" />
                  <a href="tel:+918235678901" className="hover:underline">
                    +91 823 567 8901
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-5 h-5 mt-0.5" />
                  <a
                    href="mailto:contact@yourbrand.ai"
                    className="hover:underline"
                  >
                    contact@yourbrand.ai
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-8 border-white" />

        {/* Footer bottom row */}
        <div className="sm:flex sm:items-center sm:justify-between text-gray-400 text-sm">
          <span>
            © 2023{" "}
            <Link href="#" className="hover:underline text-white">
              BVOC™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
