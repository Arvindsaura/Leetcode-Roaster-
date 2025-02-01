import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Or your specific base path (e.g., '/my-app/')
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});

