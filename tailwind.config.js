/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/features/**/**/*.{js,vue, ts, tsx}",
    "./src/**/*.{js, vue, ts, tsx}"
  ],
  theme: {
    extend: {
      backgroundColor:{
        dialog: '#1a212c',
        elements: '#1f2937'
      },
      color: {
        dialog: '#1a212c',
        elements: '#1f2937',
        title: '#cbc3c3'
      }
    },
  },
  plugins: [],
}

