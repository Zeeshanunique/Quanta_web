/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

/** Mono design system: light grey grain canvas, ink type, isometric line art. */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0B",
          2: "#2E2E33",
          3: "#6B6B72",
          4: "#9C9CA3",
          5: "#C4C4CA",
        },
        paper: {
          DEFAULT: "#F1F1F2",
          2: "#F7F7F8",
          3: "#E9E9EB",
          line: "#DCDCDF",
        },
      },
      fontFamily: {
        inter: ["Inter", ...fontFamily.sans],
        mono: ['"JetBrains Mono"', ...fontFamily.mono],
      },
    },
  },
  plugins: [],
};
