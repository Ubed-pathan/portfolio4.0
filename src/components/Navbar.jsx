import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Sun, Moon, Download, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Fixed active section detection
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Navbar offset
      
      // Find the current section by checking which section we're closest to
      let currentSection = 'home';
      let minDistance = Infinity;
      
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop - 80; // Account for navbar
          const distance = Math.abs(scrollPosition - sectionTop);
          
          // If we're in or very close to this section
          if (scrollPosition >= sectionTop && distance < minDistance) {
            minDistance = distance;
            currentSection = sectionId;
          }
        }
      });
      
      // Handle edge case for very top of page
      if (window.scrollY < 100) {
        currentSection = 'home';
      }
      
      setActiveSection(currentSection);
    };

    // Initial check and setup
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    // Force recheck after components mount
    const timer = setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/70 dark:bg-black/25 backdrop-blur-2xl border-b border-gray-200/50 dark:border-gray-700/25 shadow-lg shadow-black/5 dark:shadow-black/20' 
            : 'bg-transparent'
        }`}
        style={{
          backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
        }}
      >
        {/* Improved gradient overlay */}
        {isScrolled && (
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-gray-50/10 to-white/20 dark:from-gray-800/10 dark:via-black/5 dark:to-gray-700/10 pointer-events-none" />
        )}

        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-14 md:h-18 sm:h-14">
            {/* Professional Logo - Keep Same Design */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer group"
            >
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-black to-gray-800 dark:from-cream dark:to-gray-200 bg-clip-text text-transparent tracking-tight">
                  John Smith
                </span>
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-black via-gray-700 to-transparent dark:from-cream dark:via-gray-300 dark:to-transparent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </div>
            </motion.div>

            {/* Enhanced Desktop Navigation with Color-Only Hover Effects */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-cream transition-all duration-300 font-medium group"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {/* Color-Only Hover Effect for Non-Active Sections */}
                  {activeSection !== item.href.slice(1) && (
                    <motion.div
                      className="absolute inset-0 bg-gray-200/80 dark:bg-cream/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm border border-gray-300/50 dark:border-cream/40 shadow-md"
                      initial={{ opacity: 0 }}
                      whileHover={{ 
                        opacity: 1,
                        transition: {
                          duration: 0.3,
                          ease: "easeOut"
                        }
                      }}
                      style={{
                        minWidth: "80px",
                        minHeight: "40px"
                      }}
                    />
                  )}

                  {/* Enhanced Active Underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-black dark:via-cream to-transparent rounded-full"
                    initial={false}
                    animate={{
                      width: activeSection === item.href.slice(1) ? "100%" : "0%",
                      opacity: activeSection === item.href.slice(1) ? 1 : 0,
                      scaleY: activeSection === item.href.slice(1) ? 1 : 0
                    }}
                    transition={{ 
                      duration: 0.3, 
                      ease: "easeInOut",
                    }}
                    style={{ transformOrigin: "center" }}
                  />
                  
                  {/* Simple Hover Underline */}
                  {activeSection !== item.href.slice(1) && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-gray-400/70 via-gray-600/90 to-gray-400/70 dark:from-cream/50 dark:via-cream/70 dark:to-cream/50 opacity-0 group-hover:opacity-100 rounded-full"
                      initial={{ width: "0%", x: "50%" }}
                      whileHover={{ 
                        width: "85%",
                        x: "7.5%",
                        transition: { 
                          duration: 0.3, 
                          ease: "easeOut"
                        }
                      }}
                    />
                  )}
                  
                  {/* Regular text */}
                  <span 
                    className={`relative z-20 text-sm font-medium tracking-wide transition-all duration-300 ${
                      activeSection === item.href.slice(1) 
                        ? 'text-black dark:text-cream font-semibold' 
                        : 'text-gray-700 dark:text-gray-400 group-hover:text-black dark:group-hover:text-cream'
                    }`}
                  >
                    {item.name}
                  </span>

                  {/* Simple Active Section Glow */}
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      className="absolute -inset-1 bg-gray-300/30 dark:bg-cream/10 rounded-xl blur-sm"
                      animate={{ 
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Enhanced Actions with Cool Theme Toggle */}
            <div className="flex items-center space-x-3 md:space-x-4">
              {/* Mobile-optimized Resume Button */}
              <motion.a
                href="/resume.pdf"
                download="John_Smith_Resume.pdf"
                className="hidden sm:flex items-center space-x-2 px-3 md:px-4 py-2 md:py-2.5 bg-gradient-to-r from-gray-900/90 to-black/90 dark:from-cream/80 dark:to-white/80 hover:from-black hover:to-gray-900 dark:hover:from-cream/90 dark:hover:to-white/90 text-white dark:text-black font-medium transition-all duration-300 group relative rounded-lg border border-gray-800/60 dark:border-cream/40 backdrop-blur-sm shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                style={{
                  minWidth: "85px",
                  minHeight: "32px"
                }}
              >
                <Download className="w-3 h-3 md:w-4 md:h-4 group-hover:animate-pulse relative z-10 transition-transform duration-300" />
                <span className="relative z-10 text-xs md:text-sm tracking-wide font-medium">Resume</span>
                
                {/* Thin Sliding Underline Effect */}
                <motion.div
                  className="absolute bottom-0 left-2 h-px bg-gradient-to-r from-transparent via-white dark:via-black to-transparent"
                  initial={{ width: 0, x: "50%" }}
                  whileHover={{ 
                    width: "calc(100% - 16px)", 
                    x: 0,
                    transition: { 
                      duration: 0.3, 
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 300
                    }
                  }}
                />

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-black/20 to-gray-800/20 dark:from-cream/20 dark:to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                  style={{ zIndex: -1 }}
                />
              </motion.a>

              {/* Mobile-optimized Theme Toggle Button */}
              <motion.button
                onClick={toggleTheme}
                className="relative p-2 md:p-2.5 rounded-lg md:rounded-xl bg-gradient-to-br from-gray-100 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-black hover:from-gray-200 hover:via-gray-100 hover:to-white dark:hover:from-gray-700 dark:hover:via-gray-800 dark:hover:to-gray-900 text-gray-700 dark:text-gray-300 transition-all duration-300 group border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.6 }}
                style={{
                  minWidth: "32px",
                  minHeight: "32px"
                }}
              >
                {/* Animated background ring */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    borderColor: isDark ? "#FCD34D" : "#3B82F6"
                  }}
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                />

                {/* Glow effect */}
                <motion.div
                  className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isDark 
                      ? 'bg-gradient-to-r from-yellow-400/20 to-orange-400/20 shadow-lg shadow-yellow-400/30' 
                      : 'bg-gradient-to-r from-blue-400/20 to-indigo-400/20 shadow-lg shadow-blue-400/30'
                  }`}
                  animate={{
                    opacity: [0, 0.3, 0],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Enhanced icon container */}
                <motion.div
                  initial={false}
                  animate={{ rotate: isDark ? 180 : 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative z-10 flex items-center justify-center"
                >
                  {isDark ? (
                    <motion.div
                      animate={{ 
                        rotate: [0, 15, -15, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                    >
                      <Sun 
                        className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 drop-shadow-md filter" 
                        style={{
                          filter: "drop-shadow(0 0 8px rgba(251, 191, 36, 0.6))"
                        }}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      animate={{ 
                        rotate: [0, -5, 5, 0],
                        scale: [1, 0.95, 1]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut"
                      }}
                    >
                      <Moon 
                        className="w-4 h-4 md:w-5 md:h-5 text-slate-600 drop-shadow-sm filter" 
                        style={{
                          filter: "drop-shadow(0 0 4px rgba(71, 85, 105, 0.4))"
                        }}
                      />
                    </motion.div>
                  )}
                </motion.div>

                {/* Sparkles effect */}
                <motion.div
                  className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: isDark ? 0 : 2
                  }}
                />
                <motion.div
                  className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: isDark ? 1 : 0
                  }}
                />
              </motion.button>

              {/* Mobile Menu Toggle - Smaller on Mobile */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden relative p-1.5 bg-gradient-to-r from-gray-200/80 to-white/80 dark:from-gray-800/60 dark:to-gray-700/50 hover:from-gray-300/90 hover:to-white/90 dark:hover:from-gray-700/80 dark:hover:to-gray-600/70 text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-cream transition-all duration-300 rounded-lg border border-gray-300/60 dark:border-gray-700/40 backdrop-blur-sm shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.1, y: -1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                style={{
                  minWidth: "32px",
                  minHeight: "32px"
                }}
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-4 h-4" />
                  ) : (
                    <Menu className="w-4 h-4" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Adjusted Position */}
      <motion.div
        initial={false}
        animate={{ 
          y: isMobileMenuOpen ? 0 : -20,
          opacity: isMobileMenuOpen ? 1 : 0,
          scale: isMobileMenuOpen ? 1 : 0.98
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`md:hidden fixed top-16 left-4 right-4 z-40 overflow-hidden rounded-xl bg-white/80 dark:bg-black/35 backdrop-blur-2xl border border-gray-200/60 dark:border-gray-700/40 shadow-xl ${
          isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        style={{
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        }}
      >
        <div className="p-4 space-y-1 relative z-10">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={`block px-4 py-3 text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-cream hover:bg-gray-100/60 dark:hover:bg-gray-800/40 rounded-lg transition-all duration-300 font-medium group relative ${
                activeSection === item.href.slice(1) ? 'text-black dark:text-cream font-semibold bg-gray-100/50 dark:bg-gray-800/30' : ''
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: index * 0.05 + 0.1, duration: 0.3 }}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm tracking-wide">{item.name}</span>
                {/* Enhanced Active indicator for mobile */}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    className="w-2 h-2 bg-black dark:bg-cream rounded-full shadow-sm"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </div>
              
              {/* Enhanced Mobile Underline */}
              <motion.div
                className="absolute bottom-0 left-4 h-px bg-gradient-to-r from-transparent via-black dark:via-cream to-transparent"
                initial={false}
                animate={{
                  width: activeSection === item.href.slice(1) ? "calc(100% - 32px)" : "0%",
                  // x property can be set to 0 or another value if needed, or removed if not used
                  opacity: activeSection === item.href.slice(1) ? 1 : 0
                }}
                transition={{ 
                  duration: 0.4, 
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 200
                }}
              />
            </motion.a>
          ))}
          
          {/* Reduced Mobile Resume Button Size */}
          <motion.a
            href="/resume.pdf"
            download="John_Smith_Resume.pdf"
            className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-to-r from-black/70 to-gray-800/70 dark:from-cream/70 dark:to-white/70 hover:from-black/80 hover:to-gray-800/80 dark:hover:from-cream/80 dark:hover:to-white/80 text-white dark:text-black hover:text-white dark:hover:text-black rounded-lg font-medium mt-3 group relative border border-black/40 dark:border-cream/40 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
            initial={{ opacity: 0, y: 10 }}
            animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: navItems.length * 0.05 + 0.2, duration: 0.3 }}
            style={{
              minHeight: "40px"
            }}
          >
            <Download className="w-4 h-4 relative z-10" />
            <span className="relative z-10 text-sm tracking-wide font-medium">Download Resume</span>
            
            {/* Thin Mobile Resume Underline with Slide */}
            <motion.div
              className="absolute bottom-0 left-4 h-px bg-gradient-to-r from-transparent via-white dark:via-black to-transparent opacity-0 group-hover:opacity-100"
              initial={{ width: 0, x: "50%" }}
              whileHover={{ 
                width: "calc(100% - 32px)", 
                x: 0,
                transition: { 
                  duration: 0.3, 
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 300
                }
              }}
            />
          </motion.a>
        </div>
      </motion.div>

      {/* Mobile menu backdrop */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="md:hidden fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
