'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTheme } from './ThemeProvider'
import Image from 'next/image'
import { User, Code, Heart, Database, Award, Target, Server, Monitor } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })
  
  const { theme } = useTheme()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const stats = [
    { icon: Code, label: 'Projects Built', value: '10+' },
    { icon: Server, label: 'Backend Expertise', value: '2 Stacks' },
    { icon: Database, label: 'Databases', value: '3+' },
    { icon: Heart, label: 'Passion for Code', value: '100%' },
  ]

  const skills = [
    { label: 'Java Full-Stack', percentage: 92, color: theme === 'dark' ? 'from-white to-gray-300' : 'from-gray-900 to-gray-700' },
    { label: 'MERN Stack', percentage: 90, color: theme === 'dark' ? 'from-gray-400 to-gray-600' : 'from-gray-700 to-gray-500' },
    { label: 'Spring Framework', percentage: 88, color: theme === 'dark' ? 'from-gray-300 to-gray-500' : 'from-gray-600 to-gray-800' },
    { label: 'React & Next.js', percentage: 89, color: theme === 'dark' ? 'from-gray-500 to-gray-400' : 'from-gray-800 to-gray-600' },
  ]

  const techStacks = [
    {
      category: 'Programming Languages',
      items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'C'],
      icon: Code,
    },
    {
      category: 'Frameworks & Web Technologies',
      items: ['React.js', 'Next.js', 'Express.js', 'Node.js', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'HTML', 'CSS', 'Tailwind CSS', 'WebSocket'],
      icon: Monitor,
    },
    {
      category: 'Databases',
      items: ['MongoDB', 'PostgreSQL', 'MySQL'],
      icon: Database,
    },
    {
      category: 'Tools & Technologies',
      items: ['Git', 'GitHub', 'Docker', 'Maven', 'Prisma'],
      icon: Award,
    },
  ]

  if (isMobile) {
    return (
      <section id="about" className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
          {/* Section Header - Mobile Static */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <User size={20} className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} />
              <span className={`text-sm uppercase tracking-wider font-medium
                ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
              `}>
                Get to know me
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">About Me</h2>
            <div className={`h-1 mx-auto rounded-full bg-gradient-to-r
              ${theme === 'dark' ? 'from-gray-400 to-gray-600' : 'from-gray-700 to-gray-900'}
            `} style={{ width: 80 }} />
          </div>

          {/* Main Content Grid - Mobile Optimized */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            
            {/* Profile Image & Info */}
            <div className="space-y-8">
              {/* Profile Image */}
              <div className="relative">
                <div className={`w-80 h-80 mx-auto relative rounded-3xl overflow-hidden border-4
                  ${theme === 'dark' 
                    ? 'border-white/20 shadow-2xl shadow-black/20' 
                    : 'border-gray-200/50 shadow-2xl shadow-gray-900/10'
                  }
                `}>
                  <Image
                    src="/ubed.jpg"
                    alt="Profile"
                    fill
                    className="object-fill"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                  
                  {/* Static decoration */}
                  <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full
                    ${theme === 'dark' ? 'bg-gray-400' : 'bg-gray-600'}
                  `} />
                  <div className={`absolute -bottom-3 -left-3 w-4 h-4 rounded-full
                    ${theme === 'dark' ? 'bg-gray-500' : 'bg-gray-500'}
                  `} />
                </div>
              </div>

              {/* About Text */}
              <div className={`glass p-8 rounded-3xl relative overflow-hidden
                ${theme === 'dark' 
                  ? 'bg-white/5 border border-white/10' 
                  : 'bg-gray-50/80 border border-gray-200/20'
                }
              `}>
                <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3
                  ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
                `}>
                  <Target size={24} className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} />
                  Java & MERN Stack Developer
                </h3>
                
                <div className="space-y-4">
                  <p className={`leading-relaxed
                    ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
                  `}>
                    Passionate Java Full-Stack and MERN Stack developer with expertise in building enterprise-grade 
                    applications. Proficient in both traditional Java ecosystems with Spring Boot and modern JavaScript 
                    frameworks like React.js and Next.js.
                  </p>
                  
                  <p className={`leading-relaxed
                    ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
                  `}>
                    I specialize in creating scalable microservices with Spring Security, RESTful APIs, and dynamic 
                    frontend applications. My diverse tech stack allows me to deliver full-scale solutions from 
                    database design to user interface implementation.
                  </p>
                </div>

                {/* Static decorative elements */}
                <div className={`absolute top-4 right-4 w-2 h-2 rounded-full opacity-60
                  ${theme === 'dark' ? 'bg-gray-400' : 'bg-gray-500'}
                `} />
              </div>
            </div>

            {/* Skills & Stats */}
            <div className="space-y-8">
              {/* Skills */}
              <div className={`glass p-8 rounded-3xl
                ${theme === 'dark' 
                  ? 'bg-white/5 border border-white/10' 
                  : 'bg-gray-50/80 border border-gray-200/20'
                }
              `}>
                <h3 className={`text-xl font-bold mb-6
                  ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
                `}>
                  Core Expertise
                </h3>
                
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={skill.label}>
                      <div className="flex justify-between items-center mb-3">
                        <span className={`font-medium
                          ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}
                        `}>
                          {skill.label}
                        </span>
                        <span className={`text-sm
                          ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
                        `}>
                          {skill.percentage}%
                        </span>
                      </div>
                      
                      <div className={`w-full h-2 rounded-full overflow-hidden
                        ${theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-200/80'}
                      `}>
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative overflow-hidden`}
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`glass p-6 rounded-2xl text-center
                      ${theme === 'dark' 
                        ? 'bg-white/5 border border-white/10' 
                        : 'bg-gray-50/80 border border-gray-200/20'
                      }
                    `}
                  >
                    <stat.icon 
                      size={24} 
                      className={`mx-auto mb-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} 
                    />
                    <div className={`text-2xl font-bold mb-1
                      ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
                    `}>
                      {stat.value}
                    </div>
                    <div className={`text-xs uppercase tracking-wider
                      ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
                    `}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Desktop version - Keep all existing animations
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-20 left-10 w-32 h-32 rounded-full opacity-10 blur-2xl
          ${theme === 'dark' ? 'bg-gray-400' : 'bg-gray-300'}
        `} />
        <div className={`absolute bottom-20 right-10 w-40 h-40 rounded-full opacity-10 blur-2xl
          ${theme === 'dark' ? 'bg-gray-500' : 'bg-gray-400'}
        `} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <User size={20} className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} />
            <span className={`text-sm uppercase tracking-wider font-medium
              ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
            `}>
              Get to know me
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">About Me</h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`h-1 mx-auto rounded-full bg-gradient-to-r
              ${theme === 'dark' ? 'from-gray-400 to-gray-600' : 'from-gray-700 to-gray-900'}
            `}
          />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Profile Image & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className={`w-80 h-80 mx-auto relative rounded-3xl overflow-hidden border-4
                ${theme === 'dark' 
                  ? 'border-white/20 shadow-2xl shadow-black/20' 
                  : 'border-gray-200/50 shadow-2xl shadow-gray-900/10'
                }
              `}>
                <Image
                  src="/ubed.jpg" // You'll need to add your image to public folder
                  alt="Profile"
                  fill
                  className="object-fill"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
                
                {/* Floating decoration */}
                <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full animate-pulse
                  ${theme === 'dark' ? 'bg-gray-400' : 'bg-gray-600'}
                `} />
                <div className={`absolute -bottom-3 -left-3 w-4 h-4 rounded-full animate-ping
                  ${theme === 'dark' ? 'bg-gray-500' : 'bg-gray-500'}
                `} />
              </div>
            </div>

            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`glass p-8 rounded-3xl relative overflow-hidden
                ${theme === 'dark' 
                  ? 'bg-white/5 border border-white/10' 
                  : 'bg-gray-50/80 border border-gray-200/20'
                }
              `}
            >
              <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3
                ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
              `}>
                <Target size={24} className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} />
                Java & MERN Stack Developer
              </h3>
              
              <div className="space-y-4">
                <p className={`leading-relaxed
                  ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
                `}>
                  Passionate Java Full-Stack and MERN Stack developer with expertise in building enterprise-grade 
                  applications. Proficient in both traditional Java ecosystems with Spring Boot and modern JavaScript 
                  frameworks like React.js and Next.js.
                </p>
                
                <p className={`leading-relaxed
                  ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
                `}>
                  I specialize in creating scalable microservices with Spring Security, RESTful APIs, and dynamic 
                  frontend applications. My diverse tech stack allows me to deliver full-scale solutions from 
                  database design to user interface implementation.
                </p>
              </div>

              {/* Decorative elements */}
              <div className={`absolute top-4 right-4 w-2 h-2 rounded-full opacity-60
                ${theme === 'dark' ? 'bg-gray-400' : 'bg-gray-500'}
              `} />
            </motion.div>
          </motion.div>

          {/* Skills & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Skills */}
            <div className={`glass p-8 rounded-3xl
              ${theme === 'dark' 
                ? 'bg-white/5 border border-white/10' 
                : 'bg-gray-50/80 border border-gray-200/20'
              }
            `}>
              <h3 className={`text-xl font-bold mb-6
                ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
              `}>
                Core Expertise
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className={`font-medium
                        ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}
                      `}>
                        {skill.label}
                      </span>
                      <span className={`text-sm
                        ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
                      `}>
                        {skill.percentage}%
                      </span>
                    </div>
                    
                    <div className={`w-full h-2 rounded-full overflow-hidden
                      ${theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-200/80'}
                    `}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.percentage}%` } : {}}
                        transition={{ duration: 1.5, delay: 0.8 + index * 0.1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative overflow-hidden`}
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                          transform -translate-x-full animate-shimmer" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className={`glass p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300
                    ${theme === 'dark' 
                      ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                      : 'bg-gray-50/80 border border-gray-200/20 hover:bg-gray-100/60'
                    }
                  `}
                >
                  <stat.icon 
                    size={24} 
                    className={`mx-auto mb-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} 
                  />
                  <div className={`text-2xl font-bold mb-1
                    ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
                  `}>
                    {stat.value}
                  </div>
                  <div className={`text-xs uppercase tracking-wider
                    ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
                  `}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technology Stack Section
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className={`text-3xl font-bold text-center mb-12
            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
          `}>
            Technology Stack
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {techStacks.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className={`glass p-6 rounded-2xl
                  ${theme === 'dark' 
                    ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                    : 'bg-gray-50/80 border border-gray-200/20 hover:bg-gray-100/60'
                  }
                  transition-all duration-300 hover:scale-105
                `}
              >
                <div className="flex items-center gap-3 mb-4">
                  <stack.icon 
                    size={24} 
                    className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} 
                  />
                  <h4 className={`text-lg font-semibold
                    ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
                  `}>
                    {stack.category}
                  </h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item, itemIndex) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1 + index * 0.1 + itemIndex * 0.05 
                      }}
                      className={`px-3 py-1 text-sm rounded-full font-medium
                        ${theme === 'dark' 
                          ? 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50' 
                          : 'bg-gray-200/80 text-gray-700 hover:bg-gray-300/80'
                        }
                        transition-all duration-200 hover:scale-105 cursor-default
                      `}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  )
}
