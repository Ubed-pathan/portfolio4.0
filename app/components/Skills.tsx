'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTheme } from './ThemeProvider'
import { Code2, Database, Server, Monitor, Globe, Zap, Layers, Sparkles } from 'lucide-react'

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })
  
  const { theme } = useTheme()

  const skillCategories = [
    {
      title: 'Java Ecosystem',
      icon: Code2,
      color: theme === 'dark' ? 'from-white to-gray-300' : 'from-gray-900 to-gray-700',
      skills: [
        { name: 'Java', level: 92, type: 'language' },
        { name: 'Spring Boot', level: 88, type: 'framework' },
        { name: 'Spring Security', level: 85, type: 'framework' },
        { name: 'Microservices', level: 80, type: 'architecture' }
      ]
    },
    {
      title: 'MERN Stack',
      icon: Globe,
      color: theme === 'dark' ? 'from-gray-400 to-gray-600' : 'from-gray-700 to-gray-500',
      skills: [
        { name: 'MongoDB', level: 87, type: 'database' },
        { name: 'Express.js', level: 89, type: 'framework' },
        { name: 'React.js', level: 91, type: 'library' },
        { name: 'Node.js', level: 86, type: 'runtime' }
      ]
    },
    {
      title: 'Frontend Technologies',
      icon: Monitor,
      color: theme === 'dark' ? 'from-gray-300 to-gray-500' : 'from-gray-600 to-gray-800',
      skills: [
        { name: 'Next.js', level: 88, type: 'framework' },
        { name: 'TypeScript', level: 84, type: 'language' },
        { name: 'Tailwind CSS', level: 90, type: 'styling' },
        { name: 'JavaScript', level: 93, type: 'language' }
      ]
    },
    {
      title: 'Backend & Database',
      icon: Server,
      color: theme === 'dark' ? 'from-gray-500 to-gray-400' : 'from-gray-800 to-gray-600',
      skills: [
        { name: 'PostgreSQL', level: 83, type: 'database' },
        { name: 'MySQL', level: 85, type: 'database' },
        { name: 'Docker', level: 78, type: 'tool' },
        { name: 'Git', level: 89, type: 'tool' }
      ]
    }
  ]

  const getTypeColor = (type: string) => {
    const colors = {
      language: theme === 'dark' ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700',
      framework: theme === 'dark' ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-700',
      database: theme === 'dark' ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700',
      library: theme === 'dark' ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-700',
      runtime: theme === 'dark' ? 'bg-yellow-500/20 text-yellow-300' : 'bg-yellow-100 text-yellow-700',
      styling: theme === 'dark' ? 'bg-pink-500/20 text-pink-300' : 'bg-pink-100 text-pink-700',
      architecture: theme === 'dark' ? 'bg-indigo-500/20 text-indigo-300' : 'bg-indigo-100 text-indigo-700',
      tool: theme === 'dark' ? 'bg-gray-500/20 text-gray-300' : 'bg-gray-100 text-gray-700'
    }
    return colors[type as keyof typeof colors] || colors.tool
  }

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-10 right-10 w-64 h-64 rounded-full opacity-5 blur-3xl animate-pulse
          ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'}
        `} />
        <div className={`absolute bottom-20 left-20 w-48 h-48 rounded-full opacity-5 blur-2xl animate-pulse
          ${theme === 'dark' ? 'bg-gray-400' : 'bg-gray-600'}
        `} style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
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
            <Sparkles size={20} className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} />
            <span className={`text-sm uppercase tracking-wider font-medium
              ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
            `}>
              Technical Expertise
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Skills & Technologies</h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 100 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`h-1 mx-auto rounded-full bg-gradient-to-r mb-8
              ${theme === 'dark' ? 'from-gray-400 to-gray-600' : 'from-gray-700 to-gray-900'}
            `}
          />
          
          <p className={`text-lg max-w-2xl mx-auto leading-relaxed
            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
          `}>
            Modern technologies and frameworks I use to build robust, scalable applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
              className={`glass p-8 rounded-3xl relative overflow-hidden group
                ${theme === 'dark' 
                  ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                  : 'bg-gray-50/80 border border-gray-200/20 hover:bg-gray-100/60'
                }
                transition-all duration-500 hover:scale-105
              `}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`p-3 rounded-2xl bg-gradient-to-br ${category.color}`}
                >
                  <category.icon size={28} className="text-white" />
                </motion.div>
                
                <div>
                  <h3 className={`text-2xl font-bold
                    ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
                  `}>
                    {category.title}
                  </h3>
                  <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${category.color} mt-1`} />
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.1 
                    }}
                    className="group/skill"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className={`font-semibold text-lg
                          ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}
                        `}>
                          {skill.name}
                        </span>
                        <span className={`px-2 py-1 text-xs rounded-full font-medium ${getTypeColor(skill.type)}`}>
                          {skill.type}
                        </span>
                      </div>
                      
                      <span className={`text-sm font-bold
                        ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
                      `}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Modern Progress Bar */}
                    <div className="relative">
                      <div className={`w-full h-3 rounded-full overflow-hidden
                        ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-200/80'}
                      `}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1.5, 
                            delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.color} relative overflow-hidden`}
                        >
                          {/* Animated shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                            transform -translate-x-full group-hover/skill:translate-x-full transition-transform duration-1000" />
                        </motion.div>
                      </div>
                      
                      {/* Skill level indicator */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.1 
                        }}
                        className={`absolute -top-1 bg-gradient-to-r ${category.color} w-5 h-5 rounded-full border-2
                          ${theme === 'dark' ? 'border-gray-800' : 'border-white'}
                        `}
                        style={{ left: `calc(${skill.level}% - 10px)` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative elements */}
              <div className={`absolute top-4 right-4 w-2 h-2 rounded-full opacity-50
                ${theme === 'dark' ? 'bg-gray-400' : 'bg-gray-500'}
              `} />
              <div className={`absolute bottom-4 left-4 w-1 h-1 rounded-full opacity-30 animate-ping
                ${theme === 'dark' ? 'bg-gray-500' : 'bg-gray-400'}
              `} />
            </motion.div>
          ))}
        </div>

        {/* Additional Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className={`text-2xl font-bold text-center mb-8
            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
          `}>
            Additional Technologies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {['Maven', 'Prisma', 'WebSocket', 'REST APIs', 'Hibernate', 'JPA', 'Python', 'C'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 + index * 0.05 }}
                className={`px-4 py-2 rounded-full font-medium cursor-default
                  transition-all duration-300 hover:scale-110
                  ${theme === 'dark' 
                    ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }
                `}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
