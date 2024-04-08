/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  
  theme: {
    extend: {
      colors: {
        gold: '#ffd700',
        silver: '#c0c0c0',
        bronze: '#cd7f32',
      }
    },
  },
  plugins: [],
}
