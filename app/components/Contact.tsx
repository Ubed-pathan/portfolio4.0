'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTheme } from './ThemeProvider'
import { Mail, Github, Linkedin, Twitter, MessageCircle, ExternalLink, Send, MapPin, Calendar, Briefcase } from 'lucide-react'

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const { theme } = useTheme()

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ubedpathan818@gmail.com',
      href: 'mailto:ubedpathan818@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/ubed-pathan-35a715242',
      href: 'https://www.linkedin.com/in/ubed-pathan-35a715242'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Ubed-pathan',
      href: 'https://github.com/Ubed-pathan'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: '@mr_ubed08',
      href: 'https://x.com/mr_ubed08'
    }
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <MessageCircle size={20} className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} />
            <span className={`text-sm uppercase tracking-wider font-medium
              ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
            `}>
              Let's Work Together
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
          
          <p className={`text-lg max-w-2xl mx-auto
            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
          `}>
            Ready to bring your project to life? I'm available for freelance opportunities and full-time positions.
          </p>
        </motion.div>

        {/* Main Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`glass p-4 sm:p-8 md:p-12 rounded-3xl
            ${theme === 'dark' 
              ? 'bg-white/5 border border-white/10' 
              : 'bg-gray-50/80 border border-gray-200/20'
            }
          `}
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Left Side - About & Availability */}
            <div className="space-y-6 md:space-y-8 w-full overflow-hidden">
              <div className="w-full">
                <h3 className={`text-xl md:text-2xl font-bold mb-4 flex items-center gap-3
                  ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
                `}>
                  <Briefcase size={20} />
                  Professional Services
                </h3>
                
                <div className="space-y-4 w-full">
                  <div className={`p-3 md:p-4 rounded-xl border w-full
                    ${theme === 'dark' 
                      ? 'bg-gray-800/30 border-gray-700/50' 
                      : 'bg-white/50 border-gray-300/30'
                    }
                  `}>
                    <h4 className={`font-semibold mb-2 text-sm md:text-base
                      ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
                    `}>
                      Freelance Development
                    </h4>
                    <p className={`text-xs md:text-sm
                      ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
                    `}>
                      Available for Java Full-Stack and MERN stack projects. Custom web applications, 
                      API development, and database design.
                    </p>
                  </div>
                  
                  <div className={`p-3 md:p-4 rounded-xl border w-full
                    ${theme === 'dark' 
                      ? 'bg-gray-800/30 border-gray-700/50' 
                      : 'bg-white/50 border-gray-300/30'
                    }
                  `}>
                    <h4 className={`font-semibold mb-2 text-sm md:text-base
                      ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
                    `}>
                      Full-Time Opportunities
                    </h4>
                    <p className={`text-xs md:text-sm
                      ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
                    `}>
                      Open to discussing full-time developer positions with innovative companies 
                      and growing startups.
                    </p>
                  </div>
                </div>
              </div>

              {/* Availability Status */}
              <div className={`p-4 md:p-6 rounded-2xl border-l-4 border-green-500 w-full
                ${theme === 'dark' 
                  ? 'bg-green-500/10 border-r border-t border-b border-green-500/20' 
                  : 'bg-green-50/80 border-r border-t border-b border-green-200/50'
                }
              `}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className={`font-semibold text-sm md:text-base
                    ${theme === 'dark' ? 'text-green-400' : 'text-green-700'}
                  `}>
                    Available for New Projects
                  </span>
                </div>
                <p className={`text-xs md:text-sm
                  ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
                `}>
                  I'm currently accepting new freelance projects and considering full-time opportunities. 
                  Let's discuss how I can help bring your ideas to life.
                </p>
              </div>

              {/* Response Time */}
              <div className="flex items-center gap-4">
                <Calendar size={20} className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} />
                <div>
                  <p className={`font-medium
                    ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
                  `}>
                    Quick Response
                  </p>
                  <p className={`text-sm
                    ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
                  `}>
                    I typically respond within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3
                  ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
                `}>
                  <MessageCircle size={24} />
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-200
                        hover:scale-[1.02] group
                        ${theme === 'dark' 
                          ? 'hover:bg-gray-800/50 border border-gray-700/30 hover:border-gray-600/50' 
                          : 'hover:bg-gray-100/60 border border-gray-200/50 hover:border-gray-300/70'
                        }
                      `}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center
                        ${theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-200/70'}
                      `}>
                        <contact.icon size={20} className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} />
                      </div>
                      
                      <div className="flex-1">
                        <p className={`font-medium
                          ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
                        `}>
                          {contact.label}
                        </p>
                        <p className={`text-sm
                          ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
                        `}>
                          {contact.value}
                        </p>
                      </div>
                      
                      <ExternalLink 
                        size={16} 
                        className={`opacity-0 group-hover:opacity-100 transition-opacity
                          ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
                        `} 
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Primary Contact Button */}
              <div className="pt-4">
                <a
                  href="mailto:ubedpathan818@gmail.com"
                  className={`w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl
                    font-semibold text-lg transition-all duration-200 hover:scale-[1.02]
                    ${theme === 'dark'
                      ? 'bg-gradient-to-r from-gray-800 to-gray-700 text-white hover:from-gray-700 hover:to-gray-600'
                      : 'bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-gray-800 hover:to-gray-700'
                    }
                  `}
                >
                  <Send size={20} />
                  Send Email
                </a>
                
                <p className={`text-center text-sm mt-3
                  ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
                `}>
                  Preferred method of contact
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Location & Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin size={16} className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} />
            <span className={`text-sm
              ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
            `}>
              Based in India • Available for Remote Work • Open to Relocation
            </span>
          </div>
          
          <p className={`text-sm max-w-2xl mx-auto mb-8
            ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}
          `}>
            Specialized in Java Full-Stack and MERN stack development. 
            Experienced in building scalable web applications, RESTful APIs, and modern user interfaces.
          </p>

          {/* Copyright Footer */}
          <div className={`pt-8 border-t
            ${theme === 'dark' ? 'border-gray-700/50' : 'border-gray-300/50'}
          `}>
            <p className={`text-sm
              ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}
            `}>
              © 2025 Ubed Pathan. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
