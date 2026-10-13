import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: false,
    proxy: {
      '/api-proxy/chat': {
        target: 'https://shreeram.tail902341.ts.net',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-proxy\/chat/, '/api/chat'),
        secure: false,
      }
    }
  }
});
