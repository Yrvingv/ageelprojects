/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0B0E13',
          deep: '#0F1220',
        },
        primary: {
          DEFAULT: '#5B5BF7',
          alt: '#6C63FF',
        },
        secondary: '#1C2240',
        neutral: '#AEB4C2',
        text: {
          DEFAULT: '#FFFFFF',
          soft: '#EAEFFC'
        }
      },
      boxShadow: {
        glow: '0 0 24px rgba(91,91,247,0.35)',
      }
    },
  },
  plugins: [],
}
