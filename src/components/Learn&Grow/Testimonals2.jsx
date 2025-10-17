"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Basim Thakur",
    role: "Frontend Developer",
    src: "/Testimonials/testimonial5.png",
  },
  {
    quote:
      "It has been an incredible journey with this tool. The ease of use and efficiency are unmatched.",
    name: "Yogesh Rane",
    role: "Python Developer",
    src: "/Testimonials/testimonial4.png",
  },
  {
    quote:
      "This platform has brought so much value to our team. We love how intuitive and powerful it is.",
    name: "Sakshi Gupta",
    role: "Frontend Developer",
    src: "/Testimonials/testimonial1.png",
  },
  {
    quote:
      "This platform has brought so much value to our team. We love how intuitive and powerful it is.",
    name: "Nouman Khan",
    role: "Backend Developer",
    src: "/Testimonials/testimonial3.png",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Aditi Sharma",
    role: "MERN Developer",
    src: "/Testimonials/testimonial2.png",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const getPosition = (index) => {
    const total = testimonials.length;
    const diff = (index - currentIndex + total) % total;

    switch (diff) {
      case 0:
        return "center";
      case 1:
        return "right1";
      case 2:
        return "right2";
      case total - 1:
        return "left1";
      case total - 2:
        return "left2";
      default:
        return "hidden";
    }
  };

  const getMotionStyle = (position) => {
    switch (position) {
      case "center":
        return { scale: 1, opacity: 1, zIndex: 30, x: 0, rotateY: 0 };
      case "left1":
        return { scale: 0.85, opacity: 0.5, zIndex: 20, x: "-60%", rotateY: 20 };
      case "left2":
        return { scale: 0.7, opacity: 0.3, zIndex: 10, x: "-110%", rotateY: 30 };
      case "right1":
        return { scale: 0.85, opacity: 0.5, zIndex: 20, x: "60%", rotateY: -20 };
      case "right2":
        return { scale: 0.7, opacity: 0.3, zIndex: 10, x: "110%", rotateY: -30 };
      default:
        return { scale: 0.5, opacity: 0, zIndex: 0, x: 0, rotateY: 0 };
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

  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => setIsPaused(false);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-t from-[#33135B] via-[#460E73] to-[#8E1DBA] py-24 px-6 lg:px-12 rounded-t-[3rem] text-white"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#AC6CFF]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#8E1DBA]/15 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(172,108,255,0.03)_50%,transparent_100%)]" />
      </div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto text-center mb-20 relative z-10"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block mb-6"
        >
          <span className="px-5 py-2 bg-[#AC6CFF]/20 border border-[#AC6CFF]/40 rounded-full text-sm font-semibold tracking-wider backdrop-blur-sm">
            TESTIMONIALS
          </span>
        </motion.div>
        
        <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          What Our{" "}
          <span className="relative inline-block text-[#AC6CFF]">
            Students & Clients
            <motion.svg
              className="absolute -bottom-2 left-0 w-full"
              height="8"
              viewBox="0 0 300 8"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.path
                d="M0 4 Q 150 8, 300 4"
                stroke="#AC6CFF"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </motion.svg>
          </span>{" "}
          Say
        </h2>
        
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          Real stories from people who transformed their careers with us
        </p>
      </motion.div>

      {/* Modern Carousel */}
      <div
        className="relative flex justify-center items-center h-[35rem] perspective-1000"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full flex items-center justify-center">
          {testimonials.map((t, index) => {
            const position = getPosition(index);
            const motionStyle = getMotionStyle(position);
            const isCenter = position === "center";

            return (
              <motion.div
                key={index}
                animate={motionStyle}
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                className={`absolute backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 rounded-3xl shadow-2xl text-white w-full max-w-5xl ${
                  position === "hidden" ? "pointer-events-none" : ""
                } transform preserve-3d overflow-hidden`}
                style={{
                  boxShadow: isCenter 
                    ? "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(172, 108, 255, 0.3)"
                    : "0 10px 30px -10px rgba(0, 0, 0, 0.3)"
                }}
              >
                {/* Gradient overlay on card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#AC6CFF]/10 via-transparent to-[#8E1DBA]/10 pointer-events-none" />
                
                <div className="relative flex flex-col lg:flex-row h-full">
                  {/* Image Section with modern overlay */}
                  <div className="relative w-full h-72 lg:w-96 lg:h-auto shrink-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#33135B]/90 via-[#33135B]/40 to-transparent z-10" />
                    <img
                      src={t.src}
                      alt={t.name}
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Decorative shape */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#33135B] to-transparent z-10" />
                    <svg className="absolute bottom-0 left-0 w-full h-24 z-10" viewBox="0 0 500 100" preserveAspectRatio="none">
                      <path d="M0,100 L0,40 Q250,100 500,40 L500,100 Z" fill="#33135B" />
                    </svg>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-8 lg:p-12 flex flex-col justify-between relative z-10">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <motion.svg
                          key={i}
                          className="w-5 h-5 text-[#AC6CFF]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isCenter ? { opacity: 1, scale: 1 } : { opacity: 0.5, scale: 0.8 }}
                          transition={{ delay: i * 0.1 + 0.3 }}
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </motion.svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="mb-8 relative">
                      <div className="absolute -left-2 -top-2 text-7xl text-[#AC6CFF]/20 font-serif leading-none">"</div>
                      <p className="text-lg lg:text-xl text-white/95 leading-relaxed pl-8 relative z-10">
                        {t.quote}
                      </p>
                    </div>

                    {/* Author Section */}
                    <div className="flex items-center gap-5 pt-6 border-t border-white/10">
                      <motion.div
                        className="relative w-16 h-16"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#AC6CFF] to-[#8E1DBA] rounded-2xl rotate-6" />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#AC6CFF] to-[#8E1DBA] rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg">
                          {t.name.charAt(0)}
                        </div>
                      </motion.div>
                      <div>
                        <p className="font-bold text-xl text-white mb-1">{t.name}</p>
                        <p className="text-[#AC6CFF] text-sm font-medium">{t.role}</p>
                      </div>
                      {/* Verified badge */}
                      <div className="ml-auto">
                        <div className="w-8 h-8 rounded-full bg-[#AC6CFF]/20 flex items-center justify-center">
                          <svg className="w-5 h-5 text-[#AC6CFF]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stylish Navigation Arrows */}
        <motion.button
          onClick={handlePrev}
          whileHover={{ scale: 1.1, x: -3 }}
          whileTap={{ scale: 0.95 }}
          className="absolute left-6 lg:left-12 z-40 group"
          aria-label="Previous"
        >
          <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-lg border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:bg-[#AC6CFF]/30 group-hover:border-[#AC6CFF]/50 shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </motion.button>
        
        <motion.button
          onClick={handleNext}
          whileHover={{ scale: 1.1, x: 3 }}
          whileTap={{ scale: 0.95 }}
          className="absolute right-6 lg:right-12 z-40 group"
          aria-label="Next"
        >
          <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-lg border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:bg-[#AC6CFF]/30 group-hover:border-[#AC6CFF]/50 shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </motion.button>
      </div>

      {/* Modern Dot Navigation */}
      <div className="flex justify-center items-center gap-3 mt-16 relative z-10">
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleDotClick(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="relative"
            aria-label={`Testimonial ${index + 1}`}
          >
            <div className={`rounded-full transition-all duration-500 ${
              index === currentIndex
                ? "w-10 h-3 bg-gradient-to-r from-[#AC6CFF] to-[#8E1DBA]"
                : "w-3 h-3 bg-white/30 hover:bg-white/50"
            }`} />
            {index === currentIndex && (
              <motion.div
                layoutId="activeDot"
                className="absolute inset-0 rounded-full bg-[#AC6CFF]/30 blur-md"
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="max-w-xl mx-auto mt-10 relative z-10">
        <div className="h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
          <motion.div
            className="h-full bg-gradient-to-r from-[#AC6CFF] to-[#8E1DBA]"
            initial={{ width: "0%" }}
            animate={{ width: isPaused ? "0%" : "100%" }}
            transition={{ duration: 5, ease: "linear" }}
            key={currentIndex}
          />
        </div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(172,108,255,0.15),transparent_70%)] pointer-events-none" />
    </section>
  );
}