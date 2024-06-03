/** @type {import('tailwindcss').Config} */
export default {
  content: ['./popup.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        IBMPlexMono: 'IBM Plex Mono',
        HelveticaNeue: 'HelveticaNeue, sans-serif',
        MonaSans: 'MonaSans',
        DMMono: ['DM Mono'],
      },
    },
  },
  plugins: [],
}
