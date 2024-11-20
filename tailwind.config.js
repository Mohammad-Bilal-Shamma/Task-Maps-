/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        HeadersColor: '#F5F7FA', 
        titlecolor:'#263238',
        linkNavcolor:'#18191F',
        but_Lg_color:'#4CAF4F',
        sec_iteam_color:'#F5F7FA',
        footer_color:'#263238',
        
      },
      fontFamily: {
        inter: ['inter', 'sans-serif'], 
      },
      screens: {
        'm5p': { 'max': '500px' }, 
      },
    },
  },
  plugins: [],
}