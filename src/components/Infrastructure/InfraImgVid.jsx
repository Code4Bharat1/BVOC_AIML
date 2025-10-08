"use client";
import { useState, useRef, useEffect } from "react";

const CARD_SIZE = "w-72 h-80 lg:w-[25rem] lg:h-96";

// Infrastructure data (unchanged)
const infraData = [
  {
    heading: "Conference",
    items: [
      { type: "image", src: "/infrastructure/conference3/conference3_1.jpeg", alt: "Conference Room" },
      { type: "image", src: "/infrastructure/conference3/conference3_6.png", alt: "Conference Room" },
      { type: "image", src: "/infrastructure/conference3/conference3_7.png", alt: "Conference Room" },
      { type: "image", src: "/infrastructure/conference3/conference3_8.png", alt: "Conference Room" },
      { type: "image", src: "/infrastructure/conference3/conference3_10.jpg", alt: "Conference Room" },
      { type: "image", src: "/infrastructure/conference3/conference3_11.jpg", alt: "Conference Room" },
      { type: "image", src: "/infrastructure/conference3/conference3_12.jpg", alt: "Conference Room" },
      { type: "image", src: "/infrastructure/conference3/conference3_12.png", alt: "Conference Room" },
      { type: "image", src: "/infrastructure/conference3/conference3_13.png", alt: "Conference Room" },
    ],
  },
  {
    heading: "Work Spaces",
    items: [
      { type: "image", src: "/infrastructure/work_space_4/workspace_1.png", alt: "Workspace 1" },
      { type: "image", src: "/infrastructure/work_space_4/workspace_2.png", alt: "Workspace 2" },
      { type: "image", src: "/infrastructure/work_space_4/workspace_3.png", alt: "Workspace 3" },
      { type: "image", src: "/infrastructure/work_space_4/workspace_4.png", alt: "Workspace 4" },
      { type: "image", src: "/infrastructure/work_space_4/workspace_5.png", alt: "Workspace 5" },
      { type: "image", src: "/infrastructure/work_space_4/workspace_6.png", alt: "Workspace 6" },
      { type: "image", src: "/infrastructure/work_space_4/workspace_7.png", alt: "Workspace 7" },
      { type: "image", src: "/infrastructure/work_space_4/workspace_8.png", alt: "Workspace 8" },
      { type: "image", src: "/infrastructure/work_space_4/workspace_9.png", alt: "Workspace 9" },
      { type: "image", src: "/infrastructure/work_space_4/workspace_10.png", alt: "Workspace 10" },
    ],
  },
];

// ========== CARD COMPONENT ==========
function InfraCard({ item, onClick }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl cursor-pointer shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(172,108,255,0.5)] bg-gradient-to-b from-[#1E0C44] to-[#2C1763] ${CARD_SIZE} flex justify-center items-center flex-shrink-0`}
      onClick={() => onClick(item)}
    >
      {/* Glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#AC6CFF]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

      {item.type === "image" ? (
        <img src={item.src} alt={item.alt} className="object-cover w-full h-full rounded-2xl" />
      ) : (
        <video className="w-full h-full rounded-2xl" muted>
          <source src={item.src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}

// ========== MODAL COMPONENT ==========
function Modal({ item, onClose }) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex justify-center items-center backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-[#1A0B3C] border border-[#AC6CFF]/40 rounded-2xl p-4 max-w-5xl w-[95%] shadow-[0_0_50px_rgba(172,108,255,0.4)]"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "image" ? (
          <img src={item.src} alt={item.alt} className="w-full h-auto rounded-xl" />
        ) : (
          <video src={item.src} controls autoPlay className="w-full rounded-xl" />
        )}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white text-3xl font-bold hover:text-[#AC6CFF] transition-colors"
        >
          ×
        </button>
      </div>
    </div>
  );
}

// ========== MAIN COMPONENT ==========
function InfraImgVid() {
  const [selectedItem, setSelectedItem] = useState(null);
  const scrollContainerRefs = useRef([]);
  const scrollStatesRef = useRef(
    Array(infraData.length)
      .fill(null)
      .map(() => ({
        scrollPosition: 0,
        scrollDirection: 1,
        atEnd: false,
        isPaused: false,
      }))
  );

  // Auto scroll animation
  useEffect(() => {
    const animationFrames = [];
    scrollContainerRefs.current.forEach((container, index) => {
      if (!container) return;

      if (container.scrollWidth > container.clientWidth) {
        const scrollState = scrollStatesRef.current[index];
        const animate = () => {
          if (scrollState.isPaused) {
            animationFrames[index] = requestAnimationFrame(animate);
            return;
          }

          let { scrollPosition, scrollDirection, atEnd } = scrollState;
          const scrollSpeed = 0.7;

          if (scrollDirection === 1) {
            scrollPosition += scrollSpeed;
            if (scrollPosition >= container.scrollWidth - container.clientWidth) {
              scrollPosition = container.scrollWidth - container.clientWidth;
              if (!atEnd) {
                atEnd = true;
                setTimeout(() => {
                  scrollState.scrollDirection = -1;
                  scrollState.atEnd = false;
                }, 2000);
              }
            }
          } else {
            scrollPosition -= scrollSpeed;
            if (scrollPosition <= 0) {
              scrollPosition = 0;
              if (!atEnd) {
                atEnd = true;
                setTimeout(() => {
                  scrollState.scrollDirection = 1;
                  scrollState.atEnd = false;
                }, 2000);
              }
            }
          }

          container.scrollLeft = scrollPosition;
          scrollState.scrollPosition = scrollPosition;
          scrollState.atEnd = atEnd;

          animationFrames[index] = requestAnimationFrame(animate);
        };
        animationFrames[index] = requestAnimationFrame(animate);
      }
    });

    return () => {
      animationFrames.forEach((frameId) => frameId && cancelAnimationFrame(frameId));
    };
  }, []);

  const handleMouseEnter = (index) => {
    if (scrollStatesRef.current[index]) scrollStatesRef.current[index].isPaused = true;
  };

  const handleMouseLeave = (index) => {
    if (scrollStatesRef.current[index]) scrollStatesRef.current[index].isPaused = false;
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 py-16 bg-gradient-to-b from-[#3A0B57] via-[#3D0B67] to-[#160E6E] overflow-hidden">
      {/* Glowing Background Orbs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#AC6CFF]/20 blur-[160px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#3D0B67]/25 blur-[200px] rounded-full animate-pulse"></div>

      {infraData.map((section, index) => (
        <div className="relative z-10 p-5" key={index}>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#AC6CFF] via-[#CBA0FF] to-white drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">
            {section.heading}
          </h2>

          <div
            className="flex space-x-4 overflow-x-auto scrollbar-hide justify-center"
            ref={(el) => (scrollContainerRefs.current[index] = el)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {section.items.map((item, idx) => (
              <InfraCard key={idx} item={item} onClick={setSelectedItem} />
            ))}
          </div>
        </div>
      ))}

      <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}

export default InfraImgVid;
