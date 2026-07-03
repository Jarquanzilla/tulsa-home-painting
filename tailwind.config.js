/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        ink: '#1C2321',
        linen: '#FAF6EF',
        paper: '#F3EEE3',
        brass: '#A9803D',
        brassdark: '#8C6A31',
        forest: '#33473D',
        stone: '#6B6459',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(28,35,33,0.25)',
        card: '0 10px 30px -12px rgba(28,35,33,0.18)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
    },
  },
  plugins: [],
};
