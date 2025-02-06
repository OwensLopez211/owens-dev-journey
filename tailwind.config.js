module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#FFFFFF',
          secondary: '#1E293B',
          tertiary: '#334155',
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
        sans: ['Poppins', 'Inter', 'sans-serif'], // Agrega la nueva fuente aquí
      },
    },
  },
  plugins: [],
}
