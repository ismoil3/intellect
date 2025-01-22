/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    backgroundImage: {
      home_section1: "url('https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/home1-bg.png')", 
    },
    
  },
  
  plugins: [],
};
