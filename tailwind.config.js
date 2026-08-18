/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        delale: {
          primary: '#e07a82',   // Rose pink tone from Paola Electo
          pinkBg: '#fef6f6',    // Soft cream/white background
          pinkCard: '#ffffff',  // White surfaces
          accent: '#d96b70',    // Deep rose accent
          textDark: '#4a4a4a',  // Dark gray text
          surface: '#ffffff',   // White surfaces
          border: '#f0d1d3',    // Light pink border
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
