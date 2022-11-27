/*
 * @Author: mfxhb
 * @Date: 2022-11-27 10:40:28
 * @LastEditTime: 2022-11-27 11:34:28
 * @Description:
 */
import { defineConfig } from "vite";
import path from "path";
import setupNameExtend from "vite-plugin-vue-setup-extend";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

const baseconf = defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  server: {
    proxy: {
      "/dev": {
        target: "http://127.0.0.1:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev/, ""),
      },
    },
  },
  envDir: path.resolve(__dirname, "./"),
  envPrefix: "ENV_",
  plugins: [
    vue(),
    setupNameExtend(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});

export { baseconf };
