/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#0A0A0A',
        cream: '#F5F1E8',
        navy: '#0F1B2E',
        coral: '#FF6B58',
        gold: '#D4A574',
        gray: {
          soft: '#6B7280',
        }
      },
      fontFamily: {
        display: ['Clash Display', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '3xs': '0.25rem',
        '2xs': '0.5rem',
        'xs': '0.75rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
        '2xl': '4rem',
        '3xl': '6rem',
        '4xl': '8rem',
        '5xl': '12rem',
      },
      fontSize: {
        'display': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '0.95', fontWeight: '700' }],
        'h1': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'h2': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.2', fontWeight: '600' }],
        'h3': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['clamp(1.25rem, 2vw, 2rem)', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.25rem', { lineHeight: '1.75', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.25', fontWeight: '400' }],
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0,0,0,0.05)',
        'DEFAULT': '0 4px 6px rgba(0,0,0,0.1)',
        'md': '0 4px 6px rgba(0,0,0,0.1)',
        'lg': '0 10px 15px rgba(0,0,0,0.15)',
        'xl': '0 20px 25px rgba(0,0,0,0.2)',
        'glow': '0 0 20px rgba(255,107,88,0.3)',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
      },
    },
  },
  plugins: [],
}
