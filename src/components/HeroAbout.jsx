'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const HeroAboutSection = () => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  const { scrollY } = useScroll();

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

  // Transform to keep HeroSection fixed until scrollY reaches height, then scroll naturally
  const heroY = useTransform(scrollY, (value) => Math.min(value, height));
  const opacityHero = useTransform(scrollY, [0, height || 800], [1, 0]);
  const translateYHero = useTransform(scrollY, [0, height || 800], [0, -100]);

  // About Section scroll transformation
  const opacityAbout = useTransform(scrollY, [height, height + 500], [0, 1]);
  const translateYAbout = useTransform(scrollY, [height, height + 500], [300, 0]);

  return (
    <div>
      {/* Hero Section with Video */}
      <motion.div
        ref={ref}
        style={{ y: heroY }}
        className="w-full h-screen relative overflow-hidden mt-6"
      >
        <div className="w-full h-full px-6 lg:px-20">
          <div className="w-full h-full rounded-xl overflow-hidden">
            <motion.video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{ opacity: opacityHero }}
            >
              <source src="/bgVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </motion.video>
          </div>
          <motion.div
            style={{ opacity: opacityHero, y: translateYHero }}
            className="absolute top-16 inset-x-0 z-10 flex justify-center px-4"
          >
            <div className="max-w-3xl text-center bg-black/50 rounded-xl p-6 shadow-lg backdrop-blur-md">
              <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-wide">
                Code4Bharat, by Nexcore Alliance LLP
              </h1>
              <p className="text-white mt-4 text-lg sm:text-xl font-medium">
                In collaboration with Guru Kashi University for B.Voc programs
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.div
        style={{ opacity: opacityAbout, y: translateYAbout }}
        className="w-full h-[100vh] px-6 lg:px-20 flex items-center justify-center bg-black text-[#fafaf3] z-30"
      >
        <div className="max-w-4xl text-center">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-lime-400">
            About Us
          </h2>
          <p className="text-xl sm:text-2xl font-medium leading-relaxed tracking-wide">
            We are proud to announce that{" "}
            <span className="font-bold">Code4Bharat</span>, a registered brand
            under <span className="font-bold"> Nexcore Alliance LLP</span>, has
            officially partnered with <span className="font-bold"> Guru Kashi University (GKU)</span> as an
            Industry Partner to offer <span className="font-bold"> B.Voc</span> degree programs. This
            strategic collaboration merges academic excellence with hands-on
            industry exposure, aimed at preparing students for real-world careers
            in high-demand sectors like AI, ML, and Web Dev.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroAboutSection;
