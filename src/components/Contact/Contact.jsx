"use client";
import React, { useRef, useState } from "react";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import toast from "react-hot-toast";

const ContactPage = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const whatsappNumber = "919594402822";
      const message = `New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Subject: ${formData.subject}

Message:
${formData.message}`;

      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`;

      window.open(whatsappURL, "_blank");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      toast.success("Message sent successfully!");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 9594402822",
      sub: "Mon–Sat 8:00 AM – 5:30 PM",
      href: "tel:+919594402822",
      color: "#007BFF",
    },
    {
      icon: Mail,
      title: "Email",
      content: "admin@nexcoreinstitute.org",
      sub: "We'll respond within 24 hours",
      href: "mailto:admin@nexcoreinstitute.org",
      color: "#FF7F00",
    },
    {
      icon: MapPin,
      title: "Institute Location",
      content: "Mumbai, Maharashtra",
      sub: "India – 400001",
      href: "https://maps.app.goo.gl/VBg1XznP8dy9dzGd6",
      color: "#007BFF",
    },
    {
      icon: Globe,
      title: "Website",
      content: "www.nexcoreinstitute.org",
      sub: "Visit our main website",
      href: "https://www.nexcoreinstitute.org",
      color: "#FF7F00",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden p-5">
      <section ref={sectionRef} className="relative py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 mt-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#007BFF' }}>
              Let's Talk
            </h1>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              Ready to transform your vision into reality? Let's connect.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6 order-1 lg:order-1">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white"
                >
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-lg text-white"
                    style={{ backgroundColor: info.color }}
                  >
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">
                      {info.title}
                    </h3>
                    <p className="font-bold" style={{ color: info.color }}>
                      {info.content}
                    </p>
                    <p className="text-sm text-gray-500">{info.sub}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2 p-8 rounded-xl border border-gray-200 shadow-md bg-white order-2 lg:order-2">
              <h2 className="text-3xl font-bold mb-8" style={{ color: '#007BFF' }}>
                Connect to a Counselor
              </h2>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-blue-500 transition-colors duration-200"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-blue-500 transition-colors duration-200"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-blue-500 transition-colors duration-200"
                  />
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-blue-500 transition-colors duration-200"
                  >
                    <option value="">Select Subject</option>
                    <option value="AI & ML">AI & ML</option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="AI & Robotics">AI & Robotics</option>
                    <option value="Graphic Animation , VFX & Multimedia">Graphic Animation</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-blue-500 transition-colors duration-200 resize-none"
                />

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full py-4 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 disabled:opacity-50"
                  style={{ backgroundColor: '#007BFF' }}
                >
                  {isSubmitting ? "Sending..." : "Send via WhatsApp"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;