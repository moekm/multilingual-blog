import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/multilingual-blog/", // used for github pages
  plugins: [react()],
})
