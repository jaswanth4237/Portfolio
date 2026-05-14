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
          DEFAULT: '#38bdf8', // Light glowing blue
          foreground: '#ffffff',
        },
        background: '#040b16', // Deep sea dark blue
        surface: '#0a1428', // Slightly lighter sea blue
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      keyframes: {
        reveal: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      animation: {
        reveal: 'reveal 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'gradient-shift': 'gradient 8s ease infinite',
      },
    },
  },
  plugins: [],
}
