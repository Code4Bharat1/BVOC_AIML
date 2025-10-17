import { FaGraduationCap, FaBriefcase, FaHandHoldingUsd } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import Link from "next/link";

export default function ThreeCards() {
  const cards = [
    {
      icon: <FaGraduationCap />,
      title: "Scholarships Available",
      description: "Merit-based, Need-based, and Women-in-Tech Scholarships are available.",
    },
    {
      icon: <FaBriefcase />,
      title: "Paid Internships",
      description: "Paid Internships (from 2nd year) offer ₹3,000–₹10,000/month.",
    },
    {
      icon: <FaHandHoldingUsd />,
      title: "Flexible Payment Plans",
      description: "Special installment plans may be considered for genuine financial hardship cases.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0f2847] via-[#1a3a5c] to-[#2d1b69] py-20 px-4 overflow-hidden">
      {/* Background Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <HiSparkles className="absolute top-10 left-10 text-cyan-400 text-3xl animate-pulse" />
        <HiSparkles className="absolute top-32 right-20 text-orange-400 text-2xl animate-pulse delay-300" />
        <HiSparkles className="absolute bottom-32 left-1/4 text-purple-400 text-4xl animate-pulse delay-700" />
        <HiSparkles className="absolute bottom-20 right-1/3 text-yellow-400 text-2xl animate-pulse delay-1000" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-full">
            <HiSparkles className="text-cyan-400" />
            <span className="text-cyan-400 text-sm font-bold tracking-widest">SUPPORT OPTIONS</span>
            <HiSparkles className="text-cyan-400" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Financial Assistance
          </h1>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full" />
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full" />
          </div>
        </div>

        {/* Desktop Layout - Diagonal Cards */}
        <div className="hidden md:block relative py-12">
          {/* Left Card */}
          <div className="flex justify-start mb-16 animate-fadeIn">
            <div className="relative group max-w-lg">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />
              
              <div className="relative bg-[#1a2847] rounded-3xl p-8 border-2 border-cyan-500/50 transform transition-all duration-500 hover:scale-105">
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-500/70 rounded-tl-3xl" />
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white text-2xl shadow-lg shadow-cyan-500/50">
                    {cards[0].icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">{cards[0].title}</h3>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{cards[0].description}</p>
                
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-purple-500/70 rounded-br-3xl" />
              </div>
            </div>
          </div>

          {/* Center Card */}
          <div className="flex justify-center mb-16 animate-fadeIn delay-200">
            <div className="relative group max-w-lg">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-orange-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />
              
              <div className="relative bg-[#1a2847] rounded-3xl p-8 border-2 border-cyan-500/50 transform transition-all duration-500 hover:scale-105">
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-orange-500/70 rounded-tr-3xl" />
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white text-2xl shadow-lg shadow-orange-500/50">
                    {cards[1].icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-orange-400 mb-2">{cards[1].title}</h3>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{cards[1].description}</p>
                
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-purple-500/70 rounded-bl-3xl" />
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="flex justify-end animate-fadeIn delay-400">
            <div className="relative group max-w-lg">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />
              
              <div className="relative bg-[#1a2847] rounded-3xl p-8 border-2 border-cyan-500/50 transform transition-all duration-500 hover:scale-105">
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-purple-500/70 rounded-tl-3xl" />
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white text-2xl shadow-lg shadow-purple-500/50">
                    {cards[2].icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-400 mb-2">{cards[2].title}</h3>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{cards[2].description}</p>
                
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-500/70 rounded-br-3xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Stacked Cards */}
        <div className="md:hidden space-y-8">
          {cards.map((card, index) => (
            <div key={index} className="relative group">
              <div className={`absolute -inset-1 bg-gradient-to-r ${
                index === 0 ? 'from-cyan-600 to-purple-600' :
                index === 1 ? 'from-orange-600 to-orange-400' :
                'from-purple-600 to-cyan-600'
              } rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500`} />
              
              <div className="relative bg-[#1a2847] rounded-3xl p-6 border-2 border-cyan-500/50">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${
                    index === 0 ? 'from-cyan-500 to-purple-500 shadow-cyan-500/50' :
                    index === 1 ? 'from-orange-500 to-orange-600 shadow-orange-500/50' :
                    'from-purple-500 to-cyan-500 shadow-purple-500/50'
                  } flex items-center justify-center text-white text-2xl mb-4 shadow-lg`}>
                    {card.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${
                    index === 0 ? 'text-cyan-400' :
                    index === 1 ? 'text-orange-400' :
                    'text-purple-400'
                  }`}>
                    {card.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full blur-xl opacity-75" />
            <Link href="/contact">
  <button className="relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-full text-lg shadow-2xl shadow-orange-500/50 transition-all duration-300 transform hover:scale-105">
    Apply for Financial Aid →
  </button>
</Link>
          </div>
        </div>
      </div>
    </div>
  );
}