"use client";
import { FaRupeeSign, FaCalendarAlt, FaFileInvoice, FaCreditCard } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Fee_Policy() {
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
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
            <span className="text-[#26C6DA] text-sm font-bold tracking-widest">FEE STRUCTURE</span>
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
            Fees Structure & <span className="text-[#26C6DA]">Payment Policy</span>
          </motion.h1>

          <motion.h2 
            className="text-xl md:text-2xl font-semibold text-[#FF6F00]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Course: Bachelor's in Artificial Intelligence and Machine Learning
          </motion.h2>

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

        {/* Total Fee Card */}
        <motion.div 
          className="relative mb-16 group"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="absolute -inset-1 bg-gradient-to-br from-[#1A287E] via-[#2C3560] to-[#212121]rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"
          />
          
          <div className="relative bg-gradient-to-br from-[#1A287E] via-[#2C3560] to-[#212121] rounded-3xl p-8 border-2 border-white/20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <motion.div 
                className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <FaRupeeSign className="text-white text-3xl" />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Total Program Fee
              </h3>
            </div>
            <p className="text-3xl md:text-4xl font-bold text-white text-center">
              ₹3,36,000/-
            </p>
            <p className="text-lg text-white/90 text-center mt-2">
              (₹1,12,000 per year for 3 years)
            </p>
          </div>
        </motion.div>

        {/* Fee Bifurcation Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Detailed <span className="text-[#26C6DA]">Fee Bifurcation</span> (Per Year)
          </h2>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-[#1A287E] via-[#2C3560] to-[#212121] rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500" />
            
            <div className="relative overflow-x-auto rounded-3xl border-2 border-[#26C6DA]/50 backdrop-blur-xl">
              <table className="w-full text-left text-base border-collapse">
                <thead className="bg-gradient-to-br from-[#1A287E] via-[#2C3560] to-[#212121] text-white">
                  <tr>
                    <th className="px-6 py-4 font-bold text-xl text-center border-2 border-white/20">
                      Component
                    </th>
                    <th className="px-6 py-4 font-bold text-xl text-center border-2 border-white/20">
                      Amount per Year (₹)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-[#1A287E]/80 text-white backdrop-blur-xl">
                  <tr className="hover:bg-[#26C6DA]/10 transition-colors">
                    <td className="px-6 py-4 border-2 border-[#26C6DA]/20">
                      Admission & Registration Fee
                    </td>
                    <td className="px-6 py-4 text-center border-2 border-[#26C6DA]/20 font-semibold">
                      ₹5,000
                    </td>
                  </tr>
                  <tr className="hover:bg-[#26C6DA]/10 transition-colors">
                    <td className="px-6 py-4 border-2 border-[#26C6DA]/20">
                      Tuition Fee
                    </td>
                    <td className="px-6 py-4 text-center border-2 border-[#26C6DA]/20 font-semibold">
                      ₹85,000
                    </td>
                  </tr>
                  <tr className="hover:bg-[#26C6DA]/10 transition-colors">
                    <td className="px-6 py-4 border-2 border-[#26C6DA]/20">
                      Lab, AI Tools & Project Access
                    </td>
                    <td className="px-6 py-4 text-center border-2 border-[#26C6DA]/20 font-semibold">
                      ₹10,000
                    </td>
                  </tr>
                  <tr className="hover:bg-[#26C6DA]/10 transition-colors">
                    <td className="px-6 py-4 border-2 border-[#26C6DA]/20">
                      Examination Fee
                    </td>
                    <td className="px-6 py-4 text-center border-2 border-[#26C6DA]/20 font-semibold">
                      ₹6,000
                    </td>
                  </tr>
                  <tr className="hover:bg-[#26C6DA]/10 transition-colors">
                    <td className="px-6 py-4 border-2 border-[#26C6DA]/20">
                      Student Development & Activity Fee
                    </td>
                    <td className="px-6 py-4 text-center border-2 border-[#26C6DA]/20 font-semibold">
                      ₹6,000
                    </td>
                  </tr>
                  <tr className="bg-gradient-to-br from-[#1A287E] via-[#2C3560] to-[#212121]">
                    <td className="px-6 py-4 border-2 border-[#26C6DA]/30 font-bold text-lg">
                      Total per Year
                    </td>
                    <td className="px-6 py-4 text-center border-2 border-[#26C6DA]/30 font-bold text-xl text-[#26C6DA]">
                      ₹1,12,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Payment Options */}
        <div className="mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Payment <span className="text-[#26C6DA]">Schedule</span> & <span className="text-[#FF6F00]">Options</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Option A */}
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-[#1A287E] via-[#2C3560] to-[#212121] rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500" />
              
              <div className="relative h-full bg-[#1A287E]/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-[#26C6DA]/50">
                <div className="flex flex-col items-center mb-6">
                  <motion.div 
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#26C6DA] to-[#FF6F00] flex items-center justify-center text-white text-2xl mb-4 shadow-lg shadow-[#26C6DA]/50"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FaCalendarAlt />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[#26C6DA] text-center">
                    Option A: Annual Payment
                  </h3>
                </div>

                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#26C6DA] to-[#FF6F00] flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-[#26C6DA]/50">
                      1
                    </span>
                    <p className="text-lg">1st Year: ₹1,12,000 at Admission</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#26C6DA] to-[#FF6F00] flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-[#26C6DA]/50">
                      2
                    </span>
                    <p className="text-lg">2nd Year: ₹1,12,000 at the start of 3th Semester</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#26C6DA] to-[#FF6F00] flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-[#26C6DA]/50">
                      3
                    </span>
                    <p className="text-lg">3rd Year: ₹1,12,000 at the start of 5th Semester</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Option B */}
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-[#1A287E] via-[#2C3560] to-[#212121] rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />
              
              <div className="relative h-full bg-[#1A287E]/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-[#26C6DA]/50">
                <div className="flex flex-col items-center mb-6">
                  <motion.div 
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#FF6F00] to-[#26C6DA] flex items-center justify-center text-white text-2xl mb-4 shadow-lg shadow-[#FF6F00]/50"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FaFileInvoice />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[#26C6DA] text-center">
                    Option B: Semester-wise Installments
                  </h3>
                </div>

                <div className="space-y-6 text-center">
                  <div className="p-6 rounded-xl bg-gradient-to-r from-[#26C6DA]/10 to-[#FF6F00]/10 border border-[#26C6DA]/30 backdrop-blur-sm">
                    <p className="text-lg text-gray-300 mb-2">Per Semester</p>
                    <p className="text-3xl font-bold text-[#26C6DA]">₹56,000</p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-r from-[#FF6F00]/10 to-[#26C6DA]/10 border border-[#26C6DA]/30 backdrop-blur-sm">
                    <p className="text-lg text-gray-300 mb-2">Total Fee (6 Semesters)</p>
                    <p className="text-3xl font-bold text-[#FF6F00]">₹3,36,000</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Option C */}
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-[#1A287E] via-[#2C3560] to-[#212121] rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />

              <div className="relative h-full bg-[#1A287E]/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-[#26C6DA]/50">
                <div className="flex flex-col items-center mb-6">
                  <motion.div 
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#26C6DA] to-[#FF6F00] flex items-center justify-center text-white text-2xl mb-4 shadow-lg shadow-[#26C6DA]/50"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FaCreditCard />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[#26C6DA] text-center">
                    Option C: Monthly EMI Plan
                  </h3>
                </div>

                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#26C6DA] to-[#FF6F00] flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-[#26C6DA]/50">
                      1
                    </span>
                    <p className="text-lg">Admission Fees: ₹5,000 (one-time)</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#26C6DA] to-[#FF6F00] flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-[#26C6DA]/50">
                      2
                    </span>
                    <p className="text-lg">Exam Fees: ₹6,000 (one-time)</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#26C6DA] to-[#FF6F00] flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-[#26C6DA]/50">
                      3
                    </span>
                    <p className="text-lg">Student Development Fees: ₹6,000 (one-time)</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#26C6DA] to-[#FF6F00] flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-[#26C6DA]/50">
                      4
                    </span>
                    <p className="text-lg">Balance Amount: ₹95,000</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#26C6DA] to-[#FF6F00] flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-[#26C6DA]/50">
                      5
                    </span>
                    <p className="text-lg">
                      EMI via <span className="text-[#26C6DA] font-semibold">Credit Card Only</span> (No Cost EMI)
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#26C6DA] to-[#FF6F00] flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-[#26C6DA]/50">
                      💳
                    </span>
                    <p className="text-lg font-semibold text-[#FF6F00]">
                      Monthly EMI: ₹10,555 / month
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative inline-block">
            <motion.div 
              className="absolute -inset-2 bg-gradient-to-br from-[#1A287E] via-[#2C3560] to-[#212121] rounded-full blur-xl opacity-75"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.button 
              className="relative px-8 py-4 bg-gradient-to-r from-[#FF6F00] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FF6F00] text-white font-bold rounded-full text-lg shadow-2xl shadow-[#FF6F00]/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Admission →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}