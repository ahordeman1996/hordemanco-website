/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hc-red': 'var(--hc-red)',
        'hc-white': 'var(--hc-white)',
        'hc-black': 'var(--hc-black)',
      },
      fontFamily: {
        heading: ['"Chroma Jeans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
