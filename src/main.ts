/*
 * @Author: mfxhb
 * @Date: 2022-11-23 11:34:13
 * @LastEditTime: 2022-11-23 13:30:10
 * @Description:
 */
import { createApp } from "vue";
import "./style.css";
import "normalize.css";
import App from "./App.vue";
import { router } from "@/router/router";

createApp(App).use(router).mount("#app");
