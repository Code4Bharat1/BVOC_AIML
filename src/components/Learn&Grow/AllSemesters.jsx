import { useEffect, useState } from 'react';

const SemesterCard = ({ position, number, title, isVisible }) => {
  const isLeft = position === 'left';
  const svgPath = isLeft ? '/elements/SemesterLeft.svg' : '/elements/SemesterRight.svg';
  
  return (
    <div 
      className={`w-full flex ${isLeft ? 'justify-start' : 'justify-end'} mb-6 transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100' : (isLeft ? '-translate-x-full' : 'translate-x-full') + ' opacity-0'}`}
    >
      <div className="w-5/6 relative">
        {/* SVG background from external file */}
        <div className="relative">
          <img 
            src={svgPath} 
            alt={`Semester ${number} background`} 
            className="w-full h-auto"
          />
          
          {/* Content overlaid on the SVG */}
          <div className="absolute inset-0 flex flex-col justify-center px-12">
            <h3 className="text-white font-bold text-lg mb-1">SEMESTER {number}</h3>
            <p className="text-white text-sm">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AllSemesters = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  
  // Semester data
  const semesters = [
    {
      position: 'left',
      number: 1,
      title: 'YOU WILL LEARN HOW TO CREATE FAST AND EFFICIENT APPROACHES FOR LARGE SYSTEMS'
    },
    {
      position: 'right',
      number: 2,
      title: 'FUNDAMENTAL KNOWLEDGE OF DIGITAL SECURITY FOR BEGINNERS'
    },
    {
      position: 'left',
      number: 3,
      title: 'A DEEP DIVE INTO PROTECTING COMPLEX SYSTEMS AND ARCHITECTURES'
    },
    {
      position: 'right',
      number: 4,
      title: 'YOU WILL LEARN LEVEL: MIDDLE LEVEL'
    },
    {
      position: 'left',
      number: 5,
      title: 'YOU WILL LEARN LEVEL: SENIOR LEVEL'
    },
    {
      position: 'right',
      number: 6,
      title: 'YOU WILL LEARN LEVEL: ADVANCED LEVEL'
    }
  ];

  useEffect(() => {
    // Animate cards sequentially
    const animationDelay = 300; // ms between each card animation
    
    semesters.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, index]);
      }, index * animationDelay);
    });
  }, []);

  return (
    <div className="lg:hidden py-6 px-4 bg-gray-900">
      <div className="text-center mb-6">
        <h2 className="text-purple-400 font-bold text-xl bg-purple-200 bg-opacity-20 py-2 px-4 rounded-full inline-block">ALL SEMESTERS</h2>
      </div>
      
      <div className="flex flex-col">
        {semesters.map((semester, index) => (
          <SemesterCard 
            key={index}
            position={semester.position}
            number={semester.number}
            title={semester.title}
            isVisible={visibleItems.includes(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AllSemesters;