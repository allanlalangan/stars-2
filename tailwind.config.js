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
          50: "#F9F2FC",
          100: "#F2E6FA",
          200: "#E7D1F5",
          300: "#DAB7F0",
          400: "#C085E5",
          500: "#A652DB",
          600: "#8A29C6",
          700: "#6A2098",
          800: "#471565",
          900: "#230B33",
          950: "#120519",
        },
        secondary: {
          50: "#DDF0F8",
          100: "#BBE1F1",
          200: "#7BC5E5",
          300: "#38A7D7",
          400: "#2795C3",
          500: "#207BA1",
          600: "#1A617F",
          700: "#144A62",
          800: "#0D3040",
          900: "#071A22",
          950: "#030D11",
        },
        accent: {
          50: "#FFFBF0",
          100: "#FFF6DB",
          200: "#FFEEBD",
          300: "#FFE699",
          400: "#FFD761",
          500: "#FFC824",
          600: "#EBB000",
          700: "#AD8200",
          800: "#755800",
          900: "#382A00",
          950: "#1F1700",
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
