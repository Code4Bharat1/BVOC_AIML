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

  const getPosition = (index) => {
    const total = testimonials.length;
    const diff = (index - currentIndex + total) % total;
    if (diff === 0) return "center";
    if (diff === 1) return "right1";
    if (diff === total - 1) return "left1";
    return "hidden";
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 400);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 400);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 400);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return setIsPaused(false);

    const distance = touchStart - touchEnd;
    if (distance > 50) handleNext();
    else if (distance < -50) handlePrev();
    else setIsPaused(false);

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section
      ref={containerRef}
      className="relative bg-white py-20 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      <style jsx>{`
        .card-transition {
          transition: all 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .arrow-btn {
          transition: all 0.25s ease;
        }
        .arrow-btn:hover {
          transform: scale(1.08);
        }
      `}</style>

      {/* ===== HEADER ===== */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="inline-block px-5 py-2 rounded-full text-sm font-semibold border border-blue-200 text-[#007BFF] mb-4">
          TESTIMONIALS
        </span>

        <h2 className="text-4xl sm:text-5xl font-bold text-[#2C2C2C] mb-4">
          What Our Students Say
        </h2>

        <p className="text-[#2C2C2C]/70 max-w-2xl mx-auto">
          Real experiences from learners building real careers with Nexcore
        </p>
      </div>

      {/* ===== SLIDER ===== */}
      <div
        className="relative flex justify-center items-center h-[34rem]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {testimonials.map((t, index) => {
          const position = getPosition(index);

          let style = {};
          if (position === "center") {
            style = { transform: "scale(1)", opacity: 1, zIndex: 30 };
          } else if (position === "left1") {
            style = { transform: "translateX(-85%) scale(0.88)", opacity: 0.5, zIndex: 20 };
          } else if (position === "right1") {
            style = { transform: "translateX(85%) scale(0.88)", opacity: 0.5, zIndex: 20 };
          } else {
            style = { opacity: 0, zIndex: 0 };
          }

          return (
            <div
              key={index}
              className="card-transition absolute bg-white rounded-2xl shadow-xl w-[90%] max-w-5xl border border-blue-200 overflow-hidden"
              style={style}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="w-full lg:w-96 h-64 lg:h-[420px] bg-blue-50 flex items-center justify-center">
                  <img
                    src={t.src}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-8 lg:p-12 flex flex-col justify-between">
                  <p className="text-lg leading-relaxed text-[#2C2C2C] mb-8">
                    “{t.quote}”
                  </p>

                  <div className="pt-5 border-t border-blue-100">
                    <p className="font-semibold text-[#2C2C2C]">{t.name}</p>
                    <p className="text-sm text-[#007BFF] font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="arrow-btn absolute left-2 sm:left-8 z-40 bg-white w-11 h-11 rounded-full shadow-md flex items-center justify-center border border-blue-200"
        >
          ‹
        </button>

        <button
          onClick={handleNext}
          className="arrow-btn absolute right-2 sm:right-8 z-40 bg-white w-11 h-11 rounded-full shadow-md flex items-center justify-center border border-blue-200"
        >
          ›
        </button>
      </div>

      {/* ===== DOTS ===== */}
      <div className="flex justify-center gap-2 mt-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`h-2 rounded-full transition-all ${
              i === currentIndex ? "w-8 bg-[#007BFF]" : "w-2 bg-blue-200"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
