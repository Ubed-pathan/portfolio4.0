'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles, Code, Palette, Server, Database, Monitor, Layers } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { useState, useEffect } from 'react'

export default function Hero() {
  const { theme } = useTheme()
  const [currentRole, setCurrentRole] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const roles = [
    { 
      text: "Java Full-Stack Developer", 
      icon: Layers, 
      underlineColor: theme === 'dark' ? 'from-white to-gray-300' : 'from-gray-900 to-gray-700',
      textColor: theme === 'dark' ? 'text-white' : 'text-gray-900',
    },
    { 
      text: "MERN Stack Developer", 
      icon: Server, 
      underlineColor: theme === 'dark' ? 'from-gray-400 to-gray-600' : 'from-gray-700 to-gray-500',
      textColor: theme === 'dark' ? 'text-gray-300' : 'text-gray-700',
    },
    { 
      text: "Backend Engineer", 
      icon: Database, 
      underlineColor: theme === 'dark' ? 'from-gray-500 to-gray-400' : 'from-gray-600 to-gray-400',
      textColor: theme === 'dark' ? 'text-gray-400' : 'text-gray-600',
    },
    { 
      text: "Frontend Developer", 
      icon: Monitor, 
      underlineColor: theme === 'dark' ? 'from-gray-300 to-gray-500' : 'from-gray-800 to-gray-600',
      textColor: theme === 'dark' ? 'text-gray-200' : 'text-gray-800',
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-28 relative overflow-hidden">
      
      {/* Floating decorative elements - Desktop only */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 15 }, (_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${theme === 'dark' ? 'bg-white/30' : 'bg-gray-400/40'}`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Main Heading - Reduced animations on mobile */}
        <motion.h1
          initial={{ y: isMobile ? 20 : 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: isMobile ? 0.5 : 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="gradient-text">Hello, I'm</span>
          <br />
          <span className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} block mt-2`}>
            Ubed Pathan
          </span>
        </motion.h1>

        {/* Simplified role display on mobile */}
        <motion.div
          initial={{ y: isMobile ? 15 : 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: isMobile ? 0.5 : 0.8, delay: 0.4 }}
          className="mb-10 h-16 flex items-center justify-center"
        >
          <motion.div
            key={currentRole}
            initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: isMobile ? -10 : -20 }}
            transition={{ 
              duration: isMobile ? 0.3 : 0.5,
              ease: "easeInOut"
            }}
            className="relative group"
          >
            {/* Role text with mobile optimization */}
            <div className="flex items-center gap-3">
              <h2 className={`
                text-xl md:text-3xl lg:text-4xl font-bold tracking-tight
                ${roles[currentRole].textColor}
                relative inline-block
              `}>
                {roles[currentRole].text}
                
                {/* Simplified underline for mobile */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ 
                    duration: isMobile ? 0.5 : 0.8,
                    delay: 0.2,
                    ease: "easeOut"
                  }}
                  className={`
                    absolute -bottom-1 left-0 right-0 h-0.5
                    bg-gradient-to-r ${roles[currentRole].underlineColor}
                    rounded-full origin-left
                  `}
                />
                
                {/* Desktop glow effect only */}
                {!isMobile && (
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ 
                      duration: 1,
                      delay: 0.5,
                      ease: "easeOut"
                    }}
                    className={`
                      absolute -bottom-1 left-0 right-0 h-0.5
                      bg-gradient-to-r ${roles[currentRole].underlineColor}
                      rounded-full origin-left blur-sm opacity-50
                    `}
                  />
                )}
              </h2>
              
              {/* Simplified icon animation for mobile */}
              <motion.div
                animate={!isMobile ? { 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.05, 1]
                } : {}}
                transition={!isMobile ? { 
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2
                } : {}}
              >
                {React.createElement(roles[currentRole].icon, {
                  size: 24,
                  className: `${roles[currentRole].textColor} opacity-80`
                })}
              </motion.div>
            </div>

            {/* Desktop floating particles only */}
            {!isMobile && Array.from({ length: 3 }, (_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1 h-1 rounded-full ${roles[currentRole].textColor.replace('text-', 'bg-')} opacity-40`}
                style={{
                  top: `${10 + i * 15}px`,
                  left: `${-20 - i * 10}px`,
                }}
                animate={{
                  y: [-5, 5, -5],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Description - Smaller */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed
            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
          `}
        >
          Specialized in Java Full-Stack and MERN stack development, crafting robust enterprise solutions 
          and modern web applications. Passionate about building scalable architectures with clean, efficient code.
        </motion.p>

        {/* Action Buttons - Simplified hover effects on mobile */}
        <motion.div
          initial={{ y: isMobile ? 15 : 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: isMobile ? 0.5 : 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            whileHover={!isMobile ? { 
              scale: 1.05, 
              boxShadow: theme === 'dark' 
                ? '0 15px 30px rgba(255, 255, 255, 0.1)' 
                : '0 15px 30px rgba(0, 0, 0, 0.15)'
            } : {}}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 relative overflow-hidden group cursor-pointer
              ${theme === 'dark'
                ? 'bg-white/10 text-white border-2 border-white/20 hover:bg-white/20 hover:border-white/40'
                : 'bg-gray-100 text-gray-900 border-2 border-gray-200 hover:bg-gray-200 hover:border-gray-300'
              }
            `}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Code size={18} />
              View My Work
            </span>
            <div className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300
              ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-200/50'}
            `} />
          </motion.button>
          
          <motion.button
            onClick={() => scrollToSection('contact')}
            whileHover={!isMobile ? { 
              scale: 1.05,
              boxShadow: theme === 'dark'
                ? '0 15px 30px rgba(128, 128, 128, 0.3)'
                : '0 15px 30px rgba(75, 85, 99, 0.3)'
            } : {}}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 relative overflow-hidden group cursor-pointer
              ${theme === 'dark'
                ? 'bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:from-gray-600 hover:to-gray-500'
                : 'bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-gray-800 hover:to-gray-700'
              }
            `}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles size={18} />
              Get In Touch
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </motion.button>
        </motion.div>

        {/* Role indicator dots - moved above scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex justify-center gap-2 mb-8"
        >
          {roles.map((_, index) => (
            <motion.div
              key={index}
              animate={{
                scale: index === currentRole ? 1.2 : 1,
                opacity: index === currentRole ? 1 : 0.4
              }}
              transition={{ duration: 0.3 }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentRole
                  ? `bg-gradient-to-r ${roles[currentRole].underlineColor}`
                  : theme === 'dark' ? 'bg-white/30' : 'bg-gray-400/50'
              }`}
            />
          ))}
        </motion.div>

        {/* Clean Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col items-center"
        >
          <motion.span 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className={`text-xs uppercase tracking-wider font-medium mb-2
              ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}
            `}
          >
            Scroll Down
          </motion.span>
          
          <motion.div
            animate={{ 
              y: [0, 8, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ChevronDown 
              size={24}
              className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} cursor-pointer`}
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
