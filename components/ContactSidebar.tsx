'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'

const ContactSidebar = () => {
  const email = 'hikaru.isayama@gmail.com'
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/SeanIsayama', icon: Github },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hikaru-isayama', icon: Linkedin },
    { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: Twitter },
  ]

  return (
    <>
      {/* Left Sidebar - Social Links */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed left-8 bottom-0 z-50 hidden lg:flex flex-col items-center space-y-6"
      >
        <div className="flex flex-col items-center space-y-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 p-2 hover:scale-110"
              aria-label={link.name}
            >
              <link.icon size={20} />
            </motion.a>
          ))}
        </div>
        <div className="w-px h-24 bg-gray-300 dark:bg-gray-600"></div>
      </motion.div>

      {/* Right Sidebar - Email */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed right-8 bottom-0 z-50 hidden lg:flex flex-col items-center space-y-6"
      >
        <motion.a
          href={`mailto:${email}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 p-2 hover:scale-110"
          aria-label="Email"
        >
          <div className="writing-mode-vertical text-sm tracking-wider font-mono">
            {email}
          </div>
        </motion.a>
        <div className="w-px h-24 bg-gray-300 dark:bg-gray-600"></div>
      </motion.div>

      {/* Mobile Contact Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
      >
        <div className="flex justify-around items-center py-4 px-6">
          <a
            href={`mailto:${email}`}
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 p-2"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 p-2"
              aria-label={link.name}
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default ContactSidebar 