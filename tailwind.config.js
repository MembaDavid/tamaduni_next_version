/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient": "linear-gradient(90deg, #C80061 0%, #00759A 100%)",
        "hero-pattern": "url('/hero/home.jpeg')",
      },
      fontFamily: {
        allerta: ["var(--font-allerta-stencil)"],
        anek: ["var(--font-anek-devanagari)"],
        arya: ["var(--font-arya)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
