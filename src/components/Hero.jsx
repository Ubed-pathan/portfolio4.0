import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Code, Palette, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
      {/* Remove background to show BackgroundEffects */}
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Enhanced Profile Section */}
          <div className="relative">
            {/* Floating skill icons around profile */}
            <motion.div
              className="absolute -top-8 -left-8"
              animate={{ 
                rotate: [0, 360],
                y: [0, -20, 0]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <div className="w-12 h-12 bg-black/10 dark:bg-cream/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Code className="w-6 h-6 text-black dark:text-cream" />
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-8 -right-8"
              animate={{ 
                rotate: [360, 0],
                y: [0, -15, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, delay: 2 }}
            >
              <div className="w-12 h-12 bg-black/10 dark:bg-cream/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Palette className="w-6 h-6 text-black dark:text-cream" />
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 12, repeat: Infinity, delay: 4 }}
            >
              <div className="w-10 h-10 bg-black/10 dark:bg-cream/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Zap className="w-5 h-5 text-black dark:text-cream" />
              </div>
            </motion.div>

            {/* Enhanced Profile Image */}
            <motion.div
              className="mx-auto w-40 h-40 rounded-full bg-gradient-to-r from-black via-gray-600 to-black dark:from-cream dark:via-white dark:to-cream p-1 professional-shadow"
              whileHover={{ scale: 1.05, rotate: 5 }}
              animate={{ 
                y: [0, -15, 0],
                boxShadow: [
                  '0 20px 40px rgba(0,0,0,0.1)',
                  '0 25px 50px rgba(0,0,0,0.15)',
                  '0 20px 40px rgba(0,0,0,0.1)'
                ]
              }}
              transition={{ 
                y: { duration: 4, repeat: Infinity },
                boxShadow: { duration: 3, repeat: Infinity }
              }}
            >
              <div className="w-full h-full rounded-full bg-white/90 dark:bg-black/90 flex items-center justify-center backdrop-blur-xl">
                <motion.span 
                  className="text-5xl font-bold gradient-text-primary"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  JS
                </motion.span>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Typography Section */}
          <div className="space-y-8">
            <motion.h1
              className="text-6xl md:text-8xl font-black gradient-text-primary tracking-tight"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 1, type: "spring", stiffness: 100 }}
            >
              <motion.span
                animate={{ 
                  textShadow: [
                    '0 0 0px rgba(0,0,0,0)',
                    '0 0 20px rgba(0,0,0,0.1)',
                    '0 0 0px rgba(0,0,0,0)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                John Smith
              </motion.span>
            </motion.h1>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.p
                className="text-2xl md:text-3xl font-semibold gradient-text-accent mb-2"
                animate={{ 
                  y: [0, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                Full Stack Developer & UI/UX Designer
              </motion.p>
              
              {/* Animated underline */}
              <motion.div
                className="mx-auto h-1 bg-gradient-to-r from-transparent via-black to-transparent dark:from-transparent dark:via-cream dark:to-transparent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '200px' }}
                transition={{ delay: 0.8, duration: 1.2 }}
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

          {/* Enhanced Stats/Skills */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 my-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {[
              { number: '5+', label: 'Years Experience' },
              { number: '50+', label: 'Projects Completed' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center glass-card px-6 py-4 rounded-2xl professional-shadow"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <motion.h3 
                  className="text-3xl font-bold gradient-text-primary"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            className="flex justify-center space-x-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {[
              { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-black dark:hover:text-white' },
              { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
              { icon: Mail, href: '#', label: 'Email', color: 'hover:text-red-500' }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className={`group relative p-4 glass-card rounded-2xl professional-shadow transition-all duration-300 ${social.color}`}
                whileHover={{ 
                  scale: 1.1, 
                  y: -8,
                  rotateY: 15 
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30, rotateX: -30 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 1.4 + index * 0.1, type: "spring" }}
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index }}
                >
                  <social.icon className="w-7 h-7 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-all duration-300" />
                </motion.div>
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black dark:bg-cream text-white dark:text-black px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap">
                    {social.label}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

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
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
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
      </div>
    </section>
  );
};

export default Hero;
