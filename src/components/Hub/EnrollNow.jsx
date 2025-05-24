import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

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
      const response = await axios.get(
        "http://localhost:3787/api/appointments"
      );
      setExistingAppointments(response.data.data || []);
      console.log("Existing appointments:", response.data.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    } finally {
      setIsLoadingAppointments(false);
    }
  };

  const isTimeSlotBooked = (slot) => {
    if (!formData.appointmentDate) return false;
    return existingAppointments.some(
      (appointment) =>
        appointment.appointmentDate === formData.appointmentDate &&
        appointment.appointmentTime === slot
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await axios.post(
        "http://localhost:3787/api/appointments",
        {
          fullname: formData.fullname,
          email: formData.email,
          phonenumber: formData.phonenumber,
          appointmentDate: formData.appointmentDate,
          appointmentTime: formData.appointmentTime,
        }
      );

      console.log("Appointment response:", response.data);
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
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
          <div className="text-green-500 mb-4">
            <svg
              className="w-16 h-16 mx-auto"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Booking Confirmed!
          </h3>
          <p className="text-gray-600 mb-4">
            You have successfully booked a slot on {formData.appointmentDate} at{" "}
            {formData.appointmentTime}.
          </p>
          <p className="text-gray-600 mb-6">
            We have sent the details to {formData.email}.
          </p>
          <button
            onClick={onClose}
            className="bg-purple-600 text-white font-medium rounded-full px-6 py-2 hover:bg-purple-700"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full text-left">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">
            Book Your Admission Slot
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {errorMessage && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
              className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your full name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your phone number"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Select Date
            </label>
            <input
              type="date"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              required
              min={new Date().toISOString().split("T")[0]}
              className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Select Time Slot
            </label>
            {isLoadingAppointments ? (
              <div className="text-center p-2">
                <svg
                  className="animate-spin h-5 w-5 text-purple-600 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <p className="text-sm text-gray-500 mt-1">
                  Loading available slots...
                </p>
              </div>
            ) : (
              <select
                name="appointmentTime"
                value={formData.appointmentTime}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Choose a time slot</option>
                {timeSlots.map((slot) => (
                  <option
                    key={slot}
                    value={slot}
                    disabled={isTimeSlotBooked(slot)}
                  >
                    {slot} {isTimeSlotBooked(slot) ? "(Booked)" : ""}
                  </option>
                ))}
              </select>
            )}
            {formData.appointmentDate && !isLoadingAppointments && (
              <p className="text-xs text-gray-500 mt-1">
                Slots marked as "(Booked)" are already reserved.
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-purple-600 text-white font-medium rounded-full py-2 px-4 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 flex items-center justify-center"
          >
            {isSubmitting ? (
              <span className="inline-flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </span>
            ) : (
              "Book Now"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default function EnrollNow() {
  const [showBookingForm, setShowBookingForm] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowBookingForm(true)}
        className="bg-[#EADAFF] text-[#AC6CFF] font-semibold mb-24 lg:mb-4 py-2.5 lg:py-3 px-3 lg:px-10 rounded-full transition-transform hover:scale-105 flex items-center space-x-2 mx-auto"
      >
        <span>Enroll Now</span>
      </button>

      {showBookingForm && (
        <BookingForm onClose={() => setShowBookingForm(false)} />
      )}
    </>
  );
}
