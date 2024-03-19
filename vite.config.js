// vite.config.js
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        // '/api' 경로로 시작하는 모든 요청을 프록시
        target: 'http://localhost:8082', // 백엔드 서버
        changeOrigin: true, // 호스트 헤더를 target으로 변경
        rewrite: (path) => path, // '/api' 경로를 그대로 유지
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  assetsInclude: ['**/*.html'],
});
