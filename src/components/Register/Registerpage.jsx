"use client";
import React, { useState } from "react";
import { GraduationCap, User, MapPin, Phone, BookOpen, Award } from "lucide-react";
import toast from "react-hot-toast";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    address: "",
    whatsappNumber: "",
    parentsMobile: "",
    qualification: "",
    course: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (
      !formData.studentName ||
      !formData.address ||
      !formData.whatsappNumber ||
      !formData.parentsMobile ||
      !formData.qualification ||
      !formData.course
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const instituteNumber = "919594402822";
      const message = `New Student Registration - Nexcore Institute of Technology

Student Name: ${formData.studentName}
Address: ${formData.address}
WhatsApp Number: ${formData.whatsappNumber}
Parents Mobile: ${formData.parentsMobile}
Qualification: ${formData.qualification}
Course Interested: ${formData.course}

Please process this registration.`;

      const whatsappURL = `https://wa.me/${instituteNumber}?text=${encodeURIComponent(
        message
      )}`;

      window.open(whatsappURL, "_blank");

      setFormData({
        studentName: "",
        address: "",
        whatsappNumber: "",
        parentsMobile: "",
        qualification: "",
        course: "",
      });

      toast.success("Registration submitted successfully!");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const degreePrograms = [
    {
      icon: "🤖",
      title: "Artificial Intelligence and Machine Learning",
      value: "AI & ML",
      color: "#007BFF",
    },
    {
      icon: "🦾",
      title: "Artificial Intelligence and Robotics",
      value: "AI & Robotics",
      color: "#FF7F00",
    },
    {
      icon: "🔒",
      title: "Cyber Security",
      value: "Cyber Security",
      color: "#007BFF",
    },
    {
      icon: "🎨",
      title: "Graphics, Animation, VFX and Multimedia",
      value: "Graphics, Animation, VFX & Multimedia",
      color: "#FF7F00",
    },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden p-5">
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 mt-10">
            <div className="flex items-center justify-center gap-4 mb-6">
              <GraduationCap className="w-16 h-16 text-blue-500" />
              <div>
                <h1 className="text-5xl md:text-7xl font-bold text-blue-500">
                  Nexcore Institute
                </h1>
                <p className="text-xl text-gray-600 mt-2">of Technology</p>
              </div>
            </div>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              Join our 3-year degree programs and shape your future in technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Degree Programs Info */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl border shadow-lg bg-gradient-to-br from-blue-50 to-orange-50">
                <h3 className="text-2xl font-bold text-blue-500 mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6" />
                  3-Year Degree Programs
                </h3>
                <p className="text-gray-600 mb-6">
                  Choose from our industry-leading programs
                </p>
              </div>

              {degreePrograms.map((program, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-2xl border shadow-lg bg-white"
                  style={{ borderColor: "rgba(0,123,255,0.2)" }}
                >
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-xl text-3xl shadow-md"
                    style={{
                      background: `linear-gradient(135deg, ${program.color}, ${program.color}dd)`,
                    }}
                  >
                    {program.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">
                      {program.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      3 Years Duration
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Registration Form */}
            <div className="lg:col-span-2 p-8 rounded-3xl border shadow-xl bg-white">
              <h2 className="text-3xl font-bold text-blue-500 mb-2">
                Student Registration Form
              </h2>
              <p className="text-gray-600 mb-8">
                Fill in your details to register for our programs
              </p>

              <div className="space-y-6">
                {/* Student Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Student Name *
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="input"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Address *
                  </label>
                  <textarea
                    name="address"
                    rows="3"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter your complete address"
                    className="input resize-none"
                  />
                </div>

                {/* Contact Numbers */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXXXXXXX"
                      className="input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Parents Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="parentsMobile"
                      value={formData.parentsMobile}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXXXXXXX"
                      className="input"
                    />
                  </div>
                </div>

                {/* Qualification */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <BookOpen className="w-4 h-4 inline mr-2" />
                    Qualification *
                  </label>
                  <select
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    className="input"
                  >
                    <option value="">Select your qualification</option>
                    <option value="10th Pass">10th Pass</option>
                    <option value="12th Pass">12th Pass</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Graduate">Graduate</option>
                    <option value="Post Graduate">Post Graduate</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Course Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Award className="w-4 h-4 inline mr-2" />
                    Course Interested *
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="input"
                  >
                    <option value="">Select a course</option>
                    {degreePrograms.map((program, index) => (
                      <option key={index} value={program.value}>
                        {program.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 py-5 text-white font-bold text-lg rounded-xl shadow-lg disabled:opacity-50 bg-blue-500 hover:bg-blue-600 transition-colors"
                >
                  <GraduationCap className="w-6 h-6" />
                  {isSubmitting ? "Submitting..." : "Submit Registration"}
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  By submitting, you agree to our terms and conditions
                </p>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 rounded-full">
              <Phone className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700">
                Contact: <strong className="text-blue-500">+91 9594402822</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 1rem 1.25rem;
          border: 2px solid rgba(0, 123, 255, 0.2);
          border-radius: 0.75rem;
          font-family: Inter, system-ui, sans-serif;
          outline: none;
          background-color: rgba(0, 123, 255, 0.02);
          transition: all 0.3s ease;
        }
        .input:focus {
          border-color: rgba(0, 123, 255, 0.5);
          background-color: white;
          box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
        }
      `}</style>
    </div>
  );
};

export default RegistrationPage;