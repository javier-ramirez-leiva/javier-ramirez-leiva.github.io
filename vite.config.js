import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// This is a user/organization GitHub Pages root site: https://javier-ramirez-leiva.github.io/
// For a project site at /repo-name/, set base: '/repo-name/' instead.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
