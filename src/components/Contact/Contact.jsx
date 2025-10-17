"use client";
import React, { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

// Custom Social Media Icons with Brand Colors
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { root: null, rootMargin: "-100px", threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("कृपया सभी आवश्यक फील्ड भरें (Please fill all required fields)");
      return;
    }
    setIsSubmitting(true);
    try {
      const whatsappNumber = "919892398976"; // Replace with your WhatsApp number
      const message = `🔔 *New Contact Form Submission*
👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone || "Not provided"}
📝 *Subject:* ${formData.subject}
💬 *Message:*
${formData.message}
---
Sent from Nexcore Alliance Website`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      if (typeof window !== "undefined") {
        const newWindow = window.open(whatsappURL, "_blank");
        if (newWindow) {
          setTimeout(() => {
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
            alert("Message sent successfully! WhatsApp should open now.");
          }, 1000);
        } else {
          alert("Please allow pop-ups for this site to send WhatsApp messages.");
        }
      }
    } catch (error) {
      alert("कुछ गलत हो गया। कृपया फिर से कोशिश करें। (Something went wrong. Please try again.)");
    }
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: Phone, title: "Phone", content: "+91 9892398976", subContent: "Mon-Fri 9:00 AM - 6:00 PM", color: "from-[#00d4ff] to-[#AC6CFF]", href: "tel:+919594430295" },
    { icon: Mail, title: "Email", content: "bvoc@nexcorealliance.com", subContent: "We'll respond within 24 hours", color: "from-[#AC6CFF] to-[#ff6b35]", href: "mailto:hello@nexcorealliance.com" },
    { icon: MapPin, title: "Office", content: "Mumbai, Maharashtra", subContent: "India - 400001", color: "from-[#ff6b35] to-[#00d4ff]", href: "https://maps.app.goo.gl/VBg1XznP8dy9dzGd6" },
    { icon: Globe, title: "Website", content: "www.bvoc@nexcorealliance.com", subContent: "Visit our main website", color: "from-[#00d4ff] to-[#AC6CFF]", href: "https://www.nexcorealliance.com" },
  ];

  const socialLinks = [
    { 
      icon: LinkedInIcon, 
      href: "https://www.linkedin.com/company/105730702/admin/dashboard", 
      color: "text-white/70 hover:text-[#0077b5]",
      glowColor: "hover:drop-shadow-[0_0_15px_rgba(0,119,181,0.8)]"
    },
    { 
      icon: FacebookIcon, 
      href: "https://www.facebook.com/profile.php?id=61570113656994", 
      color: "text-white/70 hover:text-[#1877f2]",
      glowColor: "hover:drop-shadow-[0_0_15px_rgba(24,119,242,0.8)]"
    },
    { 
      icon: InstagramIcon, 
      href: "https://www.instagram.com/nexcorealliancellp/", 
      color: "text-white/70 hover:text-[#E4405F]",
      glowColor: "hover:drop-shadow-[0_0_15px_rgba(228,64,95,0.8)]"
    },
    { 
      icon: YouTubeIcon, 
      href: "https://www.youtube.com/channel/UCYqpIltw48XxkMRLC-HCgag", 
      color: "text-white/70 hover:text-[#FF0000]",
      glowColor: "hover:drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1f4d] via-[#2d1b4e] to-[#4a1f6b] select-none relative overflow-hidden">
      {/* Animated Background Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#00d4ff] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-[#ff6b35] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#AC6CFF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      <section ref={sectionRef} className="relative py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 mt-10">
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-4 bg-gradient-to-r from-[#00d4ff]/20 via-[#AC6CFF]/20 to-[#ff6b35]/20 backdrop-blur-lg rounded-full border border-[#00d4ff]/30 text-white shadow-lg shadow-[#00d4ff]/20">
              ✨ Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#AC6CFF] to-[#ff6b35] drop-shadow-2xl animate-pulse">
              Let's Talk
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your vision into reality? Let's discuss how our innovative solutions can drive your success forward.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex items-center space-x-4 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl hover:shadow-[#00d4ff]/50 hover:scale-105 transition-all duration-300 overflow-hidden`}
                >
                  {/* Animated Border Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl" style={{background: `linear-gradient(to right, #00d4ff, #AC6CFF, #ff6b35)`}} />
                  
                  <div className={`relative z-10 w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r ${info.color} text-white shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-bold text-white text-lg">{info.title}</h3>
                    <p className="text-[#00d4ff] font-semibold">{info.content}</p>
                    <p className="text-sm text-gray-300">{info.subContent}</p>
                  </div>
                </a>
              ))}
              
              {/* Social Links with Brand Glows */}
              <div className="flex gap-4 pt-4 justify-center lg:justify-start">
                {socialLinks.map(({ icon: Icon, href, color, glowColor }, index) => (
                  <a 
                    key={index} 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`transition-all duration-300 hover:scale-125 ${color} ${glowColor}`}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 overflow-hidden">
                {/* Decorative Corner Glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#00d4ff] rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#ff6b35] rounded-full filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2" />
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#AC6CFF] to-[#ff6b35] mb-8">
                    Send us a Message 💬
                  </h2>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Full Name *"
                        className="w-full px-5 py-4 border-2 border-white/20 rounded-xl focus:ring-2 focus:ring-[#00d4ff] focus:border-[#00d4ff] bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/10"
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address *"
                        className="w-full px-5 py-4 border-2 border-white/20 rounded-xl focus:ring-2 focus:ring-[#AC6CFF] focus:border-[#AC6CFF] bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/10"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        className="w-full px-5 py-4 border-2 border-white/20 rounded-xl focus:ring-2 focus:ring-[#ff6b35] focus:border-[#ff6b35] bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/10"
                      />
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 border-2 border-white/20 rounded-xl focus:ring-2 focus:ring-[#00d4ff] focus:border-[#00d4ff] bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/10"
                      >
                        <option value="" className="bg-[#2d1b4e] text-white">Select a subject *</option>
                        <option value="general" className="bg-[#2d1b4e] text-white">General Inquiry</option>
                        <option value="partnership" className="bg-[#2d1b4e] text-white">Partnership</option>
                        <option value="careers" className="bg-[#2d1b4e] text-white">Careers</option>
                        <option value="support" className="bg-[#2d1b4e] text-white">Technical Support</option>
                        <option value="other" className="bg-[#2d1b4e] text-white">Other</option>
                      </select>
                    </div>
                    <textarea
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message *"
                      className="w-full px-5 py-4 border-2 border-white/20 rounded-xl focus:ring-2 focus:ring-[#AC6CFF] focus:border-[#AC6CFF] bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/10 resize-none"
                    />
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="group w-full bg-gradient-to-r from-[#ff6b35] via-[#AC6CFF] to-[#00d4ff] text-white font-bold py-5 rounded-xl hover:shadow-2xl hover:shadow-[#00d4ff]/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-lg flex items-center justify-center gap-3"
                    >
                      <span className="group-hover:drop-shadow-[0_0_10px_rgba(37,211,102,0.8)]">
                        <WhatsAppIcon />
                      </span>
                      {isSubmitting ? "Sending to WhatsApp..." : "Send via WhatsApp"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;