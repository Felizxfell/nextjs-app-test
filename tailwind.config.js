/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    minWidth: {
      '1/3': '33.333333%',
    },
    fontFamily: {
      'helve': ['Helvetica', 'Arial', 'sans-serif'],
      'open': ['Open sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'libellum': '#FA5555',
        'libellum-light': '#ff8982',
        'libellum-gray': '#A2ACB7',
        'libellum-border': '#E2E5E9',
        'libellum-title': '#40536B',
        'libellum-light-blue': '#4DA8F0',
        'libellum-text-gray': '#61676E',
        'libellum-dark-blue': '#223955',
        'libellum-light-green': '#ACD80E',
        'libellum-dark': '#585858',
        'libellum-body': '#F6F8F9',
        'libellum-form': '#F2F4F5',
        'libellum-red': '#DE0000',
        'libellum-red-hover': '#FC0000',
        'libellum-green': '#7BAA20',
        'libellum-green-hover': '#ACD80E',
        'libellum-th': '#888888',
        'btn-blue': '#3A84BF',
        'btn-sky-blue': '#61B2F2',
        'more-hor': '#96A1AE',
        'libellum-gray-2': '#A5A5A5'
      }
    },
  },
  plugins: [],
}
