import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// const reactSvgPlugin = require('vite-plugin-react-svg');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    events: require.resolve('events'),
  },
  plugins: [react(), svgr()],
  define: {
    'process.env': {}
  },
  build: {
    target: 'esnext'
  }
 
})
