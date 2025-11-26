import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  server: {
    host: true,  // allow external network access
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'marylouise-pally-zoe.ngrok-free.dev' // <--- add your ngrok host here
    ]
  }
});
