import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: ['./src/**/*.{ts,tsx,js,jsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#0F62FE',
        secondary: '#C1C7CD'
      },
    },
  },
  plugins: [],
})
