import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgBodyColor: "#021b2b",
        bgDesingColor: "#02031a",
        hoversColors: "#000041",
      },

      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "3rem",
        },
      },

      fontFamily: {
        titleFont: ["Orbitron", "sans serif"],
      },
    },
  },
  plugins: [],
});