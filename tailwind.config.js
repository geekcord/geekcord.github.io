/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{svelte,ts,html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

