/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.svelte"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    fontSize: {
      sm: "0.707rem",
      base: "1rem",
      xl: "1.414rem",
      "2xl": "1.999rem",
      "3xl": "2.827rem",
      "4xl": "3.997rem",
      "5xl": "5.652rem",
    },
    fontFamily: {
      heading: "Tiro Devanagari Marathi",
      body: "Tiro Devanagari Marathi",
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
  },
};
