"use client";
import { motion } from "framer-motion";
import { IoCallSharp, IoMailSharp } from "react-icons/io5";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube, 
  FaWhatsapp, 
  FaArrowRight, 
  FaCheckCircle,
  FaEdit,
  FaPencilAlt,
  FaClipboardCheck,
  FaTrophy
} from "react-icons/fa";
import Image from "next/image";

const socialLinks = [
  { 
    icon: FaFacebookF, 
    url: "https://www.facebook.com/profile.php?id=61585525156166", 
    label: "Facebook" 
  },
  { 
    icon: FaInstagram, 
    url: "https://www.instagram.com/nexcoreinstitute?igsh=eDF4NHR3ZG50NWE0", 
    label: "Instagram" 
  },
  { 
    icon: FaLinkedinIn, 
    url: "https://www.linkedin.com/school/nexcore-institute-of-technology-nit/posts/?feedView=all", 
    label: "LinkedIn" 
  },
  { 
    icon: FaYoutube, 
    url: "https://www.youtube.com/@NexcoreInstitute", 
    label: "YouTube" 
  },
  { 
    icon: FaWhatsapp, 
    url: "https://wa.me/919892398976", 
    label: "WhatsApp" 
  },
];

const steps = [
  { 
    num: "01", 
    title: "Register", 
    desc: "Fill out the scholarship registration form to apply for the program.", 
    icon: FaEdit,
    color: "#0066cc"
  },
  { 
    num: "02", 
    title: "Test", 
    desc: "Appear for the scholarship test conducted by Nexcore Institute.", 
    icon: FaPencilAlt,
    color: "#7c3aed"
  },
  { 
    num: "03", 
    title: "Result", 
    desc: "Results will be declared after evaluation of your test performance.", 
    icon: FaClipboardCheck,
    color: "#16a34a"
  },
  { 
    num: "04", 
    title: "Announcement", 
    desc: "Final scholarship recipients are announced and awards are confirmed.", 
    icon: FaTrophy,
    color: "#ea580c"
  },
];

const ScholarshipsPage = () => {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#f8f9fa" }}>
        {/* ══════════ HERO ══════════ */}
        <section style={{ position: "relative", overflow: "hidden", paddingTop: "8rem", paddingBottom: "5rem", padding: "8rem 1rem 5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 10 }}>
            {/* Live badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}
            >
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
                background: "#e7f3ff",
                color: "#0066cc",
                borderRadius: "50px",
                fontSize: "0.875rem",
                fontWeight: "600",
                border: "1px solid #b3d9ff"
              }}>
                <span style={{
                  width: "0.5rem",
                  height: "0.5rem",
                  background: "#10b981",
                  borderRadius: "50%",
                  animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
                }} />
                SCHOLARSHIP OPENS 16 MARCH
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{
                fontSize: "clamp(3rem, 8vw, 5rem)",
                fontWeight: "900",
                textAlign: "center",
                marginBottom: "1.5rem",
                lineHeight: "1.1"
              }}
            >
              <span style={{ color: "#0066cc" }}>Scholarship</span>
              <span style={{ color: "#000" }}> Program 2026</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                fontSize: "clamp(1.125rem, 3vw, 1.5rem)",
                color: "#4a5568",
                textAlign: "center",
                maxWidth: "56rem",
                margin: "0 auto 2rem",
                lineHeight: "1.6"
              }}
            >
              We're awarding{" "}
              <span style={{ fontWeight: "700", color: "#0066cc" }}>₹25 Lakh</span>{" "}
              in merit-based scholarships. Registration opens{" "}
              <span style={{ fontWeight: "700", color: "#000" }}>16 March 2026</span>.{" "}
              Scholarships will be awarded to students who successfully pass our scholarship test.
            </motion.p>

            {/* Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "0.75rem",
                marginBottom: "2.5rem"
              }}
            >
              <span style={{
                padding: "0.5rem 1rem",
                background: "#e7f3ff",
                color: "#0066cc",
                borderRadius: "50px",
                fontSize: "0.875rem",
                fontWeight: "600",
                border: "1px solid #b3d9ff"
              }}>
                ✅ NAAC A+ Accredited
              </span>
              <span style={{
                padding: "0.5rem 1rem",
                background: "#e7f3ff",
                color: "#0066cc",
                borderRadius: "50px",
                fontSize: "0.875rem",
                fontWeight: "600",
                border: "1px solid #b3d9ff"
              }}>
                ✅ UGC Recognized
              </span>
              <span style={{
                padding: "0.5rem 1rem",
                background: "#e7f3ff",
                color: "#0066cc",
                borderRadius: "50px",
                fontSize: "0.875rem",
                fontWeight: "600",
                border: "1px solid #b3d9ff"
              }}>
                🏅 ₹25 Lakh Pool
              </span>
              <span style={{
                padding: "0.5rem 1rem",
                background: "#fff7ed",
                color: "#ea580c",
                borderRadius: "50px",
                fontSize: "0.875rem",
                fontWeight: "600",
                border: "1px solid #fed7aa"
              }}>
                🎓 Merit-Based
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "1rem"
              }}
            >
              <motion.a
                href="tel:+919892398976"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "1rem 2rem",
                  background: "#0066cc",
                  color: "#fff",
                  borderRadius: "8px",
                  fontWeight: "700",
                  fontSize: "1.125rem",
                  boxShadow: "0 4px 12px rgba(0, 102, 204, 0.3)",
                  textDecoration: "none",
                  transition: "all 0.3s"
                }}
              >
                <IoCallSharp />
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* ══════════ ₹25 LAKH CARD ══════════ */}
        <section style={{ padding: "4rem 1rem", background: "#fff" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "16px",
                background: "#fff",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)"
              }}
            >
              <div style={{
                padding: "clamp(2rem, 5vw, 3rem)"
              }}>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "2rem",
                  alignItems: "center"
                }}>
                  {/* Left side */}
                  <div>
                    <p style={{
                      fontSize: "0.875rem",
                      fontWeight: "700",
                      color: "#6b7280",
                      marginBottom: "0.5rem",
                      letterSpacing: "0.05em"
                    }}>
                      TOTAL SCHOLARSHIP POOL
                    </p>
                    <h2 style={{
                      fontSize: "clamp(3rem, 8vw, 4.5rem)",
                      fontWeight: "900",
                      color: "#0066cc",
                      marginBottom: "1rem"
                    }}>
                      ₹25 Lakh
                    </h2>
                    <p style={{
                      fontSize: "1.125rem",
                      color: "#4a5568"
                    }}>
                      Merit-based scholarships for students who pass the scholarship test
                    </p>
                  </div>

                  {/* Registration date card */}
                  <div style={{
                    background: "#fff7ed",
                    borderRadius: "12px",
                    padding: "1.5rem",
                    border: "2px solid #fed7aa"
                  }}>
                    <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>🗓️</div>
                    <p style={{
                      fontSize: "0.75rem",
                      fontWeight: "700",
                      color: "#9a3412",
                      marginBottom: "0.25rem",
                      letterSpacing: "0.05em"
                    }}>
                      REGISTRATION OPENS ON
                    </p>
                    <p style={{
                      fontSize: "1.875rem",
                      fontWeight: "900",
                      color: "#ea580c",
                      marginBottom: "0.75rem"
                    }}>
                      16 March 2026
                    </p>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#ea580c",
                      fontSize: "0.875rem",
                      fontWeight: "600"
                    }}>
                      <FaCheckCircle />
                      Mark your calendar — limited seats!
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1rem" }}>
          <div style={{
            height: "1px",
            background: "#e5e7eb"
          }} />
        </div>

        {/* ══════════ HOW TO APPLY ══════════ */}
        <section style={{ padding: "5rem 1rem", background: "#f8f9fa" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ textAlign: "center", marginBottom: "4rem" }}
            >
              <p style={{
                fontSize: "0.875rem",
                fontWeight: "700",
                color: "#6b7280",
                marginBottom: "0.5rem",
                letterSpacing: "0.05em"
              }}>
                PROCESS
              </p>
              <h2 style={{
                fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
                fontWeight: "900",
                color: "#000",
                marginBottom: "1rem"
              }}>
                How to Apply
              </h2>
              <p style={{
                fontSize: "1.25rem",
                color: "#4a5568",
                maxWidth: "42rem",
                margin: "0 auto"
              }}>
                A simple 4-step process to secure your scholarship. Only students who pass the test will receive scholarships.
              </p>
            </motion.div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.5rem"
            }}>
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -8 }}
                    style={{ position: "relative" }}
                  >
                    <div style={{
                      position: "relative",
                      background: "#fff",
                      borderRadius: "16px",
                      padding: "1.5rem",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                      border: "1px solid #e5e7eb",
                      height: "100%",
                      transition: "all 0.3s"
                    }}>
                      {/* Step number */}
                      <div style={{
                        position: "absolute",
                        top: "-1rem",
                        left: "-1rem",
                        width: "3rem",
                        height: "3rem",
                        background: s.color,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontWeight: "900",
                        fontSize: "1.125rem",
                        boxShadow: `0 4px 12px ${s.color}40`
                      }}>
                        {s.num}
                      </div>
                      
                      {/* Icon */}
                      <div style={{ 
                        fontSize: "3rem", 
                        marginBottom: "1rem", 
                        marginTop: "0.5rem",
                        color: s.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start"
                      }}>
                        <Icon style={{ fontSize: "2.5rem" }} />
                      </div>
                      
                      {/* Title */}
                      <h3 style={{
                        fontSize: "1.25rem",
                        fontWeight: "700",
                        color: "#000",
                        marginBottom: "0.5rem"
                      }}>
                        {s.title}
                      </h3>
                      
                      {/* Description */}
                      <p style={{
                        color: "#4a5568",
                        fontSize: "0.875rem",
                        lineHeight: "1.6"
                      }}>
                        {s.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════ CONTACT - COMPACT ══════════ */}
        <section style={{
          padding: "3rem 1rem",
          background: "#fff"
        }}>
          <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ textAlign: "center", marginBottom: "2rem" }}
            >
              <h2 style={{
                fontSize: "clamp(2rem, 5vw, 2.5rem)",
                fontWeight: "900",
                color: "#000",
                marginBottom: "0.5rem"
              }}>
                Have Questions?
              </h2>
              <p style={{
                fontSize: "1rem",
                color: "#4a5568"
              }}>
                Get in touch with our admissions team
              </p>
            </motion.div>

            {/* Contact Buttons - 2 columns */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1rem",
              marginBottom: "2rem"
            }}>
              <motion.a
                href="https://wa.me/919892398976"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 1.25rem",
                  background: "#f0fdf4",
                  color: "#16a34a",
                  borderRadius: "8px",
                  fontWeight: "700",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  transition: "all 0.3s",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                  border: "2px solid #86efac"
                }}
              >
                <FaWhatsapp style={{ fontSize: "1.25rem" }} />
                WhatsApp
              </motion.a>

              <motion.a
                href="tel:+919892398976"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 1.25rem",
                  background: "#eff6ff",
                  color: "#1d4ed8",
                  borderRadius: "8px",
                  fontWeight: "700",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  transition: "all 0.3s",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                  border: "2px solid #93c5fd"
                }}
              >
                <IoCallSharp style={{ fontSize: "1.25rem" }} />
                Call Us
              </motion.a>
            </div>

            {/* Social - Compact */}
            <div style={{ textAlign: "center" }}>
              <p style={{
                fontSize: "0.75rem",
                fontWeight: "700",
                color: "#6b7280",
                marginBottom: "0.75rem",
                letterSpacing: "0.05em"
              }}>
                FOLLOW US
              </p>
              <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.5rem"
              }}>
                {socialLinks.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.a
                      key={i}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        background: "#fff",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#0066cc",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                        transition: "all 0.3s",
                        border: "1px solid #e5e7eb"
                      }}
                      aria-label={s.label}
                    >
                      <Icon style={{ fontSize: "1rem" }} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ BOTTOM NOTE - COMPACT ══════════ */}
        <section style={{
          padding: "2rem 1rem",
          background: "#f8f9fa",
          borderTop: "1px solid #e5e7eb"
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              maxWidth: "56rem",
              margin: "0 auto",
              textAlign: "center",
              color: "#4a5568"
            }}
          >
            <p style={{
              fontSize: "0.875rem",
              lineHeight: "1.6"
            }}>
              <span style={{ fontWeight: "700", color: "#000" }}>NAAC A+ Accredited</span> • <span style={{ fontWeight: "700", color: "#000" }}>UGC Recognized</span> • Since 2011
            </p>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default ScholarshipsPage;