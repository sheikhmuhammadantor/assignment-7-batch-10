/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-banner': "url('./src/assets/bg-shadow.png')",
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
