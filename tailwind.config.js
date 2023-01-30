/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        colors: {
          primary: '#FBD062',
          secondary: '#111430',
          accent: '#7AB259',
          neutral: '#474747',
          info: '#707070',
          info_content: '#242A65',
          success: '#DEFFED',
          warning: '#009444',

        },
      },
    ],
  },
  plugins: [require("daisyui")],
}