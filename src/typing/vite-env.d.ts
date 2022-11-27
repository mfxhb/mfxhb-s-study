/*
 * @Author: mfxhb
 * @Date: 2022-11-27 10:21:33
 * @LastEditTime: 2022-11-27 10:59:47
 * @Description:
 */
/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv {
  readonly ENV_baseurl: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
