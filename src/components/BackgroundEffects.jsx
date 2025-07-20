import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const BackgroundEffects = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Detect mobile devices - more precise detection
    const checkIsMobile = () => {
      const width = window.innerWidth;
      const isTouchDevice = 'ontouchstart' in window;
      setIsMobile(width < 1024 || isTouchDevice); // Laptop screens are typically 1024px+
    };

    // Check for reduced motion preference
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

  // Always render for testing - remove mobile check temporarily
  // if (isMobile || reducedMotion) {
  //   return null;
  // }

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Force show animations for debugging */}
      {(!isMobile || true) && !reducedMotion && (
        <>
          {/* Very visible floating orbs */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(120, 119, 198, 0.6) 0%, rgba(120, 119, 198, 0.2) 50%, transparent 100%)',
              top: '10%',
              left: '10%',
              filter: 'blur(20px)',
            }}
            animate={{
              x: [0, 300, 0],
              y: [0, -200, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute rounded-full"
            style={{
              width: '150px',
              height: '150px',
              background: 'radial-gradient(circle, rgba(255, 154, 158, 0.6) 0%, rgba(255, 154, 158, 0.2) 50%, transparent 100%)',
              top: '60%',
              right: '10%',
              filter: 'blur(15px)',
            }}
            animate={{
              x: [0, -200, 0],
              y: [0, 150, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          {/* Visible floating shapes */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`shape-${i}`}
              className="absolute opacity-40"
              style={{
                width: '60px',
                height: '60px',
                left: `${20 + i * 20}%`,
                top: `${20 + i * 15}%`,
                background: i % 2 === 0 
                  ? 'linear-gradient(45deg, rgba(120, 119, 198, 0.5), rgba(168, 239, 255, 0.3))'
                  : 'linear-gradient(135deg, rgba(255, 154, 158, 0.5), rgba(120, 119, 198, 0.3))',
                borderRadius: i % 2 === 0 ? '50%' : '15px',
                border: '2px solid rgba(255, 255, 255, 0.2)',
              }}
              animate={{
                y: [0, -100, 0],
                rotate: [0, 360],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}

          {/* Moving bubbles - more visible */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`bubble-${i}`}
              className="absolute rounded-full opacity-60"
              style={{
                width: `${30 + i * 10}px`,
                height: `${30 + i * 10}px`,
                left: `${10 + i * 15}%`,
                top: '100%',
                background: 'radial-gradient(circle, rgba(168, 239, 255, 0.7) 0%, rgba(168, 239, 255, 0.2) 70%, transparent 100%)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
              animate={{
                y: [0, -window.innerHeight - 200],
                x: [0, Math.sin(i) * 100],
                scale: [0.5, 1, 0.3],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeOut",
                delay: i * 1.5,
              }}
            />
          ))}

          {/* Particle trail - very visible */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                width: '8px',
                height: '8px',
                background: 'rgba(255, 255, 255, 0.8)',
                left: '5%',
                top: '50%',
                boxShadow: '0 0 10px rgba(120, 119, 198, 0.6)',
              }}
              animate={{
                x: [0, window.innerWidth * 0.9],
                y: [0, Math.sin(i) * 200],
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}

          {/* Animated rings - more visible */}
          <motion.div
            className="absolute border-4 rounded-full opacity-30"
            style={{
              width: '300px',
              height: '300px',
              top: '30%',
              left: '50%',
              marginLeft: '-150px',
              marginTop: '-150px',
              borderColor: 'rgba(120, 119, 198, 0.6)',
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="absolute border-2 rounded-full opacity-25"
            style={{
              width: '200px',
              height: '200px',
              top: '30%',
              left: '50%',
              marginLeft: '-100px',
              marginTop: '-100px',
              borderColor: 'rgba(255, 154, 158, 0.6)',
            }}
            animate={{
              rotate: [360, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </>
      )}

      {/* Mobile fallback */}
      {isMobile && (
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-[0.05]"
            style={{
              background: 'linear-gradient(135deg, rgba(120, 119, 198, 0.1) 0%, rgba(255, 154, 158, 0.05) 50%, rgba(168, 239, 255, 0.1) 100%)',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default BackgroundEffects;