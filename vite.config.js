import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Replace <REPOSITORY_NAME> with your GitHub repository name
  plugins: [react(), svgLoader()],
  build:{
    chunkSizeWarningLimit: 2000,
  },
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 5173, // you can replace this port with any port
  }
});
