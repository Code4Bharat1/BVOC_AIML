"use client";
import { FaCreditCard, FaClock, FaFileInvoice, FaBell, FaChartLine } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { motion } from "framer-motion";

export default function FeePaymentGuidelines() {
  const guidelines = [
    {
      description: "Fees can be paid via bank transfer, UPI, net banking, or at the growth head cabin.",
      icon: <FaCreditCard />,
    },
    {
      description: "A late fee of ₹500/per Day is applicable after the due date.",
      icon: <FaClock />,
    },
    {
      description: "Fee receipts must be retained and submitted during semester registration.",
      icon: <FaFileInvoice />,
    },
    {
      description: "Students receiving scholarships are required to inform the accounts department for fee adjustments.",
      icon: <FaBell />,
    },
    {
      description: "No refunds after 15 days of admission.",
      icon: <FaChartLine />,
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1A287E] via-[#2C3560] to-[#212121] py-20 px-4 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#26C6DA 1px, transparent 1px), linear-gradient(90deg, #26C6DA 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
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

      {/* Glowing Orbs */}
      <motion.div 
        className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#26C6DA]/10 blur-[120px] rounded-full"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#FF6F00]/10 blur-[150px] rounded-full"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
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
            <span className="text-[#26C6DA] text-sm font-bold tracking-widest">PAYMENT TERMS</span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <HiSparkles className="text-[#26C6DA] text-xl" />
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Fee Payment <span className="text-[#26C6DA]">Guidelines</span>
          </motion.h1>

          <motion.div 
            className="flex items-center justify-center gap-3 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
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

        {/* Guidelines Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {guidelines.map((item, index) => {
            const isLast = index === guidelines.length - 1;
            const isOdd = guidelines.length % 2 !== 0;

            return (
              <motion.div
                key={index}
                className={`relative group ${
                  isLast && isOdd ? "md:col-span-2 md:mx-auto md:max-w-md" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-[#26C6DA] to-[#FF6F00] rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500" />
                
                <div className="relative h-full bg-[#1A287E]/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-[#26C6DA]/50 flex flex-col items-center justify-center min-h-[200px]">
                  {/* Corner Decorations */}
                  <motion.div 
                    className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#26C6DA]/70 rounded-tl-3xl"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  />
                  <motion.div 
                    className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#FF6F00]/70 rounded-br-3xl"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  />

                  {/* Icon Badge */}
                  <motion.div 
                    className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#26C6DA] to-[#FF6F00] flex items-center justify-center text-white text-2xl mb-6 shadow-lg shadow-[#26C6DA]/50"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {item.icon}
                  </motion.div>

                  {/* Number Badge */}
                  <motion.div 
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-[#FF6F00] to-[#FF8C00] flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-[#FF6F00]/50"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                  >
                    {index + 1}
                  </motion.div>

                  {/* Description */}
                  <div className="text-center">
                    <p className="text-gray-300 text-base md:text-lg font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#26C6DA]/5 to-[#FF6F00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Info Section */}
        <motion.div 
          className="relative group"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="absolute -inset-1 bg-gradient-to-br from-[#1A287E] via-[#2C3560] to-[#212121]rounded-3xl blur-xl opacity-50 group-hover:opacity-75"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          <div className="relative bg-gradient-to-br from-[#1A287E] via-[#2C3560] to-[#212121] rounded-3xl p-8 border-2 border-white/20 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <HiSparkles className="text-white text-2xl" />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Need Assistance?</h3>
              <motion.div
                animate={{ rotate: [0, -15, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <HiSparkles className="text-white text-2xl" />
              </motion.div>
            </div>
            <p className="text-white text-lg mb-6">
              Contact our finance department for any payment-related queries
            </p>
            <motion.button 
              className="px-8 py-3 bg-[#FF6F00] text-white font-bold rounded-full hover:bg-[#FF6F00] transition-all duration-300 shadow-2xl shadow-white/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Finance Team →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}