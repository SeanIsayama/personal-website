'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaAws, FaDocker, FaGitAlt, FaPython, FaRProject, FaLinux, FaNodeJs } from 'react-icons/fa'
import { SiPytorch, SiFastapi, SiApacheairflow, SiApachespark, SiDask, SiPostgresql } from 'react-icons/si'

const tools = [
  { name: 'AWS', icon: <FaAws size={18} /> },
  { name: 'Docker', icon: <FaDocker size={18} /> },
  { name: 'Git', icon: <FaGitAlt size={18} /> },
  { name: 'Python', icon: <FaPython size={18} /> },
  { name: 'PyTorch', icon: <SiPytorch size={18} /> },
  { name: 'FastAPI', icon: <SiFastapi size={18} /> },
  { name: 'SQL', icon: <SiPostgresql size={18} /> },
  { name: 'Spark', icon: <SiApachespark size={18} /> },
  { name: 'Dask', icon: <SiDask size={18} /> },
  { name: 'Node.js', icon: <FaNodeJs size={18} /> },
  { name: 'R', icon: <FaRProject size={18} /> },
  { name: 'Linux', icon: <FaLinux size={18} /> },
]

const About = () => {
  const [hoveredSection, setHoveredSection] = useState<'dataScience' | 'mathStats' | 'journey' | null>(null)

  const vennData = {
    dataScience: {
      label: 'Data Science',
      color: 'from-orange-400 to-red-500',
      hoverColor: 'from-orange-500 to-red-600',
      content: 'Machine Learning, Data Engineering, Programming',
      keySkills: ['Python', 'Machine Learning', 'Data Engineering', 'SQL', 'Big Data'],
      size: 'w-48 h-40',
      borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%'
    },
    mathStats: {
      label: 'Probability/Statistics',
      color: 'from-amber-400 to-yellow-500',
      hoverColor: 'from-amber-500 to-yellow-600',
      content: 'Statistical Analysis, Mathematical Modeling',
      keySkills: ['Statistical Analysis', 'Probability Theory', 'Mathematical Modeling', 'Hypothesis Testing', 'Regression'],
      size: 'w-40 h-52',
      borderRadius: '38% 62% 63% 37% / 41% 44% 56% 59%'
    },
    journey: {
      label: 'My Journey',
      color: 'from-pink-400 to-rose-500',
      hoverColor: 'from-pink-500 to-rose-600',
      content: 'Personal Growth, Learning Path, Experiences',
      keySkills: ['Continuous Learning', 'Problem Solving', 'Adaptability', 'Collaboration', 'Innovation'],
      size: 'w-44 h-44',
      borderRadius: '50% 50% 33% 67% / 55% 27% 73% 45%'
    }
  }

  return (
    <section id="about" className="py-20 bg-custom-light-secondary dark:bg-custom-dark-secondary">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Half - About Me Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm a passionate Data Scientist and Machine Learning Engineer with a unique academic foundation. 
                My double major in Data Science and Mathematics - Probability & Statistics provides me with both 
                the technical skills to build ML systems and the analytical rigor to ensure they produce reliable, 
                interpretable results.
              </p>
              <p className="leading-relaxed">
                Beyond technical expertise, I'm deeply interested in the intersection of technology and social impact. 
                My research and projects often focus on addressing real-world challenges, particularly around social 
                justice and ethical AI development.
              </p>
            </div>
          </motion.div>

          {/* Right Half - Interactive Venn Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Header above blob plot */}
            <div className="mb-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 tracking-wide">Skills I've Gained</h3>
            </div>
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* Data Science Blob */}
              <motion.div 
                className={`absolute ${vennData.dataScience.size} bg-gradient-to-br ${hoveredSection === 'dataScience' ? vennData.dataScience.hoverColor : vennData.dataScience.color} opacity-80 transform -translate-x-20 -translate-y-2 cursor-pointer transition-all duration-500 ${hoveredSection === 'dataScience' ? 'scale-125 shadow-2xl z-20' : hoveredSection ? 'opacity-30 scale-90' : ''}`}
                style={{
                  borderRadius: vennData.dataScience.borderRadius
                }}
                onMouseEnter={() => setHoveredSection('dataScience')}
                onMouseLeave={() => setHoveredSection(null)}
                transition={{ duration: 0.3 }}
              >
                {/* Skills inside the shape when hovered */}
                {hoveredSection === 'dataScience' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white"
                  >
                    <div className="text-sm font-semibold mb-3 text-center">Key Skills</div>
                    <ul className="text-xs text-center space-y-1">
                      {vennData.dataScience.keySkills.map((skill, index) => (
                        <li key={index} className="text-white/90 list-disc list-inside">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>

              {/* Math Stats Blob */}
              <motion.div 
                className={`absolute ${vennData.mathStats.size} bg-gradient-to-br ${hoveredSection === 'mathStats' ? vennData.mathStats.hoverColor : vennData.mathStats.color} opacity-80 transform translate-x-16 -translate-y-6 cursor-pointer transition-all duration-500 ${hoveredSection === 'mathStats' ? 'scale-125 shadow-2xl z-20' : hoveredSection ? 'opacity-30 scale-90' : ''}`}
                style={{
                  borderRadius: vennData.mathStats.borderRadius
                }}
                onMouseEnter={() => setHoveredSection('mathStats')}
                onMouseLeave={() => setHoveredSection(null)}
                transition={{ duration: 0.3 }}
              >
                {/* Skills inside the shape when hovered */}
                {hoveredSection === 'mathStats' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white"
                  >
                    <div className="text-sm font-semibold mb-3 text-center">Key Skills</div>
                    <ul className="text-xs text-center space-y-1">
                      {vennData.mathStats.keySkills.map((skill, index) => (
                        <li key={index} className="text-white/90 list-disc list-inside">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>

              {/* My Journey Blob */}
              <motion.div 
                className={`absolute ${vennData.journey.size} bg-gradient-to-br ${hoveredSection === 'journey' ? vennData.journey.hoverColor : vennData.journey.color} opacity-80 transform translate-y-20 cursor-pointer transition-all duration-500 ${hoveredSection === 'journey' ? 'scale-125 shadow-2xl z-20' : hoveredSection ? 'opacity-30 scale-90' : ''}`}
                style={{
                  borderRadius: vennData.journey.borderRadius
                }}
                onMouseEnter={() => setHoveredSection('journey')}
                onMouseLeave={() => setHoveredSection(null)}
                transition={{ duration: 0.3 }}
              >
                {/* Skills inside the shape when hovered */}
                {hoveredSection === 'journey' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white"
                  >
                    <div className="text-sm font-semibold mb-3 text-center">Key Skills</div>
                    <ul className="text-xs text-center space-y-1">
                      {vennData.journey.keySkills.map((skill, index) => (
                        <li key={index} className="text-white/90 list-disc list-inside">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
              
              {/* Labels positioned closer to respective blobs */}
              <div className={`absolute top-16 left-12 text-sm font-semibold text-orange-600 dark:text-orange-400 transition-opacity duration-300 ${hoveredSection && hoveredSection !== 'dataScience' ? 'opacity-30' : ''}`}>{vennData.dataScience.label}</div>
              <div className={`absolute top-20 right-8 text-sm font-semibold text-amber-600 dark:text-amber-400 transition-opacity duration-300 ${hoveredSection && hoveredSection !== 'mathStats' ? 'opacity-30' : ''}`}>{vennData.mathStats.label}</div>
              {/* My Journey label below the blob */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 top-[99%] text-sm font-semibold text-pink-600 dark:text-pink-400 transition-opacity duration-300 ${hoveredSection && hoveredSection !== 'journey' ? 'opacity-30' : ''}`}>{vennData.journey.label}</div>
            </div>

            {/* Centered Legend */}
            <div className="mt-8 flex justify-center">
              <div className="grid grid-cols-1 gap-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">{vennData.dataScience.content}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">{vennData.mathStats.content}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">{vennData.journey.content}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Tools row below both columns */}
        <div className="mt-12 flex justify-center">
          <div className="flex flex-wrap gap-3 justify-center">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07, type: 'spring', stiffness: 60 }}
                className="px-4 py-2 rounded-lg bg-custom-box border border-gray-200 dark:border-gray-700 shadow-sm text-gray-700 dark:text-gray-200 font-medium text-sm flex items-center gap-2 cursor-pointer transition"
              >
                {tool.icon && <span>{tool.icon}</span>}
                {tool.name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 