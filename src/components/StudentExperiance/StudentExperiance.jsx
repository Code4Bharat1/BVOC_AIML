"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const StudentExperiance = () => {
  const cards = [
    { id: 1, title: "Individualized Mentorship", description: "Our mentors and instructors provide guidance at every stage of your learning journey.", image: "/review profiles/1.jpg" },
    { id: 2, title: "Real-World Projects", description: "Each course includes hands-on projects, mirroring real industry challenges and solutions.", image: "/juned.jpg" },
    { id: 3, title: "Flexible Learning", description: "Learn at your own pace with flexible learning options that fit your schedule.", image: "/sanad.jpg" },
    { id: 4, title: "Career Support", description: "Get access to career support services, including resume reviews and mock interviews.", image: "/harsh.jpg" },
    { id: 5, title: "Industry Certifications", description: "Earn industry-recognized certifications that enhance your resume and skillset.", image: "/review profiles/5.jpg" },
    { id: 6, title: "Global Community", description: "Join a global community of learners and professionals from diverse backgrounds.", image: "/review profiles/6.jpg" },
    { id: 7, title: "Expert Instructors", description: "Learn from experienced instructors who bring real-world knowledge to the classroom.", image: "/review profiles/7.jpg" },
    { id: 8, title: "Cutting-Edge Curriculum", description: "Stay updated with the latest industry trends through our cutting-edge curriculum.", image: "/review profiles/8.jpg" },
    { id: 9, title: "Networking Opportunities", description: "Connect with industry leaders and fellow students to expand your professional network.", image: "/review profiles/9.jpg" },
    { id: 10, title: "Personalized Learning Paths", description: "Tailor your learning experience with personalized paths that suit your career goals.", image: "/review profiles/10.jpg" },
    { id: 11, title: "Access to Exclusive Resources", description: "Gain access to a wealth of resources, including e-books, webinars, and more.", image: "/review profiles/11.jpg" },
    { id: 12, title: "Feedback and Improvement", description: "Receive constructive feedback to help you improve and excel in your learning journey.", image: "/review profiles/12.jpg" },
    { id: 13, title: "Collaborative Learning", description: "Engage with peers to exchange ideas and enhance your learning experience.", image: "/review profiles/1.jpg" },
    { id: 14, title: "Modern Tools", description: "Get hands-on experience with the latest tools and technologies in your field.", image: "/juned.jpg" },
    { id: 15, title: "Custom Curriculum", description: "Enjoy a curriculum tailored to meet current industry demands.", image: "/sanad.jpg" },
    { id: 16, title: "Practical Exposure", description: "Gain practical exposure through real-world scenarios and case studies.", image: "/harsh.jpg" },
    { id: 17, title: "Career-Oriented Training", description: "Prepare for your dream job with our career-focused curriculum.", image: "/juned.jpg" },
    { id: 18, title: "Global Community", description: "Connect with a diverse group of learners and expand your professional network.", image: "/review profiles/1.jpg" },
    { id: 19, title: "Skill Assessments", description: "Evaluate your skills with regular assessments and progress tracking.", image: "/review profiles/7.jpg" },
    { id: 20, title: "Diverse Courses", description: "Choose from a wide range of courses designed for various career paths.", image: "/review profiles/8.jpg" },
  ];

  // Duplicate for seamless loop
  const slidingCards = [...cards, ...cards];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prev => (prev === slidingCards.length / 2 - 1 ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? slidingCards.length / 2 - 1 : prev - 1));
  };

  return (
    <div className="bg-[#efefef] h-auto w-full mx-auto py-12 px-4">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-6xl font-semibold text-gray-800">
          Student <span className="text-lime-400">Experience</span>
        </h2>
      </div>

      {/* Slider Container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {slidingCards.map((card, idx) => (
            <div
              key={`${card.id}-${idx}`} 
              className="flex-shrink-0 w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 relative"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={48}
                  height={48}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover mr-4"
                />
                <h3 className="font-semibold text-sm sm:text-base md:text-lg">
                  {card.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                {card.description}
              </p>
              <span className="absolute top-4 right-4 text-lime-400 text-xl sm:text-2xl md:text-3xl font-bold">
                ”
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {cards.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              currentIndex === index 
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentExperiance;
