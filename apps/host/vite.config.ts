import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    federation({
      name: 'host-app',
      remotes: {
        react_remote: {
          external: 'http://localhost:5002/assets/remoteEntry.js',
          externalType: 'url',
        },
        cue_remote: {
          external: 'http://localhost:5001/assets/remoteEntry.js',
          externalType: 'url',
        }
      },
      shared: {
        vue: {
          requiredVersion: '^3.0.0'
        },
        'vue-router': {
          requiredVersion: '^4.0.0'
        }
      }
    })
  ],
  build: {
    modulePreload: false,
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
