import React from "react";

export default function EnrollNow() {
  return (
    <div className="flex justify-center items-center">
      <a
        href="https://wa.me/919892398976?text=Hi%2C%20I'm%20interested%20in%20enrolling%20in%20your%20course!"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] text-white font-semibold mb-24 lg:mb-4 py-2.5 lg:py-3 px-3 lg:px-10 rounded-full transition-transform hover:scale-105 space-x-2 mx-auto w-44 shadow-lg text-center"
      >
        Enroll Now
      </a>
    </div>
  );
}