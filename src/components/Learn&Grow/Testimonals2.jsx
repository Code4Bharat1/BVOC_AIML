"use client";

import { useState, useEffect, useRef } from "react";
import { Linkedin, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Uzer Sayed",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Uzer Sayed.jpg",
  },
  {
    quote:
      "This platform has brought so much value to our team. We love how intuitive and powerful it is.",
    name: "Pravin Mohana Sundaram Chettiar",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/PRAVIN.jpg",
  },
  {
    quote:
      "I love how the program focuses not just on coding but on critical thinking, teamwork, and solving real-world problems.",
    name: "Farhan Faiyaz Tolkar",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Farhan Tolkar.jpg",
  },
  {
    quote:
      "The exposure we get to cloud computing and machine learning tools here is something most colleges only promise.",
    name: "Mohd Irfan Mohd Noor Alam Shaikh",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Mohd Irfan.jpg",
  },
  {
    quote:
      "The faculty's commitment to student success is outstanding. They make complex AI topics simple and fun.",
    name: "Mohd Ahmed Waseem Khan",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Ahmed khan.jpg",
  },
  {
    quote:
      "The real-time projects gave me the confidence to handle data pipelines and APIs just like in the industry.",
    name: "Mohammed Taha Mohd Yusuf Choudhary",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Taha Choudhary.jpg",
  },
  {
    quote:
      "The project-based learning structure ensures we apply everything we learn immediately — it's the best part.",
    name: "Affan Rizwan Khan",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Affan khan.jpg",
  },
  {
    quote:
      "Being part of this program made me realize how AI can transform industries and communities alike.",
    name: "Khan Shahid Ali Asgar Ali",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Khan Shahid.jpg",
  },
  {
    quote:
      "The mentorship and guidance from faculty helped me turn my curiosity for AI into real-world projects that I can proudly showcase.",
    name: "Shaikh Iqfat Nasir",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Shaikh Iqfat Nasir.jpg",
  },
  {
    quote:
      "Every module feels practical and industry-relevant. The labs are well-equipped and designed to make us job-ready.",
    name: "Khan Umera Mohd Salim",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Umera Khan.jpg",
  },
  {
    quote:
      "From day one, we're encouraged to think like innovators. It's not just about marks but about building real impact.",
    name: "Ansari Sahil Seraj Ahmad",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Sahil Ansari.jpg",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Sayyed Mohammed Asif Abdul Rehman",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Sayyed Asif.jpg",
  },
  {
    quote:
      "I really appreciate how accessible our mentors are. No question ever goes unanswered here.",
    name: "Faiz Ahmed Moiz Ahmed Shaikh",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Faiz Ahmed Shaikh.jpg",
  },
  {
    quote:
      "I've developed technical and soft skills both — presentation, teamwork, and communication matter here.",
    name: "Khan Ramzan Shamshad",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Ramzan Khan.jpg",
  },
  {
    quote:
      "Joining BVOC AI & ML has been the best decision of my academic journey. The blend of theory and hands-on learning keeps us ahead of trends.",
    name: "Khan Mohd Zaid Riyaz Ahmed",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Khan Mohammed Zaid.jpg",
  },
  {
    quote:
      "The labs are state-of-the-art, and access to real cloud resources makes the experience feel world-class.",
    name: "Tamanna Ansari",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Tamanna Ansari.jpg",
  },
  {
    quote:
      "I like how learning is never theoretical. We build models, test, and improve them like real data scientists.",
    name: "Kailash Ganesh Mahto",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Kailash Mahto.jpg",
  },
  {
    quote:
      "Our mentors constantly encourage innovation and experimentation. That's what makes this program special.",
    name: "Sajiya Badruduja Shaikh",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/sajiya shaikh.jpg",
  },
  {
    quote:
      "The curriculum is so well structured — each semester feels like a step closer to becoming a professional.",
    name: "Obaidullah Mohd Zahiruddin Shaikh",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Shaikh Obaidullah.jpg",
  },
  {
    quote:
      "Learning with Nexcore Alliance and Code4Bharat has opened doors to internships and collaborations I never expected.",
    name: "Vishesh Shivlal Jaiswar",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/Vishesh jaiswar.jpg",
  },
  {
    quote:
      "It has been an incredible journey with this tool. The ease of use and efficiency are unmatched.",
    name: "Piyush Jayprakash Patwa",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/testimonial4.png",
  },
  {
    quote:
      "This program has turned my curiosity for technology into a clear career path. The experience is priceless.",
    name: "Das Sudeep Prashant",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/testimonial3.png",
  },
  {
    quote:
      "Every week brings something new to learn — from AI ethics to real-time deployment. It's exciting and challenging.",
    name: "Sanskar Sunil Ashan",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/testimonial2.png",
  },
  {
    quote:
      "I never thought I'd be able to train models and deploy them before graduation. BVOC AI & ML made that possible!",
    name: "Ayan Yusuf Khan",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/testimonial2.png",
  },
  {
    quote:
      "Every assignment feels like a mini startup challenge. It pushes me to think like an engineer and entrepreneur.",
    name: "Mohd Yasin Baban Sayyed",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/testimonial2.png",
  },
  {
    quote:
      "I've grown immensely not just as a student but as a problem-solver. This course builds confidence and creativity.",
    name: "Khan Nafisa Ali Ahmed",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/testimonial2.png",
  },
  {
    quote:
      "The practical exposure here bridges the gap between what's taught in class and what's needed in the industry.",
    name: "Kazim Shahid Raza Salmani",
    role: "BVOC AI & ML (2025-2028)",
    src: "/Testimonials/testimonial2.png",
  },
  
  {
    quote:
      "Hackathons, projects, and teamwork taught me more about leadership than any theory book could.",
    name: "Farhan Shaikh",
    role: "BVOC AI & ML (2025-2028)",
  },
  {
    quote:
      "This course is a perfect mix of coding, creativity, and career preparation. Every week feels productive.",
    name: "Sanjana Reddy",
    role: "BVOC AI & ML (2025-2028)",
  },
  {
    quote:
      "It’s amazing how the instructors make complex algorithms so easy to understand with real-life examples.",
    name: "Kartik Joshi",
    role: "BVOC AI & ML (2025-2028)",
  },
  {
    quote:
      "From Python basics to deploying deep learning models — I’ve learned the complete journey of AI development.",
    name: "Tanya D’Souza",
    role: "BVOC AI & ML (2025-2028)",
  },
  {
    quote:
      "Every semester brings new excitement — the hands-on labs are the highlight of this entire program.",
    name: "Vishal Rajput",
    role: "BVOC AI & ML (2025-2028)",
  },
  {
    quote:
      "I’ve built projects that I can showcase to recruiters — something that makes me confident about placements.",
    name: "Manisha Pawar",
    role: "BVOC AI & ML (2025-2028)",
  },
  {
    quote:
      "The faculty’s mentorship and one-on-one sessions really help me understand where I stand and how to improve.",
    name: "Rehan Ali",
    role: "BVOC AI & ML (2025-2028)",
  },
  {
    quote:
      "Learning AI here isn’t about rote memorization; it’s about experimenting, failing, and building better each time.",
    name: "Bhavika Jain",
    role: "BVOC AI & ML (2025-2028)",
  },
  {
    quote:
      "I love the community vibe. Everyone helps each other grow — it feels like a family pushing toward success.",
    name: "Aditya Chauhan",
    role: "BVOC AI & ML (2025-2028)",
  },
  {
    quote:
      "With every workshop, I feel more confident about tackling real-world data and solving meaningful problems.",
    name: "Sofia Shaikh",
    role: "BVOC AI & ML (2025-2028)",
  },
  
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 1000);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 1000);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section ref={containerRef} className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#2C2C2C' }}>
            Student <span style={{ color: '#007BFF' }}>Testimonials</span>
          </h2>
          <p className="text-gray-600 text-lg">Hear from our students about their experience</p>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="w-full lg:w-2/5 relative">
                <div className="relative h-80 lg:h-[500px] bg-gradient-to-br from-blue-50 to-gray-100">
                  <img
                    src={currentTestimonial.src}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover transition-opacity duration-500"
                    key={currentIndex}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 p-8 lg:p-12 flex flex-col justify-between h-80 lg:h-[500px]">
                {/* Quote Icon */}
                <div className="mb-3">
                  <svg
                    className="w-10 h-10 text-blue-500 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                  </svg>
                </div>

                {/* Quote Text */}
                <div className="flex-1 mb-4">
                  <p
                    className="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed transition-opacity duration-500"
                    key={`quote-${currentIndex}`}
                  >
                    "{currentTestimonial.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="border-t border-gray-200 pt-5">
                  {currentTestimonial.linkedin ? (
                    <a
                      href={currentTestimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 group transition-colors duration-200"
                    >
                      <span className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-200">
                        <Linkedin className="w-5 h-5 text-white" />
                      </span>
                      <div>
                        <p className="font-bold text-lg text-gray-800 group-hover:text-blue-500 transition-colors duration-200">
                          {currentTestimonial.name}
                        </p>
                        <p className="text-sm text-blue-600 font-medium">
                          {currentTestimonial.role}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div>
                      <p className="font-bold text-lg text-gray-800">{currentTestimonial.name}</p>
                      <p className="text-sm text-blue-600 font-medium">{currentTestimonial.role}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 flex items-center justify-center shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsPaused(true);
                    setTimeout(() => setIsPaused(false), 1000);
                  }}
                  className={`transition-all duration-200 rounded-full ${
                    index === currentIndex
                      ? "w-8 h-3 bg-blue-500"
                      : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 flex items-center justify-center shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Counter */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            {currentIndex + 1} of {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  );
}