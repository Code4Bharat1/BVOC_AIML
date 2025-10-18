"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

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
      "The faculty’s commitment to student success is outstanding. They make complex AI topics simple and fun.",
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
      "The project-based learning structure ensures we apply everything we learn immediately — it’s the best part.",
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
  {
    quote:
      "From day one, we’re encouraged to think like innovators. It’s not just about marks but about building real impact.",
    name: "Ansari Sahil Seraj Ahmad",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Sahil Ansari.jpg",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Sayyed Mohammed Asif Abdul Rehman",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Sayyed Asif.jpg",
  },
  {
    quote:
      "I really appreciate how accessible our mentors are. No question ever goes unanswered here.",
    name: "Faiz Ahmed Moiz Ahmed Shaikh",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Faiz Ahmed Shaikh.jpg",
  },
  {
    quote:
      "I’ve developed technical and soft skills both — presentation, teamwork, and communication matter here.",
    name: "Khan Ramzan Shamshad",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Ramzan Khan.jpg",
  },
  {
    quote:
      "Joining BVOC AI & ML has been the best decision of my academic journey. The blend of theory and hands-on learning keeps us ahead of trends.",
    name: "Khan Mohd Zaid Riyaz Ahmed",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Khan Mohammed Zaid.jpg",
  },
  {
    quote:
      "It has been an incredible journey with this tool. The ease of use and efficiency are unmatched.",
    name: "Piyush Jayprakash Patwa",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/testimonial4.png",
  },
  {
    quote:
      "This program has turned my curiosity for technology into a clear career path. The experience is priceless.",
    name: "Das Sudeep Prashant",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/testimonial3.png",
  },
  {
    quote:
      "Every week brings something new to learn — from AI ethics to real-time deployment. It’s exciting and challenging.",
    name: "Sanskar Sunil Ashan",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/testimonial2.png",
  },
  {
    quote:
      "I never thought I’d be able to train models and deploy them before graduation. BVOC AI & ML made that possible!",
    name: "Ayan Yusuf Khan",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/testimonial2.png",
  },
  {
    quote:
      "The curriculum is so well structured — each semester feels like a step closer to becoming a professional.",
    name: "Obaidullah Mohd Zahiruddin Shaikh",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/testimonial2.png",
  },
  {
    quote:
      "Learning with Nexcore Alliance and Code4Bharat has opened doors to internships and collaborations I never expected.",
    name: "Vishesh Shivlal Jaiswar",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/testimonial2.png",
  },
  {
    quote:
      "Every assignment feels like a mini startup challenge. It pushes me to think like an engineer and entrepreneur.",
    name: "Mohd Yasin Baban Sayyed",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/testimonial2.png",
  },
  {
    quote:
      "I’ve grown immensely not just as a student but as a problem-solver. This course builds confidence and creativity.",
    name: "Khan Nafisa Ali Ahmed",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/testimonial2.png",
  },
  {
    quote:
      "The labs are state-of-the-art, and access to real cloud resources makes the experience feel world-class.",
    name: "Tamanna Ansari",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/testimonial2.png",
  },
  {
    quote:
      "I like how learning is never theoretical. We build models, test, and improve them like real data scientists.",
    name: "Kailash Ganesh Mahto",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/testimonial2.png",
  },
  {
    quote:
      "Our mentors constantly encourage innovation and experimentation. That’s what makes this program special.",
    name: "Sajiya Badruduja Shaikh",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/testimonial2.png",
  },
  {
    quote:
      "The practical exposure here bridges the gap between what’s taught in class and what’s needed in the industry.",
    name: "Kazim Shahid Raza Salmani",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/testimonial2.png",
  },
  // {
  //   quote:
  //     "Hackathons, projects, and teamwork taught me more about leadership than any theory book could.",
  //   name: "Farhan Shaikh",
  //   role: "BVOC AI & ML (2025-2028)",
  // },
  // {
  //   quote:
  //     "This course is a perfect mix of coding, creativity, and career preparation. Every week feels productive.",
  //   name: "Sanjana Reddy",
  //   role: "BVOC AI & ML (2025-2028)",
  // },
  // {
  //   quote:
  //     "It’s amazing how the instructors make complex algorithms so easy to understand with real-life examples.",
  //   name: "Kartik Joshi",
  //   role: "BVOC AI & ML (2025-2028)",
  // },
  // {
  //   quote:
  //     "From Python basics to deploying deep learning models — I’ve learned the complete journey of AI development.",
  //   name: "Tanya D’Souza",
  //   role: "BVOC AI & ML (2025-2028)",
  // },
  // {
  //   quote:
  //     "Every semester brings new excitement — the hands-on labs are the highlight of this entire program.",
  //   name: "Vishal Rajput",
  //   role: "BVOC AI & ML (2025-2028)",
  // },
  // {
  //   quote:
  //     "I’ve built projects that I can showcase to recruiters — something that makes me confident about placements.",
  //   name: "Manisha Pawar",
  //   role: "BVOC AI & ML (2025-2028)",
  // },
  // {
  //   quote:
  //     "The faculty’s mentorship and one-on-one sessions really help me understand where I stand and how to improve.",
  //   name: "Rehan Ali",
  //   role: "BVOC AI & ML (2025-2028)",
  // },
  // {
  //   quote:
  //     "Learning AI here isn’t about rote memorization; it’s about experimenting, failing, and building better each time.",
  //   name: "Bhavika Jain",
  //   role: "BVOC AI & ML (2025-2028)",
  // },
  // {
  //   quote:
  //     "I love the community vibe. Everyone helps each other grow — it feels like a family pushing toward success.",
  //   name: "Aditya Chauhan",
  //   role: "BVOC AI & ML (2025-2028)",
  // },
  // {
  //   quote:
  //     "With every workshop, I feel more confident about tackling real-world data and solving meaningful problems.",
  //   name: "Sofia Shaikh",
  //   role: "BVOC AI & ML (2025-2028)",
  // },
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

  const getMotionStyle = (position) => {
    switch (position) {
      case "center":
        return { scale: 1, opacity: 1, zIndex: 30, x: 0, rotateY: 0 };
      case "left1":
        return { scale: 0.85, opacity: 0.6, zIndex: 20, x: "-80%", rotateY: 15 };
      case "right1":
        return { scale: 0.85, opacity: 0.6, zIndex: 20, x: "80%", rotateY: -15 };
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
      className="relative overflow-hidden bg-gradient-to-t from-[#33135B] via-[#460E73] to-[#8E1DBA] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12 rounded-t-[2.5rem] text-white"
    >
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

      <div
        className="relative flex justify-center items-center h-[28rem] sm:h-[32rem] md:h-[36rem] lg:h-[38rem] xl:h-[40rem] perspective-1000"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full flex items-center justify-center">
          {testimonials.map((t, index) => {
            const position = getPosition(index);
            const motionStyle = getMotionStyle(position);
            const isCenter = position === "center";
            const rating = getRating(index);

            return (
              <motion.div
                key={index}
                animate={motionStyle}
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                className={`absolute backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 rounded-3xl shadow-2xl text-white w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[65%] max-w-6xl ${
                  position === "hidden" ? "pointer-events-none" : ""
                } transform preserve-3d overflow-hidden`}
              >
                <div className="flex flex-col lg:flex-row h-full">
                  {/* Image Section */}
                  <div className="relative w-full h-60 sm:h-72 md:h-80 lg:w-96 lg:h-[500px] shrink-0 overflow-hidden">
                    <img
                      src={t.src}
                      alt={t.name}
                      className="w-full h-full object-cover object-center"
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
                          <motion.svg
                            key={i}
                            className={`w-4 h-4 sm:w-5 sm:h-5 ${
                              isCenter ? "opacity-100" : "opacity-70"
                            }`}
                            fill={isHalf ? "url(#halfGradient)" : isFull ? "#FFD700" : "none"}
                            stroke="#FFD700"
                            viewBox="0 0 20 20"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={
                              isCenter
                                ? { opacity: 1, scale: 1 }
                                : { opacity: 0.6, scale: 0.9 }
                            }
                            transition={{ delay: i * 0.1 + 0.3 }}
                          >
                            <defs>
                              <linearGradient id="halfGradient">
                                <stop offset="50%" stopColor="#FFD700" />
                                <stop offset="50%" stopColor="transparent" />
                              </linearGradient>
                            </defs>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </motion.svg>
                        );
                      })}
                    </div>

                    {/* Quote */}
                    <div className="mb-6 sm:mb-8">
                      <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                        {t.quote}
                      </p>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4 sm:gap-6 pt-5 sm:pt-6 border-t border-white/10">
                      <motion.div
                        className="relative w-12 h-12 sm:w-14 sm:h-14"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#AC6CFF] to-[#8E1DBA] rounded-2xl flex items-center justify-center text-lg sm:text-xl font-bold">
                          {t.name.charAt(0)}
                        </div>
                      </motion.div>
                      <div>
                        <p className="font-bold text-base sm:text-lg md:text-xl">{t.name}</p>
                        <p className="text-[#AC6CFF] text-xs sm:text-sm font-medium">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Arrows */}
        <motion.button
          onClick={handlePrev}
          whileHover={{ scale: 1.1, x: -3 }}
          whileTap={{ scale: 0.95 }}
          className="absolute left-3 sm:left-6 md:left-10 z-40 group"
          aria-label="Previous"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:bg-[#AC6CFF]/30 group-hover:border-[#AC6CFF]/50 shadow-lg">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </motion.button>

        <motion.button
          onClick={handleNext}
          whileHover={{ scale: 1.1, x: 3 }}
          whileTap={{ scale: 0.95 }}
          className="absolute right-3 sm:right-6 md:right-10 z-40 group"
          aria-label="Next"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:bg-[#AC6CFF]/30 group-hover:border-[#AC6CFF]/50 shadow-lg">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </motion.button>
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center gap-2 sm:gap-3 mt-12 sm:mt-14 md:mt-16">
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleDotClick(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="relative"
            aria-label={`Testimonial ${index + 1}`}
          >
            <div
              className={`rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? "w-8 sm:w-10 h-2 sm:h-3 bg-gradient-to-r from-[#AC6CFF] to-[#8E1DBA]"
                  : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/30 hover:bg-white/50"
              }`}
            />
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
      <div className="max-w-md sm:max-w-lg md:max-w-xl mx-auto mt-8 sm:mt-10">
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
