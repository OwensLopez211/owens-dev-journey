export const themes = {
    dark: {
      primary: {
        light: '#5E81AC',  // Azul grisáceo suave
        DEFAULT: '#4C566A', // Azul grisáceo oscuro
        dark: '#2E3440',   // Azul grisáceo muy oscuro
      },
      secondary: {
        light: '#E5E9F0',  // Beige claro para contraste
        DEFAULT: '#D8DEE9', // Beige medio
        dark: '#A3BE8C',   // Verde grisáceo sutil
      },
      background: {
        light: 'rgba(20, 20, 20, 0.85)',  // Negro grisáceo con opacidad
        DEFAULT: 'rgba(15, 15, 15, 0.95)', // Negro grisáceo más intenso
        dark: '#0A0A0A',                   // Negro profundo
      },
      text: {
        primary: '#ECEFF4',   // Blanco roto para mejor legibilidad
        secondary: '#D8DEE9', // Gris claro para subtítulos
        muted: '#B0BEC5',    // Gris apagado para detalles
      },
      border: {
        light: 'rgba(176, 190, 197, 0.1)',  // Gris azulado con 10% opacidad
        DEFAULT: 'rgba(176, 190, 197, 0.2)', // Gris azulado con 20% opacidad
        dark: 'rgba(176, 190, 197, 0.3)',    // Gris azulado con 30% opacidad
      },
      hover: {
        light: 'rgba(163, 190, 140, 0.1)',  // Verde grisáceo con 10% opacidad
        DEFAULT: 'rgba(163, 190, 140, 0.2)', // Verde grisáceo con 20% opacidad
        dark: 'rgba(163, 190, 140, 0.3)',    // Verde grisáceo con 30% opacidad
      }
    },
};

export type ThemeColors = typeof themes.dark;
export type ThemeNames = keyof typeof themes;

// Tema actual (puedes hacerlo dinámico con context si lo necesitas)
export const currentTheme = themes.dark;
