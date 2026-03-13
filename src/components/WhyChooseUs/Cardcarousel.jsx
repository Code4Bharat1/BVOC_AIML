"use client";

import Head from "next/head";
import Script from "next/script";
import { useState, useEffect, useRef } from "react";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    title: "Personalized Learning Path",
    description:
      "Our AI-driven tools create a customized learning journey, recommending relevant courses, projects, and resources based on your goals and progress.",
    image: "/chat-ai.png",
    tag: "ADAPTIVE AI",
    color: "blue",
  },
  {
    title: "Real-Time Content Recommendations",
    description:
      "Get smart suggestions tailored to your interests, keeping you on track and ensuring you always have the best resources at your fingertips.",
    image: "/recommendation.png",
    tag: "SMART FEED",
    color: "orange",
  },
  {
    title: "Track Progress with Insights",
    description:
      "Stay motivated with data-driven insights that show your growth and guide your next steps, making your learning experience more efficient.",
    image: "/insights.png",
    tag: "ANALYTICS",
    color: "blue",
  },
  {
    title: "Industry-Ready Tools",
    description:
      "Access the latest AI-powered tools, equipping you with the skills that are shaping the future of work.",
    image: "/tools.png",
    tag: "FUTURE READY",
    color: "orange",
  },
];

export default function EnhancedAITools() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const touchStartX = useRef(0);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % cards.length);
      }, 5000);
    }
    return () => clearInterval(timerRef.current);
  }, [isPaused]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? handleNext() : handlePrev();
    }
    setTimeout(() => setIsPaused(false), 8000);
  };

  return (
    <>
      {/* ══════════ SEO HEAD ══════════ */}
      <Head>
        <title>AI Tools Management | Nexcore Institute of Technology – Smarter Way to Learn</title>
        <meta
          name="description"
          content="Nexcore Institute of Technology offers AI-powered learning tools including personalized learning paths, real-time content recommendations, progress analytics, and industry-ready tools. NAAC A+ Accredited college in Mumbai."
        />
        <meta
          name="keywords"
          content="AI learning tools Nexcore, personalized learning path Mumbai college, AI powered education Mumbai, smart learning recommendations, student progress analytics, industry ready skills Mumbai, Nexcore Institute technology, B.Voc AI tools, NAAC A+ tech college Mumbai, UGC recognized AI education, nexcoreinstitute.org AI tools, adaptive learning Mumbai, future ready skills college"
        />
        <meta name="author" content="Nexcore Institute of Technology" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://nexcoreinstitute.org/" />
        <meta property="og:title" content="AI Tools Management | Nexcore Institute of Technology" />
        <meta
          property="og:description"
          content="Discover AI-powered learning at Nexcore Institute – personalized paths, smart recommendations, progress insights and industry-ready tools for B.Voc students in Mumbai."
        />
        <meta property="og:url" content="https://nexcoreinstitute.org/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nexcore Institute of Technology" />
        <meta property="og:image" content="https://nexcoreinstitute.org/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Tools Management | Nexcore Institute of Technology" />
        <meta
          name="twitter:description"
          content="AI-powered personalized learning, smart recommendations & industry-ready tools at Nexcore Institute, Mumbai. NAAC A+ Accredited."
        />
        <meta name="twitter:image" content="https://nexcoreinstitute.org/og-image.jpg" />
      </Head>

      {/* ══════════ JSON-LD SCHEMA ══════════ */}
      <Script
        id="ai-tools-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "AI Tools Management – Nexcore Institute of Technology",
            "description": "AI-powered learning tools at Nexcore Institute including personalized learning paths, content recommendations, progress analytics and industry-ready tools.",
            "url": "https://nexcoreinstitute.org/",
            "numberOfItems": 4,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Personalized Learning Path",
                "description": "AI-driven customized learning journey with course and project recommendations."
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Real-Time Content Recommendations",
                "description": "Smart suggestions tailored to student interests and learning goals."
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Track Progress with Insights",
                "description": "Data-driven insights showing student growth and guiding next steps."
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Industry-Ready Tools",
                "description": "Latest AI-powered tools equipping students with future-ready skills."
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

      <div className="bg-slate-50 py-20 px-6 mt-15">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              AI-Powered Learning
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              AI Tools Management
            </h2>

            <p className="text-xl text-orange-600 font-semibold">
              A Smarter Way to Learn!
            </p>
          </div>

          {/* Desktop */}
          <div className="hidden md:grid grid-cols-2 gap-8">
            {/* Active Card */}
            <div className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-80 bg-slate-100">
                <img
                  src={cards[activeIndex].image}
                  alt={cards[activeIndex].title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8">
                <span
                  className={`inline-block mb-4 px-3 py-1 rounded-full text-xs font-bold ${
                    cards[activeIndex].color === "blue"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {cards[activeIndex].tag}
                </span>

                <h3 className="text-2xl font-bold mb-3 text-slate-900">
                  {cards[activeIndex].title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {cards[activeIndex].description}
                </p>
              </div>
            </div>

            {/* Side Cards */}
            <div className="space-y-4">
              {cards.map((card, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsPaused(true);
                    setTimeout(() => setIsPaused(false), 8000);
                  }}
                  disabled={index === activeIndex}
                  className={`w-full text-left bg-white border-2 rounded-xl p-5 flex gap-4 transition-all ${
                    index === activeIndex
                      ? "border-blue-500 cursor-not-allowed"
                      : "border-slate-200 hover:border-blue-400 hover:shadow-md"
                  }`}
                >
                  <div className="w-20 h-20 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div
                      className={`inline-block mb-1 px-2 py-1 rounded text-xs font-bold ${
                        card.color === "blue"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {card.tag}
                    </div>
                    <h4 className="font-bold text-slate-900 mb-1">{card.title}</h4>
                    <p className="text-sm text-slate-600 line-clamp-2">
                      {card.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div
            className="md:hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-64 bg-slate-100">
                <img
                  src={cards[activeIndex].image}
                  alt={cards[activeIndex].title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <span
                  className={`inline-block mb-3 px-3 py-1 rounded-full text-xs font-bold ${
                    cards[activeIndex].color === "blue"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {cards[activeIndex].tag}
                </span>

                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  {cards[activeIndex].title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {cards[activeIndex].description}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-6 mt-6">
              <button
                onClick={handlePrev}
                className="w-10 h-10 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center hover:border-blue-400 transition-all"
              >
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {cards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveIndex(index);
                      setIsPaused(true);
                      setTimeout(() => setIsPaused(false), 8000);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeIndex ? "bg-blue-600 w-6" : "bg-slate-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-10 h-10 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center hover:border-blue-400 transition-all"
              >
                <ChevronRight className="w-5 h-5 text-slate-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}