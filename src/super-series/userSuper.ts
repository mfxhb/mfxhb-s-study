/*
 * @Author: mfxhb
 * @Date: 2022-11-27 10:32:44
 * @LastEditTime: 2022-11-27 10:33:55
 * @Description:
 */
import xhbMainnav from "super-series/super-components-v3/nav/xhb-simplenav/xhb-simplenav.vue";
import { App } from "vue";

const useSuper = {
  install(app: App) {
    app.component("xhbMiannav", xhbMainnav);
  },
};

export { useSuper };
