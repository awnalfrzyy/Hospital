/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.ts',
    './App.tsx',
    "./screen/**/*.{js,jsx,ts,tsx}",
    './components/**/*.{js,jsx,ts,tsx}',
    './components/ui/**/*.{js,jsx,ts,tsx}',
    "./navigator/**/*.{js,jsx,ts,tsx}",],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
