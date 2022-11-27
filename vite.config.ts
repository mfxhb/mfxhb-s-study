/*
 * @Author: mfxhb
 * @Date: 2022-11-27 10:21:33
 * @LastEditTime: 2022-11-27 10:46:37
 * @Description:
 */
import { defineConfig } from "vite";

import { baseconf } from "./super-controller/vite.base.config";
import { devconf } from "./super-controller/vite.dev.config";
import { proconf } from "./super-controller/vite.pro.config";

const vitePro = {
  build: () => ({ ...baseconf, ...devconf }),
  serve: () => ({ ...baseconf, ...proconf }),
};

// https://vitejs.dev/config/
export default defineConfig(({ command }) => vitePro[command]());
