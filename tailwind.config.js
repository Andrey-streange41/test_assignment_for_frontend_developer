/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: '360px',
        xs: '430px',
        xsm: '520px',
        sm: '640px',
        md: '768px',
        mdlg: '975px',
        lg: '1024px',
        lgxl: '1180px',
        xl: '1280px',
        '1xl': '1440px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        md: '.9375rem',
        base: '1rem',
        mdlg: '1.0625rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '1.5xl': '1.375rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
  

};
