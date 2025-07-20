import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin, Twitter, MessageCircle, ExternalLink, Send, MapPin, Calendar, Briefcase } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
  ];

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <MessageCircle size={20} className="text-gray-600 dark:text-gray-400" />
            <span className="text-sm uppercase tracking-wider font-medium text-gray-600 dark:text-gray-400">
              Let's Work Together
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">Get In Touch</h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '120px' } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 mx-auto rounded-full bg-gradient-to-r from-black to-gray-800 dark:from-cream dark:to-white mb-6"
          ></motion.div>
          
          <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Ready to bring your project to life? I'm available for freelance opportunities and full-time positions.
          </p>
        </motion.div>

        {/* Main Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/30 dark:bg-black/10 backdrop-blur-3xl border border-gray-200/50 dark:border-cream/20 p-4 sm:p-6 md:p-8 lg:p-12 rounded-3xl professional-shadow"
          style={{
            backdropFilter: 'blur(32px) saturate(180%)',
            WebkitBackdropFilter: 'blur(32px) saturate(180%)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            
            {/* Left Side - About & Availability */}
            <div className="space-y-4 md:space-y-6 lg:space-y-8 w-full overflow-hidden">
              <div className="w-full">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 flex items-center gap-2 md:gap-3 text-gray-800 dark:text-white">
                  <Briefcase size={18} className="md:w-5 md:h-5" />
                  Professional Services
                </h3>
                
                <div className="space-y-3 md:space-y-4 w-full">
                  <div className="p-3 md:p-4 rounded-xl border w-full bg-white/50 dark:bg-black/20 border-gray-300/30 dark:border-gray-700/50">
                    <h4 className="font-semibold mb-2 text-sm md:text-base text-gray-800 dark:text-white">
                      Freelance Development
                    </h4>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      Available for Java Full-Stack and MERN stack projects. Custom web applications, 
                      API development, and database design.
                    </p>
                  </div>
                  
                  <div className="p-3 md:p-4 rounded-xl border w-full bg-white/50 dark:bg-black/20 border-gray-300/30 dark:border-gray-700/50">
                    <h4 className="font-semibold mb-2 text-sm md:text-base text-gray-800 dark:text-white">
                      Full-Time Opportunities
                    </h4>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      Open to discussing full-time developer positions with innovative companies 
                      and growing startups.
                    </p>
                  </div>
                </div>
              </div>

              {/* Availability Status */}
              <div className="p-3 md:p-4 lg:p-6 rounded-2xl border-l-4 border-green-500 w-full bg-green-50/80 dark:bg-green-500/10 border-r border-t border-b border-green-200/50 dark:border-green-500/20">
                <div className="flex items-center gap-2 md:gap-3 mb-2">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="font-semibold text-sm md:text-base text-green-700 dark:text-green-400">
                    Available for New Projects
                  </span>
                </div>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm currently accepting new freelance projects and considering full-time opportunities. 
                  Let's discuss how I can help bring your ideas to life.
                </p>
              </div>

              {/* Response Time */}
              <div className="flex items-center gap-3 md:gap-4">
                <Calendar size={18} className="md:w-5 md:h-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm md:text-base text-gray-800 dark:text-white">
                    Quick Response
                  </p>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    I typically respond within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Information */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2 md:gap-3 text-gray-800 dark:text-white">
                  <MessageCircle size={20} className="md:w-6 md:h-6" />
                  Contact Information
                </h3>
                
                <div className="space-y-3 md:space-y-4">
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={contact.label}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl transition-all duration-200 hover:scale-[1.02] group hover:bg-gray-100/60 dark:hover:bg-black/20 border border-gray-200/50 dark:border-gray-700/30 hover:border-gray-300/70 dark:hover:border-gray-600/50"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center bg-gray-200/70 dark:bg-gray-700/50 flex-shrink-0">
                        <contact.icon size={18} className="md:w-5 md:h-5 text-gray-700 dark:text-gray-300" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm md:text-base text-gray-800 dark:text-white">
                          {contact.label}
                        </p>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 truncate">
                          {contact.value}
                        </p>
                      </div>
                      
                      <ExternalLink 
                        size={14} 
                        className="md:w-4 md:h-4 opacity-0 group-hover:opacity-100 transition-opacity text-gray-600 dark:text-gray-400 flex-shrink-0" 
                      />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Primary Contact Button */}
              <div className="pt-3 md:pt-4">
                <motion.a
                  href="mailto:ubedpathan818@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 md:gap-3 py-3 md:py-4 px-4 md:px-6 rounded-xl font-semibold text-base md:text-lg transition-all duration-200 bg-black dark:bg-cream text-white dark:text-black hover:bg-gray-800 dark:hover:bg-cream/90 professional-shadow"
                >
                  <Send size={18} className="md:w-5 md:h-5" />
                  Send Email
                </motion.a>
                
                <p className="text-center text-xs md:text-sm mt-2 md:mt-3 text-gray-600 dark:text-gray-400">
                  Preferred method of contact
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Location & Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 md:mt-8 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mb-3 md:mb-4">
            <MapPin size={14} className="md:w-4 md:h-4 text-gray-600 dark:text-gray-400 flex-shrink-0" />
            <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400 text-center">
              Based in India • Available for Remote Work • Open to Relocation
            </span>
          </div>
          
          <p className="text-xs md:text-sm max-w-2xl mx-auto mb-6 md:mb-8 text-gray-500 dark:text-gray-500 leading-relaxed px-4">
            Specialized in Java Full-Stack and MERN stack development. 
            Experienced in building scalable web applications, RESTful APIs, and modern user interfaces.
          </p>

          {/* Copyright Footer */}
          <div className="pt-6 md:pt-8 border-t border-gray-300/50 dark:border-gray-700/50">
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-500">
              © 2025 Ubed Pathan. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
