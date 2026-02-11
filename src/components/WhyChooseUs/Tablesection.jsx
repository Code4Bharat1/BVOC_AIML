"use client";
import { Zap, Rocket, Target, Sparkles } from "lucide-react";

const DegreeComparisonTable = () => {
  const features = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Industry-Ready Skills",
      desc: "B.Voc focuses on practical, job-ready skills from day one",
      color: "blue"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Faster Entry to Workforce",
      desc: "Graduate and start earning sooner than traditional degrees",
      color: "orange"
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "Modern Curriculum",
      desc: "Stay ahead with cutting-edge industry-aligned courses",
      color: "blue"
    }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>

      <div className="relative bg-white  py-20 px-4 overflow-hidden">
        {/* Simplified background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-orange-100/40 via-transparent to-transparent" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-blue-50 border border-blue-200 rounded-full">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-blue-700">
                Compare & Decide
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-blue-600">B.Voc</span> vs{" "}
              <span className="text-orange-500">Traditional Degrees</span>
              <br />
              <span className="text-slate-900">The Clear Choice for Your Future</span>
            </h1>

            {/* Description */}
            <div className="max-w-3xl mx-auto space-y-3">
              <p className="text-lg text-slate-700">
                <span className="font-semibold text-slate-900">
                  Choosing the right course is one of the most important decisions you'll make.
                </span>{" "}
                Let's break it down:
              </p>
              <p className="text-lg text-slate-600">
                While traditional degrees like{" "}
                <span className="font-semibold text-blue-600">B.Tech</span> and{" "}
                <span className="font-semibold text-orange-500">B.Sc</span> offer a solid foundation,{" "}
                <span className="font-semibold text-blue-600">B.Voc</span> is the{" "}
                <span className="font-semibold text-orange-500">fast track to industry-ready skills</span>.
              </p>
            </div>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((item, index) => (
              <FeatureCard key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const FeatureCard = ({ icon, title, desc, color, index }) => {
  const colorStyles = {
    blue: {
      icon: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
      hoverBorder: "border-blue-400",
      gradient: "from-blue-500/10 to-blue-600/10"
    },
    orange: {
      icon: "text-orange-500",
      bg: "bg-orange-50",
      border: "border-orange-200",
      hoverBorder: "border-orange-400",
      gradient: "from-orange-500/10 to-orange-600/10"
    }
  };

  const styles = colorStyles[color];

  return (
    <div
      className="group relative animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Glow effect on hover */}
      <div className={`absolute -inset-0.5 bg-gradient-to-br ${styles.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300`} />
      
      {/* Card */}
      <div className={`relative bg-white border-2 ${styles.border} group-hover:${styles.hoverBorder} rounded-2xl p-8 shadow-sm group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1`}>
        {/* Icon */}
        <div className={`${styles.bg} w-16 h-16 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
          <div className={styles.icon}>
            {icon}
          </div>
        </div>

        {/* Content */}
        <h3 className="font-bold text-xl mb-2 text-slate-900">
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed">
          {desc}
        </p>

        {/* Accent line */}
        <div className={`mt-5 h-1 w-12 rounded-full bg-gradient-to-r ${
          color === 'blue' ? 'from-blue-500 to-blue-600' : 'from-orange-500 to-orange-600'
        } group-hover:w-16 transition-all duration-300`} />
      </div>
    </div>
  );
};

export default DegreeComparisonTable;