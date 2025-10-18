"use client";
import { useState, useRef, useEffect } from "react";

const CARD_SIZE = "w-72 h-80 lg:w-[25rem] lg:h-96";

// Infrastructure data
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
    heading: "Workspaces",
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
function Modal({ item, onClose, onNext, onPrev, hasNext, hasPrev }) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex justify-center items-center backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-[#1A0B3C] border border-[#AC6CFF]/40 rounded-2xl p-4 max-w-5xl w-[95%] max-h-[90vh] shadow-[0_0_50px_rgba(172,108,255,0.4)] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "image" ? (
          <img src={item.src} alt={item.alt} className="max-w-full max-h-[85vh] w-auto h-auto rounded-xl object-contain" />
        ) : (
          <video src={item.src} controls autoPlay className="max-w-full max-h-[85vh] w-auto h-auto rounded-xl" />
        )}
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white text-3xl font-bold hover:text-[#AC6CFF] transition-colors"
        >
          ×
        </button>

        {/* Left Arrow */}
        {hasPrev && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#AC6CFF]/80 hover:bg-[#AC6CFF] text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_20px_rgba(172,108,255,0.6)]"
          >
            ‹
          </button>
        )}

        {/* Right Arrow */}
        {hasNext && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#AC6CFF]/80 hover:bg-[#AC6CFF] text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_20px_rgba(172,108,255,0.6)]"
          >
            ›
          </button>
        )}
      </div>
    </div>
  );
}

// ========== MAIN COMPONENT ==========
function InfraImgVid() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState({ sectionIndex: 0, itemIndex: 0 });
  const [activeFilter, setActiveFilter] = useState("All");
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

  // Filter the data based on active filter
  const filteredData = activeFilter === "All" 
    ? infraData 
    : infraData.filter(section => section.heading === activeFilter);

  // Handle card click
  const handleCardClick = (item, sectionIndex, itemIndex) => {
    setSelectedItem(item);
    setSelectedIndex({ sectionIndex, itemIndex });
  };

  // Navigate to next item
  const handleNext = () => {
    const { sectionIndex, itemIndex } = selectedIndex;
    const currentSection = filteredData[sectionIndex];
    
    if (itemIndex < currentSection.items.length - 1) {
      // Next item in same section
      const newIndex = { sectionIndex, itemIndex: itemIndex + 1 };
      setSelectedIndex(newIndex);
      setSelectedItem(currentSection.items[itemIndex + 1]);
    } else if (sectionIndex < filteredData.length - 1) {
      // First item of next section
      const newIndex = { sectionIndex: sectionIndex + 1, itemIndex: 0 };
      setSelectedIndex(newIndex);
      setSelectedItem(filteredData[sectionIndex + 1].items[0]);
    }
  };

  // Navigate to previous item
  const handlePrev = () => {
    const { sectionIndex, itemIndex } = selectedIndex;
    
    if (itemIndex > 0) {
      // Previous item in same section
      const newIndex = { sectionIndex, itemIndex: itemIndex - 1 };
      setSelectedIndex(newIndex);
      setSelectedItem(filteredData[sectionIndex].items[itemIndex - 1]);
    } else if (sectionIndex > 0) {
      // Last item of previous section
      const prevSection = filteredData[sectionIndex - 1];
      const newIndex = { sectionIndex: sectionIndex - 1, itemIndex: prevSection.items.length - 1 };
      setSelectedIndex(newIndex);
      setSelectedItem(prevSection.items[prevSection.items.length - 1]);
    }
  };

  // Check if navigation is possible
  const hasNext = () => {
    const { sectionIndex, itemIndex } = selectedIndex;
    const currentSection = filteredData[sectionIndex];
    return itemIndex < currentSection.items.length - 1 || sectionIndex < filteredData.length - 1;
  };

  const hasPrev = () => {
    const { sectionIndex, itemIndex } = selectedIndex;
    return itemIndex > 0 || sectionIndex > 0;
  };

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
  }, [filteredData]);

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

      {/* Filter Buttons */}
      <div className="relative z-10 mb-12 w-full flex justify-center">
          <div
            className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 md:px-0 py-2 max-w-full justify-start md:justify-center"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {["All", "Conference", "Workspaces"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`flex-shrink-0 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-[#AC6CFF] to-[#8B5CF6] text-white shadow-[0_0_20px_rgba(172,108,255,0.6)] scale-105"
                    : "bg-[#1E0C44]/60 text-[#CBA0FF] hover:bg-[#2C1763] hover:shadow-[0_0_15px_rgba(172,108,255,0.3)]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>


      {filteredData.map((section, index) => (
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
              <InfraCard key={idx} item={item} onClick={(item) => handleCardClick(item, index, idx)} />
            ))}
          </div>
        </div>
      ))}

      <Modal 
        item={selectedItem} 
        onClose={() => setSelectedItem(null)} 
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={hasNext()}
        hasPrev={hasPrev()}
      />
    </div>
  );
}

export default InfraImgVid;