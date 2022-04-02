import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { getBabelOutputPlugin } from '@rollup/plugin-babel'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: ".postcssrc.json",
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag: string) => tag.startsWith("webc"),
        },
      },
    }),
    vueJsx({}),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        getBabelOutputPlugin({
          configFile: './.babelrc.json',
        })
      ]
    }
  }
});
