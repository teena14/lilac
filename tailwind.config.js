/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    fontFamily: {
      body: ['var(--font-geist-sans)'],
      heading: ['var(--font-bricolage)'],
    },
  },
},
  plugins: [],
};
