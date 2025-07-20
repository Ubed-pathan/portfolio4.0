import { motion } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import BackgroundEffects from './components/BackgroundEffects';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative">
        {/* Stunning animated background for desktop, plain for mobile */}
        <BackgroundEffects />
        
        {/* Premium content layer */}
        <div className="relative z-20 min-h-screen">
          <Navbar />
          
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Professional sections with premium spacing */}
            <div id="home" className="relative">
              <Hero />
            </div>
            
            <div id="about" className="relative py-20">
              <About />
            </div>
            
            <div id="skills" className="relative py-20">
              <Skills />
            </div>
            
            <div id="projects" className="relative py-20">
              <Projects />
            </div>
            
            <div id="contact" className="relative py-20">
              <Contact />
            </div>
          </motion.main>

          {/* Elite footer */}
          <footer className="relative py-16 glass-card professional-shadow mt-20">
            <div className="container mx-auto px-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="gradient-text-accent text-lg font-medium">
                  © 2024 John Smith. Crafted with precision & passion.
                </p>
                <div className="flex justify-center items-center mt-4 space-x-6">
                  <span className="text-gray-500 dark:text-gray-400">Built with React & Tailwind CSS</span>
                </div>
              </motion.div>
            </div>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
