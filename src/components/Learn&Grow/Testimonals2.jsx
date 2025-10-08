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
    }, 4500);
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
        return { scale: 0.85, opacity: 0.6, zIndex: 20, x: "-55%", rotateY: 15 };
      case "left2":
        return { scale: 0.7, opacity: 0.4, zIndex: 10, x: "-100%", rotateY: 25 };
      case "right1":
        return { scale: 0.85, opacity: 0.6, zIndex: 20, x: "55%", rotateY: -15 };
      case "right2":
        return { scale: 0.7, opacity: 0.4, zIndex: 10, x: "100%", rotateY: -25 };
      default:
        return { scale: 0.5, opacity: 0, zIndex: 0, x: 0, rotateY: 0 };
    }
  };

  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => setIsPaused(false);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-t from-[#33135B] via-[#460E73] to-[#8E1DBA] py-20 px-6 lg:px-12 rounded-t-[3rem] text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto text-center mb-12"
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          What Our <span className="text-[#AC6CFF]">Students & Clients</span> Say
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Hear from the professionals and learners who’ve experienced success with us.
        </p>
      </motion.div>

      {/* Glassmorphic Testimonial Carousel */}
      <div
        className="relative flex justify-center items-center h-[30rem] perspective-1000"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full flex items-center justify-center">
          {testimonials.map((t, index) => {
            const position = getPosition(index);
            const motionStyle = getMotionStyle(position);

            return (
              <motion.div
                key={index}
                animate={motionStyle}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={`absolute backdrop-blur-md bg-white/10 border border-white/10 rounded-3xl shadow-2xl text-white w-full max-w-4xl ${
                  position === "hidden" ? "pointer-events-none" : ""
                } transform preserve-3d flex flex-col lg:flex-row overflow-hidden`}
              >
                <div className="w-full h-48 sm:h-64 lg:w-64 lg:h-80 shrink-0">
                  <img
                    src={t.src}
                    alt={t.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="flex-1 p-8 flex flex-col justify-between text-center lg:text-left">
                  <div className="relative">
                    <span className="text-6xl text-[#AC6CFF]/40 absolute top-0 left-0">
                      "
                    </span>
                    <p className="text-lg pl-8 pt-2 italic text-white/90">
                      {t.quote}
                    </p>
                  </div>

                  <div className="mt-6">
                    <p className="font-bold text-xl text-[#AC6CFF]">{t.name}</p>
                    <p className="text-white/70 text-sm">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-10">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#AC6CFF] w-8"
                : "bg-white/30 w-2"
            }`}
          />
        ))}
      </div>

      {/* Subtle glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(172,108,255,0.15),transparent_70%)] pointer-events-none"></div>
    </section>
  );
}
