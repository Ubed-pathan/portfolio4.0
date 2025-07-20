/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: '#F5F5DC',
        'mesh-purple': 'rgb(120, 119, 198)',
        'mesh-pink': 'rgb(255, 154, 158)',
        'mesh-blue': 'rgb(168, 239, 255)',
      },
      animation: {
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'drift-slow': 'drift-slow 12s ease-in-out infinite',
        'pulse-gentle': 'pulse-gentle 6s ease-in-out infinite',
        'wave-slow': 'wave-slow 15s linear infinite',
        'gradient-shift': 'gradient-shift 20s ease-in-out infinite',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'drift-slow': {
          '0%': { transform: 'translateX(0px) translateY(0px)' },
          '25%': { transform: 'translateX(30px) translateY(-20px)' },
          '50%': { transform: 'translateX(-20px) translateY(-30px)' },
          '75%': { transform: 'translateX(-30px) translateY(20px)' },
          '100%': { transform: 'translateX(0px) translateY(0px)' },
        },
        'pulse-gentle': {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 0.6, transform: 'scale(1.05)' },
        },
        'wave-slow': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'modern-gradient': 'linear-gradient(135deg, rgba(120, 119, 198, 0.3) 0%, rgba(255, 154, 158, 0.3) 50%, rgba(168, 239, 255, 0.3) 100%)',
        'dark-gradient': 'linear-gradient(135deg, rgba(79, 70, 229, 0.2) 0%, rgba(236, 72, 153, 0.2) 50%, rgba(14, 165, 233, 0.2) 100%)',
      },
    },
  },
  plugins: [],
  // Performance optimizations for mobile
  corePlugins: {
    backgroundAttachment: false,
    backgroundPosition: true,
    backgroundRepeat: false,
    backgroundSize: true,
    fontVariantNumeric: false,
  },
}
