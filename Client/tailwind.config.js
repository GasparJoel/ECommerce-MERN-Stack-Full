/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#10182A", // Ejemplo de color azul
        "primary-foreground": "#ffffff",
        background: "#f4f4f5", // Fondo de página
        border: "#e4e4e7", // Bordes
      },
    },
  },
  plugins: [],
}

