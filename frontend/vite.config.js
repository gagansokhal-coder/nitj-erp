import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-custom-images',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/nitj.png') {
            const file = path.resolve(__dirname, '../nit.png');
            res.setHeader('Content-Type', 'image/png');
            fs.createReadStream(file).pipe(res);
            return;
          }
          if (req.url === '/53.png') {
            const file = path.resolve(__dirname, '../53.png');
            res.setHeader('Content-Type', 'image/png');
            fs.createReadStream(file).pipe(res);
            return;
          }
          next();
        });
      }
    }
  ],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      }
    }
  }
})
