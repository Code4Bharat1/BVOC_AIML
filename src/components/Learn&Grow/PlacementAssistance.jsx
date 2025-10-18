"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const PlacementAssistance = () => {
  return (
    <section className="w-full overflow-x-hidden px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#4c1d95] rounded-none shadow-lg mb-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative w-full max-w-md lg:max-w-none">
            <Image
              src="/placement-card.png"
              alt="Placement Assistance"
              width={500}
              height={300}
              className="rounded-2xl sm:rounded-3xl w-full object-cover shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#6366f1]/30 to-transparent rounded-2xl sm:rounded-3xl" />
          </div>
        </motion.div>

        {/* Right Side Text */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-center lg:text-start"
        >
          {/* Desktop Header */}
          <h1 className="hidden lg:block text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-6 lg:mb-8 drop-shadow-lg">
            Placement Assistance:
            <br />
            <span className="text-[#a78bfa]">Your Path to Success!</span>
          </h1>

          {/* Desktop Text */}
          <p className="hidden lg:block text-lg xl:text-xl text-gray-200 font-medium leading-relaxed pr-0 lg:pr-10">
            At{" "}
            <span className="font-bold text-[#c4b5fd]">
              Nexcore Alliance LLP
            </span>
            , we don't just teach — you{" "}
            <span className="text-[#c4b5fd] font-bold">intern</span> and{" "}
            <span className="text-[#c4b5fd] font-bold">work</span>. Our{" "}
            <span className="font-bold text-[#c4b5fd]">
              100% placement assistance
            </span>{" "}
            ensures you're job-ready for the real world.
          </p>

          {/* Mobile Header */}
          <h1 className="lg:hidden text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-4 text-center drop-shadow-lg">
            Placement Assistance:
            <br />
            <span className="text-[#a78bfa]">Your Path to Success!</span>
          </h1>

          {/* Mobile Text */}
          <p className="lg:hidden text-sm sm:text-base text-gray-200 font-medium px-2 sm:px-4 mb-6 text-center">
            At{" "}
            <span className="font-bold text-[#c4b5fd]">
              Nexcore Alliance LLP
            </span>
            , we don't just teach — you{" "}
            <span className="font-bold text-[#c4b5fd]">intern</span> and{" "}
            <span className="font-bold text-[#c4b5fd]">work</span>. Our{" "}
            <span className="font-bold text-[#c4b5fd]">
              100% placement assistance
            </span>{" "}
            ensures you're job-ready.
          </p>

          {/* CTA Button → /contact */}
          <div className="mt-6 flex justify-center lg:justify-start">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] hover:from-[#7c3aed] hover:to-[#8b5cf6] text-white font-bold py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_10px_30px_rgba(139,92,246,0.5)]"
            >
              Enroll Now ✨
              <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlacementAssistance;