'use client'

import { motion } from 'framer-motion'
import { Moon, Sun, Menu, X, Download } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { useState, useEffect } from 'react'

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Mobile scroll behavior fix
    if (isMobile) {
      let scrollTimeout: NodeJS.Timeout
      const handleScroll = () => {
        setIsScrolling(true)
        clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(() => {
          setIsScrolling(false)
        }, 100)
      }
      window.addEventListener('scroll', handleScroll, { passive: true })
      // Force header to stay fixed with multiple methods
      const forceFixedHeader = () => {
        const header = document.querySelector('header')
        if (header) {
          // Apply multiple CSS properties to ensure fixed positioning
          header.style.cssText = `
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            z-index: 999999 !important;
            transform: translateZ(0) !important;
            will-change: transform !important;
            backface-visibility: hidden !important;
            -webkit-backface-visibility: hidden !important;
            width: 100vw !important;
          `
        }
      }
      
      // Apply immediately and on events
      forceFixedHeader()
      window.addEventListener('orientationchange', forceFixedHeader)
      window.addEventListener('resize', forceFixedHeader)
      window.addEventListener('scroll', forceFixedHeader, { passive: true })
      
      // Set up interval to continuously check
      const fixInterval = setInterval(forceFixedHeader, 100)
      
      return () => {
        window.removeEventListener('resize', checkMobile)
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('orientationchange', forceFixedHeader)
        window.removeEventListener('resize', forceFixedHeader)
        window.removeEventListener('scroll', forceFixedHeader)
        clearTimeout(scrollTimeout)
        clearInterval(fixInterval)
      }
    }
    return () => window.removeEventListener('resize', checkMobile)
  }, [isMobile])

  return (
    <motion.header
      initial={{ y: isMobile ? -20 : -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: isMobile ? 0.3 : 0.8 }}
      className={`
        fixed top-0 left-0 right-0 z-[99999] p-4 w-full
        ${isMobile ? 'transform-gpu will-change-transform' : ''}
        ${isScrolling && isMobile ? 'backdrop-blur-md' : ''}
      `}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999999,
        width: '100vw',
        transform: 'translate3d(0, 0, 0)',
        WebkitTransform: 'translate3d(0, 0, 0)',
        transformStyle: 'preserve-3d',
        WebkitTransformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        willChange: 'transform'
      }}
    >
      <nav className={`max-w-7xl mx-auto glass rounded-2xl px-6 py-4 border
        ${theme === 'dark' 
          ? 'border-white/10 shadow-lg shadow-black/20' 
          : 'border-gray-200/20 shadow-xl shadow-gray-900/10'
        }
      `}>
        <div className="flex justify-between items-center">
          {/* Logo - Keep original desktop animations */}
          <motion.div
            whileHover={{ 
              scale: 1.05,
              textShadow: theme === 'dark' ? '0 0 20px rgba(255,255,255,0.3)' : '0 0 20px rgba(0,0,0,0.2)'
            }}
            className="text-2xl font-bold gradient-text cursor-pointer"
          >
            Ubed Pathan
          </motion.div>

          {/* Desktop Navigation - Keep ALL original animations */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ 
                  scale: 1.08,
                  y: -3,
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 400, damping: 17 }}
                className="relative px-4 py-2 font-semibold text-sm uppercase tracking-wider transition-all duration-300 rounded-xl group overflow-hidden"
              >
                {/* Keep ALL original desktop effects */}
                <div className={`absolute inset-0 rounded-xl transition-all duration-500 opacity-0 group-hover:opacity-100
                  ${theme === 'dark' 
                    ? 'bg-gradient-to-r from-white/10 via-gray-300/20 to-white/10' 
                    : 'bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100'
                  }
                `} />
                
                <div className={`absolute inset-0 rounded-xl transform -translate-x-full 
                  transition-transform duration-500 group-hover:translate-x-0
                  ${theme === 'dark'
                    ? 'bg-gradient-to-r from-gray-700/40 to-gray-600/40'
                    : 'bg-gradient-to-r from-gray-300/40 to-gray-400/40'
                  }
                `} />

                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-0 
                  transition-all duration-500 group-hover:w-full rounded-full
                  ${theme === 'dark'
                    ? 'bg-gradient-to-r from-gray-400 via-white to-gray-400'
                    : 'bg-gradient-to-r from-gray-600 via-gray-800 to-gray-600'
                  }
                `} />

                <span className={`relative z-10 transition-all duration-300
                  ${theme === 'dark' 
                    ? 'group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' 
                    : 'group-hover:drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]'
                  }
                `}>
                  {item}
                </span>

                <div className={`absolute top-0 right-0 w-1 h-1 rounded-full opacity-0 
                  transition-all duration-700 group-hover:opacity-100 group-hover:animate-ping
                  ${theme === 'dark' ? 'bg-white' : 'bg-gray-800'}
                `} 
                style={{ animationDelay: `${index * 0.1}s` }} />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Resume Button - Keep original */}
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ 
                scale: 1.05,
                boxShadow: theme === 'dark' 
                  ? '0 15px 35px rgba(128, 128, 128, 0.4), 0 0 20px rgba(255, 255, 255, 0.3)' 
                  : '0 15px 35px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              className={`hidden sm:flex items-center space-x-2 px-6 py-3 rounded-full 
                font-bold text-sm uppercase tracking-wider transition-all duration-300 relative overflow-hidden
                ${theme === 'dark'
                  ? 'bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 text-white hover:from-gray-600 hover:via-gray-500 hover:to-gray-600'
                  : 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white hover:from-gray-800 hover:via-gray-700 hover:to-gray-800'
                }
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent 
                before:translate-x-[-100%] before:transition-transform before:duration-700 hover:before:translate-x-[100%]
              `}
            >
              <Download size={18} className="animate-bounce" />
              <span>Resume</span>
            </motion.a>

            {/* Theme Toggle - Keep ALL original desktop effects */}
            <motion.button
              whileHover={!isMobile ? { 
                scale: 1.15,
                rotate: theme === 'dark' ? 45 : -45,
                boxShadow: theme === 'dark' 
                  ? '0 0 25px rgba(255, 255, 255, 0.4), 0 0 40px rgba(255, 255, 255, 0.2)' 
                  : '0 0 25px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1)'
              } : { scale: 1.02 }}
              whileTap={{ scale: 0.85 }}
              onClick={toggleTheme}
              className={`p-3 glass rounded-full transition-all duration-500 relative overflow-hidden
                ${theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30' 
                  : 'bg-gray-900/10 hover:bg-gray-900/25 border border-gray-900/20 hover:border-gray-900/40'
                }
              `}
            >
              {/* Keep ALL original desktop effects */}
              {!isMobile && (
                <>
                  <div 
                    className={`absolute inset-0 rounded-full opacity-0 hover:opacity-100 
                      transition-all duration-700 animate-pulse
                      ${theme === 'dark' 
                        ? 'bg-gradient-to-r from-white/10 via-yellow-400/20 to-white/10' 
                        : 'bg-gradient-to-r from-gray-700/20 via-gray-900/30 to-gray-700/20'
                      }
                    `} 
                  />

                  <div 
                    className={`absolute inset-0 rounded-full opacity-0 hover:opacity-100 
                      transition-opacity duration-300 animate-spin
                      ${theme === 'dark'
                        ? 'bg-gradient-to-r from-transparent via-white/30 to-transparent'
                        : 'bg-gradient-to-r from-transparent via-gray-900/40 to-transparent'
                      }
                    `}
                    style={{ animationDuration: '3s' }}
                  />
                </>
              )}

              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 0 : 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="relative z-10"
              >
                {theme === 'dark' ? (
                  <motion.div
                    initial={{ rotate: 0, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: 180, scale: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ 
                      scale: 1.2,
                      filter: 'brightness(1.3) drop-shadow(0 0 10px rgba(255, 193, 7, 0.8))'
                    }}
                  >
                    <Sun 
                      size={20} 
                      className="text-yellow-400 drop-shadow-lg transition-all duration-300" 
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ rotate: 180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: -180, scale: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ 
                      scale: 1.2,
                      filter: 'brightness(1.2) drop-shadow(0 0 8px rgba(75, 85, 99, 0.8))'
                    }}
                  >
                    <Moon 
                      size={20} 
                      className="text-gray-700 drop-shadow-lg transform rotate-[-25deg] transition-all duration-300" 
                    />
                  </motion.div>
                )}
              </motion.div>
              
              {/* Keep enhanced glow effect */}
              <div className={`absolute inset-[-2px] rounded-full blur-md transition-all duration-500
                opacity-0 hover:opacity-100
                ${theme === 'dark' 
                  ? 'bg-gradient-to-r from-yellow-400/30 via-white/20 to-yellow-400/30 animate-pulse' 
                  : 'bg-gradient-to-r from-gray-800/40 via-gray-900/30 to-gray-800/40'
                }
              `} />

              {/* Keep particle effect */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
                {Array.from({ length: 6 }, (_, i) => (
                  <div
                    key={i}
                    className={`absolute w-1 h-1 rounded-full animate-ping
                      ${theme === 'dark' ? 'bg-yellow-300' : 'bg-gray-600'}
                    `}
                    style={{
                      top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 15}px`,
                      left: `${20 + Math.cos(i * 60 * Math.PI / 180) * 15}px`,
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: '2s'
                    }}
                  />
                ))}
              </div>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={!isMobile ? { scale: 1.1 } : {}}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-3 glass rounded-full transition-all duration-300
                ${theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10 border border-white/10' 
                  : 'bg-gray-900/10 hover:bg-gray-900/20 border border-gray-900/20'
                }
              `}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: isMobile ? 0.15 : 0.3 }}
              >
                {isMenuOpen ? (
                  <X size={20} className={theme === 'dark' ? 'text-white' : 'text-gray-700'} />
                ) : (
                  <Menu size={20} className={theme === 'dark' ? 'text-white' : 'text-gray-700'} />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: isMobile ? 0.15 : 0.3, ease: 'easeInOut' }}
            className={`md:hidden mt-6 pt-4 space-y-4 border-t
              ${theme === 'dark' ? 'border-white/10' : 'border-gray-200/20'}
            `}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: isMobile ? 0 : index * 0.05, type: 'spring', stiffness: 300 }}
                whileHover={!isMobile ? { x: 15, scale: 1.05 } : {}}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 rounded-xl font-semibold text-lg uppercase tracking-wide
                  transition-all duration-200 relative group
                  ${theme === 'dark' 
                    ? 'text-gray-100 hover:text-white hover:bg-white/10' 
                    : 'text-gray-800 hover:text-gray-900 hover:bg-gray-100'
                  }
                `}
              >
                <div className={`absolute inset-0 rounded-xl transition-all duration-300 opacity-0 group-hover:opacity-100
                  ${theme === 'dark' 
                    ? 'bg-gradient-to-r from-white/5 to-gray-400/10' 
                    : 'bg-gradient-to-r from-gray-200/50 to-gray-300/50'
                  }
                `} />
                <span className="relative z-10">{item}</span>
              </motion.a>
            ))}
            
            {/* Mobile Resume Button */}
            <motion.a
              href="/resume.pdf"
              download
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.05 + 0.1 }}
              whileHover={!isMobile ? { scale: 1.02 } : {}}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center justify-center space-x-3 py-4 px-6 rounded-xl font-bold text-lg
                uppercase tracking-wider transition-all duration-300 mt-6
                ${theme === 'dark'
                  ? 'bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:from-gray-600 hover:to-gray-500'
                  : 'bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-gray-800 hover:to-gray-700'
                }
              `}
            >
              <Download size={20} />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
