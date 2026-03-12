import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  optimizeDeps: {
    include: [
      "decap-cms-app",
      "ajv",
      "ajv-errors",
      "ajv-keywords",
      "ajv-keywords/dist/keywords"
    ]
  }
})
