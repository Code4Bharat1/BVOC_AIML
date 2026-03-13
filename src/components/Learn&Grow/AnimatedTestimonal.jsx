"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const AnimatedTestimonials = ({
  testimonials,
  autoplaySpeed = 5000,
}) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, autoplaySpeed);
    return () => clearInterval(interval);
  }, [testimonials.length, autoplaySpeed]);

  const isActive = (index) => index === active;
  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <section
      aria-label="Student Testimonials"
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-64 h-64 bg-purple-500 opacity-30 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-64 h-64 bg-blue-500 opacity-30 blur-3xl rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 text-white mx-auto max-w-sm px-4 py-16 font-sans md:max-w-4xl md:px-8 lg:px-12">

        {/* Section Heading (important for SEO) */}
        <header className="text-center mb-10">
          <h2 className="text-4xl font-bold">
            Student Success Stories
          </h2>
          <p className="text-gray-300 mt-2">
            Hear what our students say about their learning experience
          </p>
        </header>

        <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2 backdrop-blur-lg bg-white/5 rounded-3xl shadow-2xl border border-white/10 p-8">

          {/* Image Carousel */}
          <div>
            <div className="relative h-80 w-full">
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: randomRotateY(),
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : randomRotateY(),
                      zIndex: isActive(index)
                        ? 40
                        : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: randomRotateY(),
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <img
                      src={testimonial.src}
                      alt={`${testimonial.name} student testimonial`}
                      width={500}
                      height={500}
                      loading="lazy"
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover object-center border-4 border-white/10 shadow-lg"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-between py-4">
            <motion.div
              key={active}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-md">
                {testimonials[active].name}
              </h3>

              <p className="text-sm text-gray-300 mt-1 tracking-wide">
                {testimonials[active].designation}
              </p>

              <blockquote className="mt-8 text-lg text-gray-200 leading-relaxed">
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </blockquote>
            </motion.div>

            {/* Dots */}
            <div
              className="flex justify-center gap-2 pt-12 md:pt-0"
              aria-label="Testimonial slider navigation"
            >
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  aria-hidden="true"
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    isActive(index)
                      ? "bg-gradient-to-r from-purple-400 to-blue-400 w-6 shadow-md"
                      : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};