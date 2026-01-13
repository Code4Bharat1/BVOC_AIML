"use client";
import { useState } from "react";
import { Sparkles, Users, Code, MessageCircle, TrendingUp } from "lucide-react";

const PeerToPeerLearning = () => {
  return (
    <div className="relative bg-white py-16 overflow-hidden">
      {/* Soft background blobs */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-[80px]"
        style={{ backgroundColor: "rgba(0,123,255,0.05)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[80px]"
        style={{ backgroundColor: "rgba(255,127,0,0.05)" }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-blue-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Peer-to-Peer Learning
            </h1>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600">
            Learn, Collaborate, Grow Together
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-blue-600" />
        </div>

        {/* Sections */}
        <div className="space-y-12">
          <Section
            icon={<Users className="w-8 h-8 text-blue-600" />}
            title="Collaborative Learning Environment"
            desc="At Nexcore, we believe in the power of learning "
            bold={["together", "peer-to-peer learning platform"]}
            tail=" that connects students, encouraging collaboration and deeper understanding."
            image="/peertopeer/image1.png"
            reverse={false}
            accent="#007BFF"
          />

          <Section
            icon={<Code className="w-8 h-8 text-amber-500" />}
            title="Group Projects & Hackathons"
            desc="Work alongside peers on "
            bold={["real-world projects", "hackathons"]}
            tail=" that push creativity and practical problem-solving."
            image="/peertopeer/image2.png"
            reverse
            accent="#FF7F00"
          />

          <Section
            icon={<MessageCircle className="w-8 h-8 text-blue-600" />}
            title="Discussion Boards & Networking"
            desc="Engage in "
            bold={["discussions", "industry-driven topics"]}
            tail=" while learning from diverse perspectives and expanding your network."
            image="/peertopeer/image3.png"
            reverse={false}
            accent="#007BFF"
          />

          <Section
            icon={<TrendingUp className="w-8 h-8 text-amber-500" />}
            title="Build Skills for Success"
            desc="Through collaboration, sharpen essential "
            bold={["problem-solving", "communication skills"]}
            tail=" that matter in every career."
            image="/peertopeer/image4.svg"
            reverse
            accent="#FF7F00"
          />
        </div>
      </div>
    </div>
  );
};

const Section = ({
  icon,
  title,
  desc,
  bold = [],
  tail,
  image,
  reverse,
  accent,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="rounded-3xl border bg-white shadow-sm p-8 md:p-12 transition"
      style={{
        borderColor: hover ? accent : "rgba(0,0,0,0.1)",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-10`}
      >
        {/* Image */}
        <div className="flex-1 flex justify-center">
          <div className="rounded-2xl border bg-white p-4 shadow-sm">
            <img
              src={image}
              alt={title}
              className="w-full max-w-[340px] object-contain"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 space-y-5">
          <div className="flex items-center gap-4">
            <div
              className="p-3 rounded-xl border"
              style={{ borderColor: accent, color: accent }}
            >
              {icon}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              {title}
            </h3>
          </div>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            {desc}
            {bold.map((b, i) => (
              <span key={i} className="font-semibold" style={{ color: accent }}>
                {b}
                {i < bold.length - 1 && ", "}
              </span>
            ))}
            {tail}
          </p>

          <div
            className="h-1 w-20 rounded-full"
            style={{ backgroundColor: accent }}
          />
        </div>
      </div>
    </div>
  );
};

export default PeerToPeerLearning;
