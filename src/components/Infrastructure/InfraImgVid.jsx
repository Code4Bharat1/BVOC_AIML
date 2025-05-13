"use client";
import { useState, useRef, useEffect } from "react";

// Constants
const CARD_SIZE = "w-72 h-80 lg:w-96 lg:h-96"; // Card size images aur videos k liye

//Yaha data add kr skte h jaise conference room ya Workspace ek araray object hoga
// Yaha pe humne data ko ek array me rakha h jisme heading aur items hote h
const infraData = [
  {
    heading: "Office No . 2",
    items: [
      {
        type: "image",
        src: "/infrastructure/office_no_2/office_no_2_1.jpeg",
        alt: "Workspace 1",
      },
      {
        type: "image",
        src: "/infrastructure/office_no_2/office_no_2_2.jpeg",
        alt: "Workspace 1",
      },
      {
        type: "image",
        src: "/infrastructure/office_no_2/office_no_2_3.jpeg",
        alt: "Workspace 1",
      },
      {
        type: "image",
        src: "/infrastructure/office_no_2/office_no_2_4.jpeg",
        alt: "Workspace 1",
      },
      {
        type: "image",
        src: "/infrastructure/office_no_2/office_no_2_5.jpeg",
        alt: "Workspace 1",
      },
      {
        type: "image",
        src: "/infrastructure/office_no_2/office_no_2_6.jpeg",
        alt: "Workspace 1",
      },
    ],
  },
  {
    heading: "Head Of Growth",
    items: [
      {
        type: "image",
        src: "/infrastructure/head_of_growth/head_of_growth_1.jpeg",
        alt: "Conference Room",
      },
      {
        type: "image",
        src: "/infrastructure/head_of_growth/head_of_growth_2.jpeg",
        alt: "Conference Room",
      },
    ],
  },
  {
    heading: "Conference No . 3",
    items: [
      {
        type: "image",
        src: "/infrastructure/conference3/conference3_1.jpeg",
        alt: "Conference Room",
      },
      {
        type: "image",
        src: "/infrastructure/conference3/conference3_2.jpeg",
        alt: "Conference Room",
      },
      {
        type: "image",
        src: "/infrastructure/conference3/conference3_3.jpeg",
        alt: "Conference Room",
      },
      {
        type: "image",
        src: "/infrastructure/conference3/conference3_4.jpeg",
        alt: "Conference Room",
      },
      {
        type: "image",
        src: "/infrastructure/conference3/conference3_5.jpeg",
        alt: "Conference Room",
      }
    ],
  },
  {
    heading: "Work Space 4",
    items: [
      {
        type: "image",
        src: "/infrastructure/work_space_4/work_space_4_1.jpeg",
        alt: "Workspace 1",
      },
      {
        type: "image",
        src: "/infrastructure/work_space_4/work_space_4_2.jpeg",
        alt: "Workspace 1",
      },
    ],
  },
];

// Card Component yaha pe humne ek card banaya h jo image ya video ko dikhata h
// Yaha pe humne onClick function pass kiya h jo item ko select karega jab user click karega
function InfraCard({ item, onClick }) {
  return (
    <div
      className={`bg-white cursor-pointer ${CARD_SIZE} flex justify-center items-center flex-shrink-0`}
      onClick={() => onClick(item)}
    >
      {item.type === "image" ? (
        <img
          src={item.src}
          alt={item.alt}
          className="object-top w-full h-full "
        />
      ) : (
        <video className="w-full h-full" muted>
          <source src={item.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}

// Modal Component isme humne ek modal banaya h jo image ya video ko full screen me dikhata h
// Yaha pe humne onClose function pass kiya h jo modal ko band karega jab user click karega
function Modal({ item, onClose }) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "image" ? (
          <img src={item.src} alt={item.alt} className="w-full h-auto " />
        ) : (
          <video src={item.src} controls autoPlay className="w-full rounded" />
        )}
      </div>
    </div>
  );
}

  // Main Component yaha ki functional component hai jo sab kuch render karegi
// yaha pe humne useState hook ka use kiya h jo selectedItem ko track karega
function InfraImgVid() {
  const [selectedItem, setSelectedItem] = useState(null);
  const scrollContainerRefs = useRef([]);
  
  // Store scroll positions and animation states persistently
  const scrollStatesRef = useRef(Array(infraData.length).fill(null).map(() => ({
    scrollPosition: 0,
    scrollDirection: 1,
    atEnd: false,
    isPaused: false
  })));
  useEffect(() => {
    const animationFrames = [];
    
    // Setup animation for each gallery section
    scrollContainerRefs.current.forEach((container, index) => {
      if (!container) return;
      
      // Only apply auto-scrolling if the content exceeds container width
      if (container.scrollWidth > container.clientWidth) {
        const scrollState = scrollStatesRef.current[index];
        
        // Animation function
        const animate = () => {
          // Skip if paused
          if (scrollState.isPaused) {
            animationFrames[index] = requestAnimationFrame(animate);
            return;
          }
          
          // Get current scroll state
          let { scrollPosition, scrollDirection, atEnd } = scrollState;
          
          // Scroll speed - adjust for smoother scrolling
          const scrollSpeed = 0.7;
          
          if (scrollDirection === 1) {
            // Scrolling right
            scrollPosition += scrollSpeed;
            
            // Check if reached the end
            if (scrollPosition >= container.scrollWidth - container.clientWidth) {
              scrollPosition = container.scrollWidth - container.clientWidth;
              
              // Change direction after pause
              if (!atEnd) {
                atEnd = true;
                setTimeout(() => {
                  scrollState.scrollDirection = -1;
                  scrollState.atEnd = false;
                }, 2000); // 2 second pause at end
              }
            }
          } else {
            // Scrolling left
            scrollPosition -= scrollSpeed;
            
            // Check if reached the beginning
            if (scrollPosition <= 0) {
              scrollPosition = 0;
              
              // Change direction after pause
              if (!atEnd) {
                atEnd = true;
                setTimeout(() => {
                  scrollState.scrollDirection = 1;
                  scrollState.atEnd = false;
                }, 2000); // 2 second pause at beginning
              }
            }
          }
          
          // Update position in DOM and state
          container.scrollLeft = scrollPosition;
          scrollState.scrollPosition = scrollPosition;
          scrollState.atEnd = atEnd;
          
          // Continue animation
          animationFrames[index] = requestAnimationFrame(animate);
        };
        
        // Start animation
        animationFrames[index] = requestAnimationFrame(animate);
      }
    });
    
    // Cleanup animation frames on unmount
    return () => {
      animationFrames.forEach(frameId => {
        if (frameId) cancelAnimationFrame(frameId);
      });
    };
  }, []);

  // Pause/resume scrolling handlers
  const handleMouseEnter = (index) => {
    if (scrollStatesRef.current[index]) {
      scrollStatesRef.current[index].isPaused = true;
    }
  };

  const handleMouseLeave = (index) => {
    if (scrollStatesRef.current[index]) {
      scrollStatesRef.current[index].isPaused = false;
    }
  };

  return (
    <div className="space-y-8">
      {infraData.map((section, index) => (
        <div className="p-5 relative" key={index}>
          <h2 className="text-4xl lg:text-5xl text-white font-bold my-12">
            {section.heading}
          </h2>
          
          {/* No navigation buttons */}
          
          {/* Scrolling container */}
          <div 
            className="flex space-x-4 overflow-x-auto scrollbar-hide"
            ref={el => scrollContainerRefs.current[index] = el}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
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