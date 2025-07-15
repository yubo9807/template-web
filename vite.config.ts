import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import env from './env';

const proxy = {
  '^/api': {
    target: 'http://api.com/',
    changeOrigin: true
  }
}

declare const process: any;
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: env.BASE_URL,

  define: {
    "process.env": process.env,
  },
  resolve: {
    alias: {
      "@": "/src",
      "~": "",
    },
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@/styles/utils.scss';`,
      },
    },
  },

  server: { proxy },
  preview: { proxy },
})
