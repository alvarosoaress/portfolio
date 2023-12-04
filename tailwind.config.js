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
      screens: {
        tall: { raw: '(min-height: 745px)' },
        xxl: { raw: '(min-width: 1440px)' },
      },
      animation: {
        socialEnterRight: 'socialEnterRight 600ms linear',
        enterRight: 'enterRight 500ms ease-in-out',
        enterLeft: 'enterLeft 500ms ease-in-out',
        fadeIn: 'fadeIn 500ms ease-in-out',
        scaleEnter: 'scaleEnter 600ms linear',
        roundedEnter: 'roundedEnter 20s infinite alternate',
      },
      keyframes: {
        socialEnterRight: {
          from: { transform: 'translateX(-100px)' },
          to: { transform: 'translateX(0px)' },
        },
        enterRight: {
          from: { transform: 'translateX(-100vw)' },
          to: { transform: 'translateX(0px)' },
        },
        enterLeft: {
          from: { transform: 'translateX(100vw)' },
          to: { transform: 'translateX(0px)' },
        },
        fadeIn: {
          from: { opacity: '0%' },
          to: { opacity: '100%' },
        },
        scaleEnter: {
          from: { transform: 'translateY(-50px)', opacity: '0%' },
          to: { transform: 'translateY(0px)', opacity: '100%' },
        },
        roundedEnter: {
          from: {
            borderRadius: '1000px',
          },
          '50%': {
            borderRadius: '26% 79% 21% 74% / 81% 19% 79% 21%',
          },
          to: {
            borderRadius: '81% 19% 79% 21% / 26% 79% 21% 74%',
          },
        },
      },
    },
  },
  plugins: [],
};
