/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroybold: ['Gilroy-Bold', 'sans-serif'], // Custom font path in resources
        gilroysemibold:['Gilroy-SemiBold', 'sans-serif'],
        gilroyregular:['Gilroy-Regular', 'sans-serif'],
        gilroymedium:['Gilroy-Medium', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
