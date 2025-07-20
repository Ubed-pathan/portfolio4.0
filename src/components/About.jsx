import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Code, Palette, Zap, Heart, User, Coffee, Award, MapPin } from 'lucide-react';
import profileImage from '../asset/ubed.jpg';
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const skills = [
    { icon: Code, title: 'Frontend Development', desc: 'React, Next.js, TypeScript', color: 'from-blue-500 to-cyan-500' },
    { icon: Zap, title: 'Backend Development', desc: 'Node.js, Java, Spring Boot', color: 'from-green-500 to-emerald-500' },
    { icon: Palette, title: 'UI/UX Design', desc: 'Figma, Adobe XD, Tailwind', color: 'from-purple-500 to-pink-500' },
    { icon: Heart, title: 'Problem Solving', desc: 'Clean Code, Best Practices', color: 'from-red-500 to-orange-500' }
  ];

  const stats = [
    { icon: Code, number: '10+', label: 'Projects Built' },
    { icon: Zap, number: '2', label: 'Stacks' }
  ];

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Remove background - keep it transparent */}
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Desktop: Left-Right Layout, Mobile: Stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Image with blur effects */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Main Profile Image Container */}
            <div className="relative">
              <motion.div
                className="relative w-full max-w-md mx-auto"
                whileHover={!isMobile ? { scale: 1.02 } : {}}
                transition={{ duration: 0.3 }}
              >
                {/* Profile Image */}
                <div className="relative w-80 h-80 mx-auto rounded-3xl overflow-hidden bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/30 dark:border-cream/30 professional-shadow">
                  <img 
                    src={profileImage} 
                    alt="Ubed Pathan"
                    className="w-full h-full object-fill"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Header */}
            <div>
              <motion.h2
                className="text-4xl md:text-5xl font-black text-black dark:text-white mb-2"
                animate={!isMobile ? { 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                } : {}}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                About Me
              </motion.h2>
              
              {/* Stylish underline */}
              <motion.div 
                className="relative mb-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.div
                  className="h-1 bg-gradient-to-r from-transparent via-black to-transparent dark:from-transparent dark:via-white dark:to-transparent rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '120px' } : {}}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                />
                <motion.div
                  className="absolute top-0 h-1 bg-gradient-to-r from-black/30 to-transparent dark:from-white/30 dark:to-transparent rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '60px' } : {}}
                  transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                />
              </motion.div>

              <motion.div
                className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p>
                  Passionate Java Full-Stack and MERN Stack developer with expertise in building 
                  enterprise-grade applications. Proficient in both traditional Java ecosystems 
                  with Spring Boot and modern JavaScript frameworks like React.js and Next.js.
                </p>
                <p>
                  I specialize in creating scalable microservices with Spring Security, RESTful APIs, 
                  and dynamic frontend applications. My diverse tech stack allows me to deliver 
                  full-scale solutions from database design to user interface implementation.
                </p>
              </motion.div>
            </div>

            {/* Stats - Enhanced blur effects */}
            <motion.div
              className="grid grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center bg-white/10 dark:bg-black/10 backdrop-blur-3xl border border-white/20 dark:border-cream/20 p-6 rounded-2xl professional-shadow"
                  style={{
                    backdropFilter: 'blur(32px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(32px) saturate(180%)',
                  }}
                  whileHover={!isMobile ? { 
                    scale: 1.05, 
                    y: -5,
                    backdropFilter: 'blur(40px) saturate(200%)'
                  } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <stat.icon className="w-8 h-8 text-gray-600 dark:text-gray-400 mx-auto mb-3" />
                  <motion.div
                    className="text-4xl md:text-5xl font-black bg-gradient-to-r from-black via-gray-700 to-black dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent mb-1"
                    style={{
                      backgroundSize: '200% 100%',
                      fontFamily: 'Inter, system-ui, sans-serif',
                      letterSpacing: '-0.02em'
                    }}
                    animate={!isMobile ? {
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    } : {}}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 1
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;