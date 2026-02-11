"use client";

import { useState, useEffect, useRef } from "react";
import { Linkedin, ChevronLeft, ChevronRight } from "lucide-react";

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

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 1000);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 1000);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section ref={containerRef} className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#2C2C2C' }}>
            Student <span style={{ color: '#007BFF' }}>Testimonials</span>
          </h2>
          <p className="text-gray-600 text-lg">Hear from our students about their experience</p>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="w-full lg:w-2/5 relative">
                <div className="relative h-80 lg:h-[500px] bg-gradient-to-br from-blue-50 to-gray-100">
                  <img
                    src={currentTestimonial.src}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover transition-opacity duration-500"
                    key={currentIndex}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 p-8 lg:p-12 flex flex-col justify-between h-80 lg:h-[500px]">
                {/* Quote Icon */}
                <div className="mb-3">
                  <svg
                    className="w-10 h-10 text-blue-500 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                  </svg>
                </div>

                {/* Quote Text */}
                <div className="flex-1 mb-4">
                  <p
                    className="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed transition-opacity duration-500"
                    key={`quote-${currentIndex}`}
                  >
                    "{currentTestimonial.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="border-t border-gray-200 pt-5">
                  {currentTestimonial.linkedin ? (
                    <a
                      href={currentTestimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 group transition-colors duration-200"
                    >
                      <span className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-200">
                        <Linkedin className="w-5 h-5 text-white" />
                      </span>
                      <div>
                        <p className="font-bold text-lg text-gray-800 group-hover:text-blue-500 transition-colors duration-200">
                          {currentTestimonial.name}
                        </p>
                        <p className="text-sm text-blue-600 font-medium">
                          {currentTestimonial.role}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div>
                      <p className="font-bold text-lg text-gray-800">{currentTestimonial.name}</p>
                      <p className="text-sm text-blue-600 font-medium">{currentTestimonial.role}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 flex items-center justify-center shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsPaused(true);
                    setTimeout(() => setIsPaused(false), 1000);
                  }}
                  className={`transition-all duration-200 rounded-full ${
                    index === currentIndex
                      ? "w-8 h-3 bg-blue-500"
                      : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 flex items-center justify-center shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Counter */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            {currentIndex + 1} of {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  );
}