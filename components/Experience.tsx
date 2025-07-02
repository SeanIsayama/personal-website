'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, Building, GraduationCap, Users, Briefcase, Diamond, Wifi, Crown, Building2, BookOpen, School, ChevronDown, ExternalLink } from 'lucide-react'

// Update type to match new categories
export type ExperienceType = 'Work' | 'Internship' | 'Extracurricular'

const experienceList = [
  {
    title: 'Data Engineer Intern',
    company: 'Treasure Data',
    website: 'https://www.treasuredata.com/',
    location: 'Hybrid',
    period: 'June 2025 - Present',
    description: 'Software engineering internship focusing on data analytics and cloud infrastructure.',
    fullDescription: 'Software engineering internship at Treasure Data, a leading customer data platform. Worked on data analytics, cloud infrastructure, and customer data processing solutions. This role involved working with large-scale data processing, machine learning pipelines, and cloud-native applications.',
    technologies: ['Python', 'SQL', 'AWS', 'Data Analytics', 'Machine Learning', 'Big Data Processing', 'Cloud Infrastructure'],
    icon: Diamond,
    achievements: ['Optimized data processing pipelines', 'Implemented new analytics features', 'Reduced processing time by 30%']
  },
  {
    title: 'VP of Quantitative Technologies',
    company: 'Student Foundation Investment Committee',
    website: 'https://sficadvertising.wixsite.com/sfic',
    location: 'UC San Diego',
    period: 'Sept 2024 - Present',
    description: 'Re-founded and served as Vice President of Quantitative Technologies, leading the organization\'s technical initiatives.',
    fullDescription: 'Re-founded and served as Vice President of Quantitative Technologies at the Student Foundation for Investment and Consulting (SFIC). Led technical initiatives, managed a team of developers, and oversaw the development of quantitative trading strategies and financial analysis tools.',
    technologies: ['Leadership', 'Quantitative Finance', 'Team Management', 'Python', 'Financial Modeling', 'Risk Analysis'],
    icon: Crown,
    achievements: ['Led team of 15+ members', 'Developed automated trading strategies', 'Increased club membership by 40%']
  },
  {
    title: 'Software Development Engineer Intern',
    company: 'SORACOM',
    website: 'https://soracom.io/',
    location: 'Hybrid',
    period: 'June 2024 - September 2024',
    description: 'Software engineering internship working on IoT and cloud connectivity solutions.',
    fullDescription: 'Software engineering internship at SORACOM, a leading IoT connectivity platform. Worked on developing and maintaining cloud-based solutions for IoT device management. This role involved working with real-time data processing, API development, and cloud infrastructure management.',
    technologies: ['IoT', 'Cloud Computing', 'JavaScript', 'Node.js', 'AWS', 'API Development', 'Real-time Data Processing'],
    icon: Wifi,
    achievements: ['Developed new API endpoints for device management', 'Improved system performance by 25%', 'Collaborated with international team members']
  },
  {
    title: 'Data Science Fellow',
    company: 'Deloitte',
    website: 'https://www.deloitte.com/us/en.html',
    location: 'Remote',
    period: 'April 2024 - June 2024',
    description: 'Participated in Deloitte\'s mentorship program, gaining insights into consulting and professional development.',
    fullDescription: 'Participated in Deloitte\'s prestigious mentorship program, where I was paired with experienced consultants who provided guidance on career development, industry insights, and professional networking. This program offered valuable exposure to the consulting world and helped me understand business strategy and client relations.',
    technologies: ['Consulting', 'Professional Development', 'Networking', 'Business Strategy', 'Client Relations'],
    icon: Building2,
    achievements: ['Completed intensive consulting training', 'Built professional network with industry leaders', 'Gained insights into enterprise-level problem solving']
  },
  {
    title: 'Private Tutor',
    company: 'Online Tutoring',
    location: 'Remote',
    period: 'Oct 2023 - Present',
    description: 'Started providing online tutoring services, helping students with various subjects and academic support.',
    fullDescription: 'Began offering personalized online tutoring services to students across different subjects. This experience has enhanced my communication skills, patience, and ability to explain complex concepts in simple terms. I\'ve helped students improve their grades and build confidence in their academic abilities.',
    technologies: ['Teaching', 'Communication', 'Online Education', 'Problem Solving', 'Student Assessment'],
    icon: BookOpen,
    achievements: ['Helped 20+ students improve their grades', 'Developed personalized learning plans', 'Achieved 95% student satisfaction rate']
  },
  {
    title: 'UC San Diego',
    company: 'University',
    location: 'San Diego, CA',
    period: 'Sep 2022',
    description: 'Started undergraduate studies at UC San Diego, pursuing degree in Computer Science.',
    fullDescription: 'Began my academic journey at UC San Diego, majoring in Computer Science. This marked the start of my formal education in software development, algorithms, and computer systems. The rigorous curriculum has provided a strong foundation in both theoretical and practical aspects of computing.',
    technologies: ['Computer Science', 'Mathematics', 'Programming', 'Data Structures', 'Algorithms'],
    icon: School,
    achievements: ['Maintained strong academic performance', 'Participated in various CS clubs and activities']
  }
]

const ZIGZAG_OFFSET = 48; // px left/right offset for zigzag

// Color map for experience types
const typeColorMap = {
  Work: 'border-blue-400 bg-blue-50 dark:bg-blue-900',
  Internship: 'border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800',
  Extracurricular: 'border-pink-400 bg-pink-50 dark:bg-pink-900',
  Education: 'border-yellow-400 bg-yellow-50 dark:bg-yellow-900',
  Default: 'border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800',
}

const getYear = (exp) => {
  if (exp.period && exp.period.match(/\d{4}/)) {
    return exp.period.match(/\d{4}/)[0]
  }
  return '2022'
}

// Find the index of the UC San Diego experience
const ucsdIdx = experienceList.findIndex(exp => exp.title.toLowerCase().includes('uc san diego'))

// Map: year -> first index in experienceList, but force 2022 to UCSD
const yearToFirstIdx = experienceList.reduce((acc, exp, idx) => {
  const year = getYear(exp)
  if (year === '2022') {
    acc[year] = ucsdIdx
  } else if (!(year in acc)) {
    acc[year] = idx
  }
  return acc
}, {})
const uniqueYears = Object.keys(yearToFirstIdx)

// Helper to get type from experience
const getType = (exp) => {
  if (exp.type) return exp.type
  const title = exp.title?.toLowerCase() || ''
  const company = exp.company?.toLowerCase() || ''
  if (title.includes('intern') || company.includes('intern')) return 'Internship'
  if (title.includes('work') || company.includes('work')) return 'Work'
  if (title.includes('club') || company.includes('club') || title.includes('extracurricular')) return 'Extracurricular'
  if (title.includes('university') || title.includes('uc san diego') || title.includes('education')) return 'Education'
  return 'Default'
}

const Experience = () => {
  const [activeIdx, setActiveIdx] = useState(0)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const detailRefs = useRef<(HTMLDivElement | null)[]>([])

  // Intersection Observer to sync scroll
  useEffect(() => {
    const handleScroll = () => {
      const offsets = detailRefs.current.map((el) => {
        if (!el) return { top: Infinity, bottom: Infinity }
        const rect = el.getBoundingClientRect()
        return { top: rect.top, bottom: rect.bottom, height: rect.height }
      })
      // Use a lower threshold: 60% down the viewport
      const highlightY = window.innerHeight * 0.6
      let minDist = Infinity
      let idx = 0
      offsets.forEach((o, i) => {
        const boxMiddle = (o.top + o.bottom) / 2
        const dist = Math.abs(boxMiddle - highlightY)
        if (dist < minDist) {
          minDist = dist
          idx = i
        }
      })
      setActiveIdx(idx)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="experience" className="py-24 bg-custom-light-primary dark:bg-custom-dark-primary">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A visual roadmap of my work, internships, and extracurriculars.
          </p>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 min-h-[80vh]">
          {/* Left: Journey Map and Year Markers (sticky on desktop) */}
          <div className="md:w-1/3 w-full flex flex-row items-start relative md:sticky md:top-32 h-fit mb-8 md:mb-0">
            {/* Year markers column */}
            <div className="hidden md:flex flex-col items-end pr-2 relative" style={{ minWidth: 48 }}>
              {experienceList.map((exp, i) => {
                const year = getYear(exp)
                const isFirst = yearToFirstIdx[year] === i
                const isActive = getYear(experienceList[activeIdx]) === year
                return isFirst ? (
                  <span
                    key={year}
                    className={`block text-xs font-mono mb-8 transition-colors select-none ${isActive ? 'text-yellow-500 font-bold' : 'text-gray-400 dark:text-gray-600'}`}
                    style={{ minHeight: 64 }}
                  >
                    &ndash;{year}
                  </span>
                ) : (
                  <span key={i} style={{ minHeight: 64, display: 'block' }} />
                )
              })}
            </div>
            {/* Journey Map */}
            <div className="flex-1 flex flex-col items-center relative">
              {/* Vertical line with subtle animation */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: experienceList.length * 120 }}
                transition={{ duration: 1, type: 'spring' }}
                className="absolute left-1/2 -translate-x-1/2 top-8 w-1 bg-gradient-to-b from-indigo-400/80 via-pink-400/60 to-yellow-300/60 rounded-full z-0"
                style={{ height: experienceList.length * 120 }}
              />
              <div className="flex flex-col items-center w-full z-10 pt-8 pb-8">
                {experienceList.map((exp, i) => {
                  const Icon = exp.icon
                  const isActive = i === activeIdx
                  const isPast = i < activeIdx
                  const isHovered = hoveredIdx === i
                  const offset = (i % 2 === 0 ? -1 : 1) * ZIGZAG_OFFSET
                  // Determine color by type
                  const type = getType(exp)
                  const colorClass = typeColorMap[type] || typeColorMap.Default
                  return (
                    <motion.div
                      key={i}
                      className={`relative flex flex-col items-center w-full`}
                      animate={{
                        scale: isActive ? 1.18 : 1,
                        opacity: isPast ? 0.5 : 1,
                        filter: isActive ? 'drop-shadow(0 4px 16px rgba(255,180,80,0.18))' : 'none',
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    >
                      {/* Node with zigzag offset */}
                      <motion.div
                        className={`flex items-center justify-center rounded-full border-4 shadow-lg w-16 h-16 transition-colors duration-300 ${colorClass} ${isActive ? 'ring-2 ring-yellow-400' : ''}`}
                        style={{
                          zIndex: isActive ? 10 : 1,
                          cursor: 'pointer',
                          position: 'relative',
                          left: offset,
                          boxShadow: isHovered ? '0 4px 24px 0 rgba(255, 200, 80, 0.10), 0 0 0 2px #fde68a' : undefined,
                          border: isHovered ? '2px solid #fde68a' : undefined,
                          background: isHovered ? 'rgba(255,255,255,0.98)' : undefined,
                          transition: 'box-shadow 0.2s, border 0.2s, background 0.2s',
                        }}
                        whileHover={{ scale: 1.08 }}
                        onMouseEnter={() => setHoveredIdx(i)}
                        onMouseLeave={() => setHoveredIdx(null)}
                        onClick={() => {
                          detailRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                          setActiveIdx(i)
                        }}
                      >
                        <Icon size={32} className={isActive ? 'text-yellow-500' : 'text-gray-400 dark:text-gray-500'} />
                      </motion.div>
                      {/* Connector to next node */}
                      {i < experienceList.length - 1 && (
                        <motion.div
                          className="w-1 bg-gradient-to-b from-yellow-300/60 to-indigo-400/80 rounded-full"
                          style={{ height: 88, left: offset, position: 'relative' }}
                          initial={{ opacity: 0.7 }}
                          animate={{ opacity: isActive ? 1 : 0.7 }}
                          transition={{ duration: 0.4 }}
                        />
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
          {/* Right: Details Panel (main page scroll) */}
          <div className="md:w-2/3 w-full space-y-10">
            {experienceList.map((exp, i) => (
              <div
                key={i}
                ref={el => { detailRefs.current[i] = el; }}
                className={`rounded-xl border shadow-lg p-6 bg-white/90 dark:bg-gray-900/90 transition-all duration-300 ${i === activeIdx ? 'ring-2 ring-yellow-400 border-yellow-200 dark:border-yellow-600' : 'border-gray-200 dark:border-gray-700'}`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <exp.icon size={28} className="text-yellow-400" />
                  <div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{exp.title}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-300">{exp.company} &middot; {exp.period}</div>
                  </div>
                </div>
                <div className="text-gray-700 dark:text-gray-200 mb-2">{exp.fullDescription}</div>
                {exp.achievements && (
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {exp.achievements.map((ach, j) => (
                      <li key={j}>{ach}</li>
                    ))}
                  </ul>
                )}
                {exp.technologies && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.technologies.map((tech, j) => (
                      <span key={j} className="px-2 py-1 rounded bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-200 text-xs font-medium">{tech}</span>
                    ))}
                  </div>
                )}
                {exp.website && (
                  <a href={exp.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-500 hover:underline mt-2 text-xs">
                    Visit Website
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience