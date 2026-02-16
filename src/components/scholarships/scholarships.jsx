"use client";
import { motion } from "framer-motion";
import { 
  IoSchoolSharp, 
  IoMailSharp,
  IoCallSharp
} from "react-icons/io5";
import { HiClock } from "react-icons/hi";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube, 
  FaWhatsapp 
} from "react-icons/fa";

const ScholarshipsPage = () => {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-block mb-8"
          >
            <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <IoSchoolSharp className="text-white text-5xl" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Scholarships
          </motion.h1>

          {/* Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-orange-500 text-white rounded-full font-medium text-sm mb-8"
          >
            <HiClock className="text-xl" />
            Coming Soon
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            We're working on exciting scholarship opportunities to support deserving students. Stay tuned for updates!
          </motion.p>
        </div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <div className="text-center p-6 border border-gray-200 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">Merit-Based</div>
            <p className="text-gray-600 text-sm">For academic excellence</p>
          </div>
          
          <div className="text-center p-6 border border-gray-200 rounded-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">Need-Based</div>
            <p className="text-gray-600 text-sm">Financial assistance</p>
          </div>
          
          <div className="text-center p-6 border border-gray-200 rounded-lg">
            <div className="text-3xl font-bold text-pink-600 mb-2">Special</div>
            <p className="text-gray-600 text-sm">Sports & cultural achievers</p>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-gray-50 rounded-xl p-8 md:p-10 mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
            Get Notified
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
            Contact us to learn more about upcoming scholarship opportunities
          </p>

          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919594402822?text=Hi%2C%20I'm%20interested%20in%20scholarship%20opportunities."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 bg-white border-2 border-green-500 text-green-700 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300 font-medium"
            >
              <FaWhatsapp className="text-xl" />
              <span>WhatsApp</span>
            </a>

            {/* Call */}
            <a
              href="tel:+919594402822"
              className="flex items-center justify-center gap-3 p-4 bg-white border-2 border-blue-500 text-blue-700 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 font-medium"
            >
              <IoCallSharp className="text-xl" />
              <span>Call Us</span>
            </a>

            {/* Email */}
            <a
              href="mailto:admissions@nexcore.edu"
              className="flex items-center justify-center gap-3 p-4 bg-white border-2 border-purple-500 text-purple-700 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 font-medium"
            >
              <IoMailSharp className="text-xl" />
              <span>Email</span>
            </a>
          </div>

          {/* Social Media */}
          <div className="border-t border-gray-200 pt-8">
            <p className="text-center text-gray-700 font-medium mb-4">
              Follow us for instant updates
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 flex items-center justify-center bg-gray-800 text-white rounded-full ${social.color} transition-all duration-300`}
                  aria-label={social.label}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center bg-blue-50 rounded-lg p-6"
        >
          <p className="text-gray-700 text-base leading-relaxed">
            Our scholarship program is in the final stages of development. We're committed to creating opportunities that make a real difference. Thank you for your patience!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ScholarshipsPage;