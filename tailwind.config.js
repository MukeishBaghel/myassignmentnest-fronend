/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      backgroundImage: {
        primary_100: "linear-gradient(90deg, #DA22FF 0%, #9733EE 100%)",
        secondary_100: "linear-gradient(90deg, #FFFFFF 0%, #000000 100%)",
        rainbow: "url(/assets/images/heroformbg.png)",
      },

      colors: {
        primary: {
          DEFAULT: "#fff",
          foreground: "#454545",
          100: "#D9D9D9",
          200: "#7633FF",
        },
        secondary: {
          DEFAULT: "#FF6200",
          foreground: "#8A8A8A",
          100: "#7633FF",
          200: "#737373",
          300: "#787878",
        },
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      boxShadow: {
        Nav_box_Shadow: "0px 4px 16px 0px #D8D8D840",
        primary_shadow: "0px 4px 23px 0px #D225FDB8",
        btn_shadow: "0px 4px 16.4px 0px #00000082",
        card_shadow: "1px 2px 6px 0px #B1BDD699",
        form_shadow: "0px 0px 24.9px 8px #9F31F047",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
