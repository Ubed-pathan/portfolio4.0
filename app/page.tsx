'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Background3D from './components/Background3D'

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (isMobile) {
    // Mobile: No motion, no background3D, minimal effects
    return (
      <>
        <Header />
        <main 
          className="relative z-10"
          style={{ paddingTop: '100px' }}
        >
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Background3D />
      </>
    )
  }

  // Desktop: Keep all animations and effects
  return (
    <>
      <Header />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
        style={{ paddingTop: '100px' }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </motion.main>
      <Background3D />
    </>
  )
}
