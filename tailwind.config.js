import formsPlugin from 'windicss/plugin/forms'

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        teal: {
          100: '#096',
        },
      },
    },
  },
  plugins: [formsPlugin],
}
