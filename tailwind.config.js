const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [Custom3DAnimations()],
};

function Custom3DAnimations() {
  return plugin(function ({ addUtilities }) {
    addUtilities({
      ".rotate-y-180": {
        transform: "rotateY(180deg)",
      },
      ".transform-style-3d": {
        transformStyle: "preserve-3d",
      },
      ".perspective-1600": {
        perspective: "1600px",
      },
      ".backface-hidden": {
        backfaceVisibility: "hidden",
      },
    });
  });
}
