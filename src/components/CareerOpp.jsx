"use client";
import React, { useEffect, useState } from "react";
import { FaRobot, FaBrain, FaUserNurse, FaCodeBranch } from "react-icons/fa";
import { MdEngineering, MdManageAccounts } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const careers = [
  { title: "Machine Learning Engineer", icon: <FaBrain size={28} />, bgImage: "/ml.png" },
  { title: "AI Product Manager", icon: <MdManageAccounts size={28} />, bgImage: "/ai.png" },
  { title: "Robotics Engineer", icon: <FaRobot size={28} />, bgImage: "/robo.png" },
  { title: "Computer Vision Engineer", icon: <MdEngineering size={28} />, bgImage: "/vision.png" },
  { title: "NLP Engineer", icon: <FaCodeBranch size={28} />, bgImage: "/nlp.png" },
  { title: "AI Software Engineer", icon: <MdEngineering size={28} />, bgImage: "/code.png" },
  { title: "AI Research Scientist", icon: <FaBrain size={28} />, bgImage: "/lab.png" },
  { title: "Deep Learning Engineer", icon: <FaBrain size={28} />, bgImage: "/deep.png" },
  { title: "Data Scientist", icon: <FaCodeBranch size={28} />, bgImage: "/data.png" },
  { title: "AI Ethicist", icon: <MdManageAccounts size={28} />, bgImage: "/eth.png" },
  { title: "Autonomous Systems Engineer", icon: <FaRobot size={28} />, bgImage: "/auto.png" },
  { title: "AI Consultant", icon: <MdManageAccounts size={28} />, bgImage: "/consult.png" },
  { title: "Data Analyst", icon: <FaCodeBranch size={28} />, bgImage: "/ana.png" },
  { title: "Speech Recognition Engineer", icon: <FaBrain size={28} />, bgImage: "/speech.png" },
  { title: "AI Engineer in Healthcare", icon: <FaUserNurse size={28} />, bgImage: "/health.png" },
];

const CareerOpportunities = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.utils.toArray(".career-card").forEach((card, i) => {
      const xStart = i % 2 === 0 ? -150 : 150;

      gsap.fromTo(
        card,
        { x: xStart, opacity: 0, scale: 0.85 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 65%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });
  }, [showAll]);

  const displayedCareers = isMobile && !showAll ? careers.slice(0, 6) : careers;

  return (
    <section className="py-16 px-4 md:px-16 bg-[#F8FAFC]">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 font-winky">
      Your Path to Guaranteed Success
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {displayedCareers.map((item, index) => (
          <div
            key={index}
            className="career-card aspect-square rounded-2xl overflow-hidden shadow-2xl group relative transition-transform hover:scale-105"
            style={{
              backgroundImage: `url(${item.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-500" />
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <div className="flex flex-col items-center text-white font-semibold text-center px-4">
                <span className="mb-2">{item.icon}</span>
                <span className="leading-snug text-sm md:text-base">{item.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More / Less Button */}
      {isMobile && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-blue-600 font-semibold hover:underline"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default CareerOpportunities;
