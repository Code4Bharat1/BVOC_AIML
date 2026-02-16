"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { IoSchoolSharp, IoClose } from "react-icons/io5";
import { HiClock } from "react-icons/hi";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube, 
  FaWhatsapp 
} from "react-icons/fa";
import Link from "next/link";

const ScholarshipPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const pathname = usePathname(); // Detect route changes

  const socialLinks = [
    { 
      icon: <FaFacebookF />, 
      url: "https://www.facebook.com/profile.php?id=61585525156166",
      label: "Facebook",
      color: "hover:bg-blue-600"
    },
    { 
      icon: <FaInstagram />, 
      url: "https://www.instagram.com/nexcoreinstitute?igsh=eDF4NHR3ZG50NWE0",
      label: "Instagram",
      color: "hover:bg-pink-600"
    },
    { 
      icon: <FaLinkedinIn />, 
      url: "https://www.linkedin.com/school/nexcore-institute-of-technology-nit/posts/?feedView=all",
      label: "LinkedIn",
      color: "hover:bg-blue-700"
    },
    { 
      icon: <FaYoutube />, 
      url: "https://www.youtube.com/@NexcoreInstitute",
      label: "YouTube",
      color: "hover:bg-red-600"
    },
    { 
      icon: <FaWhatsapp />, 
      url: "https://wa.me/919892398976",
      label: "WhatsApp",
      color: "hover:bg-green-600"
    },
  ];

  useEffect(() => {
    // Close popup first if it's open
    setShowPopup(false);
    
    // Show popup after 2 seconds on every page change
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname]); // Re-run when route changes

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleLearnMore = () => {
    handleClose();
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
          />

          {/* Popup Modal */}
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
                aria-label="Close popup"
              >
                <IoClose className="text-gray-600 text-xl" />
              </button>

              {/* Header with Icon */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-center">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="inline-block mb-4"
                >
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <IoSchoolSharp className="text-blue-600 text-4xl" />
                  </div>
                </motion.div>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Scholarships
                </h2>
                
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500 text-white rounded-full font-medium text-sm">
                  <HiClock className="text-lg" />
                  Coming Soon
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gray-700 text-center mb-6 leading-relaxed">
                  We're preparing exciting scholarship opportunities to support deserving students. Stay connected for updates!
                </p>

                {/* Quick Info */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="font-bold text-blue-600 text-sm">Merit</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="font-bold text-purple-600 text-sm">Need</div>
                  </div>
                  <div className="text-center p-3 bg-pink-50 rounded-lg">
                    <div className="font-bold text-pink-600 text-sm">Special</div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mb-6">
                  <p className="text-center text-gray-600 text-sm mb-3 font-medium">
                    Follow us for instant updates
                  </p>
                  <div className="flex justify-center gap-2">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleClose}
                        className={`w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full ${social.color} transition-all duration-300`}
                        aria-label={social.label}
                      >
                        <span className="text-sm">{social.icon}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <Link
                    href="/scholarships"
                    onClick={handleLearnMore}
                    className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
                  >
                    Learn More
                  </Link>
                  <a
                    href="https://wa.me/919594402822?text=Hi%2C%20I'm%20interested%20in%20scholarship%20opportunities."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleClose}
                    className="flex-1 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium text-center flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp />
                    Contact
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ScholarshipPopup;