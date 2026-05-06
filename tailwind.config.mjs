/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        forest: '#2D6A4F',
        'forest-dark': '#1B4332',
        'forest-light': '#40916C',
        sky: '#0077B6',
        'sky-light': '#00B4D8',
        sunset: '#F4845F',
        'sunset-dark': '#E05C3A',
        gold: '#F9C74F',
        cream: '#FAFAF5',
        charcoal: '#1A1A1A',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-forest': 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 50%, #40916C 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #E05C3A 0%, #F4845F 100%)',
      },
    },
  },
  plugins: [],
};
