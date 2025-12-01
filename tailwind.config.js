/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Archivo Expanded"', '"Druk Wide"', 'sans-serif'],
        body: ['Manrope', '"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        ink: '#111111',
        paper: '#F2F2F2',
        accent: '#E60000',
        warning: '#FFD700',
      },
      borderRadius: {
        DEFAULT: '0px',
        none: '0px',
      },
      spacing: {
        'gap': '2px',
      },
      transitionTimingFunction: {
        'velocity': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
      keyframes: {
        driveBy: {
          'from': { transform: 'translateX(-100%)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' },
        }
      },
      animation: {
        driveBy: 'driveBy 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards',
      }
    },
  },
  plugins: [],
}
