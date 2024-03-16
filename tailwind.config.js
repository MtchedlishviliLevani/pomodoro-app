/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#F87070",
        tiffanyBlue: "#70F3F8",
        purple: "#D881F8",
        bgColor: "#1E213F",
        white: "#FFFFFF",
        hawkesBlue: "#D7E0FF",
        darkBlueBlack: "#161932",
        ghostWhite: "#EFF1FA",
      },
      boxShadow: {
        custom: "50px 50px 100px 0px #121530, -50px -50px 100px 0px #272C5A",
      },
      container: {
        center: true,
        screens: {
          sm: "100%",
        },
        padding: {
          DEFAULT: "5%",
          sm: "5%",
          md: "5%",
          lg: "5%",
          xl: "2.5%",
          "2xl": "2.5%",
        },
      },
      fontFamily: {
        kumbh: '"Kumbh Sans", sans-serif',
        roboto: '"Roboto Slab", serif',
        monoSpace: '"Space Mono", monospace',
      },
    },
  },
  plugins: [],
};
