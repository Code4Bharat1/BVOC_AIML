"use client";
import React, { useState } from "react";
import Image from "next/image";

const OurSyllabus = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white py-24 px-6 lg:px-16">
      {/* Subtle Background */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full"
        style={{ background: "rgba(0,123,255,0.06)", filter: "blur(90px)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full"
        style={{ background: "rgba(0,123,255,0.04)", filter: "blur(90px)" }}
      />

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .heading-animate {
          animation: slideDown 0.8s ease-out;
        }
        .card-animate {
          animation: scaleIn 0.6s ease-out;
        }
        .robot-animate {
          animation: slideLeft 0.6s ease-out 0.4s backwards;
        }
        .text-animate {
          animation: slideRight 0.6s ease-out 0.6s backwards;
        }
        .mobile-header-animate {
          animation: slideUp 0.6s ease-out;
        }
        .mobile-robot-animate {
          animation: slideLeft 0.6s ease-out 0.3s backwards;
        }
        .mobile-text-animate {
          animation: slideUp 0.6s ease-out 0.5s backwards;
        }

        .syllabus-card {
          transition: all 0.3s ease-in-out;
        }
        .robot-image {
          transition: transform 0.3s ease-in-out;
        }
        .text-content {
          transition: transform 0.3s ease;
        }
      `}</style>

      {/* Heading */}
      <div className="heading-animate text-center max-w-4xl mx-auto mb-20 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#2C2C2C]">
          Level Up Your Skills with <br />
          <span className="text-[#007BFF]">
            Our  AI & ML ,Cyber Security , Artificial Intelligence & Robotics &
            Graphic Animation, VFX & Multimedia
          </span>
        </h2>
      </div>

      {/* Desktop Card */}
      <div className="hidden lg:flex justify-center">
        <div
          className="syllabus-card card-animate relative rounded-3xl p-10 w-full max-w-7xl h-[360px] shadow-xl overflow-hidden bg-white border-2"
          style={{
            borderColor: isHovered
              ? "rgba(0,123,255,0.45)"
              : "rgba(0,123,255,0.25)",
            boxShadow: isHovered
              ? "0 25px 50px rgba(0,123,255,0.18)"
              : "0 10px 30px rgba(0,0,0,0.08)",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Robot */}
          <div
            className="robot-animate robot-image absolute left-0 bottom-0 w-1/3 z-10"
            style={{
              transform: isHovered ? "scale(1.08)" : "scale(1)",
              transformOrigin: "bottom left",
            }}
          >
            <Image
              src="/syllabusRoboImg.svg"
              alt="Robot"
              width={250}
              height={250}
              className="w-full h-auto"
            />
          </div>

          {/* Text */}
          <div className="text-animate ml-auto w-2/3 relative z-20 flex items-center h-full">
            <div
              className="text-content"
              style={{ transform: isHovered ? "scale(0.97)" : "scale(1)" }}
            >
              <p className="text-xl lg:text-2xl leading-relaxed text-[#2C2C2C]/80">
                Our{" "}
                <span className="font-bold text-[#007BFF]">
                  AI & ML ,Cyber Security , Artificial Intelligence & Robotics &
            Graphic Animation, VFX & Multimedia
                </span>{" "}
                program is structured across six dynamic semesters, providing
                hands-on skills and deep theoretical knowledge in{" "}
                <span className="font-bold text-[#2C2C2C]">
                  AI & ML ,Cyber Security , Artificial Intelligence & Robotics &
            Graphic Animation, VFX & Multimedia
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="block lg:hidden px-6">
        <div className="mobile-header-animate flex items-center justify-center py-3 mb-10 mt-10 text-center w-full mx-auto rounded-2xl shadow-lg bg-[#007BFF]">
          <h2 className="text-xl font-bold text-white">About Our Syllabus</h2>
        </div>

        <div
          className="card-animate relative rounded-3xl p-5 h-auto mx-auto flex flex-col items-center shadow-lg bg-white border-2"
          style={{ borderColor: "rgba(0,123,255,0.25)" }}
        >
          <div className="mobile-robot-animate relative w-full flex justify-center mb-4">
            <Image
              src="/syllabusRoboImg.svg"
              alt="Robot"
              width={200}
              height={200}
              className="w-48 h-auto"
            />
          </div>

          <div className="mobile-text-animate text-center px-2">
            <p className="text-base leading-snug text-[#2C2C2C]/80">
              Our{" "}
              <span className="font-bold text-[#007BFF]">B.Voc AI & ML</span>{" "}
              program is structured across six dynamic semesters, providing
              hands-on skills and deep theoretical knowledge in{" "}
              <span className="font-bold text-[#2C2C2C]">
                AI, ML, and Data Science
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSyllabus;
