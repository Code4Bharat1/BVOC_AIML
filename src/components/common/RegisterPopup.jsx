"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaBrain, FaRobot, FaShieldAlt, FaPalette } from "react-icons/fa";
import Image from "next/image";

const RegistrationFormPopup = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    studentName: "",
    address: "",
    whatsappNumber: "",
    parentsNumber: "",
    qualification: "",
    courseInterested: "",
  });
 const courses = [
    {
      name: "Artificial Intelligence and Machine Learning",
      icon: FaBrain,
      color: "text-purple-300"
    },
    {
      name: "Artificial Intelligence and Robotics",
      icon: FaRobot,
      color: "text-cyan-300"
    },
    {
      name: "Cyber Security",
      icon: FaShieldAlt,
      color: "text-green-300"
    },
    {
      name: "Graphics, Animation, VFX and Multimedia",
      icon: FaPalette,
      color: "text-pink-300"
    },
  ];
  const qualifications = [
    "10th Pass",
    "12th Pass",
    "Graduate",
    "Post Graduate",
    "Other",
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your submission logic here
    onClose();
    // router.push("/thank-you");
  };

  const validateStep1 = () => {
    return formData.studentName && formData.address;
  };

  const validateStep2 = () => {
    return formData.whatsappNumber && formData.parentsNumber;
  };

  const nextStep = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl my-4 sm:my-8"
            >
              <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row max-h-[95vh]">
                {/* Left Side - Branding */}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="lg:w-2/5 bg-gradient-to-br from-blue-600 via-blue-500 to-orange-500 p-6 sm:p-8 lg:p-10 flex flex-col justify-center relative overflow-hidden"
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: "30px 30px",
                      }}
                    />
                  </div>

                  <div className="relative z-10">
                    {/* Logo */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.4, type: "spring" }}
                      className="mb-6 sm:mb-8"
                    >
                      <div className="w-30 h-30 sm:w-40 sm:h-30  backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center border border-white/30 overflow-hidden">
                        <Image
                          src="/logo.png"
                          alt="NexCore Institute Logo"
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                          priority
                        />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2"
                    >
                      Welcome to
                      <br />
                      Nexcore Institute of Technology
                    </motion.h2>

                   

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="text-white/80 mb-6 sm:mb-8 text-sm sm:text-base"
                    >
                      Start your journey to becoming a tech professional
                    </motion.p>

                    {/* Program Info */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20 mb-4 sm:mb-6"
                    >
                      <h3 className="text-white font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                        <span>📚</span>
                        <span>3 Year Degree Programs</span>
                      </h3>
                      <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-white/90">
                        {courses.map((course, i) => {
                          const IconComponent = course.icon;
                          return (
                            <div key={i} className="flex items-start gap-2">
                              <IconComponent className={`${course.color} mt-0.5 sm:mt-1 text-sm sm:text-base flex-shrink-0`} />
                              <span className="leading-tight">{course.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>

                    {/* Stats */}
                   
                  </div>
                </motion.div>

                {/* Right Side - Form */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="lg:w-3/5 p-6 sm:p-8 lg:p-10 relative overflow-y-auto"
                >
                  {/* Close button */}
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors z-10"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>

                  {/* Form Content */}
                  <div className="max-w-md mx-auto">
                    {/* Header */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mb-4 sm:mb-6"
                    >
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                        Register Now
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Join thousands of students learning tech skills
                      </p>
                    </motion.div>

                    {/* Progress Indicator */}
                    <div className="mb-4 sm:mb-6">
                      <div className="flex items-center justify-between mb-2">
                        {[1, 2, 3].map((step) => (
                          <div key={step} className="flex items-center">
                            <div
                              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold transition-all ${
                                currentStep >= step
                                  ? "bg-gradient-to-r from-blue-600 to-orange-600 text-white"
                                  : "bg-gray-200 text-gray-500"
                              }`}
                            >
                              {step}
                            </div>
                            {step < 3 && (
                              <div
                                className={`w-12 sm:w-16 h-1 mx-0.5 sm:mx-1 transition-all ${
                                  currentStep > step
                                    ? "bg-gradient-to-r from-blue-600 to-orange-600"
                                    : "bg-gray-200"
                                }`}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="text-xs text-gray-500 text-center">
                        Step {currentStep} of 3
                      </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                      {/* Step 1: Personal Info */}
                      {currentStep === 1 && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-3 sm:space-y-4"
                        >
                          <div>
                            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                              Student Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="studentName"
                              value={formData.studentName}
                              onChange={handleChange}
                              placeholder="Enter your full name"
                              required
                              className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            />
                          </div>

                          <div>
                            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                              Address <span className="text-red-500">*</span>
                            </label>
                            <textarea
                              name="address"
                              value={formData.address}
                              onChange={handleChange}
                              placeholder="Enter your complete address"
                              required
                              rows="3"
                              className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                            />
                          </div>
                        </motion.div>
                      )}

                      {/* Step 2: Contact Info */}
                      {currentStep === 2 && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-3 sm:space-y-4"
                        >
                          <div>
                            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                              WhatsApp Number <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="tel"
                              name="whatsappNumber"
                              value={formData.whatsappNumber}
                              onChange={handleChange}
                              placeholder="+91 XXXXX XXXXX"
                              required
                              pattern="[0-9]{10}"
                              className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                              Enter 10-digit mobile number
                            </p>
                          </div>

                          <div>
                            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                              Parent's Mobile Number{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="tel"
                              name="parentsNumber"
                              value={formData.parentsNumber}
                              onChange={handleChange}
                              placeholder="+91 XXXXX XXXXX"
                              required
                              pattern="[0-9]{10}"
                              className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                              Enter 10-digit mobile number
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {/* Step 3: Academic Info */}
                      {currentStep === 3 && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-3 sm:space-y-4"
                        >
                          <div>
                            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                              Qualification <span className="text-red-500">*</span>
                            </label>
                            <select
                              name="qualification"
                              value={formData.qualification}
                              onChange={handleChange}
                              required
                              className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
                            >
                              <option value="">Select your qualification</option>
                              {qualifications.map((qual, i) => (
                                <option key={i} value={qual}>
                                  {qual}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                              Course Interested In{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <select
                              name="courseInterested"
                              value={formData.courseInterested}
                              onChange={handleChange}
                              required
                              className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
                            >
                              <option value="">Select a course</option>
                              {courses.map((course, i) => (
                                <option key={i} value={course}>
                                  {course}
                                </option>
                              ))}
                            </select>
                          </div>

                          {/* Summary */}
                          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-100">
                            <h4 className="font-semibold text-gray-800 mb-2 text-xs sm:text-sm">
                              📋 Registration Summary
                            </h4>
                            <div className="space-y-1 text-xs text-gray-600">
                              <p>
                                <strong>Name:</strong> {formData.studentName}
                              </p>
                              <p>
                                <strong>WhatsApp:</strong> {formData.whatsappNumber}
                              </p>
                              <p>
                                <strong>Qualification:</strong>{" "}
                                {formData.qualification}
                              </p>
                              <p className="break-words">
                                <strong>Course:</strong> {formData.courseInterested}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Navigation Buttons */}
                      <div className="flex gap-2 sm:gap-3 pt-3 sm:pt-4">
                        {currentStep > 1 && (
                          <button
                            type="button"
                            onClick={prevStep}
                            className="flex-1 py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
                          >
                            ← Back
                          </button>
                        )}

                        {currentStep < 3 ? (
                          <button
                            type="button"
                            onClick={nextStep}
                            disabled={
                              (currentStep === 1 && !validateStep1()) ||
                              (currentStep === 2 && !validateStep2())
                            }
                            className="flex-1 py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Next →
                          </button>
                        ) : (
                          <button
                            type="submit"
                            disabled={!formData.qualification || !formData.courseInterested}
                            className="flex-1 py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Submit Application ✓
                          </button>
                        )}
                      </div>
                    </form>

                    {/* Trust Badges */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-gray-500"
                    >
                      <div className="flex items-center gap-1">
                        <span>🔒</span>
                        <span>Secure</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>✓</span>
                        <span>Verified</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>⚡</span>
                        <span>Instant Access</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default RegistrationFormPopup;