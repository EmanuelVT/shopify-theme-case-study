/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/**/*.liquid",
    "./templates/**/*.liquid",
    "./sections/**/*.liquid",
    "./snippets/**/*.liquid",
    "./blocks/**/*.liquid",
    "./assets/**/*.js"
  ],
  safelist: ["flex-col", "bg-blomy-sand", "text-blomy-sand", "border-blomy-sand", "bg-blomy-green", "text-blomy-green", "border-blomy-green"],
  theme: {
    extend: {
      colors: {
        "blomy-cream": "#FCF5EA",
        "blomy-orange": "#FF723F",
        "blomy-sand": "#BE783E",
        "blomy-beige": "#EEDDC3",
        "blomy-green": "#3E8343"
      }
    }
  },
  plugins: []
};
