/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        primary: {
          50: "#DDF0F8",
          100: "#BBE1F1",
          200: "#73C1E3",
          300: "#2FA3D5",
          400: "#1E7194",
          500: "#103C4F",
          600: "#0D3040",
          700: "#09232F",
          800: "#06171E",
          900: "#030D11",
          950: "#020608",
        },
        secondary: {
          50: "#FBF7FD",
          100: "#F6EEFC",
          200: "#ECD9F7",
          300: "#E3C8F4",
          400: "#DAB7F0",
          500: "#D2A6ED",
          600: "#C792E9",
          700: "#A044D9",
          800: "#6D209D",
          900: "#381051",
          950: "#1B0826",
        },
        accent: {
          50: "#FFFDF5",
          100: "#FFFCEB",
          200: "#FFF8D1",
          300: "#FFF5BD",
          400: "#FFF2A8",
          500: "#FFEE91",
          600: "#FFE342",
          700: "#F0CC00",
          800: "#9E8600",
          900: "#524500",
          950: "#292300",
        },
        base: colors.gray,
        neutral: colors.zinc,
      }),

      fontFamily: {
        display: ["var(--font-scilla)"],
        serif: ["var(--font-libre)"],
        sans: ["var(--font-source)"],
      },
    },
  },
  plugins: [],
};
