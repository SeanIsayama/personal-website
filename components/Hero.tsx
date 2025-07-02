'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Bell } from 'lucide-react'

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center bg-custom-light-primary dark:bg-custom-dark-primary relative transition-colors duration-300">
      <div className="max-w-4xl px-8 sm:px-12 lg:px-16 xl:px-20 ml-24">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Hikaru</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Data Scientist | Data Engineer | Machine Learning Engineer
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
            I create innovative digital solutions and build amazing user experiences.
          </p>
          
          <div className="mb-8">
            <p className="text-lg text-gray-600 dark:text-gray-400 flex items-center gap-3">
              <Bell size={20} className="text-blue-600 dark:text-blue-400" />
              <span>
                <span className="font-semibold">Latest:</span> SU25 R&D Intern as a Data Engineer at{' '}
                <a 
                  href="https://www.treasuredata.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Treasure Data
                </a>
              </span>
            </p>
          </div>

          <div className="mb-8">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              <span className="font-semibold">Currently open to:</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-custom-box rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Full-time Roles</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Data Engineering, Data Science, Machine Learning Engineer
                </p>
              </div>
              <div className="bg-custom-box rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Research</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  ML/DL algorithms and applications
                </p>
              </div>
              <div className="bg-custom-box rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Teaching</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Tutoring and educational opportunities
                </p>
              </div>
            </div>
          </div>
          

          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Download Resume
          </motion.button>
        </motion.div>
      </div>
      
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={24} />
      </motion.button>
    </section>
  )
}

export default Hero 