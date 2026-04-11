import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404',
      writeBundle() {
        fs.copyFileSync(
          path.resolve(__dirname, 'dist', 'index.html'),
          path.resolve(__dirname, 'dist', '404.html')
        )
      }
    }
  ],
  base: '/',
})
