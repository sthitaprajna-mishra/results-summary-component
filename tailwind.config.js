/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      hanken: ["Hanken Grotesk", "sans-serif"],
    },
    extend: {
      colors: {
        lightRed: "hsla(0, 100%, 67%, 0.1)",
        fontLightRed: "hsla(0, 100%, 67%, 1)",
        orangeyYellow: "hsla(39, 100%, 56%, 0.1)",
        fontOrangeyYellow: "hsla(39, 100%, 56%, 1)",
        greenTeal: "hsla(166, 100%, 37%, 0.1)",
        fontGreenTeal: "hsla(166, 100%, 37%, 1)",
        cobaltBlue: "hsla(234, 85%, 45%, 0.1)",
        fontCobaltBlue: "hsla(234, 85%, 45%, 1)",
        bgLightSlateBlue: "hsl(252, 100%, 67%)",
        bgLightRoyalBlue: "hsl(241, 81%, 54%)",
        circleVioletBlue: "hsla(256, 72%, 46%, 1)",
        circlePersianBlue: "hsla(241, 72%, 46%, 0)",
        white: "hsl(0, 0%, 100%)",
        paleBlue: "hsl(221, 100%, 96%)",
        lightLavender: "hsl(241, 100%, 89%)",
        darkGrayBlue: "hsl(224, 30%, 27%)",
      },
    },
  },
  plugins: [],
};
