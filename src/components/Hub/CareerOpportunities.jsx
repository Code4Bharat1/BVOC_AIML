"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";


// Ultra-minimal color system
const DESIGN_SYSTEM = {
  colors: {
    primary: "#0F172A",      // Slate 900
    secondary: "#64748B",    // Slate 500
    accent: "#0066FF",       // Single blue accent
    border: "#E2E8F0",       // Slate 200
    background: "#FFFFFF",
    subtle: "#F8FAFC"        // Slate 50
  },
  typography: {
    display: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    body: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif'
  }
};

const careers = [
  { 
    img: "/career1.svg", 
    alt: "AI Adoption", 
    label: "AI Adoption",
    description: "Leading organizations in AI transformation"
  },
  { 
    img: "/career2.svg", 
    alt: "Career Opportunities", 
    label: "Career Opportunities",
    description: "Access to top-tier tech companies"
  },
  { 
    img: "/career3.svg", 
    alt: "Industry Preparedness", 
    label: "Industry Preparedness",
    description: "Job-ready from day one"
  },
  { 
    img: "/career4.svg", 
    alt: "Innovation Leadership", 
    label: "Innovation Leadership",
    description: "Drive technological advancement"
  },
  { 
    img: "/career5.svg", 
    alt: "Practical Excellence", 
    label: "Practical Excellence",
    description: "Real-world project experience"
  },
  { 
    img: "/career6.svg", 
    alt: "Seamless Integration", 
    label: "Seamless Integration",
    description: "Theory meets industry practice"
  },
];

// Clean animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

const CareerOpportunities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section 
      ref={ref} 
      className="relative bg-white py-16 lg:py-24 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Minimal Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-12 lg:mb-16"
        >
          {/* Small label */}
       
          
          {/* Main heading */}
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h2 
                className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 mb-3 tracking-tight"
                style={{ fontFamily: DESIGN_SYSTEM.typography.display }}
              >
                Career & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">Opportunities</span>
              </h2>
              
              {/* Subtle accent line */}
              <motion.div
                className="w-16 h-0.5 bg-slate-900"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ transformOrigin: 'left' }}
              />
            </div>
            
            {/* Desktop CTA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:block"
            >
              
            </motion.div>
          </div>
        </motion.div>

        {/* Ultra-Minimal Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          {careers.map((career, i) => (
            <MinimalCareerCard key={i} career={career} index={i} />
          ))}
        </motion.div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="lg:hidden mt-8 text-center"
        >
          <p 
            className="text-slate-600 text-base"
            style={{ fontFamily: DESIGN_SYSTEM.typography.body }}
          >
            Step into high-demand tech careers with industry-ready skills
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerOpportunities;

/* ================= ULTRA-MINIMAL CAREER CARD ================= */
const MinimalCareerCard = ({ career, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        className="relative p-6 lg:p-8 h-full flex flex-col bg-white border border-slate-200"
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {/* Minimal top border indicator */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-slate-900"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ transformOrigin: 'left' }}
        />

        {/* Simple icon */}
        <div className="mb-4">
          <img 
            src={career.img} 
            alt={career.alt} 
            className="w-8 h-8 object-contain opacity-60"
          />
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h3 
            className="text-lg font-semibold text-slate-900 mb-1.5 leading-tight"
            style={{ fontFamily: DESIGN_SYSTEM.typography.display }}
          >
            {career.label}
          </h3>
          <p 
            className="text-sm text-slate-600 leading-relaxed"
            style={{ fontFamily: DESIGN_SYSTEM.typography.body }}
          >
            {career.description}
          </p>
        </div>


      </motion.div>
    </motion.div>
  );
};