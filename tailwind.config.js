/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E68D49',
        secondary: '#B9723C',
        text: '#512F3D',
        background: '#F9F5F9',
      },
    },
  },
  plugins: [],
};
