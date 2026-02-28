import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#070708",
        card: "#0f0f12",
        text: "#f4f4f5",
        muted: "#b7b7c2",
        red: "#ff1b2d",
        pink: "#ffd5d9",
        line: "rgba(255,255,255,0.10)",
      },
      borderRadius: {
        r16: "16px",
        r20: "20px",
        r24: "24px",
      },
      boxShadow: {
        card: "0 18px 50px rgba(0,0,0,.55)",
        ring: "0 0 0 3px rgba(255,27,45,.25)",
      },
      maxWidth: {
        site: "1100px",
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
