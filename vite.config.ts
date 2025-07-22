import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // 👇 MOVED a`server` object to be at the same level as `plugins`
  server: {
    mime: {
      'application/pdf': ['pdf'],
    },
  },
});