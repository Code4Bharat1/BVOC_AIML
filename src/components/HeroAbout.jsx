"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const HeroAboutSection = () => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  // Animation state for controlling the transition
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight);
    }
    const handleResize = () => {
      if (ref.current) setHeight(ref.current.clientHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // This effect will ensure animation runs only once
  useEffect(() => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  }, [hasAnimated]);

  // Define animation variants for smooth transitions
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="pt-10">
      {/* Hero Section with Video */}
      <div ref={ref} className="w-full h-screen relative overflow-hidden mt-6">
        <div className="w-full h-full relative">
          <div className="w-full h-full overflow-hidden bg-black">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/AI_Brain_Bg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Static Text Card */}
          <div className="absolute top-56 md:top-56 md:left-96 z-10 flex justify-start px-4">
            <div className="max-w-3xl text-center rounded-xl p-6">
              <motion.h1
                className="hidden md:block text-white text-6xl font-bold leading-tight tracking-wide"
                initial="hidden"
                animate={hasAnimated ? "visible" : "hidden"}
                variants={textVariants}
              >
                Code4Bharat, <br />
                by Nexcore Alliance LLP
              </motion.h1>
              <motion.h1
                className="md:hidden text-white text-3xl font-bold leading-tight tracking-wide"
                initial="hidden"
                animate={hasAnimated ? "visible" : "hidden"}
                variants={textVariants}
              >
                Code4Bharat, by <br />
                Nexcore Alliance LLP
              </motion.h1>
              <motion.p
                className="text-white mt-4 text-lg sm:text-xl font-medium"
                initial="hidden"
                animate={hasAnimated ? "visible" : "hidden"}
                variants={textVariants}
              >
                In collaboration with Guru Kashi University for B.Voc programs
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full min-h-screen px-6 md:px-4 py-12 bg-white text-black flex items-center justify-center">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
          
          {/* Left: Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            variants={textVariants}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-lime-400">
              Who We Are?
            </h2>
            <p className="text-xl sm:text-2xl font-medium leading-relaxed tracking-wide">
              <strong>Code4Bharat</strong> is a leading tech education brand under <strong>Nexcore Alliance LLP</strong>, dedicated to upskilling India’s youth in emerging technologies. With a vision to make India a global digital talent hub, Code4Bharat works on real-world IT projects, conducts training programs, and now delivers industry-integrated B.Voc courses in collaboration with reputed universities like GKU.
            </p>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="flex-1"
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            variants={textVariants}
          >
            <img
              src="/Hero_About_Bg.jpg"
              alt="About Us"
              className="w-full h-[420px] rounded-xl shadow-lg object-cover"
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default HeroAboutSection;
