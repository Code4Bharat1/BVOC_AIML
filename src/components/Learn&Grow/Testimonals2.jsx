import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Tamim Tobar",
    role: "Marketing Director",
    src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    quote:
      "It has been an incredible journey with this tool. The ease of use and efficiency are unmatched.",
    name: "Christy Zesko",
    role: "Product Manager",
    src: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    quote:
      "This platform has brought so much value to our team. We love how intuitive and powerful it is.",
    name: "Bernard Tyskoff",
    role: "Lead Developer",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
];

export default function Testimonials2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const getPosition = (index) => {
    if (index === currentIndex) return "center";
    if (index === (currentIndex + 1) % testimonials.length) return "right";
    if (index === (currentIndex - 1 + testimonials.length) % testimonials.length) return "left";
    return "hidden";
  };

  const getMotionStyle = (position) => {
    switch (position) {
      case "center":
        return {
          scale: 1,
          opacity: 1,
          zIndex: 20,
          x: 0,
          rotateY: 0,
        };
      case "left":
        return {
          scale: 0.85,
          opacity: 0.6,
          zIndex: 10,
          x: "-55%",
          rotateY: 15,
        };
      case "right":
        return {
          scale: 0.85,
          opacity: 0.6,
          zIndex: 10,
          x: "55%",
          rotateY: -15,
        };
      default:
        return {
          scale: 0.7,
          opacity: 0,
          zIndex: 0,
          x: 0,
          rotateY: 0,
        };
    }
  };

  return (
    <div className="bg-gradient-to-b from-purple-800 to-purple-900 text-white py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-purple-300 mx-auto mb-6"></div>
          <p className="text-purple-200 max-w-2xl mx-auto">
            Discover why leading companies trust our solutions for their business needs
          </p>
        </div>
        
        <div className="relative flex justify-center items-center h-[400px] perspective-1000">
          {/* Testimonials */}
          <div className="relative w-full flex items-center justify-center">
            {testimonials.map((t, index) => {
              const position = getPosition(index);
              const motionStyle = getMotionStyle(position);
              return (
                <motion.div
                  key={index}
                  animate={motionStyle}
                  transition={{ 
                    duration: 0.7,
                    ease: "easeInOut"
                  }}
                  className={`absolute bg-white/10 backdrop-blur-sm border border-purple-300/30 
                    text-white p-8 rounded-2xl shadow-xl w-[320px] md:w-[450px]
                    ${position === "hidden" ? "hidden" : ""}
                    transform preserve-3d`}
                >
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                    <img
                      src={t.src}
                      alt={t.name}
                      className="w-20 h-20 rounded-full border-4 border-purple-500 object-cover shadow-lg"
                    />
                  </div>
                  
                  <div className="pt-10">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    <p className="text-center text-lg mb-6 italic">"{t.quote}"</p>
                    <div className="text-center">
                      <p className="font-bold text-xl">{t.name}</p>
                      <p className="text-purple-300 text-sm">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        
        {/* Indicator dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <div 
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-purple-300 w-8" : "bg-purple-700 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}