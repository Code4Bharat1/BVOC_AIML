"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  const whatsappNumber = "919594402822";
  const message = "Hello, I want to know more.";

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50
        w-14
        h-14
        rounded-full
        bg-green-500
        flex
        items-center
        justify-center
        shadow-lg
      "
    >
      <FaWhatsapp className="text-white text-3xl" />
    </button>
  );
};

export default FloatingWhatsApp;
