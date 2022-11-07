/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'login-bg': '#6586fc',
        'login-left': '#000517',
        'login-right': '#141f45',
        'login-input': '#1b1a38',
      },
    },
  },
  plugins: [],
};
