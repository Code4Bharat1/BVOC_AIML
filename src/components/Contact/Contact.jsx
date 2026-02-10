"use client";
import React, { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import toast from "react-hot-toast";

/* WhatsApp Icon */
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487" />
  </svg>
);

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
    <div className="min-h-screen bg-white relative overflow-hidden p-5">
      <section ref={sectionRef} className="relative py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 mt-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-blue-500 ">
              Let's Talk
            </h1>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              Ready to transform your vision into reality? Let’s connect.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 rounded-2xl border shadow-lg bg-white"
                  style={{ borderColor: "rgba(0,123,255,0.2)" }}
                >
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-xl text-white shadow-md"
                    style={{
                      background: `linear-gradient(135deg, ${info.color}, ${info.color}dd)`,
                    }}
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
            <div className="lg:col-span-2 p-8 rounded-3xl border shadow-xl bg-white">
              <h2 className="text-3xl font-bold text-blue-500 mb-8">
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
                    className="input"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="input"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="input"
                  />
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="input"
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
                  className="input resize-none"
                />

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 py-5 text-white font-bold rounded-xl shadow-lg disabled:opacity-50 bg-blue-500"
                 
                >
                  {/* <WhatsAppIcon className="w-20 h-10"/> */}
                  {isSubmitting ? "Sending..." : "Send via WhatsApp"}
                </button>
              </div>
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
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
