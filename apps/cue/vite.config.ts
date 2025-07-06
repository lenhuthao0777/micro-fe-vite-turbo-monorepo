import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';
import path from 'path';
import tailwindcss from 'tailwindcss';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    federation({
      name: 'cue_remote',
      filename: 'remoteEntry.js',
      exposes: {
        './app': './src/components/HelloWorld.vue',
        './store': './src/store/index.ts'
      },
      shared: ['vue', 'vue-router']
    }),
  ],
  server: {
    cors: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        minifyInternalExports: false,
      },
    },
  },
});
