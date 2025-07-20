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
        black: '#000000',
        white: '#ffffff',
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      animation: {
        'professional-float': 'professional-float 20s ease-in-out infinite',
        'elite-glow': 'elite-glow 3s ease-in-out infinite',
      },
      keyframes: {
        'professional-float': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        'elite-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(245, 245, 220, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(245, 245, 220, 0.5)' },
        },
      },
      backdropBlur: {
        '4xl': '72px',
      }
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