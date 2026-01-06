"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const FlexibleCareerSupport = () => {
  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in {
          animation: fadeIn 0.6s ease-out;
        }

        .slide-down {
          animation: slideDown 0.6s ease-out;
        }

        .slide-left {
          animation: slideLeft 0.7s ease-out 0.3s backwards;
        }

        .slide-right {
          animation: slideRight 0.7s ease-out 0.5s backwards;
        }

        .slide-up {
          animation: slideUp 0.6s ease-out 0.8s backwards;
        }

        .mobile-step-1 {
          animation: slideLeft 0.6s ease-out;
        }

        .mobile-step-2 {
          animation: slideRight 0.6s ease-out;
        }

        .mobile-step-3 {
          animation: slideLeft 0.6s ease-out;
        }

        .cta-button {
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: scale(1.05);
        }
      `}</style>

      {/* Desktop View (visible on lg and up) */}
      <div className="hidden lg:block overflow-x-hidden overflow-y-hidden">
        {/* Background with animations */}
        <div className="fade-in relative bg-white p-10 overflow-hidden my-1">
          {/* Subtle Background */}
          <div 
            className="absolute top-0 left-0 w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(0, 123, 255, 0.05) 0%, transparent 70%)',
              filter: 'blur(80px)'
            }}
          />
          <div 
            className="absolute bottom-0 right-0 w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255, 127, 0, 0.05) 0%, transparent 70%)',
              filter: 'blur(80px)'
            }}
          />

          {/* Heading */}
          <div className="slide-down text-left z-10 relative pl-6 lg:pl-16">
            <h1 
              className="text-4xl lg:text-5xl font-bold"
              style={{ 
                fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                color: '#2C2C2C'
              }}
            >
              Flexible Career Support
            </h1>
          </div>

          {/* Left Image */}
          <div className="slide-left flex flex-col lg:flex-row items-center justify-between z-10 relative">
            <div className="w-full lg:w-[60%] flex justify-center lg:justify-start">
              <Image
                src="/path-to-left-image2.svg"
                alt="Left Icon"
                width={740}
                height={440}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Positioned Image */}
          <div className="slide-right absolute right-0 bottom-0 hidden lg:block">
            <Image
              src="/path-to-right-image.svg"
              alt="Right Icon"
              width={580}
              height={500}
              className="object-contain"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="slide-up text-start pl-6 lg:pl-24 bg-white pb-8 relative">
          <div className="relative z-10">
            <h1 
              className="text-2xl lg:text-5xl font-bold pt-8"
              style={{ 
                fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                color: '#2C2C2C'
              }}
            >
              <span style={{ color: '#007BFF' }}>Nexcore</span> Alliance LLP –{" "}
              <br className="lg:hidden" />A Clear Path Forward
            </h1>
            <p 
              className="text-xl lg:text-3xl pt-4 mb-10"
              style={{ 
                fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                color: 'rgba(44, 44, 44, 0.75)'
              }}
            >
              With exit points tailored to your goals, our{" "}
              <span className="font-bold" style={{ color: '#FF7F00' }}>NSQF-certified</span>{" "}
              program offers flexibility
            </p>

            {/* Button */}
            <Link
              href="/contact"
              className="cta-button inline-block px-8 py-3 font-bold rounded-full text-white shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #007BFF, #FF7F00)',
                fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif"
              }}
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block lg:hidden overflow-x-hidden relative">
        {/* Background */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, #ffffff, rgba(0, 123, 255, 0.02))'
          }}
        />

        {/* Heading */}
        <div className="relative mt-20 text-start pl-6 lg:pl-24 z-10">
          <h1 
            className="text-2xl lg:text-5xl font-bold text-center"
            style={{ 
              fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
              color: '#2C2C2C'
            }}
          >
            Flexible Career Support
          </h1>
        </div>

        {/* Steps */}
        <div className="relative w-full max-w-xs h-[600px] mx-auto overflow-x-hidden z-10">
          {/* Step 1 */}
          <div className="mobile-step-1 absolute top-[50px] left-4">
            <Image src="/circle_1.svg" alt="Step 1" width={144} height={144} />
          </div>

          <div 
            className="mobile-step-1 absolute top-[95px] left-10 text-20px font-bold"
            style={{ 
              color: '#007BFF',
              fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif"
            }}
          >
            Personalized <br />
            coaching
          </div>

          {/* Arrow 1 */}
          <div className="absolute top-[130px] right-20">
            <Image src="/Arrow_2.svg" alt="Arrow 1" width={68} height={68} />
          </div>

          {/* Step 2 */}
          <div className="mobile-step-2 absolute top-[230px] right-6">
            <Image src="/circle_2.svg" alt="Step 2" width={144} height={144} />
          </div>

          <div 
            className="mobile-step-2 absolute top-[255px] right-11 text-20px font-bold text-center"
            style={{ 
              color: '#FF7F00',
              fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif"
            }}
          >
            Mock <br />
            interviews <br />& workshops
          </div>

          {/* Arrow 2 */}
          <div className="absolute top-[340px] right-44">
            <Image src="/Arrow_1.svg" alt="Arrow 2" width={68} height={68} />
          </div>

          {/* Step 3 */}
          <div className="mobile-step-3 absolute top-[420px] left-4">
            <Image src="/circle_1.svg" alt="Step 3" width={144} height={144} />
          </div>

          <div 
            className="mobile-step-3 absolute top-[460px] left-9 text-20px font-bold text-center"
            style={{ 
              color: '#2C2C2C',
              fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif"
            }}
          >
            Direct access <br />
            to industry <br />
            jobs
          </div>
        </div>

        {/* Mobile Text */}
        <div className="relative mt-10 text-start pl-6 lg:hidden z-10">
          <h1 
            className="text-3xl font-bold"
            style={{ 
              fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
              color: '#2C2C2C'
            }}
          >
            <span style={{ color: '#007BFF' }}>Nexcore</span> Alliance LLP –{" "}
            <br className="lg:hidden" />A Clear Path Forward
          </h1>
          <p 
            className="text-xl pt-4 mb-10"
            style={{ 
              fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
              color: 'rgba(44, 44, 44, 0.75)'
            }}
          >
            With exit points tailored to your goals, our{" "}
            <span className="font-bold" style={{ color: '#FF7F00' }}>NSQF-certified</span>{" "}
            program offers flexibility
          </p>
        </div>
      </div>
    </>
  );
};

export default FlexibleCareerSupport;
