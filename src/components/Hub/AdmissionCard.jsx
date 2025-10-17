"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const AdmissionCard = () => {
  return (
    <div className="flex w-full justify-center items-center -mt-10 lg:py-10 mb-10 lg:mb-0 px-4">
      <div className="relative lg:py-16 border border-[#AC6CFF]/30 bg-gradient-to-b from-[#1a1f4d] via-[#2d1b4e] to-[#4a1f6b] text-white text-center rounded-2xl p-8 lg:p-10 w-[90%] shadow-[0_0_40px_rgba(172,108,255,0.3)]">
        {/* Decorative orbs */}
        <div className="absolute top-10 left-10 w-5 h-5 bg-[#00d4ff] rounded-full blur-md animate-pulse" />
        <div className="absolute bottom-10 right-10 w-7 h-7 bg-[#ff6b35] rounded-full blur-lg animate-ping" />

        {/* Decorative Images */}
        <Image
          src="/elements/EllipseElemens_Home.svg"
          alt="Ellipse"
          width={80}
          height={80}
          className="absolute top-48 left-0 w-10 opacity-60"
        />
        <Image
          src="/elements/RocketElement_Home.svg"
          alt="Rocket"
          width={60}
          height={60}
          className="hidden lg:block absolute top-20 right-10 opacity-80"
        />
        <Image
          src="/elements/AdmissionRobot_Home.svg"
          alt="Robot"
          width={140}
          height={140}
          className="absolute bottom-0 right-0 w-44 opacity-90"
        />

        {/* Text */}
        <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-[#00d4ff]">
          Admissions Now Open!
        </h2>
        <p className="text-base lg:text-2xl font-light mb-8 text-white/90">
          Step into the future with a{" "}
          <span className="text-[#AC6CFF] font-medium">NAAC A++</span> Accredited
          program and gain the edge with a{" "}
          <span className="text-[#ff6b35] font-medium">UGC-approved B.Voc</span>{" "}
          course in AI & ML — crafted to prepare you for the real world.
        </p>
        <h3 className="text-xl lg:text-3xl font-semibold mb-4 text-[#AC6CFF]">
          A Unique Blend of Industry & Academia
        </h3>
        <p className="text-white/80 mb-10 text-base lg:text-xl">
          Join a course that goes beyond theory — experience practical, hands-on
          learning in collaboration with top industry leaders.
        </p>

        {/* Book Button → Links to /contact */}
        <Link
          href="/contact"
          className="inline-block bg-gradient-to-r from-[#ff6b35] via-[#AC6CFF] to-[#00d4ff] text-white font-bold px-8 py-3 rounded-full shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:opacity-90 transition"
        >
          Book Admission Slot
        </Link>
      </div>
    </div>
  );
};

export default AdmissionCard;
