"use client";
import { useState } from "react";
import { Sparkles, Users, Code, MessageCircle, TrendingUp } from "lucide-react";

const PeerToPeerLearning = () => {
  return (
    <div className="relative bg-gradient-to-b from-slate-50 to-white py-20 overflow-hidden">
      {/* Simplified background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-100/30 via-transparent to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Collaborative Learning</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            Peer-to-Peer Learning
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Learn, Collaborate, Grow Together
          </p>
        </div>

        {/* Sections Grid */}
        <div className="space-y-8">
          <Section
            icon={<Users className="w-7 h-7" />}
            title="Collaborative Learning Environment"
            desc="At Nexcore, we believe in the power of learning together with our peer-to-peer learning platform that connects students, encouraging collaboration and deeper understanding."
            image="/peertopeer/image1.png"
            reverse={false}
            color="blue"
          />

          <Section
            icon={<Code className="w-7 h-7" />}
            title="Group Projects & Hackathons"
            desc="Work alongside peers on real-world projects and hackathons that push creativity and practical problem-solving."
            image="/peertopeer/image2.png"
            reverse
            color="amber"
          />

          <Section
            icon={<MessageCircle className="w-7 h-7" />}
            title="Discussion Boards & Networking"
            desc="Engage in discussions around industry-driven topics while learning from diverse perspectives and expanding your network."
            image="/peertopeer/image3.png"
            reverse={false}
            color="blue"
          />

          <Section
            icon={<TrendingUp className="w-7 h-7" />}
            title="Build Skills for Success"
            desc="Through collaboration, sharpen essential problem-solving and communication skills that matter in every career."
            image="/peertopeer/image4.svg"
            reverse
            color="amber"
          />
        </div>
      </div>
    </div>
  );
};

const Section = ({ icon, title, desc, image, reverse, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  const colorStyles = {
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-600",
      hoverBorder: "border-blue-400",
      iconBg: "bg-blue-100",
    },
    amber: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      text: "text-amber-600",
      hoverBorder: "border-amber-400",
      iconBg: "bg-amber-100",
    },
  };

  const styles = colorStyles[color];

  return (
    <div
      className={`group rounded-2xl bg-white border-2 transition-all duration-300 overflow-hidden ${
        isHovered ? `${styles.hoverBorder} shadow-xl` : "border-slate-200 shadow-md"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center p-8 md:p-10 ${
          reverse ? "md:grid-flow-dense" : ""
        }`}
      >
        {/* Image */}
        <div className={`${reverse ? "md:col-start-2" : ""} flex justify-center`}>
          <div className={`rounded-xl ${styles.bg} p-6 transition-transform duration-300 ${
            isHovered ? "scale-105" : ""
          }`}>
            <img
              src={image}
              alt={title}
              className="w-full max-w-[280px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Content */}
        <div className={`${reverse ? "md:col-start-1 md:row-start-1" : ""} space-y-4`}>
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-lg ${styles.iconBg} ${styles.text}`}>
              {icon}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              {title}
            </h3>
          </div>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            {desc}
          </p>

          <div className={`h-1 w-16 rounded-full ${
            color === "blue" ? "bg-blue-500" : "bg-amber-500"
          } transition-all duration-300 ${isHovered ? "w-24" : ""}`} />
        </div>
      </div>
    </div>
  );
};

export default PeerToPeerLearning;