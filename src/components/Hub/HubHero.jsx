import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HubHero = () => {
  return (
    <div className="flex flex-col lg:min-h-screen">
      {/* Mobile Hero Section */}
      <motion.div
        className="lg:hidden w-full relative"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative w-full h-72 bg-[url('/Hub_Hero-mob-bg.svg')] bg-center bg-no-repeat">
          <h1 className="absolute top-8 text-xl md:text-4xl font-bold text-center max-w-md mx-auto text-black">
            Bachelor's of "(BVOC)" in{" "}
            <span className="text-[#AC6CFF]">Machine Learning</span> and{" "}
            <span className="text-[#AC6CFF]">Artificial Intelligence</span>
          </h1>
        </div>
      </motion.div>

      {/* Desktop Hero Section */}
      <motion.div
        className="hidden relative w-full h-screen bg-cover bg-center bg-no-repeat lg:flex flex-col items-center justify-center text-white px-4"
        style={{
          backgroundImage: "url(/Hub_Hero-bg.png)",
          backgroundSize: "100% 100%",
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-black font-bold text-center mb-64 max-w-6xl">
          Bachelor's of (BVOC) in{" "}
          <span className="text-[#AC6CFF]">Machine Learning</span> and{" "}
          <span className="text-[#AC6CFF]">Artificial Intelligence</span>
        </h1>
      </motion.div>

      {/* Brand Logos Section */}
      <motion.div
        className="bg-gray-900 py-16 lg:-mt-0 -mt-3"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-y-8 lg:flex-row lg:justify-center lg:items-center lg:gap-x-14 mb-12">
            <Image
              src="/approved.png"
              alt="Approved"
              width={200}
              height={80}
              className="object-contain"
              priority
            />
            <div className="flex flex-row justify-center items-center gap-x-8">
              <Image
                src="/naac-logo.png"
                alt="NAAC A++ Grade"
                width={200}
                height={80}
                className="object-contain"
                priority
              />
              <Image
                src="/ugc-logo.png"
                alt="UGC Entitled"
                width={200}
                height={80}
                className="object-contain"
                priority
              />
            </div>
          </div>
          <p className="text-xl md:text-3xl text-white text-center mx-auto max-w-4xl">
            Earn a prestigious AI & ML degree from one of India&apos;s top 2%{" "}
            <br className="lg:block hidden" />
            Ranking <br className="lg:hidden" />
            University!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default HubHero;
