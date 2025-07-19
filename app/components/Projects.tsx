'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTheme } from './ThemeProvider'
import { ExternalLink, Github, Sparkles, Database, Shield, Zap, Globe, MessageCircle } from 'lucide-react'

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const { theme } = useTheme()

  const projects = [
    {
      title: 'CraftlyAI',
      subtitle: 'AI Career Assistant',
      description: 'Built an AI-powered platform for resumes, cover letters, industry insights, and interview prep with role-based improvements tips. Integrated Clerk auth, Zod validation, shadcn UI, Inngest workflows, and markdown editor for rich content editing.',
      image: '/craftlyai.png', // Replace with your actual image
      tags: ['Next.js 15', 'Prisma', 'PostgreSQL', 'Gemini AI', 'Zod', 'shadcn/UI'],
      techStack: 'Full-Stack AI Platform',
      github: 'https://github.com/Ubed-pathan/craftlyAI',
      demo: 'https://craftly-ai.vercel.app/',
      featured: true,
      icon: Sparkles,
      category: 'AI & Machine Learning'
    },
    {
      title: 'Nexore',
      subtitle: 'Social Media Platform',
      description: 'Built a scalable social app with auth, posts, likes, comments, follow, unfollow, and media using Cloudinary. Used PostgreSQL for relational data management and React for dynamic UI.',
      image: '/nexora.png', // Replace with your actual image
      tags: ['Java', 'Spring Boot', 'React', 'Docker', 'PostgreSQL', 'Cloudinary'],
      techStack: 'Java Full-Stack',
      github: 'https://github.com/Ubed-pathan/Nexora',
      demo: 'https://nexora--one.vercel.app/',
      featured: true,
      icon: Globe,
      category: 'Social Platform'
    },
    {
      title: 'Talkify',
      subtitle: 'Real-time Chat App',
      description: 'Created a chat app with WebSocket for real-time messaging, media sharing, and online/offline user status. Used TypeScript and JWT for secure user authentication and communication.',
      image: '/talkify.png', // Replace with your actual image
      tags: ['MERN', 'TypeScript', 'WebSocket', 'JWT'],
      techStack: 'MERN Stack',
      github: 'https://github.com/Ubed-pathan/Talkify',
      demo: 'https://talkify-zdlm.onrender.com/',
      featured: true,
      icon: MessageCircle,
      category: 'Real-time Communication'
    },
    {
      title: 'ASFurniture',
      subtitle: 'E-commerce Platform',
      description: 'Built a MERN stack e-commerce site with Docker deployment, JWT auth, Tailwind UI, and admin inventory control. Implemented secure login, product listing, add-to-cart, and scalable architecture.',
      image: '/asfurniture.png', // Replace with your actual image
      tags: ['MERN', 'Tailwind CSS', 'Docker', 'JWT'],
      techStack: 'MERN Stack',
      github: '#',
      demo: '#',
      featured: true,
      icon: Database,
      category: 'E-commerce'
    },
    {
      title: 'Day Brief',
      subtitle: 'Blog Application',
      description: 'Developed a blog app with server-side rendering, SEO optimization, and user authentication using NextAuth. Implemented likes, comments, saved blogs, and fast-loading UI using Tailwind, and Cloudinary for media uploads.',
      image: '/daybrief.png', // Replace with your actual image
      tags: ['Next.js 15', 'Tailwind CSS', 'PostgreSQL', 'Cloudinary', 'NextAuth'],
      techStack: 'Next.js Full-Stack',
      github: '#',
      demo: '#',
      featured: true,
      icon: Shield,
      category: 'Content Management'
    }
  ]

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-20 left-20 w-40 h-40 rounded-full opacity-5 blur-3xl animate-pulse
          ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'}
        `} />
        <div className={`absolute bottom-40 right-10 w-56 h-56 rounded-full opacity-5 blur-3xl animate-pulse
          ${theme === 'dark' ? 'bg-gray-400' : 'bg-gray-600'}
        `} style={{ animationDelay: '2s' }} />
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
            <Zap size={20} className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} />
            <span className={`text-sm uppercase tracking-wider font-medium
              ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
            `}>
              Featured Work
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Projects</h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`h-1 mx-auto rounded-full bg-gradient-to-r mb-8
              ${theme === 'dark' ? 'from-gray-400 to-gray-600' : 'from-gray-700 to-gray-900'}
            `}
          />
          
          <p className={`text-lg max-w-2xl mx-auto leading-relaxed
            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
          `}>
            Showcasing my expertise in Java Full-Stack and MERN stack development through real-world applications
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className={`text-2xl font-bold mb-8
            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
          `}>
            Featured Projects
          </h3>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`glass rounded-3xl overflow-hidden group cursor-pointer relative
                  ${theme === 'dark' 
                    ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                    : 'bg-gray-50/80 border border-gray-200/20 hover:bg-gray-100/60'
                  }
                  transition-all duration-500
                `}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm
                      ${theme === 'dark' 
                        ? 'bg-white/20 text-white border border-white/30' 
                        : 'bg-black/20 text-white border border-white/30'
                      }
                    `}>
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-1">
                    <div className="flex space-x-1">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 glass rounded-full hover:bg-white/20 backdrop-blur-sm flex flex-col items-center"
                      >
                        <Github size={16} className="text-white" />
                      </motion.a>
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 glass rounded-full hover:bg-white/20 backdrop-blur-sm flex flex-col items-center"
                        >
                          <ExternalLink size={16} className="text-white" />
                        </motion.a>
                      )}
                    </div>
                    <div className="flex space-x-1 text-xs text-white font-medium">
                      <span className="text-center w-8">Code</span>
                      {project.demo && <span className="text-center w-8">Live</span>}
                    </div>
                  </div>

                  {/* Tech Stack Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-2 py-1 rounded-md text-xs font-medium
                      ${theme === 'dark' 
                        ? 'bg-gray-800/80 text-gray-200 border border-gray-700/50' 
                        : 'bg-white/80 text-gray-800 border border-gray-300/50'
                      }
                    `}>
                      {project.techStack}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <project.icon size={20} className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} />
                    <div>
                      <h3 className={`text-xl font-bold
                        ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
                      `}>
                        {project.title}
                      </h3>
                      <p className={`text-sm font-medium
                        ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
                      `}>
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className={`mb-4 leading-relaxed text-sm
                    ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
                  `}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-1 text-xs rounded-md font-medium transition-colors
                          ${theme === 'dark' 
                            ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50' 
                            : 'bg-gray-200/80 text-gray-700 hover:bg-gray-300/80'
                          }
                        `}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/Ubed-pathan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                boxShadow: theme === 'dark' 
                  ? '0 20px 40px rgba(255, 255, 255, 0.1)' 
                  : '0 20px 40px rgba(0, 0, 0, 0.15)'
              }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg
                transition-all duration-300 relative overflow-hidden group
                ${theme === 'dark'
                  ? 'bg-gradient-to-r from-gray-800 to-gray-700 text-white hover:from-gray-700 hover:to-gray-600 border border-gray-600/50'
                  : 'bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-gray-800 hover:to-gray-700 border border-gray-700/50'
                }
              `}
            >
              <span className="relative z-10 flex items-center gap-3">
                <Github size={20} />
                View All Projects
                <ExternalLink size={16} />
              </span>
              
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent 
                transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              {/* Subtle glow effect */}
              <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 
                transition-opacity duration-500 blur-xl
                ${theme === 'dark' 
                  ? 'bg-gradient-to-r from-gray-600/30 to-gray-700/30' 
                  : 'bg-gradient-to-r from-gray-800/30 to-gray-900/30'
                }
              `} />
            </motion.a>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.8 }}
              className={`mt-4 text-sm
                ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
              `}
            >
              Explore more projects on my GitHub profile
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}