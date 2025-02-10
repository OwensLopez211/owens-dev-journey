/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        scrollX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" }
        },
        scrollY: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" }
        }
      },
      animation: {
        gradient: 'gradient 8s linear infinite',
        scrollX: "scrollX var(--duration) linear infinite",
        scrollY: "scrollY var(--duration) linear infinite"
      },
      colors: {
        background: {
          primary: 'rgba(0,0,0,0)',
          secondary: 'rgba(0,0,0,0)',
          tertiary: 'rgba(0,0,0,0)',
        },
        accent: {
          primary: '#3B82F6',
          secondary: '#60A5FA',
          muted: '#1D4ED8',
        },
        content: {
          primary: '#000000',
          secondary: '#313131',
          muted: '#64748B',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};