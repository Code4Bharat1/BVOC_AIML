"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const InternAndPlacementCards = () => {
  return (
    <>
      {/* Desktop View */}
      <div className="hidden lg:flex flex-col items-center gap-24 relative overflow-visible px-8 bg-gradient-to-b from-[#1a1f4d] via-[#2d1b4e] to-[#4a1f6b] py-16">
        {/* Grid Background - Hero Style */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Floating Particles - Hero Style */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#00d4ff] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* Glowing Orbs - Hero Style */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-[#00d4ff]/20 blur-[150px] rounded-full"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 18, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#ff6b35]/20 blur-[180px] rounded-full"
          animate={{
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 22, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#AC6CFF]/20 blur-[140px] rounded-full"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        {/* Decorative Left Element */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 relative w-full max-w-7xl mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-0 w-[150px] h-[150px] pointer-events-none"
          >
            <Image
              src="/elements/AI-left.svg"
              alt="Decorative Left"
              fill
              className="object-contain hue-rotate-[150deg]"
            />
          </motion.div>

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="z-10 flex-1"
          >
            <div className="flex flex-col md:flex-row rounded-3xl shadow-lg w-full overflow-hidden border border-[#00d4ff]/30 backdrop-blur-md bg-white/5">
              {/* Text Section */}
              <div className="flex flex-col justify-between p-8 pl-14 leading-normal flex-1 bg-gradient-to-r from-[#1a1f4d]/80 via-[#2d1b4e]/80 to-[#4a1f6b]/80 text-white">
                <h5 className="mb-4 text-4xl font-bold tracking-tight text-[#00d4ff]">
                  Internship Before Graduation
                </h5>
                <p className="mb-3 text-2xl font-normal">
                  Apply your skills with{" "}
                  <span className="text-[#ff6b35] font-semibold">
                    real-world
                  </span>{" "}
                  internships that give you{" "}
                  <span className="text-[#AC6CFF] font-semibold">
                    hands-on experience
                  </span>{" "}
                  and industry exposure.
                </p>
              </div>

              {/* Image Section */}
              <div className="md:w-1/4 w-full h-[260px] relative bg-[#00d4ff]/10">
                <Image
                  src="/learn&grow/internship-image.svg"
                  alt="Internship Graduate"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 relative w-full max-w-7xl mx-auto px-4 z-10">
          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="z-10 flex-1"
          >
            <div className="flex flex-col md:flex-row-reverse rounded-3xl shadow-lg w-full overflow-hidden border border-[#ff6b35]/30 backdrop-blur-md bg-white/5">
              {/* Text Section */}
              <div className="flex flex-col justify-between p-8 pl-14 leading-normal flex-1 bg-gradient-to-r from-[#1a1f4d]/80 via-[#2d1b4e]/80 to-[#4a1f6b]/80 text-white">
                <h5 className="mb-4 text-4xl font-bold tracking-tight text-[#ff6b35]">
                  Job Placement After Completion
                </h5>
                <p className="mb-3 text-2xl font-normal">
                  We connect you directly with{" "}
                  <span className="text-[#00d4ff] font-semibold">
                    hiring companies
                  </span>
                  , offering{" "}
                  <span className="text-[#AC6CFF] font-semibold">
                    mock interviews
                  </span>
                  ,{" "}
                  <span className="text-[#ff6b35] font-semibold">
                    resume building
                  </span>
                  , and a strong{" "}
                  <span className="text-[#00d4ff] font-semibold">
                    network
                  </span>{" "}
                  of employers looking for fresh talent.
                </p>
              </div>

              {/* Image Section */}
              <div className="md:w-1/4 w-full h-[260px] relative bg-[#ff6b35]/10">
                <Image
                  src="/learn&grow/placement-image.svg"
                  alt="Job Placement"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Decorative Right Element */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-0 w-[150px] h-[150px] pointer-events-none"
          >
            <Image
              src="/elements/AI-right.svg"
              alt="Decorative Right"
              fill
              className="object-contain hue-rotate-[160deg]"
            />
          </motion.div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col items-center px-6 gap-12 lg:hidden bg-gradient-to-b from-[#1a1f4d] via-[#2d1b4e] to-[#4a1f6b] py-12 relative overflow-hidden">
        {/* Grid Background - Hero Style */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#00d4ff] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-10 right-10 w-60 h-60 bg-[#00d4ff]/20 blur-[100px] rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-72 h-72 bg-[#AC6CFF]/20 blur-[120px] rounded-full"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 rounded-2xl flex flex-col items-center text-center p-6 w-full max-w-md border border-[#00d4ff]/50 shadow-md shadow-[#00d4ff]/30 backdrop-blur-md relative z-10"
        >
          <div className="w-full h-72 relative mb-4">
            <Image
              src="/learn&grow/internship-image.svg"
              alt="Internship"
              fill
              className="object-cover border border-[#00d4ff]/50 rounded-2xl"
            />
          </div>
          <h2 className="text-[#00d4ff] text-2xl font-bold mb-2">
            Internship Before Graduation
          </h2>
          <p className="text-white text-base">
            Apply your skills with real-world internships that give you hands-on
            experience and industry exposure.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white/5 rounded-2xl flex flex-col items-center text-center p-6 w-full max-w-md border border-[#ff6b35]/50 shadow-md shadow-[#ff6b35]/30 backdrop-blur-md relative z-10"
        >
          <div className="w-full h-72 relative mb-4">
            <Image
              src="/learn&grow/placement-image.svg"
              alt="Job Placement"
              fill
              className="object-cover rounded-2xl border border-[#ff6b35]/50"
            />
          </div>
          <h2 className="text-[#ff6b35] text-2xl font-bold mb-2">
            Job Placement After Completion
          </h2>
          <p className="text-white text-base">
            We connect you directly with hiring companies, offering mock
            interviews, resume building, and a network of employers.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default InternAndPlacementCards;