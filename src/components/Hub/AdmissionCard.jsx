"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoMdPlay } from "react-icons/io";
import axios from "axios";
import EnrollNow from "./EnrollNow";

/* -------------------- BOOKING FORM -------------------- */
const BookingForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    phonenumber: "",
    appointmentDate: "",
    appointmentTime: "",
    fullname: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [existingAppointments, setExistingAppointments] = useState([]);
  const [isLoadingAppointments, setIsLoadingAppointments] = useState(false);

  const timeSlots = [
    "11:00 AM - 12:00 PM",
    "12:00 PM - 1:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
  ];

  useEffect(() => {
    fetchExistingAppointments();
  }, []);

  const fetchExistingAppointments = async () => {
    setIsLoadingAppointments(true);
    try {
      const response = await axios.get("http://localhost:3787/api/appointments");
      setExistingAppointments(response.data.data || []);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    } finally {
      setIsLoadingAppointments(false);
    }
  };

  const isTimeSlotBooked = (slot) => {
    if (!formData.appointmentDate) return false;
    return existingAppointments.some(
      (appointment) => appointment.appointmentTime === slot
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await axios.post("http://localhost:3787/api/appointments", {
        fullname: formData.fullname,
        email: formData.email,
        phonenumber: formData.phonenumber,
        appointmentDate: formData.appointmentDate,
        appointmentTime: formData.appointmentTime,
      });
      setBookingSuccess(true);
      fetchExistingAppointments();
    } catch (error) {
      console.error("Error booking slot:", error);
      setErrorMessage(
        error.response?.data?.message ||
          "Failed to book slot. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (bookingSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
        <div className="bg-gradient-to-b from-[#1a1f4d] via-[#2d1b4e] to-[#4a1f6b] text-white rounded-2xl p-8 max-w-md w-full text-center shadow-[0_0_25px_rgba(172,108,255,0.5)]">
          <div className="text-[#00d4ff] mb-4">
            <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2 text-[#00d4ff]">Booking Confirmed!</h3>
          <p className="text-white/90 mb-4">
            You have successfully booked a slot on {formData.appointmentDate} at{" "}
            {formData.appointmentTime}.
          </p>
          <p className="text-white/80 mb-6">
            We’ve sent details to <span className="text-[#AC6CFF]">{formData.email}</span>.
          </p>
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-[#ff6b35] via-[#AC6CFF] to-[#00d4ff] text-white font-semibold rounded-full px-6 py-2 hover:opacity-90 transition"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-b from-[#1a1f4d] via-[#2d1b4e] to-[#4a1f6b] text-white rounded-2xl p-6 max-w-md w-full shadow-[0_0_30px_rgba(172,108,255,0.5)]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-[#00d4ff]">
            Book Your Admission Slot
          </h3>
          <button onClick={onClose} className="text-[#ff6b35] hover:text-[#AC6CFF]">
            ✕
          </button>
        </div>

        {errorMessage && (
          <div className="mb-4 p-3 bg-[#ff6b35]/20 text-[#ff6b35] rounded-md">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {["fullname", "email", "phonenumber"].map((field, i) => (
            <div key={i} className="mb-4">
              <label className="block text-sm font-medium mb-1 capitalize text-[#00d4ff]">
                {field === "phonenumber" ? "Phone Number" : field}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-transparent border border-[#AC6CFF]/40 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00d4ff]"
              />
            </div>
          ))}

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-[#00d4ff]">
              Select Date
            </label>
            <input
              type="date"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              required
              min={new Date().toISOString().split("T")[0]}
              className="w-full px-3 py-2 bg-transparent border border-[#AC6CFF]/40 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00d4ff]"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1 text-[#00d4ff]">
              Select Time Slot
            </label>
            <select
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-transparent border border-[#AC6CFF]/40 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00d4ff]"
            >
              <option value="">Choose a time slot</option>
              {timeSlots.map((slot) => (
                <option
                  key={slot}
                  value={slot}
                  disabled={isTimeSlotBooked(slot)}
                  className="bg-[#1a1f4d]"
                >
                  {slot} {isTimeSlotBooked(slot) ? "(Booked)" : ""}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#ff6b35] via-[#AC6CFF] to-[#00d4ff] text-white font-semibold rounded-full py-2 px-4 hover:opacity-90 transition"
          >
            {isSubmitting ? "Processing..." : "Book Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

/* -------------------- ADMISSION CARD -------------------- */
const AdmissionCard = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <div className="flex w-full justify-center items-center -mt-10 lg:py-10 mb-10 lg:mb-0 px-4">
      <div className="relative lg:py-16 border border-[#AC6CFF]/30 bg-gradient-to-b from-[#1a1f4d] via-[#2d1b4e] to-[#4a1f6b] text-white text-center rounded-2xl p-8 lg:p-10 w-[90%] shadow-[0_0_40px_rgba(172,108,255,0.3)]">
        {/* Decorative orbs */}
        <div className="absolute top-10 left-10 w-5 h-5 bg-[#00d4ff] rounded-full blur-md animate-pulse" />
        <div className="absolute bottom-10 right-10 w-7 h-7 bg-[#ff6b35] rounded-full blur-lg animate-ping" />

        {/* Decorative Images */}
        <Image
          src="/elements/EllipseElemens_Home.svg"
          alt="Ellipse"
          width={80}
          height={80}
          className="absolute top-48 left-0 w-10 opacity-60"
        />
        <Image
          src="/elements/RocketElement_Home.svg"
          alt="Rocket"
          width={60}
          height={60}
          className="hidden lg:block absolute top-20 right-10 opacity-80"
        />
        <Image
          src="/elements/AdmissionRobot_Home.svg"
          alt="Robot"
          width={140}
          height={140}
          className="absolute bottom-0 right-0 w-44 opacity-90"
        />

        {/* Text */}
        <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-[#00d4ff]">
          Admissions Now Open!
        </h2>
        <p className="text-base lg:text-2xl font-light mb-8 text-white/90">
          Step into the future with a{" "}
          <span className="text-[#AC6CFF] font-medium">NAAC A++</span> Accredited
          program and gain the edge with a{" "}
          <span className="text-[#ff6b35] font-medium">UGC-approved B.Voc</span>{" "}
          course in AI & ML — crafted to prepare you for the real world.
        </p>
        <h3 className="text-xl lg:text-3xl font-semibold mb-4 text-[#AC6CFF]">
          A Unique Blend of Industry & Academia
        </h3>
        <p className="text-white/80 mb-10 text-base lg:text-xl">
          Join a course that goes beyond theory — experience practical, hands-on
          learning in collaboration with top industry leaders.
        </p>

        <button
          onClick={() => setShowBookingForm(true)}
          className="bg-gradient-to-r from-[#ff6b35] via-[#AC6CFF] to-[#00d4ff] text-white font-bold px-8 py-3 rounded-full shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:opacity-90 transition"
        >
          Book Admission Slot
        </button>
      </div>
      {showBookingForm && <BookingForm onClose={() => setShowBookingForm(false)} />}
    </div>
  );
};

export default AdmissionCard;
