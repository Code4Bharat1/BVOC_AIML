"use client";
import { DollarSign, Calendar, FileText, CreditCard, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Fee_Policy() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 py-20 px-4 overflow-hidden">


      {/* Soft Glowing Orbs */}
      <motion.div 
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/20 blur-[120px] rounded-full"
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-indigo-200/20 blur-[130px] rounded-full"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, -20, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 22, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center gap-3 mb-8 px-8 py-3 bg-white/80 border-2 border-blue-200 rounded-full backdrop-blur-sm shadow-lg"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="text-blue-500 w-5 h-5" />
            </motion.div>
            <span className="text-blue-600 text-sm font-semibold tracking-wider">FEE STRUCTURE</span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="text-blue-500 w-5 h-5" />
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Fees Structure & <span className="text-blue-600">Payment Policy</span>
          </motion.h1>

          <motion.h2 
            className="text-xl md:text-2xl font-medium text-gray-600 max-w-3xl mx-auto"
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
              className="h-0.5 w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="w-2 h-2 rounded-full bg-blue-500"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="h-0.5 w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Total Fee Card */}
        <motion.div 
          className="relative mb-16 group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="absolute -inset-1 bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-200 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"
          />
          
          <div className="relative bg-white rounded-3xl p-10 border border-gray-200 shadow-xl">
            <div className="flex items-center justify-center gap-4 mb-4">
              <motion.div 
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360, scale: 1.05 }}
                transition={{ duration: 0.6 }}
              >
                <DollarSign className="text-white w-8 h-8" />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Total Program Fee
              </h3>
            </div>
            <p className="text-4xl md:text-5xl font-bold text-blue-600 text-center">
              ₹3,36,000/-
            </p>
            <p className="text-lg text-gray-600 text-center mt-3 font-medium">
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
            Detailed <span className="text-blue-600">Fee Bifurcation</span> (Per Year)
          </h2>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500" />
            
            <div className="relative overflow-x-auto rounded-3xl border border-gray-200 shadow-xl bg-white">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <tr>
                    <th className="px-6 py-5 font-bold text-lg text-gray-800 text-center border-b-2 border-gray-200">
                      Component
                    </th>
                    <th className="px-6 py-5 font-bold text-lg text-gray-800 text-center border-b-2 border-gray-200">
                      Amount per Year (₹)
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="hover:bg-blue-50/50 transition-colors border-b border-gray-100">
                    <td className="px-6 py-4 font-medium">
                      Admission & Registration Fee
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">
                      ₹5,000
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/50 transition-colors border-b border-gray-100">
                    <td className="px-6 py-4 font-medium">
                      Tuition Fee
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">
                      ₹85,000
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/50 transition-colors border-b border-gray-100">
                    <td className="px-6 py-4 font-medium">
                      Lab, AI Tools & Project Access
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">
                      ₹10,000
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/50 transition-colors border-b border-gray-100">
                    <td className="px-6 py-4 font-medium">
                      Examination Fee
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">
                      ₹6,000
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/50 transition-colors border-b-2 border-gray-200">
                    <td className="px-6 py-4 font-medium">
                      Student Development & Activity Fee
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">
                      ₹6,000
                    </td>
                  </tr>
                  <tr className="bg-gradient-to-r from-blue-50 to-indigo-50">
                    <td className="px-6 py-5 font-bold text-lg text-gray-800">
                      Total per Year
                    </td>
                    <td className="px-6 py-5 text-center font-bold text-2xl text-blue-600">
                      ₹1,12,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Payment Options */}
        <div className="mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Payment <span className="text-blue-600">Schedule</span> & <span className="text-indigo-600">Options</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Option A */}
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500" />
              
              <div className="relative h-full bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
                <div className="flex flex-col items-center mb-6">
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white mb-4 shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Calendar className="w-7 h-7" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 text-center">
                    Option A: Annual Payment
                  </h3>
                </div>

                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold shadow">
                      1
                    </span>
                    <p className="text-base leading-relaxed">1st Year: ₹1,12,000 at Admission</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold shadow">
                      2
                    </span>
                    <p className="text-base leading-relaxed">2nd Year: ₹1,12,000 at the start of 3rd Semester</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold shadow">
                      3
                    </span>
                    <p className="text-base leading-relaxed">3rd Year: ₹1,12,000 at the start of 5th Semester</p>
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
              whileHover={{ y: -5 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-3xl blur opacity-25 group-hover:opacity-35 transition duration-500" />
              
              <div className="relative h-full bg-white rounded-3xl p-8 border border-indigo-200 shadow-lg">
                <div className="flex flex-col items-center mb-6">
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mb-4 shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FileText className="w-7 h-7" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 text-center">
                    Option B: Semester-wise Installments
                  </h3>
                </div>

                <div className="space-y-6 text-center">
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
                    <p className="text-base text-gray-600 mb-2 font-medium">Per Semester</p>
                    <p className="text-3xl font-bold text-blue-600">₹56,000</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200">
                    <p className="text-base text-gray-600 mb-2 font-medium">Total Fee (6 Semesters)</p>
                    <p className="text-3xl font-bold text-indigo-600">₹3,36,000</p>
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
              whileHover={{ y: -5 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500" />

              <div className="relative h-full bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
                <div className="flex flex-col items-center mb-6">
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white mb-4 shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <CreditCard className="w-7 h-7" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 text-center">
                    Option C: Monthly EMI Plan
                  </h3>
                </div>

                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold shadow">
                      1
                    </span>
                    <p className="text-base leading-relaxed">Admission Fees: ₹5,000 (one-time)</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold shadow">
                      2
                    </span>
                    <p className="text-base leading-relaxed">Exam Fees: ₹6,000 (one-time)</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold shadow">
                      3
                    </span>
                    <p className="text-base leading-relaxed">Student Development Fees: ₹6,000 (one-time)</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold shadow">
                      4
                    </span>
                    <p className="text-base leading-relaxed">Balance Amount: ₹95,000</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold shadow">
                      5
                    </span>
                    <p className="text-base leading-relaxed">
                      EMI via <span className="text-blue-600 font-semibold">Credit Card Only</span> (No Cost EMI)
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold shadow">
                      💳
                    </span>
                    <p className="text-base leading-relaxed font-semibold text-indigo-600">
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
              className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-lg opacity-30"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.button 
              className="relative px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full text-lg shadow-xl transition-all duration-300"
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