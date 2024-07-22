/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        spartan: ['Spartan', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        lora: ['Lora', 'sans-serif'],
      },
    },
    variants: {
      extend: {},
    },
  },
  plugins: [
   
  ],
};
