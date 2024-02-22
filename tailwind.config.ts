/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        custom: "5rem",
        "custom-wide": "10rem",
      },
      height: {
        key: "4rem",
        "23.5": "5.875rem",
        "30": "8.500rem",
      },
    },
  },

  plugins: [],
};
