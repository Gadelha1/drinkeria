import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/drinkeria/',
  plugins: [react()],
  server: {
    open: true
  }
})
