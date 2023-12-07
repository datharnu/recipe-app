/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': { 'min': '310px', 'max': '765px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }
      // 'md': { 'min': '768px', 'max': '1024px' },
      'lg': { 'min': '768px', 'max': '2560px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

    },
    extend: {
      backgroundImage: {
        bgImgB: 'url()',
        bgImg: 'url(./images/bg-header-mobile.svg)'
      },
      colors: {
        primary: "#4FBFD8"
      }
    },
  },
  plugins: [],
}

