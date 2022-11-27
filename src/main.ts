/*
 * @Author: mfxhb
 * @Date: 2022-11-27 10:21:33
 * @LastEditTime: 2022-11-27 12:04:13
 * @Description:
 */
import { createApp } from "vue";
import App from "./App.vue";
import { useSuper } from "./super-series/userSuper";
import "normalize.css";
import { router } from "@/router/router";
import "element-plus/theme-chalk/src/message.scss";

createApp(App).use(useSuper).use(router).mount("#app");
