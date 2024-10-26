/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors: {
    //   'yellow': '#d9ee27',
    // },
    extend: {
      backgroundImage: {
        'hero-banner': "url('./src/assets/bg-shadow.png')",
        'grad-btn': ""
        // 'yellow': '#d9ee27',
      },
    },
    fontFamily: {
      'sora': ["Sora", 'sans-serif'],
      'inter': ["Inter", 'sans-serif'],
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui'),],
}
