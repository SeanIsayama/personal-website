import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ContactSidebar from '@/components/ContactSidebar'

export default function Home() {
  return (
    <main className="min-h-screen bg-custom-light-primary dark:bg-custom-dark-primary transition-colors duration-300">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <ContactSidebar />
    </main>
  )
} 