/*
 * @Author: mfxhb
 * @Date: 2022-11-23 11:39:42
 * @LastEditTime: 2022-11-23 11:41:08
 * @Description:
 */
import { RouteRecordRaw } from "vue-router";
import Authcode from "../../view/authcode/authcode.vue";

const authcodeRoute: RouteRecordRaw = {
  path: "/authcode",
  name: "authcode",
  component: Authcode,
};

export { authcodeRoute };
