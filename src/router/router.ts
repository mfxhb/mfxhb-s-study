/*
 * @Author: mfxhb
 * @Date: 2022-11-23 11:37:44
 * @LastEditTime: 2022-11-23 13:16:13
 * @Description:
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { authcodeRoute } from "./modules/authcode.route";
import NotFound from "../view/NotFound/notFound.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: () => ({ path: "/authcode" }),
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  authcodeRoute,
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export { router };
