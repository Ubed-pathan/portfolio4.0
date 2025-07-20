import { motion } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import BackgroundEffects from './components/BackgroundEffects';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 relative">
        {/* Fixed background effects behind all content */}
        <BackgroundEffects />
        
        <Navbar />
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <div id="home">
            <Hero />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </motion.main>

        <footer className="py-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-t border-gray-200/30 dark:border-gray-700/30 relative z-10">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2024 John Smith. Built with React & Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
