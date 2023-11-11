const path = require('path')
const { skeleton } = require('@skeletonlabs/tw-plugin')
const { MimaMercuryTheme } = require('./src/lib/mima_mercury_theme.js')

/** @type {import('tailwindcss').Config}*/
const config = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts,md}',
    path.join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
  ],

  theme: {
    extend: {},
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    skeleton({
      themes: {
        custom: [
          MimaMercuryTheme
        ]
      }
    })
  ],
};

module.exports = config;
