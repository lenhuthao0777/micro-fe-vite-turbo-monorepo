import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'react_remote',
      filename: 'remoteEntry.js',
      exposes: {
        './ReactApp': './src/App.tsx',
      },
      shared: {
        react: {
          requiredVersion: '^18.0.0',
        },
        'react-dom': {
          requiredVersion: '^18.0.0',
        },
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: 'esm',
      },
    },
  },
  server: {
    fs: {
      strict: true,
    },
    origin: 'http://localhost:5002',
  },
});
