"use client";
import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2C2E33] text-white">
      <div className="mx-auto w-full lg:px-14 px-7">
        <hr className="my-2 border-white" />

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
                    href="https://www.google.com/maps/place/Student+Alliance+LLP/@19.0726487,72.8778329,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c892197ad4a7:0x6f69acffd67753e2!8m2!3d19.0726487!4d72.8804078!16s%2Fg%2F11cs4jnk_w?entry=ttu&g_ep=EgoyMDI1MDUxMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                      Kurla West, Mumbai, Maharashtra 400070
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-5 h-5 mt-0.5" />
                  <a href="tel:+918235678901" className="hover:underline">
                    +91 8992398976
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-5 h-5 mt-0.5" />
                  <a
                    href="mailto:bvoc@nexcorealliance.com"
                    className="hover:underline"
                  >
                    bvoc@nexcorealliance.com
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
