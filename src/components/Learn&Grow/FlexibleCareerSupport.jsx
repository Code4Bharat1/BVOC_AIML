"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const FlexibleCareerSupport = () => {
  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-in { animation: fadeIn 0.6s ease-out; }
        .slide-down { animation: slideDown 0.6s ease-out; }
        .slide-left { animation: slideLeft 0.7s ease-out 0.3s backwards; }
        .slide-right { animation: slideRight 0.7s ease-out 0.5s backwards; }
        .slide-up { animation: slideUp 0.6s ease-out 0.8s backwards; }

        .mobile-step-1 { animation: slideLeft 0.6s ease-out; }
        .mobile-step-2 { animation: slideRight 0.6s ease-out; }
        .mobile-step-3 { animation: slideLeft 0.6s ease-out; }

        .cta-button {
          transition: all 0.3s ease;
        }
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.15);
        }
      `}</style>

      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:block overflow-hidden">
        <div className="fade-in relative bg-white px-10 pt-16 pb-10 overflow-hidden">



          {/* Heading */}
          <div className="slide-down relative z-10 pl-6 lg:pl-16 mb-10">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C]">
              Flexible Career Support
            </h1>
            <p className="mt-3 text-lg text-[#2C2C2C]/70 max-w-xl">
              Structured guidance and placement support designed to move you
              confidently into your professional career.
            </p>
          </div>

          {/* Images */}
          <div className="slide-left relative z-10 flex items-end justify-between px-6 lg:px-16">
            <div className="w-[62%]">
              <Image
                src="/path-to-left-image2.svg"
                alt="Career Support"
                width={740}
                height={440}
                className="w-full h-auto"
              />
            </div>

            <div className="slide-right absolute right-6 bottom-0">
              <Image
                src="/path-to-right-image.svg"
                alt="Support Icon"
                width={520}
                height={460}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Text + CTA */}
        <div className="slide-up bg-white pt-14 pb-20 pl-6 lg:pl-24 relative">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C]">
            <span className="text-[#007BFF]">NEXCORE</span> INTITUTE OF TECHNOLOGY —<br />
            A Clear Path Forward
          </h2>

          <p className="mt-5 text-2xl text-[#2C2C2C]/75 max-w-2xl">
            With exit points tailored to your goals, our{" "}
            <span className="font-bold text-[#FF7F00]">NSQF-certified</span>{" "}
            program offers flexibility and long-term career support.
          </p>

          <Link
            href="/contact"
            className="cta-button inline-block mt-10 px-10 py-4 rounded-full bg-[#007BFF] text-white font-semibold"
          >
            Explore More
          </Link>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="block lg:hidden relative bg-white overflow-hidden">

        {/* Heading */}
        <div className="pt-20 px-6 text-center">
          <h1 className="text-3xl font-bold text-[#2C2C2C]">
            Flexible Career Support
          </h1>
          <p className="mt-3 text-[#2C2C2C]/70">
            Step-by-step career guidance from training to placement
          </p>
        </div>

        {/* Steps */}
        <div className="relative w-full max-w-xs h-[620px] mx-auto mt-10">

          {/* Step 1 */}
          <div className="mobile-step-1 absolute top-[40px] left-4">
            <Image src="/circle_1.svg" alt="Step 1" width={144} height={144} />
          </div>
          <div className="mobile-step-1 absolute top-[90px] left-10 text-sm font-bold text-[#007BFF] text-center">
            Personalized <br /> Coaching
          </div>

          {/* Arrow */}
          <div className="absolute top-[135px] right-20">
            <Image src="/Arrow_2.svg" alt="Arrow" width={68} height={68} />
          </div>

          {/* Step 2 */}
          <div className="mobile-step-2 absolute top-[230px] right-6">
            <Image src="/circle_2.svg" alt="Step 2" width={144} height={144} />
          </div>
          <div className="mobile-step-2 absolute top-[270px] right-11 text-sm font-bold text-[#FF7F00] text-center">
            Mock Interviews <br /> & Workshops
          </div>

          {/* Arrow */}
          <div className="absolute top-[350px] right-44">
            <Image src="/Arrow_1.svg" alt="Arrow" width={68} height={68} />
          </div>

          {/* Step 3 */}
          <div className="mobile-step-3 absolute top-[430px] left-4">
            <Image src="/circle_1.svg" alt="Step 3" width={144} height={144} />
          </div>
          <div className="mobile-step-3 absolute top-[470px] left-9 text-sm font-bold text-[#2C2C2C] text-center">
            Direct Access <br /> to Industry Jobs
          </div>
        </div>

        {/* Mobile Text */}
        <div className="px-6 pb-20">
          <h2 className="text-3xl font-bold text-[#2C2C2C]">
            <span className="text-[#007BFF]">NEXCORE</span>INTITUTE OF TECHNOLOGY — <br />
            A Clear Path Forward
          </h2>

          <p className="mt-4 text-lg text-[#2C2C2C]/75">
            With exit points tailored to your goals, our{" "}
            <span className="font-bold text-[#FF7F00]">NSQF-certified</span>{" "}
            program offers flexibility.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-8 px-8 py-3 rounded-full bg-[#007BFF] text-white font-semibold"
          >
            Explore More
          </Link>
        </div>
      </div>
    </>
  );
};

export default FlexibleCareerSupport;
