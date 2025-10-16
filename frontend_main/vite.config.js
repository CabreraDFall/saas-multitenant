import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    host: '127.0.0.1', // escucha en 127.0.0.1 en vez de localhost
    port: 3000,        // puerto del frontend
     strictPort: true,  // falla si el puerto está ocupado
      allowedHosts: [
      '127.0.0.1.nip.io',    // tu host principal
      '.127.0.0.1.nip.io'    // para subdominios dinámicos como cliente1, cliente2
    ],
  },
});