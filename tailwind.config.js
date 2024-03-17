module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'dark-blue': '#0f1d26',
      'lighter-blue': '#62717a',
      'dark-yellow': '#d28b22',
      'light-yellow': '#f0db72',
      'custom-white': '#f7f1e5'
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};