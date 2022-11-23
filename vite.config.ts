/*
 * @Author: mfxhb
 * @Date: 2022-11-23 11:34:13
 * @LastEditTime: 2022-11-23 11:53:34
 * @Description:
 */
import { defineConfig } from "vite";
import baseconf from "./super-vite-conf/vite.base.config";
import devconf from "./super-vite-conf/vite.dev.config";
import proconf from "./super-vite-conf/vite.pro.config";

const superVite = {
  serve: () => ({ ...baseconf, ...devconf }),
  build: () => ({ ...baseconf, ...proconf }),
};

// https://vitejs.dev/config/
export default defineConfig(({ command }) => superVite[command]());
