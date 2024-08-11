const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [Custom3d()],
};

function Custom3d() {
  return plugin(function ({ addUtilities }) {
    addUtilities({
      ".rotate-y-180": {
        transform: "rotateY(180deg)",
      },
      ".transform-style-3d": {
        transformStyle: "preserve-3d",
      },
      ".perspective-1000": {
        perspective: "1000px",
      },
      ".backface-hidden": {
        backfaceVisibility: "hidden",
      },
    });
  });
}
