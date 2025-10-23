"use client";
import { HiSparkles } from "react-icons/hi";
import { FaAward, FaCertificate, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const HubHero = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Mobile Hero Section */}
      <div className="lg:hidden relative overflow-hidden bg-gradient-to-br from-[#1A287E] via-[#2C3560] to-[#212121]">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#26C6DA 1px, transparent 1px), linear-gradient(90deg, #26C6DA 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#26C6DA] rounded-full"
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
          className="absolute top-0 left-0 w-72 h-72 bg-[#26C6DA]/20 blur-[120px] rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6F00]/20 blur-[140px] rounded-full"
          animate={{ 
            scale: [1, 1.4, 1],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 18, repeat: Infinity }}
        />

        <div className="relative w-full min-h-[20rem] flex items-center justify-center text-center px-6 py-8">
          <div>
            <motion.div 
              className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-[#26C6DA]/10 border-2 border-[#26C6DA]/30 rounded-full backdrop-blur-xl shadow-lg shadow-[#26C6DA]/20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <HiSparkles className="text-[#26C6DA]" />
              </motion.div>
              <span className="text-[#26C6DA] text-xs font-bold tracking-widest">NEXT-GEN EDUCATION</span>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <HiSparkles className="text-[#26C6DA]" />
              </motion.div>
            </motion.div>
            
            <motion.h1 
              className="text-3xl md:text-4xl font-extrabold leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-white">Bachelor's in</span>
              <br />
              <span className="text-[#26C6DA]">Machine Learning</span>
              <span className="text-white"> and</span>
              <br />
              <span className="text-[#FF6F00]">Artificial Intelligence</span>
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Desktop Hero Section */}
      <div className="hidden lg:flex relative w-full min-h-screen items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-[#1A287E] via-[#2C3560] to-[#212121]">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#26C6DA 1px, transparent 1px), linear-gradient(90deg, #26C6DA 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#26C6DA] rounded-full"
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



        {/* Glowing Background Elements */}
        <motion.div 
          className="absolute top-20 -left-20 w-[500px] h-[500px] bg-[#26C6DA]/20 blur-[200px] rounded-full"
          animate={{ 
            scale: [1, 1.4, 1],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 right-0 w-[600px] h-[600px] bg-[#FF6F00]/20 blur-[250px] rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            x: [0, -50, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />

        <div className="text-center max-w-6xl z-10">
          <motion.div 
            className="inline-flex items-center gap-3 mb-8 px-8 py-3 bg-[#26C6DA]/10 border-2 border-[#26C6DA]/30 rounded-full backdrop-blur-xl shadow-2xl shadow-[#26C6DA]/20"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <HiSparkles className="text-[#26C6DA] text-xl" />
            </motion.div>
            <span className="text-[#26C6DA] text-sm font-bold tracking-widest">NEXT-GENERATION EDUCATION</span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <HiSparkles className="text-[#26C6DA] text-xl" />
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">Bachelor's in</span>
            <br />
            <span className="text-[#26C6DA] my-4">
              Machine Learning
            </span>
            <span className="text-white"> and</span>
            <br />
            <span className="text-[#FF6F00] my-4">
              Artificial Intelligence
            </span>
          </motion.h1>

          <motion.div 
            className="flex items-center justify-center gap-3 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.div 
              className="h-1 w-24 bg-gradient-to-r from-transparent via-[#26C6DA] to-transparent rounded-full"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="w-2 h-2 rounded-full bg-[#26C6DA]"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="h-1 w-24 bg-gradient-to-r from-transparent via-[#26C6DA] to-transparent rounded-full"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>

      {/* Brand Logos Section */}
      <div className="relative bg-gradient-to-br from-[#1A287E] via-[#2C3560] to-[#212121] py-20 overflow-hidden border-t border-[#26C6DA]/20">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#26C6DA 1px, transparent 1px), linear-gradient(90deg, #26C6DA 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Soft Glow Background */}
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-[#26C6DA]/20 blur-[160px] rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 40, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF6F00]/20 blur-[180px] rounded-full"
          animate={{ 
            scale: [1, 1.4, 1],
            x: [0, -40, 0]
          }}
          transition={{ duration: 18, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          {/* Logos with Modern Cards */}
          <motion.div 
            className="flex flex-col items-center gap-8 lg:flex-row lg:justify-center lg:items-center lg:gap-12 mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Approved Logo */}
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
           
              <div className="relative bg-[#1A287E]/80 backdrop-blur-xl border-2 border-[#26C6DA]/50 rounded-2xl p-6 transition-transform duration-300">
                <img
                  src="/approved.png"
                  alt="Approved"
                  className="w-48 h-auto object-contain"
                />
              </div>
            </motion.div>

            {/* NAAC & UGC Logos */}
            <div className="flex flex-row justify-center items-center gap-8">
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
               
                <div className="relative bg-[#1A287E]/80 backdrop-blur-xl border-2 border-[#00BCD4]/50 rounded-2xl p-6 transition-transform duration-300">
                  <img
                    src="/naac-logo-1.png"
                    alt="NAAC A+ Grade"
                    className="w-48 h-auto object-contain"
                  />
                </div>
              </motion.div>

              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
               
                <div className="relative bg-[#1A287E]/80 backdrop-blur-xl border-2 border-[#FF8A65]/50 rounded-2xl p-6 transition-transform duration-300">
                  <img
                    src="/ugc-logo.png"
                    alt="UGC Entitled"
                    className="w-48 h-auto object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl mx-auto max-w-4xl font-bold leading-relaxed mb-4">
              <span className="text-[#26C6DA]">
                Earn a prestigious AI & ML degree
              </span>
              <br />
              <span className="text-white">from one of India's top 2%</span>
              <br />
              <span className="text-[#FF6F00]">
                Ranking University!
              </span>
            </p>

            {/* Stats */}
            <motion.div 
              className="flex flex-wrap justify-center gap-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {[
                { icon: <FaAward />, text: "NAAC A+ Accredited", color: "#26C6DA" },
                { icon: <FaCertificate />, text: "UGC Recognized", color: "#00BCD4" },
                { icon: <FaGraduationCap />, text: "Industry-Ready", color: "#FF6F00" }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div 
                    className="text-xl"
                    style={{ color: stat.color }}
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <span className="text-sm text-gray-300 font-medium">{stat.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HubHero;