/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#8ecae6',
        'bright-blue': '#219ebc',
        'dark-blue': '#023047',
        'yellow': '#ffb703',
        'orange': '#fb8500',
      },
    },
  },
  plugins: [],
}