'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronDown, IoSearchSharp } from 'react-icons/io5';
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaFileAlt,
  FaTrophy,
  FaUniversity,
  FaBriefcase,
  FaQuestionCircle,
} from 'react-icons/fa';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Head from 'next/head';

const categories = [
  {
    id: 'eligibility',
    name: 'Eligibility',
    icon: FaGraduationCap,
    color: '#0066cc',
  },
  {
    id: 'exam',
    name: 'Exam Details',
    icon: FaCalendarAlt,
    color: '#7c3aed',
  },
  {
    id: 'scholarship',
    name: 'Scholarship',
    icon: FaTrophy,
    color: '#ea580c',
  },
  {
    id: 'program',
    name: 'B.Voc Program',
    icon: FaUniversity,
    color: '#16a34a',
  },
  {
    id: 'career',
    name: 'Career & Placement',
    icon: FaBriefcase,
    color: '#dc2626',
  },
];

const faqs = [
  // ELIGIBILITY
  {
    category: 'eligibility',
    question:
      'What academic qualifications are required to appear for the exam?',
    answer:
      'Students who are:\n• Currently appearing for 12th grade, OR\n• 12th pass\n\nBoth are eligible.',
  },
  {
    category: 'eligibility',
    question: 'Can students from any stream apply for the scholarship test?',
    answer:
      'Yes, students from all streams (Science, Commerce, Arts) can apply.',
  },
  {
    category: 'eligibility',
    question: 'What is the minimum percentage required to be eligible?',
    answer:
      'There is no minimum percentage requirement. 12th appearing and 12th pass students are both eligible.',
  },
  {
    category: 'eligibility',
    question: 'Is there any age limit for applying?',
    answer: 'No, there is no age limit.',
  },
  {
    category: 'eligibility',
    question: 'Are Diploma or ITI students eligible for this scholarship?',
    answer: 'Yes, both Diploma and ITI students are eligible.',
  },
  {
    category: 'eligibility',
    question:
      'Do students from other universities or colleges qualify to apply?',
    answer: 'Yes, students from other universities or colleges can apply.',
  },
  {
    category: 'eligibility',
    question: 'Can students with a gap year apply?',
    answer:
      'Yes, students with gap years are eligible to apply for the scholarship exam and admission.',
  },
  {
    category: 'eligibility',
    question: 'Can international students apply for the B.Voc program?',
    answer:
      'Yes, international students may apply, subject to eligibility criteria and documentation.',
  },

  // EXAM DETAILS
  {
    category: 'exam',
    question: 'What is the last date to register for the scholarship exam?',
    answer: '25th March',
  },
  {
    category: 'exam',
    question: 'When will the exam be conducted?',
    answer: '27th, 28th, and 29th March',
  },
  {
    category: 'exam',
    question: 'Is there any application or exam fee?',
    answer: 'No, the exam is completely free.',
  },
  {
    category: 'exam',
    question: 'What is the exam pattern and syllabus?',
    answer:
      'Objective Type (MCQ Based)\n\nSubjects include:\n• Basic English\n• Applied Mathematics\n• Logical Reasoning\n• Digital Skills & Current Affairs\n• Technical Orientation\n• Creative Problem-Solving Skills\n• Data & Visual Interpretation',
  },
  {
    category: 'exam',
    question: 'How will students receive their admit card?',
    answer: 'No admit card is required. The exam will be conducted online.',
  },
  {
    category: 'exam',
    question: 'When and how will the results be declared?',
    answer:
      'Results will be declared tentatively within 15 days after the exam.',
  },
  {
    category: 'exam',
    question: 'What happens if I miss the scholarship exam dates?',
    answer:
      "Students who miss the exam dates may not be eligible for that session's scholarship opportunity. Late applicants usually cannot appear — apply before the registration deadline.",
  },

  // SCHOLARSHIP
  {
    category: 'scholarship',
    question: 'Is the scholarship available for all B.Voc specializations?',
    answer: 'Yes, the scholarship is available for all B.Voc specializations.',
  },
  {
    category: 'scholarship',
    question: 'Will the scholarship cover full fees or partial fees?',
    answer: 'The scholarship covers partial fees.',
  },
  {
    category: 'scholarship',
    question: 'How long will the scholarship remain valid?',
    answer: 'The scholarship is valid for the full degree program duration.',
  },
  {
    category: 'scholarship',
    question: 'How many scholarship seats are available?',
    answer:
      'Scholarship seats are limited and allocated based on merit in the scholarship exam. 250 seats are available this year.',
  },
  {
    category: 'scholarship',
    question: 'Is the scholarship valid for the entire degree duration?',
    answer:
      'Yes, once awarded, the scholarship is valid for the full degree program.',
  },
  {
    category: 'scholarship',
    question:
      'Are there performance or attendance criteria to continue the scholarship?',
    answer:
      'Students may be required to maintain minimum attendance and academic performance to retain the scholarship.',
  },
  {
    category: 'scholarship',
    question: 'Can the scholarship be transferred to another program?',
    answer:
      'No, the scholarship is applicable only to the selected B.Voc specialization. Scholarship benefits are generally specific to the B.Voc program in which you enrolled.',
  },
  {
    category: 'scholarship',
    question: 'Is the scholarship renewable each year?',
    answer:
      'The scholarship is typically valid for the full degree duration once awarded.',
  },

  // B.VOC PROGRAM
  {
    category: 'program',
    question: 'What programs does the B.Voc degree cover?',
    answer:
      'The B.Voc degree covers industry-oriented specializations such as:\n• Artificial Intelligence & Data Science\n• Multimedia, Animation & VFX\n\nThe institute offers Bachelor in Data Science & AI and Bachelor in Multimedia & Animation with industry-focused curriculum.',
  },
  {
    category: 'program',
    question: 'Is the B.Voc degree UGC recognized?',
    answer: 'Yes — the B.Voc degree is UGC recognized.',
  },
  {
    category: 'program',
    question: 'Is the B.Voc program NAAC accredited?',
    answer: "Yes — the institute's programs are NAAC A+ accredited.",
  },
  {
    category: 'program',
    question: 'Is the B.Voc syllabus industry-oriented?',
    answer:
      'Yes, the curriculum is designed according to current industry requirements with practical exposure. The curriculum includes hands-on projects and internship-focused learning.',
  },
  {
    category: 'program',
    question: 'Are internships included in the B.Voc program?',
    answer:
      'Yes, internships and live projects are integrated into the course structure. Internships and real-world project work are part of the program.',
  },
  {
    category: 'program',
    question: 'Will I receive certifications besides the degree?',
    answer:
      'Many programs include industry certifications along with the degree.',
  },
  {
    category: 'program',
    question: 'Are online classes available?',
    answer:
      'Some components may be offered online or in hybrid mode depending on the schedule.',
  },
  {
    category: 'program',
    question: 'Is there any reservation or quota for students?',
    answer: 'Specific reservation policies may apply per institute rules.',
  },
  {
    category: 'program',
    question:
      'Is there a campus visit or counselling session available before admission?',
    answer:
      'Yes, students can attend career counselling sessions and schedule a campus visit before taking admission.',
  },
  {
    category: 'program',
    question: 'Is academic counselling provided before registration?',
    answer:
      'Yes, free career guidance and counselling support is available for students. Free career guidance sessions help students pick the right program.',
  },

  // CAREER & PLACEMENT
  {
    category: 'career',
    question: 'Can I choose my career path after completing the B.Voc program?',
    answer:
      'Yes, graduates can pursue careers in AI, Data Science, Software Development, Multimedia Design, Animation, VFX, and related industries.',
  },
  {
    category: 'career',
    question: 'Does the institute provide placement assistance?',
    answer:
      'Yes, structured placement support, resume building guidance, and interview preparation are provided. Structured placement support, resume coaching, and industry connections are available.',
  },
  {
    category: 'career',
    question: 'Can students pursue higher education after completing B.Voc?',
    answer:
      'Yes, students can pursue postgraduate studies or specialized diploma programs after graduation. Many students pursue postgraduate studies or specialist diplomas after completing the B.Voc degree.',
  },
];

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        {/* ✅ Basic SEO */}
        <title>FAQs | B.Voc Scholarship 2026 | Nexcore Institute of Technology</title>
        <meta
          name="description"
          content="Find answers to all your questions about the ₹25 Lakh B.Voc Scholarship 2026 at Nexcore Institute of Technology — eligibility, exam dates, scholarship details, programs, and career placement."
        />
        <meta
          name="keywords"
          content="Nexcore FAQ, B.Voc scholarship FAQ, BVOC eligibility 2026, scholarship exam dates, B.Voc admission questions, AI ML course FAQ, animation VFX course FAQ, Nexcore Institute scholarship, BVOC UGC recognized, NAAC accredited BVOC"
        />
        <meta name="author" content="Nexcore Institute of Technology" />
        <link rel="canonical" href="https://nexcoreinstitute.org/faq" />

        {/* ✅ Open Graph */}
        <meta
          property="og:title"
          content="FAQs | ₹25 Lakh B.Voc Scholarship 2026 | Nexcore Institute of Technology"
        />
        <meta
          property="og:description"
          content="Got questions about the B.Voc Scholarship 2026? Find answers on eligibility, exam pattern, scholarship seats, programs, and placement at Nexcore Institute of Technology."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexcoreinstitute.org/faq" />
        <meta property="og:image" content="https://nexcoreinstitute.org/og-image.png" />
        <meta property="og:site_name" content="Nexcore Institute of Technology" />
        <meta property="og:locale" content="en_IN" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FAQs | B.Voc Scholarship 2026 | Nexcore Institute of Technology"
        />
        <meta
          name="twitter:description"
          content="All your B.Voc scholarship & admission questions answered — eligibility, exam dates, programs, and placements."
        />
        <meta name="twitter:image" content="https://nexcoreinstitute.org/og-image.png" />

        {/* ✅ Structured Data — FAQPage Schema (helps Google show FAQs directly in search results) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          })}
        </script>
      </Head>

      <Navbar />
      <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
        {/* HERO SECTION */}
        <section
          style={{
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '8rem',
            paddingBottom: '3rem',
            background: 'linear-gradient(135deg, #0066cc 0%, #004999 100%)',
            padding: '8rem 1rem 3rem',
          }}
        >
          <div
            style={{
              maxWidth: '72rem',
              margin: '0 auto',
              position: 'relative',
              zIndex: 10,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ textAlign: 'center', color: '#fff' }}
            >
              <div
                style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  display: 'inline-block',
                }}
              >
                <FaQuestionCircle />
              </div>
              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  fontWeight: '900',
                  marginBottom: '1rem',
                  lineHeight: '1.1',
                }}
              >
                Frequently Asked Questions
              </h1>
              <p
                style={{
                  fontSize: 'clamp(1rem, 3vw, 1.25rem)',
                  maxWidth: '42rem',
                  margin: '0 auto',
                  opacity: '0.95',
                  lineHeight: '1.6',
                }}
              >
                Everything you need to know about the ₹25 Lakh Scholarship
                Program 2026
              </p>
            </motion.div>
          </div>
        </section>

        {/* SEARCH BAR */}
        <section style={{ padding: '0 1rem', transform: 'translateY(-2rem)' }}>
          <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                position: 'relative',
                background: '#fff',
                borderRadius: '12px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                overflow: 'hidden',
              }}
            >
              <IoSearchSharp
                style={{
                  position: 'absolute',
                  left: '1.25rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: '1.5rem',
                  color: '#6b7280',
                }}
              />
              <input
                type="text"
                placeholder="Search for questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '1.25rem 1.25rem 1.25rem 3.5rem',
                  fontSize: '1rem',
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                }}
              />
            </motion.div>
          </div>
        </section>

        {/* CATEGORY FILTERS */}
        <section style={{ padding: '3rem 1rem 2rem' }}>
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                justifyContent: 'center',
              }}
            >
              <button
                onClick={() => setActiveCategory('all')}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: activeCategory === 'all' ? '#0066cc' : '#fff',
                  color: activeCategory === 'all' ? '#fff' : '#000',
                  border: '2px solid #e5e7eb',
                  borderRadius: '50px',
                  fontWeight: '700',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow:
                    activeCategory === 'all'
                      ? '0 4px 12px rgba(0, 102, 204, 0.3)'
                      : 'none',
                }}
              >
                All Questions
              </button>
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1.5rem',
                      background:
                        activeCategory === cat.id ? cat.color : '#fff',
                      color: activeCategory === cat.id ? '#fff' : '#000',
                      border: '2px solid #e5e7eb',
                      borderRadius: '50px',
                      fontWeight: '700',
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      boxShadow:
                        activeCategory === cat.id
                          ? `0 4px 12px ${cat.color}40`
                          : 'none',
                    }}
                  >
                    <Icon />
                    {cat.name}
                  </button>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* FAQ LIST */}
        <section style={{ padding: '2rem 1rem 5rem' }}>
          <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
            {filteredFAQs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  textAlign: 'center',
                  padding: '3rem',
                  background: '#fff',
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb',
                }}
              >
                <p style={{ fontSize: '1.25rem', color: '#6b7280' }}>
                  No questions found matching your search.
                </p>
              </motion.div>
            ) : (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                {filteredFAQs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  const categoryInfo = categories.find(
                    (c) => c.category === faq.category,
                  );

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      style={{
                        background: '#fff',
                        borderRadius: '12px',
                        border: '1px solid #e5e7eb',
                        overflow: 'hidden',
                        boxShadow: isOpen
                          ? '0 8px 24px rgba(0, 0, 0, 0.08)'
                          : '0 2px 8px rgba(0, 0, 0, 0.04)',
                        transition: 'all 0.3s',
                      }}
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        style={{
                          width: '100%',
                          padding: '1.5rem',
                          background: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          textAlign: 'left',
                          transition: 'all 0.3s',
                        }}
                      >
                        <div
                          style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem',
                          }}
                        >
                          <div
                            style={{
                              fontSize: '1.125rem',
                              fontWeight: '700',
                              color: '#000',
                              lineHeight: '1.4',
                            }}
                          >
                            {faq.question}
                          </div>
                        </div>
                        <div
                          style={{
                            width: '2rem',
                            height: '2rem',
                            borderRadius: '50%',
                            background: isOpen ? '#0066cc' : '#f3f4f6',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s',
                            flexShrink: 0,
                          }}
                        >
                          <IoChevronDown
                            style={{
                              fontSize: '1.25rem',
                              color: isOpen ? '#fff' : '#6b7280',
                              transform: isOpen
                                ? 'rotate(180deg)'
                                : 'rotate(0)',
                              transition: 'transform 0.3s',
                            }}
                          />
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ overflow: 'hidden' }}
                          >
                            <div
                              style={{
                                padding: '0 1.5rem 1.5rem',
                                color: '#4a5568',
                                fontSize: '1rem',
                                lineHeight: '1.7',
                                whiteSpace: 'pre-line',
                              }}
                            >
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* CTA SECTION */}
        <section
          style={{
            padding: '3rem 1rem',
            background: '#fff',
            borderTop: '1px solid #e5e7eb',
          }}
        >
          <div
            style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}
          >
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
                fontWeight: '900',
                color: '#000',
                marginBottom: '1rem',
              }}
            >
              Still Have Questions?
            </h2>
            <p
              style={{
                fontSize: '1.125rem',
                color: '#4a5568',
                marginBottom: '2rem',
                lineHeight: '1.6',
              }}
            >
              Our admissions team is here to help you with any queries about the
              scholarship program.
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1rem',
              }}
            >
              <a
                href="https://wa.me/9892398976?text=Hi%2C%20I%20have%20questions%20about%20the%20scholarship%20program."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1rem 2rem',
                  background: '#16a34a',
                  color: '#fff',
                  borderRadius: '8px',
                  fontWeight: '700',
                  fontSize: '1rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(22, 163, 74, 0.3)',
                  transition: 'all 0.3s',
                }}
              >
                WhatsApp Us
              </a>
              <a
                href="tel:+9892398976"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1rem 2rem',
                  background: '#0066cc',
                  color: '#fff',
                  borderRadius: '8px',
                  fontWeight: '700',
                  fontSize: '1rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(0, 102, 204, 0.3)',
                  transition: 'all 0.3s',
                }}
              >
                Call Us
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default FAQPage;