"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const PlacementAssistance = () => {
  return (
    <section className="relative w-full overflow-x-hidden px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-white">
      {/* Subtle Solid Background Elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "rgba(0, 123, 255, 0.05)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "rgba(255, 127, 0, 0.05)" }}
      />

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .slide-left {
          animation: slideInLeft 0.8s ease-out;
        }

        .slide-right {
          animation: slideInRight 0.8s ease-out 0.2s backwards;
        }

        .cta-button {
          transition: transform 0.3s ease;
        }

        .cta-button:hover {
          transform: scale(1.05);
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-10 z-10">
        {/* LEFT SIDE IMAGE (FIXED) */}
        <div className="w-full lg:w-1/2 flex justify-center slide-left p-8">
          <div className="w-full max-w-lg bg-white rounded-3xl p-4 shadow-xl border border-slate-200">
            <Image
              src="/placement-card.png"
              alt="Placement Assistance"
              width={600}
              height={350}
              priority
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>

        {/* RIGHT SIDE TEXT */}
        <div className="w-full lg:w-1/2 text-center lg:text-start slide-right">
          {/* Desktop Header */}
          <h1
            className="hidden lg:block text-4xl xl:text-5xl font-bold leading-tight mb-6 lg:mb-8"
            style={{
              fontFamily:
                "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
              color: "#2C2C2C",
            }}
          >
            Placement Assistance:
            <br />
            <span style={{ color: "#0A2540", fontWeight: "bold" }}>
              Your Path to Success!
            </span>
          </h1>

          {/* Desktop Text */}
          <p
            className="hidden lg:block text-lg xl:text-xl leading-relaxed pr-0 lg:pr-10"
            style={{
              fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
              color: "rgba(44, 44, 44, 0.75)",
            }}
          >
            At{" "}
            <span className="font-bold" style={{ color: "#0A2540" }}>
              NEXCORE INTITUTE OF TECHNOLOGY
            </span>
            , we don't just teach — you{" "}
            <span className="font-bold" style={{ color: "#FF7F00" }}>
              intern
            </span>{" "}
            and{" "}
            <span className="font-bold" style={{ color: "#F59E0B" }}>
              work
            </span>
            . Our{" "}
            <span className="font-bold" style={{ color: "#0A2540" }}>
              100% placement assistance
            </span>{" "}
            ensures you're job-ready for the real world.
          </p>

          {/* Mobile Header */}
          <h1
            className="lg:hidden text-2xl sm:text-3xl font-bold leading-tight mb-4 text-center"
            style={{
              fontFamily:
                "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
              color: "#2C2C2C",
            }}
          >
            Placement Assistance:
            <br />
            <span style={{ color: "#0A2540", fontWeight: "bold" }}>
              Your Path to Success!
            </span>
          </h1>

          {/* Mobile Text */}
          <p
            className="lg:hidden text-sm sm:text-base px-2 sm:px-4 mb-6 text-center leading-relaxed"
            style={{
              fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
              color: "rgba(44, 44, 44, 0.75)",
            }}
          >
            At{" "}
            <span className="font-bold" style={{ color: "#0A2540" }}>
              Nexcore INTITUTE OF TECHNOLOGY
            </span>
            , we don't just teach — you{" "}
            <span className="font-bold" style={{ color: "#FF7F00" }}>
              intern
            </span>{" "}
            and{" "}
            <span className="font-bold" style={{ color: "#F59E0B" }}>
              work
            </span>
            . Our{" "}
            <span className="font-bold" style={{ color: "#0A2540" }}>
              100% placement assistance
            </span>{" "}
            ensures you're job-ready.
          </p>

          {/* CTA BUTTON */}
          <div className="mt-6 flex justify-center lg:justify-start">
            <Link
              href="/contact"
              className="cta-button inline-flex items-center justify-center text-white font-bold py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg"
              style={{
                background: "#0A2540",
                fontFamily:
                  "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
              }}
            >
              Enroll Now
              <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementAssistance;
