"use client";

import { useState, useEffect, useRef } from "react";
import { Linkedin } from "lucide-react";

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
    linkedin: "https://www.linkedin.com/in/pravin-chettiar-a55951378/",
  },
  {
    quote:
      "I love how the program focuses not just on coding but on critical thinking, teamwork, and solving real-world problems.",
    name: "Farhan Faiyaz Tolkar",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Farhan Tolkar.jpg",
    linkedin: "https://www.linkedin.com/in/farhan-tolkar-a15447379/",
  },
  {
    quote:
      "The exposure we get to cloud computing and machine learning tools here is something most colleges only promise.",
    name: "Mohd Irfan Mohd Noor Alam Shaikh",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Mohd Irfan.jpg",
    linkedin: "https://www.linkedin.com/in/irfan-shaikh-24a459379/",
  },
  {
    quote:
      "The faculty's commitment to student success is outstanding. They make complex AI topics simple and fun.",
    name: "Mohd Ahmed Waseem Khan",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Ahmed khan.jpg",
    linkedin: "https://www.linkedin.com/in/ahmed-khan-222218338/",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
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

  return (
    <section ref={containerRef} className="bg-white py-20 px-4 overflow-hidden">
      <div className="relative flex justify-center items-center h-[34rem]">
        {testimonials.map((t, index) => {
          const position = getPosition(index);

          let style = {};
          if (position === "center") style = { transform: "scale(1)", opacity: 1, zIndex: 30 };
          else if (position === "left1") style = { transform: "translateX(-85%) scale(0.88)", opacity: 0.5, zIndex: 20 };
          else if (position === "right1") style = { transform: "translateX(85%) scale(0.88)", opacity: 0.5, zIndex: 20 };
          else style = { opacity: 0 };

          return (
            <div
              key={index}
              className="absolute bg-white rounded-2xl shadow-xl w-[90%] max-w-5xl border border-blue-200 overflow-hidden transition-all duration-500"
              style={style}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="w-full lg:w-96 h-64 lg:h-[420px] bg-blue-50">
                  <img src={t.src} alt={t.name} className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div className="flex-1 p-8 lg:p-12 flex flex-col justify-between">
                  <p className="text-lg text-[#2C2C2C] mb-8">“{t.quote}”</p>

                  <div className="pt-5 border-t border-blue-100">
                    {t.linkedin ? (
                      <a
                        href={t.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 font-semibold text-[#2C2C2C] hover:text-[#007BFF]"
                      >
                        {/* LinkedIn Circle Icon */}
                        <span className="w-7 h-7 rounded-full bg-[#007BFF] flex items-center justify-center">
                          <Linkedin className="w-4 h-4 text-white" />
                        </span>

                        <span>{t.name}</span>
                      </a>
                    ) : (
                      <p className="font-semibold text-[#2C2C2C]">{t.name}</p>
                    )}

                    <p className="text-sm text-[#007BFF] font-medium mt-1">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Arrows */}
        <button onClick={handlePrev} className="absolute left-4 bg-white w-10 h-10 rounded-full shadow border">
          ‹
        </button>
        <button onClick={handleNext} className="absolute right-4 bg-white w-10 h-10 rounded-full shadow border">
          ›
        </button>
      </div>
    </section>
  );
}
