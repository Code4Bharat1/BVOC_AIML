"use client";
import { MapPin, Phone, Mail, Heart } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/profile.php?id=61585525156166",
      label: "Facebook",
      bgColor: "#1877F2"
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/nexcoreinstitute?igsh=eDF4NHR3ZG50NWE0",
      label: "Instagram",
      bgColor: "#E4405F"
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/company/nexcore-institute-of-technology/?viewAsMember=true",
      label: "LinkedIn",
      bgColor: "#0A66C2"
    },
    {
      icon: <FaYoutube />,
      url: "https://www.youtube.com/@NexcoreInstitute",
      label: "YouTube",
      bgColor: "#FF0000"
    },
    {
      icon: <FaWhatsapp />,
      url: "https://wa.me/919892398976",
      label: "WhatsApp",
      bgColor: "#25D366"
    }
  ];
  
  return (
    <footer className="relative bg-white text-slate-900 border-t border-slate-200">
      {/* Simple CSS - NO LAG */}
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }

        .footer-link {
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: #007BFF;
        }

        .social-icon {
          transition: transform 0.2s ease;
        }

        .social-icon:hover {
          transform: translateY(-3px);
        }
      `}</style>

      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-20 py-12">
        {/* Top Section - Logo and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-14 pb-10 border-b-2 border-slate-200">
          {/* Logo - LEFT */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Nexcore Institute of Technology"
                width={300}
                height={120}
                className="h-auto w-auto max-w-[300px]"
                priority
              />
            </Link>
          </div>

          {/* Social Media Icons - RIGHT */}
          <div className="flex flex-col items-start md:items-end gap-5">
            <h3 
              className="text-xl font-bold"
              style={{ 
                fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                color: '#2C2C2C'
              }}
            >
              Connect With Us
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="social-icon w-12 h-12 rounded-lg flex items-center justify-center text-white shadow-lg"
                  style={{
                    backgroundColor: social.bgColor,
                  }}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content - Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* About Section */}
          <div className="lg:col-span-1">
            <h2 
              className="mb-5 text-xl font-bold"
              style={{ 
                fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                color: '#007BFF'
              }}
            >
              About Us
            </h2>
            <p 
              className="text-base leading-relaxed font-medium"
              style={{ 
                fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                color: 'rgba(44, 44, 44, 0.75)'
              }}
            >
              A next-gen program designed to equip students with real-world AI skills for tech-driven careers.
            </p>
          </div>

          {/* Explore More */}
          <div>
            <h2 
              className="mb-5 text-xl font-bold"
              style={{ 
                fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                color: '#007BFF'
              }}
            >
              Explore
            </h2>
            <ul className="space-y-3">
              {[
                { href: '/infrastructure', label: 'Infrastructure' },
                { href: '/learn-grow', label: 'Learn & Grow' },
                { href: '/whychooseus', label: 'Why Choose Us' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className={`footer-link text-base font-semibold block ${
                      mounted && pathname === link.href ? "font-bold" : ""
                    }`}
                    style={{ 
                      fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                      color: mounted && pathname === link.href ? '#007BFF' : 'rgba(44, 44, 44, 0.7)'
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h2 
              className="mb-5 text-xl font-bold"
              style={{ 
                fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                color: '#FF7F00'
              }}
            >
              Policies
            </h2>
            <ul className="space-y-3">
              {[
                { href: '/selection-policy', label: 'Selection' },
                { href: '/eligibility-criteria', label: 'Eligibility' },
                { href: '/placement-policy', label: 'Placement' },
                { href: '/scholarship-policy', label: 'Scholarship' },
                { href: '/fees-policy', label: 'Fees' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className={`footer-link text-base font-semibold block ${
                      mounted && pathname === link.href ? "font-bold" : ""
                    }`}
                    style={{ 
                      fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                      color: mounted && pathname === link.href ? '#FF7F00' : 'rgba(44, 44, 44, 0.7)'
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 
              className="mb-5 text-xl font-bold"
              style={{ 
                fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                color: '#007BFF'
              }}
            >
              Contact
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#007BFF' }} />
                <a
                  href="https://maps.app.goo.gl/prUqufdGwFhtm6DFA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link text-base font-medium"
                  style={{ 
                    fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                    color: 'rgba(44, 44, 44, 0.75)'
                  }}
                >
                  Kurla West, Mumbai 400070
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#FF7F00' }} />
                <a
                  href="tel:+919892398976"
                  className="footer-link text-base font-medium"
                  style={{ 
                    fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                    color: 'rgba(44, 44, 44, 0.75)'
                  }}
                >
                  +91 9892398976
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#FFCD00' }} />
                <a
                  href="mailto:bvoc@nexcorealliance.com"
                  className="footer-link text-base font-medium break-all"
                  style={{ 
                    fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                    color: 'rgba(44, 44, 44, 0.75)'
                  }}
                >
                  bvoc@nexcorealliance.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-8 border-t-2 border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div 
            className="text-base font-semibold text-center md:text-left" 
            style={{ 
              fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
              color: 'rgba(44, 44, 44, 0.7)'
            }}
          >
            © 2025{" "}
            <Link
              href="/"
              className="font-bold"
              style={{ color: '#007BFF' }}
            >
              Nexcore Institute
            </Link>
            . All Rights Reserved.
          </div>
          
          <div 
            className="text-base font-semibold flex items-center gap-2" 
            style={{ 
              fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
              color: 'rgba(44, 44, 44, 0.7)'
            }}
          >
            Designed by{" "}
            <a
              href="https://code4bharat.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold inline-flex items-center gap-1.5"
              style={{ color: '#FF7F00' }}
            >
              Code4Bharat
              <Heart className="w-4 h-4 fill-current" style={{ color: '#FF5733' }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
