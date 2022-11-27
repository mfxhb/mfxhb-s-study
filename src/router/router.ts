/*
 * @Author: mfxhb
 * @Date: 2022-11-27 10:38:05
 * @LastEditTime: 2022-11-27 10:56:10
 * @Description:
 */
import { NavListItemType } from "@/typing/router";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { authcodeRoute } from "./modules/authcode.route";
import NotFound from "../view/NotFound.vue";

const asyncRoutes: RouteRecordRaw[] = [authcodeRoute];
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: () => ({ path: "/authcode" }),
  },
  ...asyncRoutes,
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];
const navlistRoutes: NavListItemType[] = asyncRoutes.map((v) => ({
  label: v.meta?.alias || "",
  value: v.path,
}));

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export { router, navlistRoutes };
