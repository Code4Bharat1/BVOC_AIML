import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Basim Thakur",
    role: "Frontend Developer",
    src: "https://media.istockphoto.com/id/1488919302/photo/portrait-of-a-software-developer-at-his-home-in-los-angeles.jpg?s=612x612&w=0&k=20&c=tBZ1_C_T8XDjnHo5GqdjnKrF0gKWzPV9uMK46K3cRHs=",
  },
  {
    quote:
      "It has been an incredible journey with this tool. The ease of use and efficiency are unmatched.",
    name: "Yogesh Rane",
    role: "Python Developer",
    src: "https://media.istockphoto.com/id/1540766473/photo/young-adult-male-design-professional-smiles-for-camera.jpg?s=612x612&w=0&k=20&c=BbwgfMOtFOIJn1Km-ASix_EBbF9SHW5h0FtWbna5nFk=",
  },
  {
    quote:
      "It has been an incredible journey with this tool. The ease of use and efficiency are unmatched.",
    name: "Sakshi Gupta",
    role: "Frontend Developer",
    src: "https://media.istockphoto.com/id/1029797636/photo/school-girl-stock-image.jpg?s=612x612&w=0&k=20&c=vTO9wMeghrSTzTrKNvv_vBmjF7yJMMPA-coFg3bab2w=",
  },
  {
    quote:
      "This platform has brought so much value to our team. We love how intuitive and powerful it is.",
    name: "Nouman Khan",
    role: "Backend Developer",
    src: "https://media.istockphoto.com/id/1136413215/photo/young-man-at-street-market.jpg?s=612x612&w=0&k=20&c=obnaR5III0jRxHKd4ZPl3LRC2pI792KbHYR2eBzKKe8=",
  },
  {
    quote:
      "This platform has brought so much value to our team. We love how intuitive and powerful it is.",
    name: "Aditi Sharma",
    role: "MERN Developer",
    src: "https://media.istockphoto.com/id/578811140/photo/smiling-female-young-college-student-of-indian-ethnicity.jpg?s=612x612&w=0&k=20&c=mKt7yQEkKJWSvT87-6q64_LhSSICnZ1Isq6nJMx_ceg=",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const getPosition = (index) => {
    const total = testimonials.length;
    const diff = (index - currentIndex + total) % total;

    switch (diff) {
      case 0:
        return "center";
      case 1:
        return "right1";
      case 2:
        return "right2";
      case total - 1:
        return "left1";
      case total - 2:
        return "left2";
      default:
        return "hidden";
    }
  };

  const getMotionStyle = (position) => {
    switch (position) {
      case "center":
        return { scale: 1, opacity: 1, zIndex: 30, x: 0, rotateY: 0 };
      case "left1":
        return {
          scale: 0.85,
          opacity: 0.6,
          zIndex: 20,
          x: "-55%",
          rotateY: 15,
        };
      case "left2":
        return {
          scale: 0.7,
          opacity: 0.4,
          zIndex: 10,
          x: "-100%",
          rotateY: 25,
        };
      case "right1":
        return {
          scale: 0.85,
          opacity: 0.6,
          zIndex: 20,
          x: "55%",
          rotateY: -15,
        };
      case "right2":
        return {
          scale: 0.7,
          opacity: 0.4,
          zIndex: 10,
          x: "100%",
          rotateY: -25,
        };
      default:
        return { scale: 0.5, opacity: 0, zIndex: 0, x: 0, rotateY: 0 };
    }
  };

  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => setIsPaused(false);

  return (
    <div
      ref={containerRef}
      className="bg-gradient-to-b from-[#8E1DBA] to-[#33135B] mt-10 text-white py-16 px-4 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
          <div className="w-24 h-1 bg-purple-300 mx-auto mb-6"></div>
        </div>

        <div
          className="relative flex justify-center items-center h-[28rem] perspective-1000 touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative w-full flex items-center justify-center">
            {testimonials.map((t, index) => {
              const position = getPosition(index);
              const motionStyle = getMotionStyle(position);

              return (
                <motion.div
                  key={index}
                  animate={motionStyle}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className={`absolute bg-white text-black rounded-2xl shadow-xl w-full max-w-4xl ${
                    position === "hidden" ? "pointer-events-none" : ""
                  } transform preserve-3d flex flex-col lg:flex-row overflow-hidden`}
                >
                  <div className="w-full h-48 sm:h-64 lg:w-64 lg:h-80 shrink-0">
                    <img
                      src={t.src}
                      alt={t.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="flex-1 p-8 flex flex-col justify-between text-center lg:text-left">
                    <div className="relative">
                      <span className="text-6xl text-purple-300/40 absolute top-0 left-0">
                        "
                      </span>
                      <p className="text-lg pl-8 pt-2 italic">{t.quote}</p>
                    </div>

                    <div className="mt-6">
                      <p className="font-bold text-xl">{t.name}</p>
                      <p className="text-[#808080] text-sm">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8 sm:mt-10">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-purple-300 w-8"
                  : "bg-purple-700 w-2"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
