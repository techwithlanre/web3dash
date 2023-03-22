/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {

    },
  },
  plugins: [
    require('tailwindcss-font-inter')({ // default settings
      a: -0.0223,
      b: 0.185,
      c: -0.1745,
      baseFontSize: 13,
      importFontFace: true,
    })
  ],
}
