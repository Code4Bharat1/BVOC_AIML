"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const PlacementAssistance = () => {
  return (
    <section className="relative w-full overflow-x-hidden px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-slate-50 to-blue-50 rounded-none shadow-sm">
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-10 z-10">
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
              className="rounded-2xl sm:rounded-3xl w-full object-cover shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out border-2 border-slate-200"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-100/30 to-transparent rounded-2xl sm:rounded-3xl" />
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
          <h1 className="hidden lg:block text-4xl xl:text-5xl font-semibold text-slate-700 leading-tight mb-6 lg:mb-8">
            Placement Assistance:
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent font-bold">
              Your Path to Success!
            </span>
          </h1>

          {/* Desktop Text */}
          <p className="hidden lg:block text-lg xl:text-xl text-slate-600 font-normal leading-relaxed pr-0 lg:pr-10">
            At{" "}
            <span className="font-semibold text-blue-600">
              Nexcore Alliance LLP
            </span>
            , we don't just teach — you{" "}
            <span className="text-purple-600 font-semibold">intern</span> and{" "}
            <span className="text-teal-600 font-semibold">work</span>. Our{" "}
            <span className="font-semibold text-blue-600">
              100% placement assistance
            </span>{" "}
            ensures you're job-ready for the real world.
          </p>

          {/* Mobile Header */}
          <h1 className="lg:hidden text-2xl sm:text-3xl font-semibold text-slate-700 leading-tight mb-4 text-center">
            Placement Assistance:
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent font-bold">
              Your Path to Success!
            </span>
          </h1>

          {/* Mobile Text */}
          <p className="lg:hidden text-sm sm:text-base text-slate-600 font-normal px-2 sm:px-4 mb-6 text-center leading-relaxed">
            At{" "}
            <span className="font-semibold text-blue-600">
              Nexcore Alliance LLP
            </span>
            , we don't just teach — you{" "}
            <span className="font-semibold text-purple-600">intern</span> and{" "}
            <span className="font-semibold text-teal-600">work</span>. Our{" "}
            <span className="font-semibold text-blue-600">
              100% placement assistance
            </span>{" "}
            ensures you're job-ready.
          </p>

          {/* CTA Button */}
          <div className="mt-6 flex justify-center lg:justify-start">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Enroll Now 
              <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlacementAssistance;