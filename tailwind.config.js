// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Update this path based on your project structure
    './public/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.no-scrollbar': {
          /* Hide scrollbar for WebKit browsers */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* Hide scrollbar for IE, Edge and Firefox */
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',  /* Firefox */
        },
      });
    }),
  ],
};


