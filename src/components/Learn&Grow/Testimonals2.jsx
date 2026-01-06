"use client";

import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Uzer Sayed",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Uzer Sayed.jpg",
  },
  {
    quote:
      "This platform has brought so much value to our team. We love how intuitive and powerful it is.",
    name: "Pravin Mohana Sundaram Chettiar",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/PRAVIN.jpg",
  },
  {
    quote:
      "I love how the program focuses not just on coding but on critical thinking, teamwork, and solving real-world problems.",
    name: "Farhan Faiyaz Tolkar",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Farhan Tolkar.jpg",
  },
  {
    quote:
      "The exposure we get to cloud computing and machine learning tools here is something most colleges only promise.",
    name: "Mohd Irfan Mohd Noor Alam Shaikh",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Mohd Irfan.jpg",
  },
  {
    quote:
      "The faculty's commitment to student success is outstanding. They make complex AI topics simple and fun.",
    name: "Mohd Ahmed Waseem Khan",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Ahmed khan.jpg",
  },
  {
    quote:
      "The real-time projects gave me the confidence to handle data pipelines and APIs just like in the industry.",
    name: "Mohammed Taha Mohd Yusuf Choudhary",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Taha Choudhary.jpg",
  },
  {
    quote:
      "The project-based learning structure ensures we apply everything we learn immediately — it's the best part.",
    name: "Affan Rizwan Khan",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Affan khan.jpg",
  },
  {
    quote:
      "Being part of this program made me realize how AI can transform industries and communities alike.",
    name: "Khan Shahid Ali Asgar Ali",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Khan Shahid.jpg",
  },
  {
    quote:
      "The mentorship and guidance from faculty helped me turn my curiosity for AI into real-world projects that I can proudly showcase.",
    name: "Shaikh Iqfat Nasir",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Shaikh Iqfat Nasir.jpg",
  },
  {
    quote:
      "Every module feels practical and industry-relevant. The labs are well-equipped and designed to make us job-ready.",
    name: "Khan Umera Mohd Salim",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Umera Khan.jpg",
  },
  // Add remaining testimonials...
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const getRating = (index) => {
    const seed = (index * 9301 + 49297) % 233280;
    const rand = seed / 233280;
    return Math.round((3 + rand * 1.5) * 2) / 2;
  };

  const getPosition = (index) => {
    const total = testimonials.length;
    const diff = (index - currentIndex + total) % total;
    switch (diff) {
      case 0:
        return "center";
      case 1:
        return "right1";
      case total - 1:
        return "left1";
      default:
        return "hidden";
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 500);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 500);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 500);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsPaused(false);
      return;
    }

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    } else {
      setIsPaused(false);
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12"
    >
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

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes drawLine {
          from {
            stroke-dashoffset: 300;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes progressBar {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        .header-animate {
          animation: fadeInUp 0.7s ease-out;
        }

        .badge-animate {
          animation: scaleIn 0.5s ease-out 0.2s backwards;
        }

        .underline-svg {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: drawLine 1s ease-out 0.5s forwards;
        }

        .card-transition {
          transition: all 0.7s cubic-bezier(0.32, 0.72, 0, 1);
        }

        .arrow-button {
          transition: all 0.3s ease;
        }

        .arrow-button:hover {
          transform: scale(1.1);
        }

        .arrow-button:active {
          transform: scale(0.95);
        }

        .dot-button {
          transition: all 0.3s ease;
        }

        .dot-button:hover {
          transform: scale(1.25);
        }

        .progress-bar {
          animation: progressBar 5s linear;
        }

        ${!isPaused ? '.progress-bar { animation: progressBar 5s linear; }' : '.progress-bar { animation: none; width: 0%; }'}
      `}</style>

      {/* Header Section */}
      <div className="header-animate max-w-7xl mx-auto text-center mb-20 relative z-10">
        <div className="badge-animate inline-block mb-6">
          <span 
            className="px-5 py-2 rounded-full text-sm font-bold tracking-wider"
            style={{
              background: 'rgba(0, 123, 255, 0.1)',
              border: '2px solid rgba(0, 123, 255, 0.3)',
              color: '#007BFF',
              fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif"
            }}
          >
            TESTIMONIALS
          </span>
        </div>
        
        <h2 
          className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          style={{ 
            fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
            color: '#2C2C2C'
          }}
        >
          What Our{" "}
          <span className="relative inline-block"
            style={{
              background: 'linear-gradient(135deg, #007BFF 0%, #FF7F00 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Students & Clients
            <svg
              className="absolute -bottom-2 left-0 w-full hidden sm:block underline-svg"
              height="8"
              viewBox="0 0 300 8"
            >
              <path
                d="M0 4 Q 150 8, 300 4"
                stroke="#007BFF"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          Say
        </h2>
        
        <p 
          className="text-xl max-w-2xl mx-auto"
          style={{ 
            fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
            color: 'rgba(44, 44, 44, 0.7)'
          }}
        >
          Real stories from people who transformed their careers with us
        </p>
      </div>

      <div
        className="relative flex justify-center items-center h-[28rem] sm:h-[32rem] md:h-[36rem] lg:h-[38rem] xl:h-[40rem]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ perspective: '1000px' }}
      >
        <div className="relative w-full flex items-center justify-center">
          {testimonials.map((t, index) => {
            const position = getPosition(index);
            const isCenter = position === "center";
            const rating = getRating(index);

            let transformStyle = {};
            switch (position) {
              case "center":
                transformStyle = { transform: 'scale(1) translateX(0)', opacity: 1, zIndex: 30 };
                break;
              case "left1":
                transformStyle = { transform: 'scale(0.85) translateX(-80%) rotateY(15deg)', opacity: 0.6, zIndex: 20 };
                break;
              case "right1":
                transformStyle = { transform: 'scale(0.85) translateX(80%) rotateY(-15deg)', opacity: 0.6, zIndex: 20 };
                break;
              default:
                transformStyle = { transform: 'scale(0.5)', opacity: 0, zIndex: 0 };
            }

            return (
              <div
                key={index}
                className={`card-transition absolute bg-white rounded-3xl shadow-xl w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[65%] max-w-6xl ${
                  position === "hidden" ? "pointer-events-none" : ""
                } overflow-hidden`}
                style={{
                  ...transformStyle,
                  border: '2px solid rgba(0, 123, 255, 0.2)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="flex flex-col lg:flex-row h-full">
                  {/* Image Section */}
                  <div 
                    className="relative w-full h-60 sm:h-72 md:h-80 lg:w-96 lg:h-[500px] shrink-0 overflow-hidden"
                    style={{ backgroundColor: 'rgba(0, 123, 255, 0.05)' }}
                  >
                    <img
                      src={t.src}
                      alt={t.name}
                      className="w-full h-full object-contain sm:object-cover object-center"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4 sm:mb-6 flex-wrap">
                      {[...Array(5)].map((_, i) => {
                        const isFull = i + 1 <= rating;
                        const isHalf = !isFull && i + 0.5 === rating;
                        return (
                          <svg
                            key={i}
                            className={`w-4 h-4 sm:w-5 sm:h-5`}
                            fill={isHalf ? "url(#halfGradient)" : isFull ? "#007BFF" : "none"}
                            stroke="#007BFF"
                            viewBox="0 0 20 20"
                            style={{ opacity: isCenter ? 1 : 0.6 }}
                          >
                            <defs>
                              <linearGradient id="halfGradient">
                                <stop offset="50%" stopColor="#007BFF" />
                                <stop offset="50%" stopColor="transparent" />
                              </linearGradient>
                            </defs>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        );
                      })}
                    </div>

                    {/* Quote */}
                    <div className="mb-6 sm:mb-8">
                      <p 
                        className="text-base sm:text-lg md:text-xl leading-relaxed"
                        style={{ 
                          fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                          color: '#2C2C2C'
                        }}
                      >
                        {t.quote}
                      </p>
                    </div>

                    {/* Author */}
                    <div 
                      className="flex items-center gap-4 sm:gap-6 pt-5 sm:pt-6"
                      style={{ borderTop: '1px solid rgba(0, 123, 255, 0.1)' }}
                    >
                      <div
                        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-lg sm:text-xl font-bold text-white"
                        style={{
                          background: 'linear-gradient(135deg, #007BFF, #FF7F00)'
                        }}
                      >
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p 
                          className="font-bold text-base sm:text-lg md:text-xl"
                          style={{ 
                            fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                            color: '#2C2C2C'
                          }}
                        >
                          {t.name}
                        </p>
                        <p 
                          className="text-xs sm:text-sm font-semibold"
                          style={{ 
                            fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                            color: '#007BFF'
                          }}
                        >
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="arrow-button absolute left-3 sm:left-6 md:left-10 z-40"
          aria-label="Previous"
        >
          <div 
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center shadow-lg"
            style={{ border: '2px solid rgba(0, 123, 255, 0.3)' }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#007BFF"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </button>

        <button
          onClick={handleNext}
          className="arrow-button absolute right-3 sm:right-6 md:right-10 z-40"
          aria-label="Next"
        >
          <div 
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center shadow-lg"
            style={{ border: '2px solid rgba(0, 123, 255, 0.3)' }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#007BFF"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center gap-2 sm:gap-3 mt-10 overflow-hidden px-4">
        {testimonials.map((_, index) => {
          const visibleRange = 5;
          const start = Math.max(0, currentIndex - Math.floor(visibleRange / 2));
          const end = Math.min(testimonials.length, start + visibleRange);
          const adjustedStart = Math.max(0, end - visibleRange);

          if (index < adjustedStart || index >= end) return null;

          return (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className="dot-button relative"
              aria-label={`Testimonial ${index + 1}`}
            >
              <div
                className="rounded-full"
                style={{
                  width: index === currentIndex ? '32px' : '10px',
                  height: index === currentIndex ? '8px' : '10px',
                  background: index === currentIndex
                    ? 'linear-gradient(135deg, #007BFF, #FF7F00)'
                    : 'rgba(0, 123, 255, 0.3)',
                  opacity: index === currentIndex ? 1 : 0.6,
                  transition: 'all 0.3s ease'
                }}
              />
            </button>
          );
        })}
      </div>

      {/* Progress Bar */}
      <div className="max-w-md sm:max-w-lg md:max-w-xl mx-auto mt-8 sm:mt-10">
        <div 
          className="h-1 rounded-full overflow-hidden"
          style={{ backgroundColor: 'rgba(0, 123, 255, 0.2)' }}
        >
          <div
            className="progress-bar h-full"
            style={{
              background: 'linear-gradient(90deg, #007BFF, #FF7F00)',
              width: isPaused ? '0%' : '100%'
            }}
            key={currentIndex}
          />
        </div>
      </div>
    </section>
  );
}
