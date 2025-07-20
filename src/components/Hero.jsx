import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Code, Palette, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);

  const jobTitles = [
    "Java Full Stack Developer",
    "MERN Stack Developer", 
    "Backend Developer",
    "Frontend Developer"
  ];

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % jobTitles.length);
    }, 3000);
    return () => clearInterval(titleInterval);
  }, []);

  return (
    <section className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Enhanced Profile Section - Remove floating icons */}
          <div className="relative">
            {/* Icons moved to navbar - this section is now clean */}
          </div>

          {/* Enhanced Typography Section */}
          <div className="space-y-8">
            <motion.h1
              className="text-6xl md:text-8xl font-black tracking-tight"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 1, type: "spring", stiffness: 100 }}
            >
              <motion.div
                className="bg-gradient-to-r from-gray-900 via-black to-gray-800 dark:from-cream dark:via-white dark:to-gray-100 bg-clip-text text-transparent"
                style={{
                  backgroundSize: '200% 100%',
                }}
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  textShadow: [
                    '0 0 0px rgba(0,0,0,0)',
                    '0 0 30px rgba(0,0,0,0.15)',
                    '0 0 0px rgba(0,0,0,0)'
                  ]
                }}
                transition={{ 
                  backgroundPosition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  textShadow: { duration: 3, repeat: Infinity }
                }}
              >
                <div className="leading-tight">
                  <div className="text-4xl md:text-6xl">Hi, I'm</div>
                  <div className="text-4xl md:text-6xl">
                    <span className="text-gray-600 dark:text-gray-400">Ubed Pathan</span>
                  </div>
                  <div className="text-4xl md:text-6xl">a passionate</div>
                </div>
              </motion.div>
            </motion.h1>
            
            {/* Rotating Job Titles with Enhanced Gradients */}
            <motion.div
              className="relative h-16 md:h-20 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTitle}
                  className="text-2xl md:text-3xl font-semibold"
                  style={{
                    background: currentTitle === 0 
                      ? 'linear-gradient(135deg, #1f2937 0%, #000000 50%, #374151 100%)' // Java - Dark grays to black
                      : currentTitle === 1 
                      ? 'linear-gradient(135deg, #4b5563 0%, #1f2937 50%, #000000 100%)' // MERN - Medium to dark
                      : currentTitle === 2 
                      ? 'linear-gradient(135deg, #6b7280 0%, #374151 50%, #1f2937 100%)' // Backend - Light to medium
                      : 'linear-gradient(135deg, #9ca3af 0%, #6b7280 50%, #4b5563 100%)', // Frontend - Lightest
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    backgroundSize: '200% 100%',
                  }}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ 
                    opacity: { duration: 0.5 },
                    y: { duration: 0.5 },
                    scale: { duration: 0.5 },
                    backgroundPosition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <span className="dark:bg-gradient-to-r dark:from-cream dark:via-white dark:to-gray-200 dark:bg-clip-text dark:text-transparent">
                    {jobTitles[currentTitle]}
                  </span>
                </motion.p>
              </AnimatePresence>
              
              {/* Enhanced Animated underline with gradient */}
              <motion.div
                className="absolute bottom-0 mx-auto h-1 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, #000000 25%, #374151 50%, #000000 75%, transparent 100%)',
                  backgroundSize: '200% 100%',
                }}
                initial={{ width: 0 }}
                animate={{ 
                  width: '250px',
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  width: { delay: 0.8, duration: 1.2 },
                  backgroundPosition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              
              {/* Dark mode underline */}
              <motion.div
                className="absolute bottom-0 mx-auto h-1 rounded-full opacity-0 dark:opacity-100"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, #F5F5DC 25%, #ffffff 50%, #F5F5DC 75%, transparent 100%)',
                  backgroundSize: '200% 100%',
                }}
                initial={{ width: 0 }}
                animate={{ 
                  width: '250px',
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  width: { delay: 0.8, duration: 1.2 },
                  backgroundPosition: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
                }}
              />
            </motion.div>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Crafting digital experiences with modern technologies, clean code, and pixel-perfect designs that make an impact.
            </motion.p>
          </div>

          {/* Call to Action */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <motion.button
              className="px-8 py-4 bg-black dark:bg-cream text-white dark:text-black font-semibold rounded-2xl professional-shadow hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
            </motion.button>
            
            <motion.button
              className="px-8 py-4 glass-card font-semibold rounded-2xl text-black dark:text-cream hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Enhanced Scroll Indicator - moved below buttons */}
          <motion.div
            className="flex flex-col items-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-400 dark:text-gray-500"
            >
              <ArrowDown className="w-6 h-6" />
            </motion.div>
            <motion.div
              className="w-px h-16 bg-gradient-to-b from-gray-400 to-transparent mt-2"
              animate={{ scaleY: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;