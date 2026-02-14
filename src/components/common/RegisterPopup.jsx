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
      name: "Bachelor of Data Science and Artificial Intelligence",
      icon: FaBrain,
      color: "text-slate-400",
    },
    {
      name: "Bachelor of Multimedia and Animation",
      icon: FaPalette,
      color: "text-slate-400",
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

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setFormData({
        ...formData,
        [e.target.name]: value,
      });
    }
  };

  const sendWhatsAppMessage = () => {
    // Format the message with form details
    const message = ` *New Registration - Nexcore Institute*

*Student Details:*
 Name: ${formData.studentName}
 WhatsApp: +91 ${formData.whatsappNumber}
 Parent's Number: +91 ${formData.parentsNumber}
 Qualification: ${formData.qualification}
 Course Interested: ${formData.courseInterested}

*Time:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp number (without +91)
    const whatsappNumber = "919594402822";
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Send WhatsApp message
    sendWhatsAppMessage();
    
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
    return formData.studentName && formData.whatsappNumber.length === 10 && formData.parentsNumber.length === 10;
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
    <>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden pointer-events-auto"
            >
              {/* Success Message */}
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-8 md:p-12 text-center"
                >
                  {/* Success Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="inline-block mb-6"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                      <FaCheckCircle className="text-green-500 text-5xl" />
                    </div>
                  </motion.div>

                  {/* Success Title */}
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">
                    Registration Successful!
                  </h3>

                  {/* Success Message */}
                  <p className="text-slate-600 mb-8 text-lg">
                    Thank you, {formData.studentName}! Your application has been submitted successfully.
                  </p>

                  {/* Details Card */}
                  <div className="bg-slate-50 rounded-xl p-6 mb-8 text-left max-w-md mx-auto">
                    <h4 className="font-semibold text-slate-900 mb-4 text-lg">
                      📧 What's Next?
                    </h4>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>We'll contact you on +91 {formData.whatsappNumber} within 24 hours</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Course details for {formData.courseInterested} will be shared</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Check your WhatsApp for admission process updates</span>
                      </li>
                    </ul>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={handleClose}
                    className="px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
                  >
                    Close
                  </button>

                  {/* Auto-close message */}
                  <p className="text-sm text-slate-400 mt-4">
                    This window will close automatically in 5 seconds
                  </p>
                </motion.div>
              ) : (
                /* Registration Form */
                <div className="grid md:grid-cols-2 h-full max-h-[90vh]">
                  {/* Left Side - Branding */}
                  <div className="hidden md:flex flex-col justify-between bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 text-white relative overflow-hidden">
                    {/* Subtle decorative elements */}
                   
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
                      <div>
                        <h2 className="text-4xl font-bold mb-4 leading-tight">
                          Welcome to<br />Nexcore Institute of Technology
                        </h2>
                        <p className="text-slate-300 text-lg">
                          Start your journey to becoming a tech professional
                        </p>
                      </div>

                      {/* Program Info */}
                      <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-3 text-slate-300">
                          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                            📚
                          </div>
                          <span className="font-medium">3 Year Degree Programs</span>
                        </div>

                        {courses.map((course, i) => {
                          const IconComponent = course.icon;
                          return (
                            <div key={i} className="flex items-start gap-3 text-slate-300">
                              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                                <IconComponent className="text-lg" />
                              </div>
                              <span className="text-sm leading-relaxed">{course.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Bottom accent */}
                    <div className="relative z-10">
                      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />
                      <p className="text-slate-400 text-sm">
                        Join thousands of students learning tech skills
                      </p>
                    </div>
                  </div>

                  {/* Right Side - Form */}
                  <div className="flex flex-col bg-white relative">
                    {/* Close button */}
                    <button
                      onClick={handleClose}
                      className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors z-10 text-slate-400 hover:text-slate-600"
                    >
                      ✕
                    </button>

                    {/* Mobile Logo */}
                    <div className="md:hidden p-6 pb-0">
                      <Image
                        src="/logo.png"
                        alt="Nexcore Logo"
                        width={140}
                        height={46}
                      />
                    </div>

                    {/* Form Content */}
                    <div className="flex-1 overflow-y-auto p-6 md:p-12">
                      {/* Header */}
                      <div className="mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                          Register Now
                        </h3>
                        <p className="text-slate-600 hidden md:block">
                          Join thousands of students learning tech skills
                        </p>
                      </div>

                      {/* Progress Indicator */}
                      <div className="mb-8">
                        <div className="flex items-center justify-between max-w-xs mx-auto">
                          {[1, 2].map((step) => (
                            <div key={step} className="flex items-center">
                              <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                                  currentStep >= step
                                    ? "bg-slate-900 text-white"
                                    : "bg-slate-100 text-slate-400"
                                }`}
                              >
                                {step}
                              </div>
                              {step < 2 && (
                                <div
                                  className={`h-1 w-24 mx-2 transition-all ${
                                    currentStep > step ? "bg-slate-900" : "bg-slate-200"
                                  }`}
                                />
                              )}
                            </div>
                          ))}
                        </div>
                        <p className="text-center text-sm text-slate-500 mt-3">
                          Step {currentStep} of 2
                        </p>
                      </div>

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="space-y-6">
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
                                Student Name *
                              </label>
                              <input
                                type="text"
                                name="studentName"
                                value={formData.studentName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                                placeholder="Enter your full name"
                                required
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-2">
                                WhatsApp Number *
                              </label>
                              <div className="flex gap-2">
                                <div className="w-16 px-3 py-3 bg-slate-100 border border-slate-300 rounded-lg flex items-center justify-center font-medium text-slate-700">
                                  +91
                                </div>
                                <input
                                  type="tel"
                                  name="whatsappNumber"
                                  value={formData.whatsappNumber}
                                  onChange={handleMobileChange}
                                  className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                                  placeholder="9876543210"
                                  required
                                  maxLength="10"
                                  pattern="[0-9]{10}"
                                />
                              </div>
                              <p className="text-xs text-slate-500 mt-1">
                                Enter 10-digit mobile number (numbers only)
                              </p>
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-2">
                                Parent's Mobile Number *
                              </label>
                              <div className="flex gap-2">
                                <div className="w-16 px-3 py-3 bg-slate-100 border border-slate-300 rounded-lg flex items-center justify-center font-medium text-slate-700">
                                  +91
                                </div>
                                <input
                                  type="tel"
                                  name="parentsNumber"
                                  value={formData.parentsNumber}
                                  onChange={handleMobileChange}
                                  className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                                  placeholder="9876543210"
                                  required
                                  maxLength="10"
                                  pattern="[0-9]{10}"
                                />
                              </div>
                              <p className="text-xs text-slate-500 mt-1">
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
                                Qualification *
                              </label>
                              <select
                                name="qualification"
                                value={formData.qualification}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all bg-white"
                                required
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
                                Course Interested In *
                              </label>
                              <select
                                name="courseInterested"
                                value={formData.courseInterested}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all bg-white"
                                required
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
                            <div className="bg-slate-50 rounded-xl p-5 mt-6">
                              <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                                📋 Registration Summary
                              </h4>
                              <div className="space-y-2 text-sm text-slate-600">
                                <p><span className="font-medium">Name:</span> {formData.studentName}</p>
                                <p><span className="font-medium">WhatsApp:</span> +91 {formData.whatsappNumber}</p>
                                <p><span className="font-medium">Parent's Number:</span> +91 {formData.parentsNumber}</p>
                                <p><span className="font-medium">Qualification:</span> {formData.qualification}</p>
                                <p><span className="font-medium">Course:</span> {formData.courseInterested}</p>
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
                              className="flex-1 px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
                            >
                              ← Back
                            </button>
                          )}

                          {currentStep < 2 ? (
                            <button
                              type="button"
                              onClick={nextStep}
                              disabled={!validateStep1()}
                              className="flex-1 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium disabled:bg-slate-300 disabled:cursor-not-allowed"
                            >
                              Next →
                            </button>
                          ) : (
                            <button
                              type="submit"
                              className="flex-1 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
                            >
                              Submit Application ✓
                            </button>
                          )}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </>
  );
};

export default RegistrationFormPopup;