import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const BackgroundEffects = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const width = window.innerWidth;
      const isTouchDevice = 'ontouchstart' in window;
      setIsMobile(width < 1024 || isTouchDevice);
    };

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(motionQuery.matches);

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    motionQuery.addEventListener('change', (e) => setReducedMotion(e.matches));

    return () => {
      window.removeEventListener('resize', checkIsMobile);
      motionQuery.removeEventListener('change', () => {});
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Desktop: Premium animated background */}
      {!isMobile && !reducedMotion ? (
        <>
          {/* Elegant base gradient */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 30%, #e2e8f0 70%, #ffffff 100%)'
            }}
          />
          
          {/* Dark mode overlay */}
          <div 
            className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500"
            style={{
              background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 30%, #2d2d2d 70%, #000000 100%)'
            }}
          />

          {/* Floating orbs - sophisticated movement */}
          <motion.div
            className="absolute rounded-full opacity-15"
            style={{
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(0, 0, 0, 0.08) 0%, transparent 70%)',
              top: '10%',
              left: '5%',
              filter: 'blur(60px)',
            }}
            animate={{
              x: [0, 250, -100, 50, 0],
              y: [0, -200, 150, -50, 0],
              scale: [1, 1.3, 0.9, 1.1, 1],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute rounded-full opacity-12"
            style={{
              width: '350px',
              height: '350px',
              background: 'radial-gradient(circle, rgba(245, 245, 220, 0.12) 0%, transparent 70%)',
              top: '50%',
              right: '5%',
              filter: 'blur(50px)',
            }}
            animate={{
              x: [0, -200, 100, -150, 0],
              y: [0, 180, -120, 80, 0],
              scale: [1, 0.8, 1.2, 0.9, 1],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 10,
            }}
          />

          {/* Professional geometric elements */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`geo-${i}`}
              className="absolute opacity-8"
              style={{
                width: `${60 + i * 20}px`,
                height: `${60 + i * 20}px`,
                left: `${10 + i * 15}%`,
                top: `${15 + i * 12}%`,
                background: i % 3 === 0 
                  ? 'linear-gradient(45deg, rgba(0, 0, 0, 0.05), rgba(107, 114, 128, 0.03))'
                  : i % 3 === 1
                  ? 'linear-gradient(135deg, rgba(245, 245, 220, 0.08), rgba(255, 255, 255, 0.04))'
                  : 'linear-gradient(225deg, rgba(156, 163, 175, 0.06), rgba(0, 0, 0, 0.03))',
                borderRadius: i % 2 === 0 ? '50%' : '20px',
                border: `1px solid ${i % 2 === 0 ? 'rgba(0, 0, 0, 0.05)' : 'rgba(245, 245, 220, 0.1)'}`,
              }}
              animate={{
                y: [0, -150 - i * 20, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 0.8, 1],
              }}
              transition={{
                duration: 25 + i * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2,
              }}
            />
          ))}

          {/* Elegant particle system */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                width: '4px',
                height: '4px',
                background: i % 2 === 0 
                  ? 'rgba(0, 0, 0, 0.2)' 
                  : 'rgba(245, 245, 220, 0.3)',
                boxShadow: `0 0 12px ${i % 2 === 0 ? 'rgba(0, 0, 0, 0.1)' : 'rgba(245, 245, 220, 0.2)'}`,
              }}
              animate={{
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                ],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                ],
                opacity: [0, 0.6, 0],
                scale: [0.5, 1, 0.3],
              }}
              transition={{
                duration: 20 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5,
              }}
            />
          ))}

          {/* Sophisticated grid overlay */}
          <motion.div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '100px 100px', '0px 0px'],
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </>
      ) : (
        // Mobile: Clean, professional background
        <div className="absolute inset-0">
          <div 
            style={{
              background: '#ffffff',
              width: '100%',
              height: '100%',
            }}
          />
          <div 
            className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-300"
            style={{
              background: '#000000',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default BackgroundEffects;