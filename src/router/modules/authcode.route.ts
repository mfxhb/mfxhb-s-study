/*
 * @Author: mfxhb
 * @Date: 2022-11-27 10:47:46
 * @LastEditTime: 2022-11-27 10:52:38
 * @Description:
 */
import { RouteRecordRaw } from "vue-router";
import Authcode from "../../view/authcode/authcode.vue";

const authcodeRoute: RouteRecordRaw = {
  path: "/authcode",
  name: "authcode",
  component: Authcode,
  meta: {
    alias: "验证码",
  },
};

export { authcodeRoute };
