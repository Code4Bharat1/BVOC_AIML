"use client";
import Head from "next/head";
import Script from "next/script";
import { useState, useEffect } from "react";
import {
  Sparkles,
  ChevronDown,
  Briefcase,
  Globe,
  UserCheck,
  DollarSign,
  Award,
} from "lucide-react";

const CenteredBoxWithCards = () => {
  const cards = [
    {
      image: "/TopBenifits/topbenefits1.svg",
      icon: <Briefcase className="w-6 h-6" />,
      heading: "Job-Ready Skills from Day 1",
      description:
        "Get hands-on, industry-driven training from the start. Work on live projects and global challenges to gain the skills employers want.",
      color: "blue",
    },
    {
      image: "/TopBenifits/topbenefits2.svg",
      icon: <Globe className="w-6 h-6" />,
      heading: "Work on International Projects",
      description:
        "Collaborate with global industry leaders and gain experience that sets you apart in the international job market.",
      color: "orange",
    },
    {
      image: "/TopBenifits/topbenefits3.svg",
      icon: <UserCheck className="w-6 h-6" />,
      heading: "Built-in Internships",
      description:
        "Apply what you learn with real-world internships and projects—boosting your resume and skills while still studying.",
      color: "blue",
    },
    {
      image: "/TopBenifits/topbenefits5.png",
      icon: <DollarSign className="w-6 h-6" />,
      heading: "Earn While You Learn",
      description:
        "Leverage valuable internship opportunities to gain hands-on experience while earning, building both your skills and financial independence.",
      color: "orange",
    },
    {
      image: "/TopBenifits/topbenefits4.svg",
      icon: <Award className="w-6 h-6" />,
      heading: "Recognized by UGC & NSQF",
      description:
        "Your qualifications are UGC-approved and NSQF-certified, opening doors to global opportunities.",
      color: "blue",
    },
  ];

  const [isClient, setIsClient] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  return (
    <>
      {/* ══════════ SEO HEAD ══════════ */}
      <Head>
        <title>Top Benefits of B.Voc Programs | Nexcore Institute of Technology Mumbai</title>
        <meta
          name="description"
          content="Discover the top benefits of studying at Nexcore Institute of Technology Mumbai — job-ready skills from Day 1, international projects, built-in internships, earn while you learn, and UGC & NSQF recognized qualifications. NAAC A+ Accredited."
        />
        <meta
          name="keywords"
          content="top benefits B.Voc Mumbai, job ready skills college Mumbai, internship during college Mumbai, earn while you learn Mumbai, UGC NSQF recognized degree Mumbai, international projects college Mumbai, Nexcore Institute benefits, NAAC A+ college benefits Mumbai, industry training college Mumbai, nexcoreinstitute.org benefits, career fast track Mumbai, best college for jobs Mumbai, practical skills college Mumbai"
        />
        <meta name="author" content="Nexcore Institute of Technology" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://nexcoreinstitute.org/" />
        <meta property="og:title" content="Top Benefits of B.Voc Programs | Nexcore Institute of Technology" />
        <meta
          property="og:description"
          content="Job-ready skills, international projects, built-in internships, earn while you learn, and UGC & NSQF recognized degrees at Nexcore Institute Mumbai. NAAC A+."
        />
        <meta property="og:url" content="https://nexcoreinstitute.org/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nexcore Institute of Technology" />
        <meta property="og:image" content="https://nexcoreinstitute.org/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Benefits of B.Voc Programs | Nexcore Institute Mumbai" />
        <meta
          name="twitter:description"
          content="Job-ready skills, internships, international projects & UGC recognized degrees at Nexcore Institute Mumbai. Fast-track your career with NAAC A+ education."
        />
        <meta name="twitter:image" content="https://nexcoreinstitute.org/og-image.jpg" />
      </Head>

      {/* ══════════ JSON-LD SCHEMA ══════════ */}
      <Script
        id="top-benefits-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Top Benefits of Nexcore Institute of Technology B.Voc Programs",
            "description": "Key career benefits of studying at Nexcore Institute of Technology Mumbai including job-ready skills, internships, international projects and UGC & NSQF recognition.",
            "url": "https://nexcoreinstitute.org/",
            "numberOfItems": 5,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Job-Ready Skills from Day 1",
                "description": "Hands-on industry-driven training from the start with live projects and global challenges."
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Work on International Projects",
                "description": "Collaborate with global industry leaders and gain international job market experience."
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Built-in Internships",
                "description": "Real-world internships and projects integrated into the curriculum."
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Earn While You Learn",
                "description": "Internship opportunities to gain hands-on experience while earning financial independence."
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "Recognized by UGC & NSQF",
                "description": "UGC-approved and NSQF-certified qualifications opening doors to global opportunities."
              }
            ],
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Nexcore Institute of Technology",
              "url": "https://nexcoreinstitute.org/",
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61585525156166",
                "https://www.instagram.com/nexcoreinstitute",
                "https://www.linkedin.com/school/nexcore-institute-of-technology-nit/",
                "https://www.youtube.com/@NexcoreInstitute"
              ],
              "telephone": "+919892398976",
              "accreditation": "NAAC A+",
              "hasCredential": "UGC Recognized"
            }
          })
        }}
      />

      <div className="relative bg-gradient-to-b from-slate-50 to-white py-20 px-4 overflow-hidden">
        {/* Simplified background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-100/30 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full bg-blue-50 border border-blue-200">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-blue-700">
                Career Benefits
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-blue-600">Top Benefits:</span>{" "}
              <span className="text-slate-900">The Fast-Track to Your Career</span>
            </h1>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover how our program gives you a competitive edge in the job market
            </p>
          </div>

          {/* Desktop Cards Grid */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
            {cards.map((card, index) => (
              <BenefitCard key={index} {...card} />
            ))}
          </div>

          {/* Mobile Accordion */}
          <div className="md:hidden flex flex-col gap-3 max-w-xl mx-auto mb-20">
            {cards.map((card, index) => (
              <AccordionItem
                key={index}
                card={card}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

          {/* Why It Works Section */}
          <div className="mt-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Why It <span className="text-blue-600">Works</span> for You
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                A structured journey that transforms learning into career success
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-orange-300 to-purple-300 -translate-x-1/2" />

              <div className="flex flex-col gap-16">
                <TimelineCard
                  align="left"
                  step="01"
                  title="Real-World Exposure"
                  text="Work on live projects, collaborate with industry experts, and gain experience from day one."
                  color="blue"
                />

                <TimelineCard
                  align="right"
                  step="02"
                  title="Flexible Learning Path"
                  text="Exit when it makes sense, stack credentials, and qualify as you progress."
                  color="orange"
                />

                <TimelineCard
                  align="left"
                  step="03"
                  title="Global Opportunities"
                  text="Work on international projects and open doors to a global career."
                  color="purple"
                />

                <TimelineCard
                  align="right"
                  step="04"
                  title="Career-Ready Outcome"
                  text="Graduate with verified skills, experience, and industry recognition."
                  color="emerald"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/* Benefit Card Component */
const BenefitCard = ({ image, icon, heading, description, color }) => {
  const colorStyles = {
    blue: {
      icon: "bg-gradient-to-br from-blue-500 to-blue-600",
      border: "border-blue-200",
      hoverBorder: "group-hover:border-blue-400",
      glow: "from-blue-500/20 to-blue-600/20",
    },
    orange: {
      icon: "bg-gradient-to-br from-orange-500 to-orange-600",
      border: "border-orange-200",
      hoverBorder: "group-hover:border-orange-400",
      glow: "from-orange-500/20 to-orange-600/20",
    },
  };

  const styles = colorStyles[color];

  return (
    <div className="group relative">
      {/* Hover glow */}
      <div className={`absolute -inset-0.5 bg-gradient-to-br ${styles.glow} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300`} />

      {/* Card */}
      <div className={`relative h-full bg-white border-2 ${styles.border} ${styles.hoverBorder} rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300`}>
        {/* Image Section */}
        <div className="relative h-48 bg-gradient-to-br from-slate-50 to-slate-100">
          <img
            src={image}
            alt={heading}
            className="w-full h-full object-cover"
          />
          {/* Icon Badge */}
          <div className={`absolute top-4 right-4 w-12 h-12 ${styles.icon} rounded-xl flex items-center justify-center text-white shadow-lg`}>
            {icon}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            {heading}
          </h3>
          <p className="text-slate-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

/* Accordion Item Component */
const AccordionItem = ({ card, isOpen, onClick }) => {
  const colorStyles = {
    blue: "bg-blue-600",
    orange: "bg-orange-500",
  };

  return (
    <div className="border-2 border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full px-5 py-4 hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg ${colorStyles[card.color]} flex items-center justify-center text-white flex-shrink-0`}>
            {card.icon}
          </div>
          <span className="text-sm font-semibold text-slate-900 text-left">
            {card.heading}
          </span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-slate-500 transition-transform flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-5 pb-5 border-t border-slate-100">
          <img
            src={card.image}
            className="rounded-lg mb-3 mt-3 w-full"
            alt={card.heading}
          />
          <p className="text-slate-600 leading-relaxed">
            {card.description}
          </p>
        </div>
      )}
    </div>
  );
};

/* Timeline Card Component */
const TimelineCard = ({ align, step, title, text, color }) => {
  const isLeft = align === "left";

  const colorStyles = {
    blue: {
      border: "border-l-blue-500",
      bg: "bg-blue-50",
      dot: "bg-blue-600",
    },
    orange: {
      border: "border-l-orange-500",
      bg: "bg-orange-50",
      dot: "bg-orange-500",
    },
    purple: {
      border: "border-l-purple-500",
      bg: "bg-purple-50",
      dot: "bg-purple-600",
    },
    emerald: {
      border: "border-l-emerald-500",
      bg: "bg-emerald-50",
      dot: "bg-emerald-600",
    },
  };

  const styles = colorStyles[color];

  return (
    <div className={`relative flex ${isLeft ? "md:justify-start md:pr-12" : "md:justify-end md:pl-12"}`}>
      {/* Timeline Dot */}
      <div className={`hidden md:block absolute top-6 ${
        isLeft ? "right-[-5px]" : "left-[-5px]"
      } w-2.5 h-2.5 rounded-full ${styles.dot} ring-4 ring-white z-10`} />

      {/* Card */}
      <div className={`w-full md:w-[450px] bg-white border-l-4 ${styles.border} rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 group`}>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-bold text-slate-500 tracking-wider">
            STEP {step}
          </span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h4>

        <p className="text-slate-600 leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
};

export default CenteredBoxWithCards;