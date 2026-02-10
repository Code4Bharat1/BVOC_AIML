"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const RegisterPopup = ({ isOpen, onClose }) => {
  const router = useRouter();

  const handleRegister = () => {
    onClose();
    router.push("/register");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-[90%] max-w-md rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#020617] to-[#020617] p-8 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            {/* Content */}
            <h2 className="text-3xl font-bold text-white">
              Start Your Journey 🚀
            </h2>

            <p className="mt-3 text-gray-400">
              Register now and unlock career-oriented programs designed for
              your future growth.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              <button
                onClick={handleRegister}
                className="flex-1 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 font-semibold text-white hover:opacity-90 transition"
              >
                Register Now
              </button>

              <button
                onClick={onClose}
                className="flex-1 rounded-xl border border-gray-600 px-6 py-3 text-gray-300 hover:bg-white/5 transition"
              >
                Maybe Later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RegisterPopup;
