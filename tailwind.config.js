/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        /*
         * The single accent color used across the site (links, buttons, tags).
         * EDIT ME: change this one hex value to re-brand the whole portfolio.
         */
        accent: '#34d399',
      },
    },
  },
  plugins: [],
}
