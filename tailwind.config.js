/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'degrade-orange': 'rgba(209, 109, 8, 1)',
        'degrade-brown': 'rgba(161, 110, 43, 1)',
        'degrade-green': 'rgba(102, 111, 84, 1)',
        'title-name': '#FF9600',

      },
    },
  },
  plugins: [require("daisyui")],
}

