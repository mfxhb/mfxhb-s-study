/*
 * @Author: mfxhb
 * @Date: 2022-11-23 11:42:40
 * @LastEditTime: 2022-11-23 11:48:21
 * @Description:
 */

import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import setupNameExtend from "vite-plugin-vue-setup-extend";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  css: {
    preprocessorOptions: {
      additionalData: `@use "@/styles/variable.scss" as *;`,
    },
  },
  plugins: [vue(), setupNameExtend()],
});
