/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    // Customizations
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
      	'blue-100': '#FBFBFF',
      	'blue-300': '#7EBCFF',
      	'blue-500': '#007FFF',
      	'blue-600': '#005DBB',
      	'blue-800': '#002A55',
      	'gray-700': '#707070',
      	'gray-600': '#908F8F',
      }
    }
  },
  // variants: ['responsive', 'group-hover', 'focus-within', 'first', 'last', 'odd', 'even', 'hover', 'focus', 'active', 'visited', 'disabled'],
  variants: {},
  plugins: []
}
