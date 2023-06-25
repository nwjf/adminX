import { defineConfig, UserConfig, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';

export default defineConfig(({ mode }: ConfigEnv): UserConfig  => {
  return {
    base: './',
    plugins: [
      vue(),
      vueJsx({ include: /(\.[jt]sx?$)/ }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src/')
      }
    },
    server: {
      host: '0.0.0.0',
      port: 8080,
      open: false,
      proxy: {},
    },
    build: {
      outDir: './dist'
    },
  };
});