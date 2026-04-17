import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api/checkout': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => '/create-checkout-session',
      },
    },
  },
});
