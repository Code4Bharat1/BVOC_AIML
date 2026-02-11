"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaBrain, FaRobot, FaShieldAlt, FaPalette, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

const RegistrationFormPopup = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    whatsappNumber: "",
    parentsNumber: "",
    qualification: "",
    courseInterested: "",
  });

  const courses = [
    {
      name: "Artificial Intelligence and Machine Learning",
      icon: FaBrain,
      color: "text-slate-400"
    },
    {
      name: "Artificial Intelligence and Robotics",
      icon: FaRobot,
      color: "text-slate-400"
    },
    {
      name: "Cyber Security",
      icon: FaShieldAlt,
      color: "text-slate-400"
    },
    {
      name: "Graphics Animation, VFX and Multimedia",
      icon: FaPalette,
      color: "text-slate-400"
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

  // Handle mobile number input - only allow numbers, max 10 digits
  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    if (value.length <= 10) {
      setFormData({
        ...formData,
        [e.target.name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      handleClose();
    }, 5000);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setFormData({
      studentName: "",
      whatsappNumber: "",
      parentsNumber: "",
      qualification: "",
      courseInterested: "",
    });
    onClose();
  };

  const validateStep1 = () => {
    return formData.studentName && 
           formData.whatsappNumber.length === 10 && 
           formData.parentsNumber.length === 10;
  };

  const nextStep = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
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
            onClick={!isSubmitted ? onClose : undefined}
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-4xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Success Message */}
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 text-center max-w-lg mx-auto"
                >
                  {/* Success Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="mb-6"
                  >
                    <div className="w-20 h-20 mx-auto bg-slate-900 rounded-full flex items-center justify-center">
                      <FaCheckCircle className="text-white text-4xl" />
                    </div>
                  </motion.div>

                  {/* Success Title */}
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl font-semibold text-slate-900 mb-3"
                  >
                    Registration Successful!
                  </motion.h2>

                  {/* Success Message */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-slate-600 mb-8"
                  >
                    Thank you, <strong>{formData.studentName}</strong>! Your application has been submitted successfully.
                  </motion.p>

                  {/* Details Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-slate-50 rounded-xl p-6 mb-8 text-left border border-slate-200"
                  >
                    <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <span>📧</span>
                      <span>What's Next?</span>
                    </h3>
                    <ul className="space-y-3 text-sm text-slate-700">
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>We'll contact you on <strong>+91 {formData.whatsappNumber}</strong> within 24 hours</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Course details for <strong>{formData.courseInterested}</strong> will be shared</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Check your WhatsApp for admission process updates</span>
                      </li>
                    </ul>
                  </motion.div>

                  {/* Close Button */}
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    onClick={handleClose}
                    className="w-full py-3.5 px-6 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all shadow-lg"
                  >
                    Close
                  </motion.button>

                  {/* Auto-close message */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-xs text-slate-500 mt-4"
                  >
                    This window will close automatically in 5 seconds
                  </motion.p>
                </motion.div>
              ) : (
                /* Registration Form */
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row max-h-[90vh]">
                  {/* Left Side - Branding */}
                  <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="hidden lg:flex lg:w-1/3 bg-slate-900 p-8 flex-col justify-between relative overflow-hidden"
                  >
                    {/* Subtle decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800/50 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-800/50 rounded-full blur-3xl" />

                    <div className="relative z-10">
                      {/* Logo */}
                      <div className="w-28 h-28 bg-white rounded-xl flex items-center justify-center overflow-hidden mb-6 shadow-xl">
                        <Image
                          src="/logo.png"
                          alt="NexCore Institute Logo"
                          width={100}
                          height={100}
                          className="object-contain"
                          priority
                        />
                      </div>

                      {/* Title */}
                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-2xl font-semibold text-white mb-2 leading-tight"
                      >
                        Welcome to Nexcore Institute of Technology
                      </motion.h2>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-slate-400 mb-6 text-sm"
                      >
                        Start your journey to becoming a tech professional
                      </motion.p>

                      {/* Program Info */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700"
                      >
                        <h3 className="text-white font-semibold mb-3 flex items-center gap-2 text-sm">
                          <span>📚</span>
                          <span>3 Year Degree Programs</span>
                        </h3>
                        <div className="space-y-2 text-xs text-slate-300">
                          {courses.map((course, i) => {
                            const IconComponent = course.icon;
                            return (
                              <div key={i} className="flex items-start gap-3">
                                <IconComponent className="text-slate-400 mt-1 flex-shrink-0" />
                                <span className="leading-relaxed">{course.name}</span>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    </div>

                    {/* Bottom accent */}
                    <div className="relative z-10 pt-8 border-t border-slate-800">
                      <p className="text-xs text-slate-500">
                        Join thousands of students learning tech skills
                      </p>
                    </div>
                  </motion.div>

                  {/* Right Side - Form */}
                  <motion.div
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="w-full lg:w-2/3 p-6 sm:p-8 relative overflow-y-auto"
                  >
                    {/* Close button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={onClose}
                      className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors z-10"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </motion.button>

                    {/* Mobile Logo */}
                    <div className="lg:hidden flex justify-center mb-6">
                      <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center shadow-lg border border-slate-200">
                        <Image
                          src="/logo.png"
                          alt="Nexcore Institute Logo"
                          width={80}
                          height={80}
                          className="object-contain"
                          priority
                        />
                      </div>
                    </div>

                    {/* Form Content */}
                    <div className="max-w-md mx-auto">
                      {/* Header */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mb-6 text-center lg:text-left"
                      >
                        <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                          Register Now
                        </h3>
                        <p className="text-slate-600 text-sm">
                          Join thousands of students learning tech skills
                        </p>
                      </motion.div>

                      {/* Progress Indicator */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-3">
                          {[1, 2].map((step) => (
                            <div key={step} className="flex items-center flex-1">
                              <div
                                className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-semibold transition-all ${
                                  currentStep >= step
                                    ? "bg-slate-900 text-white"
                                    : "bg-slate-100 text-slate-400"
                                }`}
                              >
                                {step}
                              </div>
                              {step < 2 && (
                                <div
                                  className={`flex-1 h-1 mx-2 transition-all ${
                                    currentStep > step ? "bg-slate-900" : "bg-slate-200"
                                  }`}
                                />
                              )}
                            </div>
                          ))}
                        </div>
                        <div className="text-xs text-slate-500 text-center">
                          Step {currentStep} of 2
                        </div>
                      </div>

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Step 1: Personal Info & Contact */}
                        {currentStep === 1 && (
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-5"
                          >
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-2">
                                Student Name <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                name="studentName"
                                value={formData.studentName}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required
                                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-2">
                                WhatsApp Number <span className="text-red-500">*</span>
                              </label>
                              <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 font-medium">
                                  +91
                                </span>
                                <input
                                  type="tel"
                                  name="whatsappNumber"
                                  value={formData.whatsappNumber}
                                  onChange={handleMobileChange}
                                  placeholder="XXXXX XXXXX"
                                  required
                                  maxLength="10"
                                  className="w-full pl-14 pr-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all"
                                />
                              </div>
                              <p className="text-xs text-slate-500 mt-2">
                                Enter 10-digit mobile number (numbers only)
                              </p>
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-2">
                                Parent's Mobile Number <span className="text-red-500">*</span>
                              </label>
                              <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 font-medium">
                                  +91
                                </span>
                                <input
                                  type="tel"
                                  name="parentsNumber"
                                  value={formData.parentsNumber}
                                  onChange={handleMobileChange}
                                  placeholder="XXXXX XXXXX"
                                  required
                                  maxLength="10"
                                  className="w-full pl-14 pr-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all"
                                />
                              </div>
                              <p className="text-xs text-slate-500 mt-2">
                                Enter 10-digit mobile number (numbers only)
                              </p>
                            </div>
                          </motion.div>
                        )}

                        {/* Step 2: Academic Info */}
                        {currentStep === 2 && (
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-5"
                          >
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-2">
                                Qualification <span className="text-red-500">*</span>
                              </label>
                              <select
                                name="qualification"
                                value={formData.qualification}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all bg-white"
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
                              <label className="block text-sm font-medium text-slate-700 mb-2">
                                Course Interested In <span className="text-red-500">*</span>
                              </label>
                              <select
                                name="courseInterested"
                                value={formData.courseInterested}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all bg-white"
                              >
                                <option value="">Select a course</option>
                                {courses.map((course, i) => (
                                  <option key={i} value={course.name}>
                                    {course.name}
                                  </option>
                                ))}
                              </select>
                            </div>

                            {/* Summary */}
                            <div className="mt-6 p-5 bg-slate-50 rounded-xl border border-slate-200">
                              <h4 className="font-semibold text-slate-900 mb-3 text-sm flex items-center gap-2">
                                <span>📋</span>
                                <span>Registration Summary</span>
                              </h4>
                              <div className="space-y-2 text-sm text-slate-600">
                                <p>
                                  <strong className="text-slate-900">Name:</strong> {formData.studentName}
                                </p>
                                <p>
                                  <strong className="text-slate-900">WhatsApp:</strong> +91 {formData.whatsappNumber}
                                </p>
                                <p>
                                  <strong className="text-slate-900">Parent's Number:</strong> +91 {formData.parentsNumber}
                                </p>
                                <p>
                                  <strong className="text-slate-900">Qualification:</strong> {formData.qualification}
                                </p>
                                <p className="break-words">
                                  <strong className="text-slate-900">Course:</strong> {formData.courseInterested}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex gap-3 pt-4">
                          {currentStep > 1 && (
                            <button
                              type="button"
                              onClick={prevStep}
                              className="flex-1 py-3 px-6 bg-slate-100 text-slate-700 font-medium rounded-lg hover:bg-slate-200 transition-colors"
                            >
                              ← Back
                            </button>
                          )}

                          {currentStep < 2 ? (
                            <button
                              type="button"
                              onClick={nextStep}
                              disabled={!validateStep1()}
                              className="flex-1 py-3.5 px-6 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                            >
                              Next →
                            </button>
                          ) : (
                            <button
                              type="submit"
                              disabled={!formData.qualification || !formData.courseInterested}
                              className="flex-1 py-3.5 px-6 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                            >
                              Submit Application ✓
                            </button>
                          )}
                        </div>
                      </form>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default RegistrationFormPopup;