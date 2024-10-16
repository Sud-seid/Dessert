// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    esbuild: {
      loader: {
        '.js': 'jsx', // Set the loader for .js files
      },
    },
  },
});
