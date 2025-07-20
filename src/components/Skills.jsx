import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Code2, Globe, Database, Wrench } from 'lucide-react';
// Import real tech icons
import { 
  SiJavascript, SiTypescript, SiPython, SiReact, SiNextdotjs, 
  SiExpress, SiNodedotjs, SiSpringboot, SiHtml5, SiCss3, 
  SiTailwindcss, SiMongodb, SiPostgresql, SiMysql, SiGit, 
  SiGithub, SiDocker
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbBrandPrisma } from 'react-icons/tb';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming Languages',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Java', icon: FaJava, color: '#ED8B00' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'C', icon: Code2, color: '#A8B9CC' }
      ]
    },
    {
      icon: Globe,
      title: 'Frameworks & Web Technologies',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'React.js', icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
        { name: 'Express.js', icon: SiExpress, color: '#000000' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
        { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS', icon: SiCss3, color: '#1572B6' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' }
      ]
    },
    {
      icon: Database,
      title: 'Databases',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' }
      ]
    },
    {
      icon: Wrench,
      title: 'Tools',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'GitHub', icon: SiGithub, color: '#181717' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'Maven', icon: Wrench, color: '#C71A36' },
        { name: 'Prisma', icon: TbBrandPrisma, color: '#2D3748' }
      ]
    }
  ];

  return (
    <section className="py-12 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
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
            Technical Skills
          </motion.h2>
          
          {/* Stylish underline */}
          <motion.div 
            className="relative mb-6 flex justify-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="h-1 bg-gradient-to-r from-transparent via-black to-transparent dark:from-transparent dark:via-white dark:to-transparent rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: '180px' } : {}}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            />
          </motion.div>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Proficient in modern technologies and frameworks for building scalable, enterprise-grade applications
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              onMouseEnter={() => !isMobile && setHoveredCategory(categoryIndex)}
              onMouseLeave={() => !isMobile && setHoveredCategory(null)}
            >
              {/* Category Card */}
              <div className="bg-white/30 dark:bg-black/10 backdrop-blur-3xl border border-gray-200/50 dark:border-cream/20 rounded-3xl p-8 shadow-2xl shadow-gray-300/20 dark:shadow-black/40"
                style={{
                  backdropFilter: 'blur(32px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(32px) saturate(180%)',
                }}
              >
                {/* Header */}
                <div className="flex items-center mb-6">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mr-4 shadow-xl shadow-gray-400/30 dark:shadow-lg`}
                    whileHover={!isMobile ? { scale: 1.1, rotate: 5 } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-1">
                      {category.title}
                    </h3>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {category.skills.length} technologies
                    </div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="group"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                    >
                      <div className="flex flex-col items-center justify-center p-4 bg-white/40 dark:bg-black/10 rounded-2xl hover:bg-white/60 dark:hover:bg-black/20 hover:shadow-lg shadow-gray-200/50 dark:shadow-none transition-all duration-300 cursor-pointer aspect-square group border border-gray-200/30 dark:border-transparent">
                        <skill.icon 
                          className="text-2xl md:text-3xl mb-2 transition-all duration-300 group-hover:scale-110" 
                          style={{ 
                            color: skill.color,
                            filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15)) drop-shadow(0 0 4px rgba(255,255,255,0.3))'
                          }}
                        />
                        <span className="text-gray-800 dark:text-gray-300 font-semibold text-xs md:text-sm text-center group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Enhanced Hover Effect for Light Mode */}
                {!isMobile && hoveredCategory === categoryIndex && (
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 dark:opacity-5 rounded-3xl pointer-events-none`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats - reduced margin */}
        <motion.div
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/*
            { icon: Code2, number: '5+', label: 'Languages', color: 'from-blue-500 to-cyan-500' },
            { icon: Layers, number: '12+', label: 'Frameworks', color: 'from-green-500 to-emerald-500' },
            { icon: Server, number: '3', label: 'Databases', color: 'from-purple-500 to-pink-500' },
            { icon: Terminal, number: '5+', label: 'Tools', color: 'from-orange-500 to-red-500' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center bg-white/10 dark:bg-black/10 backdrop-blur-3xl border border-white/20 dark:border-cream/20 p-6 rounded-2xl professional-shadow"
              style={{
                backdropFilter: 'blur(32px) saturate(180%)',
                WebkitBackdropFilter: 'blur(32px) saturate(180%)',
              }}
              whileHover={!isMobile ? { scale: 1.05, y: -5 } : {}}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3`}
                whileHover={!isMobile ? { rotate: 10 } : {}}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </motion.div>
              <motion.div
                className="text-2xl md:text-3xl font-black bg-gradient-to-r from-black via-gray-700 to-black dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent"
                animate={!isMobile ? {
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                } : {}}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
              >
                {stat.number}
              </motion.div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
          */}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;