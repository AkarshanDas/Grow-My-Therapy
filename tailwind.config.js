/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // The exact green you inspected: rgb(34, 54, 20)
        "lilac-green": "#223614", 
        "lilac-bg": "#F9F6F3",
        "lilac-taupe": "#EAE5DF",
      },
      fontFamily: {
        // Adding 'gopher' to the stack so you can use 'font-gopher'
        heading: "var(--font-heading)",
        body: "var(--font-body)",
      },
      fontSize: {
        // The exact body size and line-height from your inspection
        "body-base": ["17.2096px", "27.5354px"],
        // Adjusting Hero size based on common Squarespace proportions
        "hero-title": ["clamp(3rem, 10vw, 100px)", "0.95"], 
      },
      letterSpacing: {
        tightest: "-.04em",
      },
    },
  },
  plugins: [],
};