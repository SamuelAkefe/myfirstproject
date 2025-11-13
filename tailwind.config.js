/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFC72C', // yellow
        },
        green: {
          DEFAULT: '#007F5F', // action green
          dark: '#004B23', // dark green
        },
        background: {
          DEFAULT: '#FAFAF5', // soft background
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
