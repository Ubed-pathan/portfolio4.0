import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ExternalLink, Github, Sparkles, Database, Shield, Zap, Globe, MessageCircle } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects = [
    {
      title: 'CraftlyAI',
      subtitle: 'AI Career Assistant',
      description: 'Built an AI-powered platform for resumes, cover letters, industry insights, and interview prep with role-based improvements tips. Integrated Clerk auth, Zod validation, shadcn UI, Inngest workflows, and markdown editor for rich content editing.',
      image: '/src/public/craftlyai.png',
      imageAlt: 'https://via.placeholder.com/400x200?text=CraftlyAI',
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
      image: '/src/public/nexora.png',
      imageAlt: 'https://via.placeholder.com/400x200?text=Nexore',
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
      image: '/src/public/talkify.png',
      imageAlt: 'https://via.placeholder.com/400x200?text=Talkify',
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
      image: '/src/public/asfurniture.png',
      imageAlt: 'https://via.placeholder.com/400x200?text=ASFurniture',
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
      image: '/src/public/daybrief.png',
      imageAlt: 'https://via.placeholder.com/400x200?text=Day+Brief',
      tags: ['Next.js 15', 'Tailwind CSS', 'PostgreSQL', 'Cloudinary', 'NextAuth'],
      techStack: 'Next.js Full-Stack',
      github: '#',
      demo: '#',
      featured: true,
      icon: Shield,
      category: 'Content Management'
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Zap size={20} className="text-gray-600 dark:text-gray-400" />
            <span className="text-sm uppercase tracking-wider font-medium text-gray-600 dark:text-gray-400">
              Featured Work
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black dark:text-white">Projects</h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '80px' } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 mx-auto rounded-full bg-gradient-to-r from-black to-gray-800 dark:from-cream dark:to-white mb-8"
          />
          
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300">
            Showcasing my expertise in Java Full-Stack and MERN stack development through real-world applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-black dark:text-white">
            Featured Projects
          </h3>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white/30 dark:bg-black/10 backdrop-blur-3xl border border-gray-200/50 dark:border-cream/20 rounded-3xl overflow-hidden group cursor-pointer relative transition-all duration-500 hover:scale-105 professional-shadow"
                style={{
                  backdropFilter: 'blur(32px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(32px) saturate(180%)',
                }}
              >
                {/* Project Image with fallback */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      !isMobile ? 'group-hover:scale-110' : ''
                    }`}
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.target.src = `https://via.placeholder.com/400x200/6B7280/FFFFFF?text=${project.title}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm bg-white/20 dark:bg-black/20 text-white border border-white/30">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-1">
                    <div className="flex space-x-1">
                      <motion.a
                        href={project.github}
                        whileHover={!isMobile ? { scale: 1.1 } : {}}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white/20 dark:bg-black/20 rounded-full hover:bg-white/30 dark:hover:bg-black/30 backdrop-blur-sm transition-colors duration-300"
                      >
                        <Github size={16} className="text-white" />
                      </motion.a>
                      {project.demo && project.demo !== '#' && (
                        <motion.a
                          href={project.demo}
                          whileHover={!isMobile ? { scale: 1.1 } : {}}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-white/20 dark:bg-black/20 rounded-full hover:bg-white/30 dark:hover:bg-black/30 backdrop-blur-sm transition-colors duration-300"
                        >
                          <ExternalLink size={16} className="text-white" />
                        </motion.a>
                      )}
                    </div>
                    <div className="flex space-x-1 text-xs text-white font-medium">
                      <span className="text-center w-8">Code</span>
                      {project.demo && project.demo !== '#' && <span className="text-center w-8">Live</span>}
                    </div>
                  </div>

                  {/* Tech Stack Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-2 py-1 rounded-md text-xs font-medium bg-gray-800/80 dark:bg-white/80 text-gray-200 dark:text-gray-800 border border-gray-700/50 dark:border-gray-300/50">
                      {project.techStack}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <project.icon size={20} className="text-gray-600 dark:text-gray-400" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="mb-4 leading-relaxed text-sm text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md font-medium transition-colors bg-gray-200/80 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-gray-300/80 dark:hover:bg-gray-700/50"
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
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/Ubed-pathan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={!isMobile ? { 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
              } : {}}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 relative overflow-hidden group bg-black dark:bg-cream text-white dark:text-black professional-shadow"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Github size={20} />
                View All Projects
                <ExternalLink size={16} />
              </span>
              
              {!isMobile && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              )}
            </motion.a>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="mt-4 text-sm text-gray-600 dark:text-gray-400"
            >
              Explore more projects on my GitHub profile
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;