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
          DEFAULT: '#007acc',
          foreground: '#ffffff',
        },
        background: '#1e1e1e',
        surface: '#252526',
        border: '#3c3c3c',
        text: '#cccccc',
        muted: '#808080',
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
