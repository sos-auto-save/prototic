/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Verifique se o caminho para seus componentes está correto
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui, // DaisyUI deve ser importado corretamente
  ],
};
