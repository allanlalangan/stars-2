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
        primary: colors.sky,
        base: colors.gray,
        neutral: colors.zinc,
      }),

      fontFamily: {
        serif: ["var(--font-libre)"],
        sans: ["var(--font-source)"],
      },
    },
  },
  plugins: [],
};
